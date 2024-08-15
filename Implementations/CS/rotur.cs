using System;
using System.Collections.Generic;
using WebSocketSharp;
using Newtonsoft.Json;

public class Program
{
    static string username = "";
    static Dictionary<string, List<Packet>> packets = new Dictionary<string, List<Packet>>();
    static ClientInfo client = new ClientInfo();
    static MyClient myClient = new MyClient
    {
        system = "rotur.js",
        version = "v2"
    };

    public static void Main(string[] args)
    {
        using (var ws = new WebSocket("wss://rotur.mistium.com"))
        {
            ws.OnOpen += (sender, e) =>
            {
                Console.WriteLine("Connected!");
                SendHandshake(ws);
            };

            ws.OnMessage += (sender, e) =>
            {
                var packet = JsonConvert.DeserializeObject<Packet>(e.Data);
                HandlePacket(ws, packet);
            };

            ws.Connect();
            Console.ReadKey(true);
        }
    }

    static void SendHandshake(WebSocket ws)
    {
        var msg = new Message
        {
            cmd = "handshake",
            val = new HandshakeVal
            {
                language = "C#",
                version = new VersionInfo
                {
                    editorType = "rotur",
                    versionNumber = null
                }
            },
            listener = "handshake_cfg"
        };

        ws.Send(JsonConvert.SerializeObject(msg));
    }

    static void SetUsername(WebSocket ws, string username)
    {
        var msg = new Message
        {
            cmd = "setid",
            val = username,
            listener = "set_username_cfg"
        };

        ws.Send(JsonConvert.SerializeObject(msg));
    }

    static void LinkRoom(WebSocket ws, string room)
    {
        var msg = new Message
        {
            cmd = "link",
            val = room,
            listener = "link_cfg"
        };

        ws.Send(JsonConvert.SerializeObject(msg));
    }

    static void ReplyToPacket(WebSocket ws, Packet message, string payload)
    {
        var msg = new Message
        {
            cmd = "pmsg",
            val = new PacketVal
            {
                client = myClient,
                target = message.source,
                message = payload,
                timestamp = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds()
            },
            id = message.origin
        };

        ws.Send(JsonConvert.SerializeObject(msg));
    }

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

    static void HandlePacket(WebSocket ws, Packet packet)
    {
        if (packet.cmd == "client_ip")
        {
            client.ip = packet.val;
        }
        else if (packet.cmd == "client_obj")
        {
            client.username = packet.val.username;
        }
        else if (packet.cmd == "ulist")
        {
            if (packet.mode == "add")
            {
                if (client.users == null) client.users = new List<User>();
                client.users.Add(packet.val);
            }
            else if (packet.mode == "remove")
            {
                client.users?.RemoveAll(user => user.id == packet.val.id);
            }
            else if (packet.mode == "set")
            {
                client.users = packet.val.users;
            }
        }

        if (packet.cmd == "pmsg")
        {
            packet.origin = packet.origin.username;
            packet.rooms = null;
            packet.cmd = null;
            packet.client = packet.val.client;
            packet.source = packet.val.source;
            packet.payload = packet.val.payload;
            if (!packets.ContainsKey(packet.val.target))
            {
                packets[packet.val.target] = new List<Packet>();
            }
            packets[packet.val.target].Add(packet);
        }

        if (packet.listener == "handshake_cfg")
        {
            SetUsername(ws, username);
        }

        if (packet.listener == "set_username_cfg")
        {
            client.username = username;
            LinkRoom(ws, "roturTW");
        }

        if (packet.listener == "link_cfg")
        {
            client.room = packet.val;
        }
    }
}

public class Packet
{
    public string cmd { get; set; }
    public string mode { get; set; }
    public string origin { get; set; }
    public string source { get; set; }
    public PacketVal val { get; set; }
    public string listener { get; set; }
}

public class Message
{
    public string cmd { get; set; }
    public object val { get; set; }
    public string listener { get; set; }
    public string id { get; set; }
}

public class PacketVal
{
    public MyClient client { get; set; }
    public string target { get; set; }
    public string payload { get; set; }
    public string source { get; set; }
    public long timestamp { get; set; }
    public List<User> users { get; set; }
}

public class ClientInfo
{
    public string ip { get; set; }
    public string username { get; set; }
    public List<User> users { get; set; }
    public object room { get; set; }
}

public class User
{
    public string id { get; set; }
    public string username { get; set; }
    public string uuid { get; set; }
}

public class MyClient
{
    public string system { get; set; }
    public string version { get; set; }
}

public class HandshakeVal
{
    public string language { get; set; }
    public VersionInfo version { get; set; }
}

public class VersionInfo
{
    public string editorType { get; set; }
    public string versionNumber { get; set; }
}
