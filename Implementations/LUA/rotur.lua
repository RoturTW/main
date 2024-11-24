local username = ""
local packets = {}

local client = {}
local my_client = {
    system = "rotur.lua",
    version = "v2"
}

local json = require("json")
local websocket = require("websocket.client")
local ws = websocket.new()

function sendHandshake()
    local msg = {
        cmd = "handshake",
        val = {
            language = "Lua",
            version = {
                editorType = "rotur",
                versionNumber = nil
            }
        },
        listener = "handshake_cfg"
    }

    ws:send(json.encode(msg))
end

function setUsername(username)
    local msg = {
        cmd = "setid",
        val = username,
        listener = "set_username_cfg"
    }

    ws:send(json.encode(msg))
end

function linkRoom(room)
    local msg = {
        cmd = "link",
        val = room,
        listener = "link_cfg"
    }

    ws:send(json.encode(msg))
end

function replyToPacket(message, payload)
    local msg = {
        cmd = "pmsg",
        val = {
            client = my_client,
            target = message.source,
            message = payload,
            timestamp = os.time()
        },
        id = message.origin
    }

    ws:send(json.encode(msg))
end

function sendMessage(payload, username, target, source)
    local msg = {
        cmd = "pmsg",
        val = {
            target = target,
            payload = payload,
            source = source
        },
        id = username
    }

    ws:send(json.encode(msg))
end

ws:on("open", function()
    print("Connected!")

    sendHandshake()

    ws:on("message", function(event)
        local packet = json.decode(event.data)
        if packet.cmd == "client_ip" then
            client.ip = packet.val
        elseif packet.cmd == "client_obj" then
            client.username = packet.val.username
        elseif packet.cmd == "ulist" then
            if packet.mode == "add" then
                if not client.users then client.users = {} end
                table.insert(client.users, packet.val)
            elseif packet.mode == "remove" then
                for i, user in ipairs(client.users) do
                    if user == packet.val then
                        table.remove(client.users, i)
                        break
                    end
                end
            elseif packet.mode == "set" then
                client.users = packet.val
            end
        end
        if packet.cmd == "pmsg" then
            packet.origin = packet.origin.username
            packet.rooms = nil
            packet.cmd = nil
            packet.client = packet.val.client
            packet.source = packet.val.source
            packet.payload = packet.val.payload
            if not packets[packet.val.target] then
                packets[packet.val.target] = {}
            end
            table.insert(packets[packet.val.target], packet)
            packet.val = nil
        end
        if packet.listener == "handshake_cfg" then
            setUsername(designation .. "-" .. username)
        end
        if packet.listener == "set_username_cfg" then
            client.username = designation .. "-" .. username
            linkRoom({"roturTW"})
        end
        if packet.listener == "link_cfg" then
            client.room = packet.val
        end
    end)
end)

ws:connect("wss://rotur.mistium.com")
