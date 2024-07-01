let username = "nov-testAcc";
let packets = {}
// connect to websocket server
function sendHandshake() {
  msg = {
    "cmd": "handshake",
    "val": {
      "language": "Javascript",
      "version": {
        "editorType": "NovaOS",
        "versionNumber": null
      }
    },
    "listener": "handshake_cfg"
  }

  ws.send(JSON.stringify(msg));
}

function setUsername(username) {
  msg = {
    "cmd": "setid",
    "val": username,
    "listener": "set_username_cfg"
  }

  ws.send(JSON.stringify(msg));
}

function linkRoom(room) {
  msg = {
    "cmd": "link",
    "val": room,
    "listener": "link_cfg"
  }

  ws.send(JSON.stringify(msg));
}

function replyToPacket(message, payload) {
  msg = {
    "cmd": "pmsg",
    "val": {
      "target": message.source,
      "message": payload
    },
    "id": message.origin
  }

  ws.send(JSON.stringify(msg));
}

function sendMessage(payload, username, target, source) {
  msg = {
    "cmd": "pmsg",
    "val": {
      "target": target,
      "payload": payload,
      "source": source
    },
    "id": username
  }

  ws.send(JSON.stringify(msg));
}

let ws = new WebSocket("wss://rotur.milosantos.com");
let client = {}
// wait for connection
ws.onopen = function () {
  console.log("Connected!");

  sendHandshake();

  ws.onmessage = function (event) {
    packet = JSON.parse(event.data);
    if (packet.cmd == "client_ip") {
      client.ip = packet.val;
    } else if (packet.cmd == "client_obj") {
      client.username = packet.val.username;
    } else if (packet.cmd == "ulist") {
      if (packet.mode == "add") {
        client.users.push(packet.val);
      } else if (packet.mode == "remove") {
        client.users = client.users.filter(user => user != packet.val);
      } else if (packet.mode == "set") {
        client.users = packet.val;
      }
    }
    if (packet.cmd == "pmsg") {
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
    if (packet.listener == "handshake_cfg") {
      setUsername(username);
    }
    if (packet.listener == "set_username_cfg") {
      client.username = username;
      linkRoom(["roturTW"]);
    }
    if (packet.listener == "link_cfg") {
      client.room = packet.val
    }
  }
}
