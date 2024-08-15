### Documentation

---

## Variables

```lua
local username = ""
local packets = {}
```

Before running this script, you need to set the `username` to the ID that you want to connect to the server as.

## Functions

### `sendMessage`

```lua
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
```

This function sends a message to other users that are online.

- `payload` is the data you are going to send to the user.
- `username` is the user that you are going to send the data to.
- `target` is the "port" that you want to send the data to.
- `source` is the port from which this program has sent the data.

## Variables that are useful

### `client`

`client` is a variable with all user info:

```lua
local client = {
    ip = "",
    username = "",
    users = {
        -- an array of all connected users to rotur
        {
            id = "",
            username = "",
            uuid = ""
        }
    }
}
```

You can use properties like:

- `client.ip`
- `client.username`

## Getting packets

Packets are stored in a JSON object in the format:

```lua
local packets = {
    target = {
        {packet},
        {packet}
    },
    target2 = {}
}
```

## Example `packets` variable

```lua
local packets = {
    messager = {
        {
            origin = "ori-Mist§341de37b8d", -- the username of the user that sent the data
            client = {
                system = "originOS",
                version = "v5.0.7"
            },
            source = "messager", -- the source rotur port
            payload = "test"
        }
    }
}
```
