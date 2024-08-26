# ROTUR Client Setup Script

This repository contains a shell script that sets up and runs a Python-based ROTUR client. The script prompts the user for specific inputs and dynamically generates a Python script to establish a WebSocket connection with the ROTUR server.

## Prerequisites

Before running the script, ensure that you have the following installed:

- **Python 3.x**: The Python script uses Python 3.
- **WebSocket library**: Install the required library using pip:
  ```bash
  pip install websocket-client
  ```
- **Bash**: The script is a bash script and should be run in a UNIX-like environment.

## Usage

1. **Clone the repository** (if not already cloned):
   ```bash
   git clone <repository_url>
   cd <repository_directory>
   ```

2. **Make the script executable**:
   ```bash
   chmod +x rotur_client.sh
   ```

3. **Run the script**:
   ```bash
   ./rotur_client.sh
   ```

4. **Follow the prompts**:
   - **Designation**: Enter a 3-character designation (e.g., `DEV`, `USR`). The script will ensure the designation is exactly 3 characters long.
   - **Username**: Enter your username. This will be used in combination with your designation to form your user ID.
   - **Packets**: You will be prompted to enter a value for `packets`. If left blank, it defaults to an empty dictionary `{}`.
   - **Client**: You will be prompted to enter a value for `client`. If left blank, it defaults to an empty dictionary `{}`.

5. **Python Script Execution**:
   - The script will generate a Python file `rotur_client.py` based on your inputs and will immediately run it, establishing a WebSocket connection to the ROTUR server.

## Script Overview

The shell script (`rotur_client.sh`) is designed to make it easy to set up and run the ROTUR client. Here’s what it does:

- **Prompts the user** for a designation, username, packets, and client values.
- **Generates a Python script** dynamically using the provided inputs.
- **Runs the Python script** to connect to the ROTUR server.

### Example Output

Upon running the script, you may see the following prompts and outputs:

```bash
$ ./rotur_client.sh
Enter your designation (exactly 3 characters):
DEV
Enter your username:
john_doe
Enter packets (leave blank for default '{}'):
Enter client (leave blank for default '{}'):

Connected!
```

## Python Script Details

The Python script (`rotur_client.py`) performs the following functions:

- **WebSocket Connection**: Connects to the ROTUR server using the WebSocket protocol.
- **Handshake**: Sends an initial handshake to the server.
- **Username and Room Setup**: Sets the username and links to a default room (`roturTW`).
- **Message Handling**: Handles incoming messages and manages client state.

### Key Variables

- `username`: The user ID generated using the provided designation and username.
- `packets`: A dictionary to store incoming packets.
- `client`: A dictionary containing client information (IP, username, etc.).

## License

This project is open-source and available under the GPL-3.0 License. See the [LICENSE](https://github.com/RoturTW/main/blob/main/COPYING) file for details.
