let username = "test";
// the user's descriminator

let designation = "rtr"
// learn about designaitions here: https://github.com/RoturTW/main/wiki/Rotur-Designations

let my_client = {
  "system": "rotur.js",
  "version": "v3"
}
// client is sent with all packets to help tell servers and other clients what system you are using

let packets = {}
// connect to websocket server
function sendHandshake() {
  const msg = {
    "cmd": "handshake",
    "val": {
      "language": "Javascript",
      "version": {
        "editorType": "rotur",
        "versionNumber": null
      }
    },
    "listener": "handshake_cfg"
  }

  ws.send(JSON.stringify(msg));
}

function setUsername(name) {
  const msg = {
    "cmd": "setid",
    "val": name,
    "listener": "set_username_cfg"
  }

  ws.send(JSON.stringify(msg));
}

function linkRoom(room) {
  const msg = {
    "cmd": "link",
    "val": room,
    "listener": "link_cfg"
  }

  ws.send(JSON.stringify(msg));
}

function replyToPacket(message, payload) {
  const msg = {
    "cmd": "pmsg",
    "val": {
      "client": my_client,
      "target": message.source,
      "message": payload,
      "timestamp": Date.now()
    },
    "id": message.origin
  }

  ws.send(JSON.stringify(msg));
}

function sendMessage(payload, name, target, source) {
  const msg = {
    "cmd": "pmsg",
    "val": {
      "client": my_client,
      "target": target,
      "payload": payload,
      "source": source,
      "timestamp": Date.now()
    },
    "id": name
  }

  ws.send(JSON.stringify(msg));
}

let ws = new WebSocket("wss://rotur.mistium.com");
let client = {}
// wait for connection
ws.onopen = function () {
  console.log("Connected!");

  sendHandshake();

  ws.onmessage = function (event) {
    const packet = JSON.parse(event.data);
    if (packet.cmd === "client_ip") {
      client.ip = packet.val;
    } else if (packet.cmd === "client_obj") {
      client.username = packet.val.username;
    } else if (packet.cmd === "ulist") {
      if (packet.mode === "add") {
        client.users.push(packet.val);
      } else if (packet.mode === "remove") {
        client.users = client.users.filter(user => user !== packet.val);
      } else if (packet.mode === "set") {
        client.users = packet.val;
      }
    }
    if (packet.cmd === "pmsg") {
      packet.origin = packet.origin.username;
      delete packet.rooms
      delete packet.cmd
      packet.client = packet.val.client
      packet.source = packet.val.source
      packet.payload = packet.val.payload
      if (!packets[packet.target]) {
        packets[packet.val.target] = []
      }
      packets[packet.val.target].push(packet);
      delete packet.val
    }
    if (packet.listener === "handshake_cfg") {
      setUsername(designation + "-" + username);
    }
    if (packet.listener === "set_username_cfg") {
      client.username = designation + "-" + username;
      linkRoom(["roturTW"]);
    }
    if (packet.listener === "link_cfg") {
      client.room = packet.val
    }
  }
}

ws.onclose = function () {
  // websocket is closed.
  console.log("Connection is closed...");
}
