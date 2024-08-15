# Rotur WebSocket Client (Node.js Version)

This is a Node.js implementation of the Rotur WebSocket client, designed to connect to the `wss://rotur.mistium.com` WebSocket server. This client allows you to send and receive messages and manage user sessions.

## Prerequisites

Before running this project, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or later)
- npm (comes bundled with Node.js)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/RoturTW/main.git
   ```

2. **Navigate into the NodeJS project directory:**

   ```bash
   cd main/Implementations/NODEJS
   ```

3. **Install the necessary dependencies:**

   ```bash
   npm install
   ```

   This will install the `ws` package, which is required to handle WebSocket connections.

## Configuration

Before running the script, you need to set up the following variables in your JavaScript file:

```js
let username = ""; // Set this to the desired username
let packets = {}; // An object to store incoming packets
```

Ensure that `username` is set to the ID you want to use to connect to the server.

## Running the Script

To start the WebSocket client, run the following command in your terminal:

```bash
node rotur.js
```

## Functions

### `sendMessage`

Use this function to send a message to other users connected to the WebSocket server:

```js
function sendMessage(ws, payload, username, target, source) {
  const msg = {
    "cmd": "pmsg",
    "val": {
      "target": target,
      "payload": payload,
      "source": source
    },
    "id": username
  };

  ws.send(JSON.stringify(msg));
}
```

- `payload`: The data you are sending to the target user.
- `username`: The username associated with this message (usually your own).
- `target`: The "port" or identifier for the user you are sending data to.
- `source`: The source "port" from which this program is sending the data.

## Useful Variables

### `client`

The `client` object contains information about the current user and other connected users:

```js
{
  "ip": "", // Your IP address
  "username": "", // Your username
  "users": [ // Array of all connected users
    {
      "id": "",
      "username": "",
      "uuid": ""
    }
  ]
}
```

You can access properties like `client.ip` and `client.username` for your use.

## Handling Packets

Incoming packets are stored in a JSON object, formatted as follows:

```js
{
  "target": [
    { packet },
    { packet }
  ],
  "target2": []
}
```

### Example `packets` Variable

Here is an example of how packets are structured:

```js
{
  "messager": [
    {
      "origin": "ori-Mist§341de37b8d", // Username of the sender
      "client": {
        "system": "originOS",
        "version": "v5.0.7"
      },
      "source": "messager", // Source Rotur port
      "payload": "test" // The message payload
    }
  ]
}
```

## Contributing

If you want to contribute to this project, please fork the repository and create a pull request with your changes. Ensure your code follows best practices and includes relevant documentation.

## License

This project is open-source and available under the [MIT License](LICENSE).
