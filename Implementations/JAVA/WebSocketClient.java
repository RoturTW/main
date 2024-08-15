import com.google.gson.Gson;
import org.glassfish.tyrus.client.ClientManager;

import javax.websocket.*;
import java.net.URI;
import java.util.HashMap;
import java.util.Map;

@ClientEndpoint
public class WebSocketClient {
    private final URI serverUri;
    private final ClientInfo clientInfo;
    private final Map<String, Object> packets = new HashMap<>();
    private final Gson gson = new Gson();
    private Session session;

    public WebSocketClient(URI serverUri) {
        this.serverUri = serverUri;
        this.clientInfo = new ClientInfo();
    }

    public void connect() throws DeploymentException, InterruptedException {
        ClientManager client = ClientManager.createClient();
        client.connectToServer(this, serverUri);
    }

    @OnOpen
    public void onOpen(Session session) {
        System.out.println("Connected!");
        this.session = session;
        sendHandshake();
    }

    @OnMessage
    public void onMessage(String message) {
        Map<String, Object> packet = gson.fromJson(message, Map.class);
        MessageHandler.handlePacket(packet, this);
    }

    public void sendMessage(Map<String, Object> message) {
        try {
            String jsonMessage = gson.toJson(message);
            session.getAsyncRemote().sendText(jsonMessage);
        } catch (Exception e) {
            System.err.println("Failed to send message: " + e.getMessage());
        }
    }

    private void sendHandshake() {
        Map<String, Object> msg = new HashMap<>();
        Map<String, Object> version = new HashMap<>();
        version.put("editorType", "rotur");
        version.put("versionNumber", null);

        msg.put("cmd", "handshake");
        msg.put("val", new HashMap<String, Object>() {{
            put("language", "Java");
            put("version", version);
        }});
        msg.put("listener", "handshake_cfg");

        sendMessage(msg);
    }

    public ClientInfo getClientInfo() {
        return clientInfo;
    }

    public Map<String, Object> getPackets() {
        return packets;
    }
}
