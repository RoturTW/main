const WebSocket = require('ws');

let username = "test";
let designation = "rtr";

let my_client = {
  "system": "rotur.js",
  "version": "v2"
};

let packets = {};
let client = {};

function sendHandshake(ws) {
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
  };

  ws.send(JSON.stringify(msg));
}

function setUsername(ws, username) {
  const msg = {
    "cmd": "setid",
    "val": username,
    "listener": "set_username_cfg"
  };

  ws.send(JSON.stringify(msg));
}

function linkRoom(ws, room) {
  const msg = {
    "cmd": "link",
    "val": room,
    "listener": "link_cfg"
  };

  ws.send(JSON.stringify(msg));
}

function replyToPacket(ws, message, payload) {
  const msg = {
    "cmd": "pmsg",
    "val": {
      "client": my_client,
      "target": message.source,
      "message": payload,
      "timestamp": Date.now()
    },
    "id": message.origin
  };

  ws.send(JSON.stringify(msg));
}

function sendMessage(ws, payload, username, target, source) {
  const msg = {
    "cmd": "pmsg",
    "val": {
      "client": my_client,
      "target": target,
      "payload": payload,
      "source": source,
      "timestamp": Date.now()
    },
    "id": username
  };

  ws.send(JSON.stringify(msg));
}

const ws = new WebSocket("wss://rotur.mistium.com");

ws.on('open', function open() {
  console.log("Connected!");
  sendHandshake(ws);
});

ws.on('message', function incoming(data) {
  const packet = JSON.parse(data);

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
  } else if (packet.cmd === "pmsg") {
    packet.origin = packet.origin.username;
    delete packet.rooms;
    delete packet.cmd;
    packet.client = packet.val.client;
    packet.source = packet.val.source;
    packet.payload = packet.val.payload;
    if (!packets[packet.target]) {
      packets[packet.val.target] = [];
    }
    packets[packet.val.target].push(packet);
    delete packet.val;
  }

  if (packet.listener === "handshake_cfg") {
    setUsername(ws, designation + "-" + username);
  }

  if (packet.listener === "set_username_cfg") {
    client.username = designation + "-" + username;
    linkRoom(ws, ["roturTW"]);
  }

  if (packet.listener === "link_cfg") {
    client.room = packet.val;
  }
});
