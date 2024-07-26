The only variables you need to care about are:

```python
username = ""
packets = {}
```

Before running this script, you need to set the `username` to the ID that you want to connect to the server as.

## Functions

```python
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
```

This function sends a message to other online users.

- `payload`: Data you are sending to the user.
- `username`: User you are sending the data to.
- `target`: "Port" you want to send the data to.
- `source`: Port from which this program has sent the data.

## Useful Variables

The `client` variable contains all user info:

```python
client = {
    "ip": "",        # Your IP address
    "username": "",  # Your username
    "users": [       # Array of all connected users to rotur
        {
            "id": "",
            "username": "",
            "uuid": ""
        }
    ]
}
```

You can access properties like `client["ip"]` or `client["username"]`.

## Getting Packets

Packets are stored in a dictionary (`packets`) in the format:

```python
{
  "target": [
    {packet},
    {packet}
  ],
  "target2": []
}
```

## Example `packets` Variable

```python
packets = {
    "messager": [
        {
            "origin": "ori-Mist§341de37b8d",  # Username of the user that sent the data
            "client": {
                "system": "originOS",
                "version": "v5.0.7"
            },
            "source": "messager",  # Source rotur port
            "payload": "test"
        }
    ]
}
```
