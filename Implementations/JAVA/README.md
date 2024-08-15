# Rotur WebSocket Client

This Java application connects to a WebSocket server using a client implemented in Java. It allows you to send and receive messages and manage user information.

## Prerequisites

Before running the application, ensure you have the following installed:

- Java 8 or later
- Maven (for dependency management)

## Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/RoturTW/main.git
   cd main/Implementations/JAVA
   ```

2. **Configure the Username**

   Before running the script, you need to set the `username` variable in the `ClientInfo` class to the ID you want to connect to the server as:

   ```java
   private String username = "<your-username>";
   ```

3. **Build the Project**

   Use Maven to build the project:

   ```bash
   mvn clean install
   ```

## Running the Application

Run the application using the `Main` class:

```bash
java -cp target/<jar-file-name>.jar Main
```

Replace `<jar-file-name>` with the actual name of the jar file generated in the `target` directory.

## Key Variables

### Client Info

The `ClientInfo` class stores all user information, which can be accessed programmatically:

```java
{
    "ip": "",        // Your IP address
    "username": "",  // Your username
    "users": [       // An array of all connected users to Rotur
        {
            "id": "",
            "username": "",
            "uuid": ""
        }
    ]
}
```

You can access specific information using:

```java
clientInfo.getIp();
clientInfo.getUsername();
```

## Sending Messages

Use the `sendMessage` method in `WebSocketClient` to send messages to other users online:

```java
public void sendMessage(String payload, String username, String target, String source) {
    Map<String, Object> msg = new HashMap<>();
    msg.put("cmd", "pmsg");
    msg.put("val", new HashMap<String, Object>() {{
        put("target", target);
        put("payload", payload);
        put("source", source);
    }});
    msg.put("id", username);

    sendMessage(msg);
}
```

### Parameters:

- `payload`: The data you are going to send to the user.
- `username`: The user you are sending the data to.
- `target`: The "port" you want to send the data to.
- `source`: The port this program has sent the data from.

## Receiving Packets

Packets are stored in a JSON-like object in the format:

```json
{
    "target": [
        {
            "origin": "ori-Mist§341de37b8d", // The username of the user that sent the data
            "client": {
                "system": "originOS",
                "version": "v5.0.7"
            },
            "source": "messager", // The source Rotur port
            "payload": "test"
        }
    ],
    "target2": []
}
```

You can manage these packets within the `packets` variable in the `WebSocketClient` class:

```java
Map<String, Object> packets = new HashMap<>();
```

## Example Packets Variable

Here is an example of how packets might look:

```json
{
    "messager": [
        {
            "origin": "ori-Mist§341de37b8d",
            "client": {
                "system": "originOS",
                "version": "v5.0.7"
            },
            "source": "messager",
            "payload": "test"
        }
    ]
}
```

## Additional Information

- The application uses the Tyrus WebSocket client library for handling WebSocket connections.
- JSON serialization and deserialization are handled by Gson.

Ensure that you have configured your project dependencies correctly and follow the instructions to connect to the WebSocket server successfully.
