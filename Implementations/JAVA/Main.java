import javax.websocket.DeploymentException;
import java.net.URI;
import java.net.URISyntaxException;

public class Main {
    public static void main(String[] args) {
        try {
            URI uri = new URI("wss://rotur.mistium.com");
            WebSocketClient client = new WebSocketClient(uri);
            client.connect();
        } catch (URISyntaxException e) {
            System.err.println("Invalid URI: " + e.getMessage());
        } catch (DeploymentException | InterruptedException e) {
            System.err.println("WebSocket connection failed: " + e.getMessage());
        }
    }
}
