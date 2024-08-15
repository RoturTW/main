## Variables

```csharp
static string username = "";
static Dictionary<string, List<Packet>> packets = new Dictionary<string, List<Packet>>();
```

Before running this script, you need to set the `username` to the ID that you want to connect to the server as.

## Functions

### `SendMessage`

```csharp
static void SendMessage(WebSocket ws, string payload, string username, string target, string source)
{
    var msg = new Message
    {
        cmd = "pmsg",
        val = new PacketVal
        {
            target = target,
            payload = payload,
            source = source
        },
        id = username
    };

    ws.Send(JsonConvert.SerializeObject(msg));
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

```csharp
public class ClientInfo
{
    public string ip { get; set; }
    public string username { get; set; }
    public List<User> users { get; set; }
}
```

You can use properties like:

- `client.ip`
- `client.username`

## Getting packets

Packets are stored in a JSON object in the format:

```csharp
static Dictionary<string, List<Packet>> packets = new Dictionary<string, List<Packet>>();
```

## Example `packets` variable

```csharp
var packets = new Dictionary<string, List<Packet>>
{
    {
        "messager", new List<Packet>
        {
            new Packet
            {
                origin = "ori-Mist§341de37b8d", // the username of the user that sent the data
                client = new MyClient
                {
                    system = "originOS",
                    version = "v5.0.7"
                },
                source = "messager", // the source rotur port
                payload = "test"
            }
        }
    }
};
```
