
The only variables you need to care about are

```js
let username = "";
let packets = {}
```

before running this script you need to set the username to the id that you want to connect to the server as

## Functions

```js
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
```

Essentially you can use this block to send a message to other users that are online


`payload` is the data you are going to send to the user

`username` is the user that you are going to send the data to

`target` is the "port" that you want to send the data to

`source` is the port that this program has sent the data from

## Variables that are useful

`client` is a variable with all user info

```js
{
    "ip": "", // your ip
    "username": "", // your username
    "users": [ // an array of all connected users to rotur
        {
            "id": "",
            "username": "",
            "uuid": ""
        }
    ]
}
```

you can use stuff like

`client.ip` or `client.username`

## Getting packets

Packets are stored in a json object in the format:

```js
{
  "target":[
    {packet},
    {packet}
  ],
  "target2":[]
}
```

## Example packets variable

```js
{
    "messager": [
        {
            "origin": "ori-Mist§341de37b8d", // the username of the user that sent the data
            "client": {
                "system": "originOS",
                "version": "v5.0.7"
            },
            "source": "messager", // the source rotur port
            "payload": "test"
        }
    ]
}
```
