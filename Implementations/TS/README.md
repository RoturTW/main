Here is the documentation rewritten for the TypeScript version:

---

## Variables

```typescript
let username: string = "";
let packets: { [key: string]: Packet[] } = {};
```

Before running this script, you need to set the `username` to the ID that you want to connect to the server as.

## Functions

### `sendMessage`

```typescript
function sendMessage(payload: any, username: string, target: string, source: string): void {
  let msg: Message = {
    cmd: "pmsg",
    val: {
      target: target,
      payload: payload,
      source: source
    },
    id: username
  };

  ws.send(JSON.stringify(msg));
}
```

This function sends a message to other users that are online.

- `payload` is the data you are going to send to the user.
- `username` is the user that you are going to send the data to.
- `target` is the "port" that you want to send the data to.
- `source` is the port from which this program has sent the data.

## Variables that are useful

### `client`

`client` is a variable with all user info:

```typescript
interface User {
  id: string;
  username: string;
  uuid: string;
}

interface Client {
  ip: string;
  username: string;
  users: User[];
}

let client: Partial<Client> = {};
```

You can use properties like:

- `client.ip`
- `client.username`

## Getting packets

Packets are stored in a JSON object in the format:

```typescript
interface Packet {
  origin: string;
  client: Client;
  source: string;
  payload: any;
  target?: string;
  timestamp?: number;
}

let packets: { [key: string]: Packet[] } = {};
```

## Example `packets` variable

```typescript
let packets: { [key: string]: Packet[] } = {
  "messager": [
    {
      origin: "ori-Mist§341de37b8d", // the username of the user that sent the data
      client: {
        system: "originOS",
        version: "v5.0.7"
      },
      source: "messager", // the source rotur port
      payload: "test"
    }
  ]
};
```

---
