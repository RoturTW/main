interface Client {
  system: string;
  version: string;
}

interface Message {
  cmd: string;
  val: any;
  listener?: string;
  id?: string;
}

interface Packet {
  origin: string;
  client: Client;
  source: string;
  payload: any;
  target?: string;
  timestamp?: number;
}

let username: string = "test";
let designation: string = "rtr";

let my_client: Client = {
  system: "rotur.js",
  version: "v2"
};

let packets: { [key: string]: Packet[] } = {};
let ws = new WebSocket("wss://rotur.mistium.com");
let client: { ip?: string; username?: string; users?: string[]; room?: string } = {};

// Function to send handshake
function sendHandshake(): void {
  let msg: Message = {
    cmd: "handshake",
    val: {
      language: "Javascript",
      version: {
        editorType: "rotur",
        versionNumber: null
      }
    },
    listener: "handshake_cfg"
  };

  ws.send(JSON.stringify(msg));
}

// Function to set username
function setUsername(username: string): void {
  let msg: Message = {
    cmd: "setid",
    val: username,
    listener: "set_username_cfg"
  };

  ws.send(JSON.stringify(msg));
}

// Function to link room
function linkRoom(room: string[]): void {
  let msg: Message = {
    cmd: "link",
    val: room,
    listener: "link_cfg"
  };

  ws.send(JSON.stringify(msg));
}

// Function to reply to a packet
function replyToPacket(message: Packet, payload: any): void {
  let msg: Message = {
    cmd: "pmsg",
    val: {
      client: my_client,
      target: message.source,
      message: payload,
      timestamp: Date.now()
    },
    id: message.origin
  };

  ws.send(JSON.stringify(msg));
}

// Function to send a message
function sendMessage(payload: any, username: string, target: string, source: string): void {
  let msg: Message = {
    cmd: "pmsg",
    val: {
      client: my_client,
      target: target,
      payload: payload,
      source: source,
      timestamp: Date.now()
    },
    id: username
  };

  ws.send(JSON.stringify(msg));
}

// WebSocket event handling
ws.onopen = function (): void {
  console.log("Connected!");

  sendHandshake();

  ws.onmessage = function (event: MessageEvent): void {
    let packet = JSON.parse(event.data);
    if (packet.cmd === "client_ip") {
      client.ip = packet.val;
    } else if (packet.cmd === "client_obj") {
      client.username = packet.val.username;
    } else if (packet.cmd === "ulist") {
      if (packet.mode === "add") {
        if (!client.users) client.users = [];
        client.users.push(packet.val);
      } else if (packet.mode === "remove") {
        client.users = client.users?.filter(user => user !== packet.val);
      } else if (packet.mode === "set") {
        client.users = packet.val;
      }
    }
    if (packet.cmd === "pmsg") {
      packet.origin = packet.origin.username;
      delete packet.rooms;
      delete packet.cmd;
      packet.client = packet.val.client;
      packet.source = packet.val.source;
      packet.payload = packet.val.payload;
      if (!packets[packet.val.target]) {
        packets[packet.val.target] = [];
      }
      packets[packet.val.target].push(packet);
      delete packet.val;
    }
    if (packet.listener === "handshake_cfg") {
      setUsername(`${designation}-${username}`);
    }
    if (packet.listener === "set_username_cfg") {
      client.username = `${designation}-${username}`;
      linkRoom(["roturTW"]);
    }
    if (packet.listener === "link_cfg") {
      client.room = packet.val;
    }
  };
};
