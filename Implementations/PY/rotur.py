import websocket
import json

# Define global variables
username = "designation-[name]"
packets = {}
client = {}

# WebSocket URL
ws_url = "wss://rotur.mistium.com"

# Function to send handshake message
def send_handshake():
    msg = {
        "cmd": "handshake",
        "val": {
            "language": "Python",
            "version": {
                "editorType": "[operating system]",
                "versionNumber": None
            }
        },
        "listener": "handshake_cfg"
    }
    ws.send(json.dumps(msg))

# Function to set username
def set_username(username):
    msg = {
        "cmd": "setid",
        "val": username,
        "listener": "set_username_cfg"
    }
    ws.send(json.dumps(msg))

# Function to link room
def link_room(room):
    msg = {
        "cmd": "link",
        "val": room,
        "listener": "link_cfg"
    }
    ws.send(json.dumps(msg))

# Function to reply to packet
def reply_to_packet(message, payload):
    msg = {
        "cmd": "pmsg",
        "val": {
            "target": message["source"],
            "payload": payload
        },
        "id": message["origin"]
    }
    ws.send(json.dumps(msg))

# Function to send message
def send_message(payload, username, target, source):
    msg = {
        "cmd": "pmsg",
        "val": {
            "target": target,
            "payload": payload,
            "source": source
        },
        "id": username
    }
    ws.send(json.dumps(msg))

# WebSocket event handlers
def on_open(ws):
    print("Connected!")
    send_handshake()

def on_message(ws, message):
    packet = json.loads(message)
    global client
    global packets

    if packet["cmd"] == "client_ip":
        client["ip"] = packet["val"]
    elif packet["cmd"] == "client_obj":
        client["username"] = packet["val"]["username"]
    elif packet["cmd"] == "ulist":
        if packet["mode"] == "add":
            client["users"].append(packet["val"])
        elif packet["mode"] == "remove":
            client["users"] = [user for user in client["users"] if user != packet["val"]]
        elif packet["mode"] == "set":
            client["users"] = packet["val"]
    elif packet["cmd"] == "pmsg":
        packet["origin"] = packet["origin"]["username"]
        del packet["rooms"]
        del packet["cmd"]
        packet["client"] = packet["val"]["client"]
        packet["source"] = packet["val"]["source"]
        packet["payload"] = packet["val"]["payload"]
        if packet["target"] not in packets:
            packets[packet["val"]["target"]] = []
        packets[packet["val"]["target"]].append(packet)
        del packet["val"]

    if packet["listener"] == "handshake_cfg":
        set_username(username)
    elif packet["listener"] == "set_username_cfg":
        client["username"] = username
        link_room(["roturTW"])
    elif packet["listener"] == "link_cfg":
        client["room"] = packet["val"]

def on_close(ws):
    print("WebSocket closed")

if __name__ == "__main__":
    # Create WebSocket connection
    ws = websocket.WebSocketApp(ws_url,
                                on_open=on_open,
                                on_message=on_message,
                                on_close=on_close)

    # Run WebSocket client
    ws.run_forever()
