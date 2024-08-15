import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MessageHandler {

    public static void handlePacket(Map<String, Object> packet, WebSocketClient client) {
        String cmd = (String) packet.get("cmd");
        String listener = (String) packet.get("listener");

        if ("client_ip".equals(cmd)) {
            client.getClientInfo().setIp((String) packet.get("val"));
        } else if ("client_obj".equals(cmd)) {
            client.getClientInfo().setUsername((String) packet.get("val"));
        } else if ("ulist".equals(cmd)) {
            handleUserList(packet, client);
        }

        if ("pmsg".equals(cmd)) {
            handlePmsg(packet, client);
        }

        if ("handshake_cfg".equals(listener)) {
            setUsername(client, client.getClientInfo().getDesignation() + "-" + client.getClientInfo().getUsername());
        } else if ("set_username_cfg".equals(listener)) {
            client.getClientInfo().setUsername(client.getClientInfo().getDesignation() + "-" + client.getClientInfo().getUsername());
            linkRoom(client, new String[]{"roturTW"});
        } else if ("link_cfg".equals(listener)) {
            client.getClientInfo().setRoom((String) packet.get("val"));
        }
    }

    private static void handleUserList(Map<String, Object> packet, WebSocketClient client) {
        List<String> users = client.getClientInfo().getUsers();
        String mode = (String) packet.get("mode");
        String val = (String) packet.get("val");

        if ("add".equals(mode)) {
            users.add(val);
        } else if ("remove".equals(mode)) {
            users.remove(val);
        } else if ("set".equals(mode)) {
            users.clear();
            users.addAll((List<String>) packet.get("val"));
        }
    }

    private static void handlePmsg(Map<String, Object> packet, WebSocketClient client) {
        Map<String, Object> val = (Map<String, Object>) packet.get("val");
        String target = (String) val.get("target");
        if (!client.getPackets().containsKey(target)) {
            client.getPackets().put(target, new HashMap<>());
        }
        Map<String, Object> newPacket = new HashMap<>(packet);
        newPacket.put("origin", ((Map<String, Object>) packet.get("origin")).get("username"));
        newPacket.put("client", val.get("client"));
        newPacket.put("source", val.get("source"));
        newPacket.put("payload", val.get("payload"));
        newPacket.remove("cmd");
        newPacket.remove("rooms");
        client.getPackets().put(target, newPacket);
        packet.remove("val");
    }

    private static void setUsername(WebSocketClient client, String username) {
        Map<String, Object> msg = new HashMap<>();
        msg.put("cmd", "setid");
        msg.put("val", username);
        msg.put("listener", "set_username_cfg");

        client.sendMessage(msg);
    }

    private static void linkRoom(WebSocketClient client, String[] rooms) {
        Map<String, Object> msg = new HashMap<>();
        msg.put("cmd", "link");
        msg.put("val", rooms);
        msg.put("listener", "link_cfg");

        client.sendMessage(msg);
    }
}
