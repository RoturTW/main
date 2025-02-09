MD5 = function (e) {
  function h(a, b) {
    var c, d, e, f, g;
    e = a & 2147483648;
    f = b & 2147483648;
    c = a & 1073741824;
    d = b & 1073741824;
    g = (a & 1073741823) + (b & 1073741823);
    return c & d
      ? g ^ 2147483648 ^ e ^ f
      : c | d
        ? g & 1073741824
          ? g ^ 3221225472 ^ e ^ f
          : g ^ 1073741824 ^ e ^ f
        : g ^ e ^ f;
  }

  function k(a, b, c, d, e, f, g) {
    a = h(a, h(h((b & c) | (~b & d), e), g));
    return h((a << f) | (a >>> (32 - f)), b);
  }

  function l(a, b, c, d, e, f, g) {
    a = h(a, h(h((b & d) | (c & ~d), e), g));
    return h((a << f) | (a >>> (32 - f)), b);
  }

  function m(a, b, d, c, e, f, g) {
    a = h(a, h(h(b ^ d ^ c, e), g));
    return h((a << f) | (a >>> (32 - f)), b);
  }

  function n(a, b, d, c, e, f, g) {
    a = h(a, h(h(d ^ (b | ~c), e), g));
    return h((a << f) | (a >>> (32 - f)), b);
  }

  function p(a) {
    var b = "",
      d = "",
      c;
    for (c = 0; 3 >= c; c++)
      (d = (a >>> (8 * c)) & 255),
        (d = "0" + d.toString(16)),
        (b += d.substr(d.length - 2, 2));
    return b;
  }
  var f = [],
    q,
    r,
    s,
    t,
    a,
    b,
    c,
    d;
  e = (function (a) {
    a = a.replace(/\r\n/g, "\n");
    for (var b = "", d = 0; d < a.length; d++) {
      var c = a.charCodeAt(d);
      128 > c
        ? (b += String.fromCharCode(c))
        : (127 < c && 2048 > c
          ? (b += String.fromCharCode((c >> 6) | 192))
          : ((b += String.fromCharCode((c >> 12) | 224)),
            (b += String.fromCharCode(((c >> 6) & 63) | 128))),
          (b += String.fromCharCode((c & 63) | 128)));
    }
    return b;
  })(e);
  f = (function (b) {
    var a,
      c = b.length;
    a = c + 8;
    for (
      var d = 16 * ((a - (a % 64)) / 64 + 1), e = Array(d - 1), f = 0, g = 0;
      g < c;

    )
      (a = (g - (g % 4)) / 4),
        (f = (g % 4) * 8),
        (e[a] |= b.charCodeAt(g) << f),
        g++;
    a = (g - (g % 4)) / 4;
    e[a] |= 128 << ((g % 4) * 8);
    e[d - 2] = c << 3;
    e[d - 1] = c >>> 29;
    return e;
  })(e);
  a = 1732584193;
  b = 4023233417;
  c = 2562383102;
  d = 271733878;
  for (e = 0; e < f.length; e += 16)
    (q = a),
      (r = b),
      (s = c),
      (t = d),
      (a = k(a, b, c, d, f[e + 0], 7, 3614090360)),
      (d = k(d, a, b, c, f[e + 1], 12, 3905402710)),
      (c = k(c, d, a, b, f[e + 2], 17, 606105819)),
      (b = k(b, c, d, a, f[e + 3], 22, 3250441966)),
      (a = k(a, b, c, d, f[e + 4], 7, 4118548399)),
      (d = k(d, a, b, c, f[e + 5], 12, 1200080426)),
      (c = k(c, d, a, b, f[e + 6], 17, 2821735955)),
      (b = k(b, c, d, a, f[e + 7], 22, 4249261313)),
      (a = k(a, b, c, d, f[e + 8], 7, 1770035416)),
      (d = k(d, a, b, c, f[e + 9], 12, 2336552879)),
      (c = k(c, d, a, b, f[e + 10], 17, 4294925233)),
      (b = k(b, c, d, a, f[e + 11], 22, 2304563134)),
      (a = k(a, b, c, d, f[e + 12], 7, 1804603682)),
      (d = k(d, a, b, c, f[e + 13], 12, 4254626195)),
      (c = k(c, d, a, b, f[e + 14], 17, 2792965006)),
      (b = k(b, c, d, a, f[e + 15], 22, 1236535329)),
      (a = l(a, b, c, d, f[e + 1], 5, 4129170786)),
      (d = l(d, a, b, c, f[e + 6], 9, 3225465664)),
      (c = l(c, d, a, b, f[e + 11], 14, 643717713)),
      (b = l(b, c, d, a, f[e + 0], 20, 3921069994)),
      (a = l(a, b, c, d, f[e + 5], 5, 3593408605)),
      (d = l(d, a, b, c, f[e + 10], 9, 38016083)),
      (c = l(c, d, a, b, f[e + 15], 14, 3634488961)),
      (b = l(b, c, d, a, f[e + 4], 20, 3889429448)),
      (a = l(a, b, c, d, f[e + 9], 5, 568446438)),
      (d = l(d, a, b, c, f[e + 14], 9, 3275163606)),
      (c = l(c, d, a, b, f[e + 3], 14, 4107603335)),
      (b = l(b, c, d, a, f[e + 8], 20, 1163531501)),
      (a = l(a, b, c, d, f[e + 13], 5, 2850285829)),
      (d = l(d, a, b, c, f[e + 2], 9, 4243563512)),
      (c = l(c, d, a, b, f[e + 7], 14, 1735328473)),
      (b = l(b, c, d, a, f[e + 12], 20, 2368359562)),
      (a = m(a, b, c, d, f[e + 5], 4, 4294588738)),
      (d = m(d, a, b, c, f[e + 8], 11, 2272392833)),
      (c = m(c, d, a, b, f[e + 11], 16, 1839030562)),
      (b = m(b, c, d, a, f[e + 14], 23, 4259657740)),
      (a = m(a, b, c, d, f[e + 1], 4, 2763975236)),
      (d = m(d, a, b, c, f[e + 4], 11, 1272893353)),
      (c = m(c, d, a, b, f[e + 7], 16, 4139469664)),
      (b = m(b, c, d, a, f[e + 10], 23, 3200236656)),
      (a = m(a, b, c, d, f[e + 13], 4, 681279174)),
      (d = m(d, a, b, c, f[e + 0], 11, 3936430074)),
      (c = m(c, d, a, b, f[e + 3], 16, 3572445317)),
      (b = m(b, c, d, a, f[e + 6], 23, 76029189)),
      (a = m(a, b, c, d, f[e + 9], 4, 3654602809)),
      (d = m(d, a, b, c, f[e + 12], 11, 3873151461)),
      (c = m(c, d, a, b, f[e + 15], 16, 530742520)),
      (b = m(b, c, d, a, f[e + 2], 23, 3299628645)),
      (a = n(a, b, c, d, f[e + 0], 6, 4096336452)),
      (d = n(d, a, b, c, f[e + 7], 10, 1126891415)),
      (c = n(c, d, a, b, f[e + 14], 15, 2878612391)),
      (b = n(b, c, d, a, f[e + 5], 21, 4237533241)),
      (a = n(a, b, c, d, f[e + 12], 6, 1700485571)),
      (d = n(d, a, b, c, f[e + 3], 10, 2399980690)),
      (c = n(c, d, a, b, f[e + 10], 15, 4293915773)),
      (b = n(b, c, d, a, f[e + 1], 21, 2240044497)),
      (a = n(a, b, c, d, f[e + 8], 6, 1873313359)),
      (d = n(d, a, b, c, f[e + 15], 10, 4264355552)),
      (c = n(c, d, a, b, f[e + 6], 15, 2734768916)),
      (b = n(b, c, d, a, f[e + 13], 21, 1309151649)),
      (a = n(a, b, c, d, f[e + 4], 6, 4149444226)),
      (d = n(d, a, b, c, f[e + 11], 10, 3174756917)),
      (c = n(c, d, a, b, f[e + 2], 15, 718787259)),
      (b = n(b, c, d, a, f[e + 9], 21, 3951481745)),
      (a = h(a, q)),
      (b = h(b, r)),
      (c = h(c, s)),
      (d = h(d, t));
  return (p(a) + p(b) + p(c) + p(d)).toLowerCase();
};

randomString = function (length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

function wsClose() {
  this.ws.close();
}

class RoturExtension {
  constructor(runtime) {
    this.runtime = runtime;
    this.ws = null;
    this.client = {};
    this.packets = {};
    this.is_connected = false;
    this.authenticated = false;
    this.accounts = "";
    this.server = "";
    this.userToken = "";
    this.user = {};
    this.first_login = false;
    this.designation = "";
    this.username = "";
    this.my_client = {};
    this.mail = {};
    this.localKeys = {};
    this.syncedVariables = {};
    this.packetQueue = [];
    this.showDangerous = false;

    this.lastJoined = "";
    this.lastLeft = "";

    this.version = 5;
    this.outdated = false;

    fetch("https://raw.githubusercontent.com/Mistium/Origin-OS/main/Resources/info.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then((data) => {
        this.accounts = data.name;
        this.server = data.server;
      })
      .catch((error) => {
        this.accounts = "sys.-origin";
        this.server = "wss://rotur.mistium.com";
      });

    this._initializeBadges(); // Start fetching badges


    if (typeof window.scaffolding !== "object") {
      fetch("https://raw.githubusercontent.com/RoturTW/main/main/Implementations/SCRATCH/version.txt")
        .then((response) => {
          if (response.ok) {
            return response.text();
          } else {
            throw new Error('Network response was not ok');
          }
        })
        .then((data) => {
          this.outdated = this.version < parseInt(data);
          Scratch.vm.extensionManager.refreshBlocks();
        })
    }
  }

  async _initializeBadges() {
    await this._getBadges(); // Wait for the fetch operation to complete
  }

  async _getBadges() {
    try {
      const response = await fetch("https://raw.githubusercontent.com/RoturTW/Badges/main/badges.json");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.badges = data;
    } catch (error) {
      this.badges = [];
    }
  }

  getInfo() {
    return {
      id: "roturEXT",
      name: "RoturV5",
      color1: "#403041",
      blocks: [
        {
          blockType: Scratch.BlockType.BUTTON,
          text: "New Update Available",
          func: "openUpdate",
          hideFromPalette: !this.outdated,
        },
        {
          opcode: "connectToServer",
          blockType: Scratch.BlockType.COMMAND,
          text: "Connect To Server With Designation: [DESIGNATION], System: [SYSTEM] And Version: [VERSION]",
          arguments: {
            DESIGNATION: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "rtr",
            },
            SYSTEM: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "rotur",
            },
            VERSION: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "v5",
            },
          },
        },
        {
          opcode: "serverOnline",
          blockType: Scratch.BlockType.BOOLEAN,
          text: "Account Server Online",
        },
        {
          opcode: "disconnect",
          blockType: Scratch.BlockType.COMMAND,
          text: "Disconnect From Server",
        },
        {
          opcode: "connected",
          blockType: Scratch.BlockType.BOOLEAN,
          text: "Connected To Server",
        },
        "---",
        {
          opcode: "whenConnected",
          blockType: Scratch.BlockType.EVENT,
          text: "When Connected To Server",
          isEdgeActivated: false,
        },
        {
          opcode: "whenDisconnected",
          blockType: Scratch.BlockType.EVENT,
          text: "When Disconnected From Server",
          isEdgeActivated: false,
        },
        "---",
        {
          blockType: Scratch.BlockType.LABEL,
          text: "Authentication",
        },
        {
          opcode: "login",
          blockType: Scratch.BlockType.REPORTER,
          text: "Login With Username: [USERNAME] And Password: [PASSWORD]",
          arguments: {
            USERNAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "test",
            },
            PASSWORD: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "password",
            },
          },
        },
        {
          opcode: "loginMD5",
          blockType: Scratch.BlockType.REPORTER,
          text: "Login With Username: [USERNAME] And MD5 Password: [PASSWORD]",
          arguments: {
            USERNAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "test",
            },
            PASSWORD: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "password",
            },
          },
        },
        {
          opcode: "passwordMD5",
          blockType: Scratch.BlockType.REPORTER,
          text: "MD5 Password: [PASSWORD]",
          arguments: {
            PASSWORD: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "password",
            },
          },
        },
        {
          opcode: "loginToken",
          blockType: Scratch.BlockType.REPORTER,
          text: "Login With Token: [TOKEN]",
          arguments: {
            TOKEN: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "token",
            },
          },
          hideFromPalette: true,
        },
        {
          opcode: "register",
          blockType: Scratch.BlockType.REPORTER,
          text: "Register With Username: [USERNAME] And Password: [PASSWORD]",
          arguments: {
            USERNAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "test",
            },
            PASSWORD: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "password",
            },
          },
        },
        {
          opcode: "logout",
          blockType: Scratch.BlockType.COMMAND,
          text: "Logout",
        },
        {
          opcode: "loggedIn",
          blockType: Scratch.BlockType.BOOLEAN,
          text: "Authenticated",
        },
        {
          opcode: "firstLogin",
          blockType: Scratch.BlockType.BOOLEAN,
          text: "Is This The First Login Of Today?",
        },
        {
          opcode: "whenAuthenticated",
          blockType: Scratch.BlockType.EVENT,
          text: "When Authenticated",
          isEdgeActivated: false,
        },
        "---",
        {
          blockType: Scratch.BlockType.LABEL,
          text: "Account Information",
        },
        {
          blockType: Scratch.BlockType.BUTTON,
          text: "Account Docs",
          func: "openAccountDocs",
        },
        {
          opcode: "getToken",
          blockType: Scratch.BlockType.REPORTER,
          text: "User Token",
        },
        {
          opcode: "getkey",
          blockType: Scratch.BlockType.REPORTER,
          text: "Get [KEY]",
          arguments: {
            KEY: {
              menu: "keys",
            },
          },
        },
        {
          opcode: "setkey",
          blockType: Scratch.BlockType.REPORTER,
          text: "Set [KEY] To [VALUE]",
          arguments: {
            KEY: {
              menu: "keys",
            },
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "value",
            },
          },
        },
        {
          opcode: "keyExists",
          blockType: Scratch.BlockType.BOOLEAN,
          text: "Key [KEY] Exists",
          arguments: {
            KEY: {
              menu: "keys",
            },
          },
        },
        {
          opcode: "getkeys",
          blockType: Scratch.BlockType.REPORTER,
          text: "Get All Keys",
        },
        {
          opcode: "getvalues",
          blockType: Scratch.BlockType.REPORTER,
          text: "Get All Values",
        },
        {
          opcode: "getAccount",
          blockType: Scratch.BlockType.REPORTER,
          text: "Get Account Object",
        },
        {
          opcode: "whenAccountUpdate",
          blockType: Scratch.BlockType.EVENT,
          text: "When Account Updated",
          isEdgeActivated: false,
        },
        "---",
        {
          blockType: Scratch.BlockType.LABEL,
          text: "Data Storage",
        },
        {
          blockType: Scratch.BlockType.BUTTON,
          text: "Data Storage Docs",
          func: "openStorageDocs",
        },
        {
          opcode: "setStorageID",
          blockType: Scratch.BlockType.COMMAND,
          text: "Set Storage Id To [ID]",
          arguments: {
            ID: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "id",
            },
          },
        },
        {
          opcode: "storageIdExists",
          blockType: Scratch.BlockType.BOOLEAN,
          text: "Storage ID Has Been Set",
        },
        {
          opcode: "getStorageID",
          blockType: Scratch.BlockType.REPORTER,
          text: "Storage ID",
        },
        {
          opcode: "getStorageKey",
          blockType: Scratch.BlockType.REPORTER,
          text: "Get Key From Storage [KEY]",
          arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "key",
            },
          },
        },
        {
          opcode: "setStorageKey",
          blockType: Scratch.BlockType.COMMAND,
          text: "Set Key [KEY] To [VALUE] In Storage",
          arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "key",
            },
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "value",
            },
          },
        },
        {
          opcode: "existsStorageKey",
          blockType: Scratch.BlockType.BOOLEAN,
          text: "Key [KEY] Exists In Storage",
          arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "key",
            },
          },
        },
        {
          opcode: "deleteStorageKey",
          blockType: Scratch.BlockType.COMMAND,
          text: "Delete Key [KEY] From Storage",
          arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "key",
            },
          },
        },
        {
          opcode: "getStorageKeys",
          blockType: Scratch.BlockType.REPORTER,
          text: "Get All Keys From Storage",
        },
        {
          opcode: "getStorageValues",
          blockType: Scratch.BlockType.REPORTER,
          text: "Get All Values From Storage",
        },
        {
          opcode: "clearStorage",
          blockType: Scratch.BlockType.COMMAND,
          text: "Clear Storage",
        },
        {
          blockType: Scratch.BlockType.LABEL,
          text: "Storage Information",
        },
        {
          opcode: "storageUsage",
          blockType: Scratch.BlockType.REPORTER,
          text: "Storage Usage (Characters)",
        },
        {
          opcode: "storageLimit",
          blockType: Scratch.BlockType.REPORTER,
          text: "Storage Limit (Characters)",
        },
        {
          opcode: "storageRemaining",
          blockType: Scratch.BlockType.REPORTER,
          text: "Storage Remaining (Characters)",
        },
        {
          opcode: "accountStorageUsage",
          blockType: Scratch.BlockType.REPORTER,
          text: "Account Storage Usage (Characters)",
        },
        {
          opcode: "accountStorageLimit",
          blockType: Scratch.BlockType.REPORTER,
          text: "Account Storage Limit (Characters)",
        },
        {
          opcode: "accountStorageRemaining",
          blockType: Scratch.BlockType.REPORTER,
          text: "Account Storage Remaining (Characters)",
        },
        "---",
        {
          blockType: Scratch.BlockType.LABEL,
          text: "Messaging",
        },
        {
          opcode: "sendMessage",
          blockType: Scratch.BlockType.COMMAND,
          text: "Send Message [PAYLOAD] To User [USER] On Port: [TARGET] From Port: [SOURCE]",
          arguments: {
            PAYLOAD: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Hello",
            },
            USER: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "targetUser",
            },
            TARGET: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "port",
            },
            SOURCE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "port",
            },
          },
        },
        {
          opcode: "whenMessageReceived",
          blockType: Scratch.BlockType.EVENT,
          text: "When Message Received",
          isEdgeActivated: false,
        },
        {
          opcode: "getPacketsFromTarget",
          blockType: Scratch.BlockType.REPORTER,
          text: "Get Packets From Port [TARGET]",
          arguments: {
            TARGET: {
              menu: "targets",
            },
          },
        },
        {
          opcode: "getFirstPacketOnTarget",
          blockType: Scratch.BlockType.REPORTER,
          text: "First Packet On Port [TARGET]",
          arguments: {
            TARGET: {
              menu: "targets",
            },
          },
        },
        {
          opcode: "dataOfFirstPacketOnTarget",
          blockType: Scratch.BlockType.REPORTER,
          text: "[DATA] Of First Packet On Port [TARGET]",
          arguments: {
            DATA: {
              menu: "packetData",
            },
            TARGET: {
              menu: "targets",
            },
          },
        },
        {
          opcode: "numberOfPacketsOnTarget",
          blockType: Scratch.BlockType.REPORTER,
          text: "Number Of Packets On Port [TARGET]",
          arguments: {
            TARGET: {
              menu: "targets",
            },
          },
        },
        {
          opcode: "getAllTargets",
          blockType: Scratch.BlockType.REPORTER,
          text: "All Open Targets",
        },
        {
          opcode: "getAllPackets",
          blockType: Scratch.BlockType.REPORTER,
          text: "All Packets",
        },
        {
          opcode: "deleteFirstPacketOnTarget",
          blockType: Scratch.BlockType.REPORTER,
          text: "Pop First Of Port [TARGET]",
          arguments: {
            TARGET: {
              menu: "targets",
            },
          },
        },
        {
          opcode: "deletePacketsOnTarget",
          blockType: Scratch.BlockType.COMMAND,
          text: "Delete All Packets On Port [TARGET]",
          arguments: {
            TARGET: {
              menu: "targets",
            },
          },
        },
        {
          opcode: "deleteAllPackets",
          blockType: Scratch.BlockType.COMMAND,
          text: "Delete All Packets",
        },
        "---",
        {
          blockType: Scratch.BlockType.LABEL,
          text: "Raw Packet Queue",
        },
        {
          opcode: "RAWgetAllPackets",
          blockType: Scratch.BlockType.REPORTER,
          text: "Get All RAW Packets",
        },
        {
          opcode: "RAWgetFirstPacket",
          blockType: Scratch.BlockType.REPORTER,
          text: "First RAW Packet",
        },
        {
          opcode: "RAWdeleteFirstPacket",
          blockType: Scratch.BlockType.COMMAND,
          text: "Pop First RAW Packet",
        },
        {
          opcode: "RAWdeleteAllPackets",
          blockType: Scratch.BlockType.COMMAND,
          text: "Delete All RAW Packets",
        },
        "---",
        {
          blockType: Scratch.BlockType.LABEL,
          text: "Client Information",
        },
        {
          opcode: "clientIP",
          blockType: Scratch.BlockType.REPORTER,
          text: "Client IP",
        },
        {
          opcode: "clientUsername",
          blockType: Scratch.BlockType.REPORTER,
          text: "Client Username",
        },
        "---",
        {
          blockType: Scratch.BlockType.LABEL,
          text: "Users",
        },
        {
          opcode: "clientUsers",
          blockType: Scratch.BlockType.REPORTER,
          text: "Connected Users",
        },
        {
          opcode: "usernameConnected",
          blockType: Scratch.BlockType.BOOLEAN,
          text: "Username [USER] Connected On Any Designation",
          arguments: {
            USER: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "user",
            },
          },
        },
        {
          opcode: "userConnected",
          blockType: Scratch.BlockType.BOOLEAN,
          text: "User [USER] Connected On Designation: [DESIGNATION]",
          arguments: {
            USER: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "user",
            },
            DESIGNATION: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "rtr",
            },
          },
        },
        {
          opcode: "getUserDesignation",
          blockType: Scratch.BlockType.REPORTER,
          text: "Get All Users On Designation: [DESIGNATION]",
          arguments: {
            DESIGNATION: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "rtr",
            },
          },
        },
        {
          opcode: "findID",
          blockType: Scratch.BlockType.REPORTER,
          text: "Find All Connections Of Username: [USER]",
          arguments: {
            USER: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "user",
            },
          },
        },
        {
          opcode: "onJoin",
          blockType: Scratch.BlockType.EVENT,
          text: "When A User Connects",
          isEdgeActivated: false,
        },
        {
          opcode: "onLeave",
          blockType: Scratch.BlockType.EVENT,
          text: "When A User Disconnects",
          isEdgeActivated: false,
        },
        {
          opcode: "onJoinUser",
          blockType: Scratch.BlockType.REPORTER,
          text: "Last User To Join",
        },
        {
          opcode: "onLeaveUser",
          blockType: Scratch.BlockType.REPORTER,
          text: "Last User To Leave",
        },
        "---",
        {
          blockType: Scratch.BlockType.LABEL,
          text: "Synced Variables"
        },
        {
          opcode: "setSyncedVariable",
          blockType: Scratch.BlockType.COMMAND,
          text: "Sync Variable With [USER] Of [KEY] To [VALUE]",
          arguments: {
            USER: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "user",
            },
            KEY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "key",
            },
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "value",
            },
          },
        },
        {
          opcode: "getSyncedVariable",
          blockType: Scratch.BlockType.REPORTER,
          text: "Get Synced Variable With [USER] Of [KEY]",
          arguments: {
            USER: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "user",
            },
            KEY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "key",
            },
          },
        },
        {
          opcode: "deleteSyncedVariable",
          blockType: Scratch.BlockType.COMMAND,
          text: "Delete Synced Variable With [USER] Of [KEY]",
          arguments: {
            USER: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "user",
            },
            KEY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "key",
            },
          },
        },
        {
          opcode: "getSyncedVariables",
          blockType: Scratch.BlockType.REPORTER,
          text: "Get Synced Variables With [USER]",
          arguments: {
            USER: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "user",
            },
          },
        },
        "---",
        {
          blockType: Scratch.BlockType.LABEL,
          text: "rMail",
        },
        {
          blockType: Scratch.BlockType.BUTTON,
          text: "Mail Docs",
          func: "openMailDocs",
        },
        {
          opcode: "whenMailReceived",
          blockType: Scratch.BlockType.EVENT,
          text: "When Mail Received",
          isEdgeActivated: false,
        },
        {
          opcode: "sendMail",
          blockType: Scratch.BlockType.REPORTER,
          text: "Send Mail With Subject: [SUBJECT] And Message: [MESSAGE] To: [TO]",
          arguments: {
            SUBJECT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Subject",
            },
            MESSAGE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Message",
            },
            TO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "user",
            },
          },
        },
        {
          opcode: "getAllMail",
          blockType: Scratch.BlockType.REPORTER,
          text: "Get Mail List",
        },
        {
          opcode: "getMail",
          blockType: Scratch.BlockType.REPORTER,
          text: "Get Body Of Mail At Index [ID]",
          arguments: {
            ID: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "1",
            },
          },
        },
        {
          opcode: "deleteMail",
          blockType: Scratch.BlockType.COMMAND,
          text: "Delete Mail At Index [ID]",
          arguments: {
            ID: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "1",
            },
          },
        },
        {
          opcode: "deleteAllMail",
          blockType: Scratch.BlockType.COMMAND,
          text: "Delete All Mail",
        },
        "---",
        {
          blockType: Scratch.BlockType.LABEL,
          text: "Friends",
        },
        {
          blockType: Scratch.BlockType.BUTTON,
          text: "Friends Docs",
          func: "openFriendsDocs",
        },
        {
          opcode: "getFriendList",
          blockType: Scratch.BlockType.REPORTER,
          text: "Get Friend List",
        },
        {
          opcode: "removeFriend",
          blockType: Scratch.BlockType.REPORTER,
          text: "Remove Friend [FRIEND]",
          arguments: {
            FRIEND: {
              menu: "friends",
            },
          },
        },
        {
          opcode: "acceptFriendRequest",
          blockType: Scratch.BlockType.REPORTER,
          text: "Accept Friend Request From [FRIEND]",
          arguments: {
            FRIEND: {
              menu: "requests",
            },
          },
        },
        {
          opcode: "declineFriendRequest",
          blockType: Scratch.BlockType.REPORTER,
          text: "Decline Friend Request From [FRIEND]",
          arguments: {
            FRIEND: {
              menu: "requests",
            },
          },
        },
        {
          opcode: "sendFriendRequest",
          blockType: Scratch.BlockType.REPORTER,
          text: "Send Friend Request To [FRIEND]",
          arguments: {
            FRIEND: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "friend",
            },
          },
        },
        {
          opcode: "whenFriendRequestReceived",
          blockType: Scratch.BlockType.EVENT,
          text: "When Friend Request Received",
          isEdgeActivated: false,
        },
        {
          opcode: "whenFriendRequestAccepted",
          blockType: Scratch.BlockType.EVENT,
          text: "When Friend Request Accepted",
          isEdgeActivated: false,
        },
        {
          opcode: "getFriendRequests",
          blockType: Scratch.BlockType.REPORTER,
          text: "Get Friend Requests",
        },
        {
          opcode: "getFriendStatus",
          blockType: Scratch.BlockType.REPORTER,
          text: "Get Friend Status Of [FRIEND]",
          arguments: {
            FRIEND: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "friend",
            },
          },
        },
        {
          opcode: "getFriendCount",
          blockType: Scratch.BlockType.REPORTER,
        },
        "---",
        {
          blockType: Scratch.BlockType.LABEL,
          text: "Currency",
        },
        {
          blockType: Scratch.BlockType.BUTTON,
          text: "Currency Docs",
          func: "openCurrencyDocs",
        },
        {
          opcode: "getBalance",
          blockType: Scratch.BlockType.REPORTER,
          text: "Get Balance",
        },
        {
          opcode: "tranferCurrency",
          blockType: Scratch.BlockType.REPORTER,
          text: "Transfer [AMOUNT] To [USER]",
          arguments: {
            AMOUNT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "0",
            },
            USER: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "user",
            },
          },
        },
        {
          opcode: "whenBalanceChanged",
          blockType: Scratch.BlockType.EVENT,
          text: "When Balance Changed",
          isEdgeActivated: false,
        },
        {
          opcode: "getTransactions",
          blockType: Scratch.BlockType.REPORTER,
          text: "Get Transactions",
        },
        "---",
        {
          blockType: Scratch.BlockType.LABEL,
          text: "Owned Items",
        },
        {
          opcode: "getMyOwnedItems",
          blockType: Scratch.BlockType.REPORTER,
          text: "Items Owned By Me",
        },
        {
          opcode: "itemData",
          blockType: Scratch.BlockType.REPORTER,
          text: "Data Of Item (ID) [ITEM]",
          arguments: {
            ITEM: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "item",
            },
          },
        },
        {
          opcode: "purchaseItem",
          blockType: Scratch.BlockType.REPORTER,
          text: "Purchase Item (ID) [ITEM]",
          arguments: {
            ITEM: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "item",
            },
          },
        },
        {
          opcode: "itemInfo",
          blockType: Scratch.BlockType.REPORTER,
          text: "Info Of Item (ID) [ITEM]",
          arguments: {
            ITEM: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "item",
            },
          },
        },
        {
          opcode: "ownsItem",
          blockType: Scratch.BlockType.BOOLEAN,
          text: "Do I Own Item (ID) [ITEM]",
          arguments: {
            ITEM: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "item",
            },
          },
        },
        {
          opcode: "getPublicItems",
          blockType: Scratch.BlockType.REPORTER,
          text: "Public Items, Page: [PAGE]",
          arguments: {
            PAGE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "1",
            },
          },
        },
        {
          opcode: "getPublicItemPages",
          blockType: Scratch.BlockType.REPORTER,
          text: "Public Item Pages",
          disableMonitor: true
        },
        "---",
        {
          blockType: Scratch.BlockType.LABEL,
          text: "Created Items",
        },
        {
          blockType: Scratch.BlockType.BUTTON,
          text: "READ ME BEFORE MAKING ITEMS",
          func: "openItemsDocs",
        },
        {
          opcode: "getMyCreatedItems",
          blockType: Scratch.BlockType.REPORTER,
          text: "ITEMS - By Me",
        },
        {
          opcode: "createItem",
          blockType: Scratch.BlockType.REPORTER,
          text: "ITEMS - Create With Name: [NAME] And Description: [DESCRIPTION] And Price: [PRICE] And Data: [CODE] And Transferable: [TRADABLE]",
          arguments: {
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "item",
            },
            DESCRIPTION: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "description",
            },
            PRICE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "0",
            },
            CODE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "code",
            },
            TRADABLE: {
              type: Scratch.ArgumentType.BOOLEAN,
              defaultValue: true,
            },
          },
        },
        {
          opcode: "updateItem",
          blockType: Scratch.BlockType.REPORTER,
          text: "ITEMS - Update [KEY] To [DATA] for id: [ITEM]",
          arguments: {
            ITEM: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "ID",
            },
            KEY: {
              type: Scratch.ArgumentType.STRING,
              menu: "itemKeys",
            },
            DATA: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "data",
            },
          },
        },
        {
          opcode: "deleteItem",
          blockType: Scratch.BlockType.REPORTER,
          text: "ITEMS - Delete (ID) [ITEM]",
          arguments: {
            ITEM: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "item",
            },
          },
        },
        {
          opcode: "hideItem",
          blockType: Scratch.BlockType.REPORTER,
          text: "ITEMS - Disable Purchases On (ID) [ITEM]",
          arguments: {
            ITEM: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "item",
            },
          },
        },
        {
          opcode: "showItem",
          blockType: Scratch.BlockType.REPORTER,
          text: "ITEMS - Enable Purchases on (ID) [ITEM]",
          arguments: {
            ITEM: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "item",
            },
          },
        },
        "---",
        {
          blockType: Scratch.BlockType.LABEL,
          text: "Badges",
        },
        {
          blockType: Scratch.BlockType.BUTTON,
          text: "Badge Docs",
          func: "openBadgesDocs",
        },
        {
          opcode: "gotBadgesSuccessfully",
          blockType: Scratch.BlockType.BOOLEAN,
          text: "Badges Loaded Successfully",
        },
        {
          opcode: "userBadges",
          blockType: Scratch.BlockType.REPORTER,
          text: "User Badges",
        },
        {
          opcode: "userBadgeCount",
          blockType: Scratch.BlockType.REPORTER,
          text: "User Badge Count",
        },
        {
          opcode: "hasBadge",
          blockType: Scratch.BlockType.BOOLEAN,
          text: "User Has Badge [BADGE]",
          arguments: {
            BADGE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "badge",
            },
          },
        },
        {
          opcode: "badgeInfo",
          blockType: Scratch.BlockType.REPORTER,
          text: "Badge Info [BADGE]",
          arguments: {
            BADGE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "badge",
            },
          },
        },
        {
          opcode: "allBadges",
          blockType: Scratch.BlockType.REPORTER,
          text: "All Badges",
        },
        {
          opcode: "redownloadBadges",
          blockType: Scratch.BlockType.COMMAND,
          text: "Redownload Badges",
        },
        "---",
        {
          blockType: Scratch.BlockType.LABEL,
          text: "Voice Calling",
        },
        {
          opcode: "callUser",
          blockType: Scratch.BlockType.COMMAND,
          text: "Call User [USERNAME]",
          arguments: {
            USERNAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "des-user§instance",
            },
          },
        },
        {
          opcode: "answerCall",
          blockType: Scratch.BlockType.COMMAND,
          text: "Answer Call From [USERNAME]",
          arguments: {
            USERNAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "des-user§instance",
            },
          },
        },
        {
          opcode: "declineCall",
          blockType: Scratch.BlockType.COMMAND,
          text: "Decline Call From [USERNAME]",
          arguments: {
            USERNAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "des-user§instance",
            },
          },
        },
        {
          opcode: "endCall",
          blockType: Scratch.BlockType.COMMAND,
          text: "End Call",
        },
        {
          opcode: "allIncomingCalls",
          blockType: Scratch.BlockType.REPORTER,
          text: "All Incoming Calls",
        },
        {
          opcode: "callStatus",
          blockType: Scratch.BlockType.REPORTER,
          text: "Call Status", // 0 = no call, 1 = incoming call, 2 = outgoing call, 3 = call in progress, 4 = call disconnected
        },
        {
          opcode: "callConnected",
          blockType: Scratch.BlockType.BOOLEAN,
          text: "Call Connected",
        },
        {
          opcode: "callInfo",
          blockType: Scratch.BlockType.REPORTER,
          text: "Call Info [INFO]",
          arguments: {
            INFO: {
              menu: "callInfo",
            },
          },
        },
        {
          opcode: "whenCallReceived",
          blockType: Scratch.BlockType.EVENT,
          text: "When Call Received",
          isEdgeActivated: false,
        },
        {
          opcode: "whenCallEnded",
          blockType: Scratch.BlockType.EVENT,
          text: "When Call Ended",
          isEdgeActivated: false,
        },
        {
          opcode: "whenCallAnswered",
          blockType: Scratch.BlockType.EVENT,
          text: "When Call Answered",
          isEdgeActivated: false,
        },
        {
          opcode: "whenCallDeclined",
          blockType: Scratch.BlockType.EVENT,
          text: "When Call Declined",
          isEdgeActivated: false,
        },
        {
          opcode: "whenCallDisconnected",
          blockType: Scratch.BlockType.EVENT,
          text: "When Call Failed",
          isEdgeActivated: false,
        },
        "---",
        {
          blockType: Scratch.BlockType.LABEL,
          text: "DANGER ZONE",
        },
        {
          blockType: Scratch.BlockType.BUTTON,
          text: "Show Danger Zone",
          func: "openDangerZone",
          hideFromPalette: this.showDangerous,
        },
        {
          blockType: Scratch.BlockType.BUTTON,
          text: "Hide Danger Zone",
          func: "closeDangerZone",
          hideFromPalette: !this.showDangerous,
        },
        {
          opcode: "deleteAccount",
          blockType: Scratch.BlockType.REPORTER,
          text: "Delete Account",
          hideFromPalette: !this.showDangerous,
          disableMonitor: true
        },
      ],
      menus: {
        packetData: {
          acceptReporters: true,
          items: ["origin", "client", "source port", "payload", "timestamp"],
        },
        targets: {
          acceptReporters: true,
          items: "openPorts",
        },
        keys: {
          acceptReporters: true,
          items: "accountKeys",
        },
        friends: {
          acceptReporters: true,
          items: "myFriends",
        },
        requests: {
          acceptReporters: true,
          items: "myRequests",
        },
        itemKeys: {
          acceptReporters: true,
          items: [
            "name",
            "description",
            "price",
            "data",
            "tradable",
            "hidden",
          ],
        },
        callInfo: {
          acceptReporters: true,
          items: [
            "caller",
            "status",
            "duration",
            "timestamp",
          ],
        },
      },
    };
  }

  // buttons
  openItemsDocs() {
    window.open("https://github.com/RoturTW/main/wiki/Items")
  }

  openAccountDocs() {
    window.open("https://github.com/RoturTW/main/wiki/Account-Keys")
  }

  openMailDocs() {
    window.open("https://github.com/RoturTW/main/wiki/Rmail")
  }

  openFriendsDocs() {
    window.open("https://github.com/RoturTW/main/wiki/Friends")
  }

  openStorageDocs() {
    window.open("https://github.com/RoturTW/main/wiki/Data-Storage")
  }

  openCurrencyDocs() {
    window.open("https://github.com/RoturTW/main/wiki/Currency")
  }

  openBadgesDocs() {
    window.open("https://github.com/RoturTW/main/wiki/Badges")
  }

  openDangerZone() {
    this.showDangerous = true;
    Scratch.vm.extensionManager.refreshBlocks();
  }

  closeDangerZone() {
    this.showDangerous = false;
    Scratch.vm.extensionManager.refreshBlocks();
  }

  // main functions

  connectToServer(args) {
    if (!this.server || !this.accounts) {
      console.log("Waiting for server and accounts...");
      setTimeout(() => {
        this.connectToServer(args);
      }, 1000);
      return;
    }
    if (this.ws) { this.disconnect(); }
    this.designation = args.DESIGNATION;
    this.username = randomString(32);
    this.my_client = {
      system: args.SYSTEM,
      version: args.VERSION,
    };
    this.connectToWebsocket();
  }

  openPorts() {
    let ports = [];
    for (let key in this.packets) {
      ports.push(key);
    }
    if (ports.length === 0) {
      return ["No Open Ports"];
    } else {
      return ports;
    }
  }

  accountKeys() {
    let keys = [];
    for (let key of Object.keys(this.user)) {
      keys.push(key);
    }
    if (keys.length === 0) {
      return ["No User Keys"];
    } else {
      return keys;
    }
  }

  myFriends() {
    if (this.authenticated && this.is_connected) {
      let keys = [];
      for (let key of this.user["sys.friends"]) {
        keys.push(key);
      }
      if (keys.length === 0) {
        return ["No Friends"];
      } else {
        return keys;
      }
    } else {
      return ["Not Authenticated"];
    }
  }

  myRequests() {
    if (this.authenticated && this.is_connected) {
      let keys = [];
      for (let key of this.user["sys.requests"]) {
        keys.push(key);
      }
      if (keys.length === 0) {
        return ["No Requests"];
      } else {
        return keys;
      }
    } else {
      return ["Not Authenticated"];
    }
  }

  serverOnline() {
    if (!this.is_connected) {
      return false;
    }
    return this.client.users.indexOf(this.accounts) !== -1;
  }

  connectToWebsocket() {

    if (this.ws) this.disconnect();

    this.ws = new WebSocket(this.server);
    this.ws.onopen = () => {
      this.sendHandshake();

      this.ws.onmessage = (event) => {
        let packet = JSON.parse(event.data);
        if (packet.cmd == "client_ip") {
          this.client.ip = packet.val;
        } else if (packet.cmd == "client_obj") {
          this.client.username = packet.val.username;
        } else if (packet.cmd == "ulist") {
          if (packet.mode == "add") {
            this.client.users.push(packet.val.username);
            Scratch.vm.runtime.startHats("roturEXT_onJoin");
            this.lastJoined = packet.val;
          } else if (packet.mode == "remove") {
            this.client.users = this.client.users.filter(
              (user) => user != packet.val.username,
            );
            Scratch.vm.runtime.startHats("roturEXT_onLeave");
            this.lastLeft = packet.val;
          } else if (packet.mode == "set") {
            this.client.users = [];
            for (let user of packet.val) {
              this.client.users.push(user.username);
            }
          }
        }
        if (packet.cmd == "pmsg") {
          this.packetQueue.push(packet);
          packet.origin = packet.origin.username;
          delete packet.rooms;
          delete packet.cmd;
          packet.client = packet.val.client;
          packet.source = packet.val.source;
          packet.payload = packet.val.payload;
          packet.timestamp = packet.val.timestamp;
          if (packet.val.source_command) {
            packet.source_command = packet.val.source_command;
            delete packet.val.source_command;
          }
          if (packet.origin === this.accounts) {
            if (packet.source_command === "omail_received") {
              Scratch.vm.runtime.startHats("roturEXT_whenMailReceived");
            } else if (packet.source_command === "account_update") {
              Scratch.vm.runtime.startHats("roturEXT_whenAccountUpdate");
              if (packet.payload.key === "sys.requests") {
                if (packet.payload.value.length > this.friends.requests.length) {
                  Scratch.vm.runtime.startHats("roturEXT_whenFriendRequestReceived");
                } else {
                  Scratch.vm.runtime.startHats("roturEXT_whenFriendRequestAccepted");
                }
              }
              if (packet.payload.key === "sys.currency") {
                Scratch.vm.runtime.startHats("roturEXT_whenBalanceChanged");
              }
              this.user[packet.payload.key] = packet.payload.value;
            }
          } else {
            if (packet.source_command === "sync_set") {
              if (!this.syncedVariables[packet.origin]) {
                this.syncedVariables[packet.origin] = {};
              }
              this.syncedVariables[packet.origin][packet.payload.key] = packet.payload.value;
            }
            if (packet.source_command === "sync_delete") {
              delete this.syncedVariables[packet.origin][packet.payload.key];
            }
            if (!this.packets[packet.val.target]) {
              this.packets[packet.val.target] = [];
            }
            this.packets[packet.val.target].push(packet);
            Scratch.vm.runtime.startHats("roturEXT_whenMessageReceived");
            delete packet.val;
          }
        }
        if (packet.listener === "handshake_cfg") {
          let username = this.designation + "-" + this.username;
          let msg = {
            cmd: "setid",
            val: username,
            listener: "set_username_cfg",
          };

          this.ws.send(JSON.stringify(msg));
        }
        if (packet.listener == "set_username_cfg") {
          this.client.username = this.designation + "-" + this.username;
          let room = "roturTW";
          let msg = {
            cmd: "link",
            val: [room],
            listener: "link_cfg",
          };

          this.ws.send(JSON.stringify(msg));
        }
        if (packet.listener == "link_cfg") {
          this.client.room = packet.val;
          this.is_connected = true;
          Scratch.vm.runtime.startHats("roturEXT_whenConnected");
          console.log("Connected!")
        }
      };
    };
    this.ws.onclose = () => {
      console.log("Disconnected!");
      Scratch.vm.runtime.startHats("roturEXT_whenDisconnected");
      this.is_connected = false;
    };
  }

  sendHandshake() {
    this.ws.send(
      JSON.stringify({
        cmd: "handshake",
        val: {
          language: "Javascript",
          version: {
            editorType: "Scratch",
            versionNumber: null,
          },
        },
        listener: "handshake_cfg",
      }),
    );
  }

  disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }

  connected() {
    return this.is_connected;
  }

  loggedIn() {
    return this.authenticated && this.is_connected;
  }

  firstLogin() {
    return this.first_login;
  }

  login(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (this.authenticated) {
      return "Already Logged In";
    }
    return new Promise((resolve, reject) => {
      this.ws.send(
        JSON.stringify({
          cmd: "pmsg",
          val: {
            ip: this.client.ip,
            client: this.my_client,
            command: "login",
            id: this.userToken,
            payload: [args.USERNAME, MD5("" + args.PASSWORD)],
          },
          id: this.accounts,
        }),
      );

      const handleLoginResponse = (event) => {
        let packet = JSON.parse(event.data);
        if (packet?.origin?.username === this.accounts) {
          if (packet.val?.source_command === "login") {
            if (typeof packet.val?.payload === "object") {
              this.ws.close();
              this.userToken = packet.val.token;
              this.user = packet.val.payload;
              this.first_login = packet.val.first_login;

              delete packet.val
              delete this.user.key
              delete this.user.password
              
              // friends data
              this.friends = {};
              // handle if the user has no friends :P
              if (!this.user["sys.friends"]) this.user["sys.friends"] = [];
              if (!this.user["sys.requests"]) this.user["sys.requests"] = [];

              this.friends.list = this.user["sys.friends"];
              this.friends.requests = this.user["sys.requests"];
              delete this.user.friends;
              delete this.user.requests;

              // setup username for reconnect
              this.username = args.USERNAME + "§" + randomString(10);
              this.connectToWebsocket();
              while (!this.is_connected) { }
              this.authenticated = true;
              Scratch.vm.runtime.startHats("roturEXT_whenAuthenticated");
              resolve(`Logged in as ${args.USERNAME}`);
            } else {
              this.authenticated = false;
              reject(`Failed to login as ${args.USERNAME}`);
            }
            this.ws.removeEventListener("message", handleLoginResponse);
          }
        }
      };

      this.ws.addEventListener("message", handleLoginResponse);
    });
  }

  loginMD5(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (this.authenticated) {
      return "Already Logged In";
    }
    return new Promise((resolve, reject) => {
      this.ws.send(
        JSON.stringify({
          cmd: "pmsg",
          val: {
            ip: this.client.ip,
            client: this.my_client,
            command: "login",
            id: this.userToken,
            payload: [args.USERNAME, "" + args.PASSWORD],
          },
          id: this.accounts,
        }),
      );

      const handleLoginResponse = (event) => {
        let packet = JSON.parse(event.data);
        if (packet?.origin?.username === this.accounts) {
          if (packet.val?.source_command === "login") {
            if (typeof packet.val?.payload === "object") {
              this.ws.close();
              this.userToken = packet.val.token;
              this.user = packet.val.payload;
              this.first_login = packet.val.first_login;

              delete packet.val
              delete this.user.key
              delete this.user.password
              
              // friends data
              this.friends = {};
              // handle if the user has no friends :P
              if (!this.user["sys.friends"]) this.user["sys.friends"] = [];
              if (!this.user["sys.requests"]) this.user["sys.requests"] = [];

              this.friends.list = this.user["sys.friends"];
              this.friends.requests = this.user["sys.requests"];
              delete this.user.friends;
              delete this.user.requests;

              // setup username for reconnect
              this.username = args.USERNAME + "§" + randomString(10);
              this.connectToWebsocket();
              while (!this.is_connected) { }
              this.authenticated = true;
              Scratch.vm.runtime.startHats("roturEXT_whenAuthenticated");
              resolve(`Logged in as ${args.USERNAME}`);
            } else {
              this.authenticated = false;
              reject(`Failed to login as ${args.USERNAME}`);
            }
            this.ws.removeEventListener("message", handleLoginResponse);
          }
        }
      };

      this.ws.addEventListener("message", handleLoginResponse);
    });
  }

  passwordMD5(args) {
    return MD5("" + args.PASSWORD);
  }

  register(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (this.authenticated) {
      return "Already Logged In";
    }
    return new Promise((resolve, reject) => {
      this.ws.send(
        JSON.stringify({
          cmd: "pmsg",
          val: {
            client: this.my_client,
            command: "new_account",
            id: this.userToken,
            ip: this.client.ip,
            payload: {
              username: args.USERNAME,
              password: MD5("" + args.PASSWORD),
            },
          },
          id: this.accounts,
        }),
      );

      const handleRegisterResponse = (event) => {
        let packet = JSON.parse(event.data);
        if (packet?.origin.username === this.accounts) {
          if (packet.val?.source_command === "new_account") {
            if (packet.val?.payload === "Account Created Successfully") {
              resolve(`Registered as ${args.USERNAME}`);
            } else {
              reject(
                `Failed to register as ${args.USERNAME}: ${packet.val.payload}`,
              );
            }
            this.ws.removeEventListener("message", handleRegisterResponse);
          }
        }
      };

      this.ws.addEventListener("message", handleRegisterResponse);
    });
  }

  deleteAccount() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    if (!confirm(`Are You Sure You Want To Delete ${this.client.username}? Everything will be lost!`)) {
      return "Cancelled";
    }
    return new Promise((resolve, reject) => {
      this.ws.send(
        JSON.stringify({
          cmd: "pmsg",
          val: {
            client: this.my_client,
            command: "delete_account",
            id: this.userToken,
          },
          id: this.accounts,
        }),
      );

      const handleDeleteAccountResponse = (event) => {
        let packet = JSON.parse(event.data);
        if (packet?.origin.username === this.accounts) {
          if (packet.val?.source_command === "delete") {
            if (packet.val.payload === "Account Deleted Successfully") {
              this.userToken = "";
              this.user = {};
              this.authenticated = false;
              this.ws.close();
              resolve("Account Deleted Successfully");
            } else {
              reject("Failed to delete account: " + packet.val.payload);
            }
            this.ws.removeEventListener("message", handleDeleteAccountResponse);
          }
        }
      };

      this.ws.addEventListener("message", handleDeleteAccountResponse);
    });
  }

  logout() {
    if (!this.is_connected) {
      return;
    }
    this.ws.send(
      JSON.stringify({
        cmd: "pmsg",
        val: {
          command: "logout",
          client: this.my_client,
          id: this.userToken,
        },
        id: this.accounts,
      }),
    );
    this.authenticated = false;
    this.userToken = "";
    this.user = {};
    this.disconnect();
  }

  getToken() {
    return this.userToken ?? "";
  }

  getkey(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    if (args.KEY in this.user) {
      let keyData = this.user[args.KEY];
      if (typeof keyData === "object") {
        return JSON.stringify(keyData);
      } else {
        return keyData;
      }
    } else {
      return "";
    }
  }

  setkey(args) {
    if (args.VALUE.length > 1000) {
      // this is server side, removing this does nothing other than make the server reject the request
      return "Key Too Long, Limit is 1000 Characters";
    }
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return new Promise((resolve) => {
      this.ws.send(
        JSON.stringify({
          cmd: "pmsg",
          val: {
            command: "update",
            client: this.my_client,
            id: this.userToken,
            payload: [args.KEY, args.VALUE],
          },
          id: this.accounts,
        }),
      );

      const handleUpdateKeyResponse = (event) => {
        let packet = JSON.parse(event.data);
        if (packet?.origin.username === this.accounts) {
          if (packet.val?.source_command === "update") {
            if (packet.val.payload === "Account Updated Successfully") {
              this.user[args.KEY] = args.VALUE;
            }
            resolve(packet.val.payload);
            this.ws.removeEventListener("message", handleUpdateKeyResponse);
          }
        }
      };

      this.ws.addEventListener("message", handleUpdateKeyResponse);
    });
  }

  keyExists(args) {
    if (!this.is_connected) {
      return false;
    }
    if (!this.authenticated) {
      return false;
    }
    return args.KEY in this.user;
  }

  getkeys() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return JSON.stringify(Object.keys(this.user));
  }

  getvalues() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return JSON.stringify(Object.values(this.user));
  }

  getAccount() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return JSON.stringify(this.user);
  }

  setStorageID(args) {
    if (this.authenticated && this.is_connected) {
      if (!this.storage_id) {
        if (
          window.confirm(
            "This project would like to use the storage id: " +
            args.ID +
            ". Do you want to continue?",
          )
        ) {
          new Promise((resolve, reject) => {
            this.ws.send(
              JSON.stringify({
                cmd: "pmsg",
                val: {
                  command: "storage_getid",
                  client: this.my_client,
                  id: this.userToken,
                  payload: args.ID,
                },
                id: this.accounts,
              }),
            );

            const handleStorageIdSet = (event) => {
              let packet = JSON.parse(event.data);
              if (packet?.origin?.username === this.accounts) {
                if (packet.val.source_command === "storage_getid") {
                  if (packet.val.payload !== "Not Logged In") {
                    resolve("" + args.ID);
                    this.storage_id = "" + args.ID;
                    this.localKeys = JSON.parse(packet.val.payload);
                  } else {
                    console.error(
                      "Failed to set storage id: " + packet.val.payload,
                    );
                    reject(packet.val.payload);
                  }
                  this.ws.removeEventListener("message", handleStorageIdSet);
                }
              }
            };
            this.ws.addEventListener("message", handleStorageIdSet);
          });
        }
      } else {
        console.error("Unable to set the storage ID: Already Set");
      }
    } else {
      console.error("Unable to set the storage ID: Not Logged In");
    }
  }

  storageIdExists() {
    return this.storage_id !== undefined;
  }

  getStorageID() {
    return this.storage_id ?? "";
  }

  getStorageKey(args) {
    if (this.authenticated && this.is_connected) {
      if (this.storage_id) {
        return this.localKeys[args.KEY] ?? "";
      } else {
        return "Storage Id Not Set";
      }
    } else {
      return "Not Logged In";
    }
  }

  setStorageKey(args) {
    if (args.VALUE.length > 1000) {
      // this is server side too, removing this does nothing other than make the server reject the request
      return "Key Too Long, Limit is 1000 Characters";
    }
    if (this.authenticated && this.is_connected) {
      if (this.storage_id) {
        this.localKeys[args.KEY] = args.VALUE;
        return new Promise((resolve, reject) => {
          this.ws.send(
            JSON.stringify({
              cmd: "pmsg",
              val: {
                command: "storage_set",
                id: this.userToken,
                client: this.my_client,
                payload: {
                  key: args.KEY,
                  value: args.VALUE,
                  id: this.storage_id,
                },
              },
              id: this.accounts,
            }),
          );

          const handleStorageKey = (event) => {
            let packet = JSON.parse(event.data);
            if (packet?.origin.username === this.accounts) {
              if (packet.val.source_command === "storage_set") {
                if (packet.val.payload === "Successfully Set Key") {
                  resolve("Key Set");
                } else {
                  reject(packet.val.payload);
                }
                this.ws.removeEventListener("message", handleStorageKey);
              }
            }
          };
          this.ws.addEventListener("message", handleStorageKey);
        });
      } else {
        return "Storage Id Not Set";
      }
    } else {
      return "Not Logged In";
    }
  }

  existsStorageKey(args) {
    if (this.authenticated && this.is_connected) {
      if (this.storage_id) {
        return args.KEY in this.localKeys;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  deleteStorageKey(args) {
    if (this.authenticated && this.is_connected) {
      if (this.storage_id) {
        delete this.localKeys[args.KEY];
        return new Promise((resolve, reject) => {
          this.ws.send(
            JSON.stringify({
              cmd: "pmsg",
              val: {
                command: "storage_delete",
                id: this.userToken,
                client: this.my_client,
                payload: {
                  key: args.KEY,
                  id: this.storage_id,
                },
              },
              id: this.accounts,
            }),
          );

          const handleStorageKey = (event) => {
            let packet = JSON.parse(event.data);
            if (packet?.origin?.username === this.accounts) {
              if (packet.val.source_command === "storage_delete") {
                if (packet.val.payload === "Successfully Deleted Key") {
                  resolve("Key Deleted");
                } else {
                  reject(packet.val.payload);
                }
                this.ws.removeEventListener("message", handleStorageKey);
              }
            }
          };
          this.ws.addEventListener("message", handleStorageKey);
        });
      } else {
        console.error("Storage Id Not Set");
      }
    } else {
      console.error("Not Logged In");
    }
  }

  getStorageKeys() {
    if (this.authenticated && this.is_connected) {
      if (this.storage_id) {
        return JSON.stringify(Object.keys(this.localKeys));
      } else {
        return "Storage Id Not Set";
      }
    } else {
      return "Not Logged In";
    }
  }

  getStorageValues() {
    if (this.authenticated && this.is_connected) {
      if (this.storage_id) {
        return JSON.stringify(Object.values(this.localKeys));
      } else {
        return "Storage Id Not Set";
      }
    } else {
      return "Not Logged In";
    }
  }

  clearStorage() {
    if (this.authenticated && this.is_connected) {
      if (this.storage_id) {
        this.localKeys = {};
      } else {
        console.error("Storage Id Not Set");
      }
    } else {
      console.error("Not Logged In");
    }
  }

  storageUsage() {
    if (this.authenticated && this.is_connected) {
      if (this.storage_id) {
        return JSON.stringify(JSON.stringify(this.localKeys).length);
      } else {
        return "Storage Id Not Set";
      }
    } else {
      return "Not Logged In";
    }
  }

  storageLimit() {
    return "50000";
  }

  storageRemaining() {
    if (this.authenticated && this.is_connected) {
      if (this.storage_id) {
        return 50000 - JSON.stringify(this.localKeys).length + "";
      } else {
        return "Storage Id Not Set";
      }
    } else {
      return "Not Logged In";
    }
  }

  accountStorageUsage() {
    if (this.authenticated && this.is_connected) {
      return new Promise((resolve, reject) => {
        this.ws.send(
          JSON.stringify({
            cmd: "pmsg",
            val: {
              command: "storage_usage",
              client: this.my_client,
              id: this.userToken,
            },
            id: this.accounts,
          }),
        );

        const handleStorageKey = (event) => {
          let packet = JSON.parse(event.data);
          if (packet?.origin?.username === this.accounts) {
            if (packet.val.source_command === "storage_usage") {
              if (packet.val.payload === "Not Logged In") {
                reject("Not Logged In");
              } else {
                resolve(packet.val.payload);
              }
              this.ws.removeEventListener("message", handleStorageKey);
            }
          }
        };
        this.ws.addEventListener("message", handleStorageKey);
      });
    }
    return "Not Logged In";
  }

  accountStorageLimit() {
    return "1000000";
  }

  accountStorageRemaining() {
    if (this.authenticated && this.is_connected) {
      return new Promise((resolve, reject) => {
        this.ws.send(
          JSON.stringify({
            cmd: "pmsg",
            val: {
              command: "storage_usage",
              client: this.my_client,
              id: this.userToken,
            },
            id: this.accounts,
          }),
        );

        const handleStorageKey = (event) => {
          let packet = JSON.parse(event.data);
          if (packet?.origin?.username === this.accounts) {
            if (packet.val.source_command === "storage_usage") {
              if (packet.val.payload === "Not Logged In") {
                reject("Not Logged In");
              } else {
                resolve(1000000 - Number(packet.val.payload));
              }
              this.ws.removeEventListener("message", handleStorageKey);
            }
          }
        };
        this.ws.addEventListener("message", handleStorageKey);
      });
    }
    return "Not Logged In";
  }

  sendMessage(args) {
    if (!this.is_connected) {
      console.error("Unable to send message: Not Connected");
      return "";
    }
    this.ws.send(
      JSON.stringify({
        cmd: "pmsg",
        val: {
          client: this.my_client,
          payload: args.PAYLOAD,
          source: args.SOURCE,
          target: args.TARGET,
          timestamp: Date.now(),
        },
        id: args.USER,
      }),
    );
  }

  whenMessageReceived() {
    return true;
  }

  getPacketsFromTarget(args) {
    return JSON.stringify(this.packets[args.TARGET] || "[]");
  }

  numberOfPacketsOnTarget(args) {
    return this.packets[args.TARGET] ? this.packets[args.TARGET].length : 0;
  }

  getFirstPacketOnTarget(args) {
    return JSON.stringify(this.packets[args.TARGET]?.[0] || "{}");
  }

  dataOfFirstPacketOnTarget(args) {
    switch (args.DATA) {
      case "origin":
        return this.packets[args.TARGET]?.[0]?.origin || "";
      case "client":
        return (
          this.packets[args.TARGET]?.[0]?.client ||
          '{"system":"Unknown", "version":"Unknown"}'
        );
      case "source port":
        return this.packets[args.TARGET]?.[0]?.source || "Unknown";
      case "payload":
        return this.packets[args.TARGET]?.[0]?.payload || "";
      case "timestamp":
        return this.packets[args.TARGET]?.[0]?.timestamp || "0";
      default:
        return "";
    }
  }

  getAllTargets() {
    return JSON.stringify(Object.keys(this.packets));
  }

  getAllPackets() {
    return JSON.stringify(this.packets);
  }

  deleteFirstPacketOnTarget(args) {
    if (this.packets[args.TARGET]) {
      let packet = this.packets[args.TARGET]?.[0];
      this.packets[args.TARGET].shift();
      return JSON.stringify(packet);
    }
    return "{}";
  }

  deletePacketsOnTarget(args) {
    delete this.packets[args.TARGET];
  }

  deleteAllPackets() {
    this.packets = {};
  }

  clientIP() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    return this.client.ip;
  }

  clientUsername() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    return this.client.username;
  }

  clientUsers() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    return JSON.stringify(this.client.users);
  }

  getUserDesignation(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    return JSON.stringify(
      this.client.users.filter((user) =>
        user.startsWith(args.DESIGNATION + "-"),
      ),
    );
  }

  usernameConnected(args) {
    if (!this.is_connected) {
      return false;
    }
    if (!this.authenticated) {
      return false;
    }
    let regexp = new RegExp('(?<=")[a-zA-Z]{3}-' + args.USER + '§\\S{10}(?=")', "gi");
    return JSON.stringify(this.client.users).match(regexp) !== null;
  }

  userConnected(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (args.DESIGNATION.length !== 3) {
      return "Invalid Designation";
    }
    let regexp = new RegExp('(?<=")' + args.DESIGNATION + '-' + args.USER + '§\\S{10}(?=")', "gi");
    return JSON.stringify(this.client.users).match(regexp) !== null;
  }

  findID(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    let regexp = new RegExp('[a-zA-Z]{3}-' + args.USER + '§\\S{10}', "gi");
    return JSON.stringify(
      this.client.users.filter((user) => user.match(regexp) !== null),
    );
  }

  RAWgetAllPackets() {
    return JSON.stringify(this.packetQueue);
  }

  RAWgetFirstPacket() {
    return JSON.stringify(this.packetQueue[0] || "{}");
  }

  RAWdeleteFirstPacket() {
    this.packetQueue.shift();
  }

  RAWdeleteAllPackets() {
    this.packetQueue = [];
  }

  onJoinUser() {
    return this.lastJoined;
  }

  onLeaveUser() {
    return this.lastLeft;
  }
  
  setSyncedVariable(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    this.ws.send(
      JSON.stringify({
        cmd: "pmsg",
        val: {
          client: this.my_client,
          source_command: "sync_set",
          payload: {
            key: args.KEY,
            value: args.VALUE,
          },
        },
        id: args.USER,
      }),
    )
    if (!this.syncedVariables[args.USER]) {
      this.syncedVariables[args.USER] = {};
    }
    this.syncedVariables[args.USER][args.KEY] = args.VALUE;
  }

  getSyncedVariable(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return JSON.stringify(this.syncedVariables[args.USER][args.KEY] || "");
  }

  deleteSyncedVariable(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    this.ws.send(
      JSON.stringify({
        cmd: "pmsg",
        val: {
          source_command: "sync_delete",
          client: this.my_client,
          payload: {
            key: args.KEY,
          },
        },
        id: args.USER,
      }),
    )
    delete this.syncedVariables[args.USER][args.KEY];
  }

  getSyncedVariables(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return JSON.stringify(this.syncedVariables[args.USER] || {});
  }

  sendMail(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return new Promise((resolve, reject) => {
      this.ws.send(
        JSON.stringify({
          cmd: "pmsg",
          val: {
            command: "omail_send",
            client: this.my_client,
            id: this.userToken,
            payload: {
              title: args.SUBJECT,
              body: args.MESSAGE,
              recipient: args.TO,
            },
          },
          id: this.accounts,
        }),
      );

      const handleSendMailResponse = (event) => {
        let packet = JSON.parse(event.data);
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "omail_send") {
            if (packet.val.payload === "Successfully Sent Omail") {
              resolve(`Mail sent to ${args.TO}`);
            } else {
              reject(
                `Failed to send mail to ${args.TO}: ${packet.val.payload}`,
              );
            }
            this.ws.removeEventListener("message", handleSendMailResponse);
          }
        }
      };

      this.ws.addEventListener("message", handleSendMailResponse);
    });
  }

  getAllMail() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return new Promise((resolve, reject) => {
      this.ws.send(
        JSON.stringify({
          cmd: "pmsg",
          val: {
            command: "omail_getinfo",
            client: this.my_client,
            id: this.userToken,
          },
          id: this.accounts,
        }),
      );

      const handleGetAllMailResponse = (event) => {
        let packet = JSON.parse(event.data);
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "omail_getinfo") {
            resolve(JSON.stringify(packet.val.payload));
            this.ws.removeEventListener("message", handleGetAllMailResponse);
          } else {
            reject("Failed to get all mail");
          }
        }
      };

      this.ws.addEventListener("message", handleGetAllMailResponse);
    });
  }

  getMail(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return new Promise((resolve, reject) => {
      this.ws.send(
        JSON.stringify({
          cmd: "pmsg",
          val: {
            command: "omail_getid",
            client: this.my_client,
            payload: args.ID,
            id: this.userToken,
          },
          id: this.accounts,
        }),
      );

      const handleGetMailResponse = (event) => {
        let packet = JSON.parse(event.data);
        if (packet?.origin?.username === this.accounts) {
          if (packet.val?.source_command === "omail_getid") {
            if (packet.val?.payload[0] === args.ID) {
              resolve(JSON.stringify(packet.val?.payload[1]));
            } else {
              reject(`Failed to get mail with ID: ${args.ID}`);
            }
            this.ws.removeEventListener("message", handleGetMailResponse);
          }
        }
      };

      this.ws.addEventListener("message", handleGetMailResponse);
    });
  }

  deleteMail(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return new Promise((resolve, reject) => {
      this.ws.send(
        JSON.stringify({
          cmd: "pmsg",
          val: {
            command: "omail_delete",
            client: this.my_client,
            payload: args.ID,
            id: this.userToken,
          },
          id: this.accounts,
        }),
      );

      const handleDeleteMailResponse = (event) => {
        let packet = JSON.parse(event.data);
        if (packet?.origin.username === this.accounts) {
          if (packet.val.source_command === "omail_delete") {
            if (packet.val.payload === "Deleted Successfully") {
              resolve(`Mail with ID ${args.ID} deleted`);
            } else {
              reject(
                `Failed to delete mail with ID ${args.ID}: ${packet.val.payload}`,
              );
            }
            this.ws.removeEventListener("message", handleDeleteMailResponse);
          }
        }
      };

      this.ws.addEventListener("message", handleDeleteMailResponse);
    });
  }

  deleteAllMail() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return new Promise((resolve, reject) => {
      this.ws.send(
        JSON.stringify({
          cmd: "pmsg",
          val: {
            command: "omail_delete",
            client: this.my_client,
            payload: "all",
            id: this.userToken,
          },
          id: this.accounts,
        }),
      );

      const handleDeleteAllMailResponse = (event) => {
        let packet = JSON.parse(event.data);
        if (packet?.origin.username === this.accounts) {
          if (packet.val.source_command === "omail_delete") {
            if (packet.val.payload === "Deleted Successfully") {
              resolve("All mail deleted");
            } else {
              reject(`Failed to delete all mail: ${packet.val.payload}`);
            }
            this.ws.removeEventListener("message", handleDeleteAllMailResponse);
          }
        }
      };

      this.ws.addEventListener("message", handleDeleteAllMailResponse);
    });
  }

  getFriendList() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return JSON.stringify(this.friends.list);
  }

  sendFriendRequest(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    if (this.friends.list.includes(args.FRIEND)) {
      return "Already Friends";
    }
    if (args.FRIEND === this.user.username) {
      return "You Need Other Friends :/";
    }
    return new Promise((resolve, reject) => {
      this.ws.send(
        JSON.stringify({
          cmd: "pmsg",
          val: {
            command: "friend_request",
            client: this.my_client,
            payload: args.FRIEND,
            id: this.userToken,
          },
          id: this.accounts,
        }),
      );

      const handleSendFriendRequestResponse = (event) => {
        let packet = JSON.parse(event.data);
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "friend_request") {
            if (packet.val.payload === "Sent Successfully") {
              resolve(`Sent Successfully`);
            } else {
              reject(packet.val.payload);
            }
            this.ws.removeEventListener(
              "message",
              handleSendFriendRequestResponse,
            );
          }
        }
      };

      this.ws.addEventListener("message", handleSendFriendRequestResponse);
    });
  }

  removeFriend(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    if (!this.friends.list.includes(args.FRIEND)) {
      return "Not Friends";
    }
    return new Promise((resolve, reject) => {
      this.ws.send(
        JSON.stringify({
          cmd: "pmsg",
          val: {
            command: "friend_remove",
            client: this.my_client,
            payload: args.FRIEND,
            id: this.userToken,
          },
          id: this.accounts,
        }),
      );

      const handleRemoveFriendResponse = (event) => {
        let packet = JSON.parse(event.data);
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "friend_remove") {
            if (packet.val.payload === "Friend Removed") {
              resolve(`Friend removed: ${args.FRIEND}`);
            } else {
              reject(`Failed to remove friend: ${packet.val.payload}`);
            }
            this.ws.removeEventListener("message", handleRemoveFriendResponse);
          }
        }
      };

      this.ws.addEventListener("message", handleRemoveFriendResponse);
    });
  }

  acceptFriendRequest(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    if (!this.friends.requests.includes(args.FRIEND)) {
      return "No Request";
    }
    return new Promise((resolve, reject) => {
      this.ws.send(
        JSON.stringify({
          cmd: "pmsg",
          val: {
            command: "friend_accept",
            client: this.my_client,
            payload: args.FRIEND,
            id: this.userToken,
          },
          id: this.accounts,
        }),
      );

      const handleRemoveFriendResponse = (event) => {
        let packet = JSON.parse(event.data);
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "friend_accept") {
            if (packet.val.payload === "Request Accepted") {
              this.friends.list.push(args.FRIEND);
              this.friends.requests = this.friends.requests.filter(
                (user) => user != args.FRIEND,
              );
              resolve(`Request Accepted`);
            } else {
              reject(packet.val.payload);
            }
            this.ws.removeEventListener("message", handleRemoveFriendResponse);
          }
        }
      };

      this.ws.addEventListener("message", handleRemoveFriendResponse);
    });
  }

  declineFriendRequest(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    if (!this.friends.requests.includes(args.FRIEND)) {
      return "No Request";
    }
    return new Promise((resolve, reject) => {
      this.ws.send(
        JSON.stringify({
          cmd: "pmsg",
          val: {
            command: "friend_decline",
            client: this.my_client,
            payload: args.FRIEND,
            id: this.userToken,
          },
          id: this.accounts,
        }),
      );

      const handleDeclineFriendRequestResponse = (event) => {
        let packet = JSON.parse(event.data);
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "friend_decline") {
            if (packet.val.payload === "Request Declined") {
              this.friends.requests = this.friends.requests.filter(
                (user) => user != args.FRIEND,
              );
              resolve(`Request Declined`);
            } else {
              reject(packet.val.payload);
            }
            this.ws.removeEventListener(
              "message",
              handleDeclineFriendRequestResponse,
            );
          }
        }
      };

      this.ws.addEventListener("message", handleDeclineFriendRequestResponse);
    });
  }

  getFriendStatus(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    if (this.friends.list.includes(args.FRIEND)) {
      return "Friend";
    } else if (this.friends.requests.includes(args.FRIEND)) {
      return "Requested";
    } else {
      return "Not Friend";
    }
  }

  getFriendRequests() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return JSON.stringify(this.friends.requests) ?? "";
  }

  getFriendCount() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return this.friends.list.length ?? "";
  }

  getBalance() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return this.user["sys.currency"] ?? 0;
  }

  tranferCurrency(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return new Promise((resolve, reject) => {
      this.ws.send(
        JSON.stringify({
          cmd: "pmsg",
          val: {
            command: "currency_transfer",
            client: this.my_client,
            payload: {
              amount: args.AMOUNT,
              recipient: args.USER,
            },
            id: this.userToken,
            client: this.my_client,
          },
          id: this.accounts,
        }),
      );

      const handleTransferCurrencyResponse = (event) => {
        let packet = JSON.parse(event.data);
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "currency_transfer") {
            if (packet.val.payload === "Transfer Successful") {
              resolve(`Success`);
            } else {
              reject(packet.val.payload);
            }
            this.ws.removeEventListener(
              "message",
              handleTransferCurrencyResponse,
            );
          }
        }
      };
      this.ws.addEventListener("message", handleTransferCurrencyResponse);
    });
  }

  getTransactions() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return JSON.stringify(this.user["sys.transactions"]);
  }

  getTransactionCount() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return this.user["sys.transactions"].length;
  }

  getMyOwnedItems() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return JSON.stringify(this.user["sys.purchases"]);
  }

  ownsItem(args) {
    if (!this.is_connected) {
      return false;
    }
    if (!this.authenticated) {
      return false;
    }
    return this.user["sys.purchases"].includes(args.ITEM);
  }

  getMyOwnedItemCount() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return this.user["sys.purchases"].length;
  }

  itemData(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    if (this.user["sys.purchases"].indexOf(args.ITEM) === -1) {
      return "You Do Not Own This Item";
    }
    return new Promise((resolve) => {
      this.ws.send(
        JSON.stringify({
          cmd: "pmsg",
          val: {
            command: "item_data",
            payload: args.ITEM,
            id: this.userToken,
            client: this.my_client,
          },
          id: this.accounts,
        }),
      );

      const handleItemDataResponse = (event) => {
        let packet = JSON.parse(event.data);
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "item_data") {
            resolve(packet.val.payload);
            this.ws.removeEventListener(
              "message",
              handleItemDataResponse,
            );
          }
        }
      };
      this.ws.addEventListener("message", handleItemDataResponse);
    });
  }

  purchaseItem(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    if (this.user["sys.purchases"].indexOf(args.ITEM) !== -1) {
      return "You Already Own This Item";
    }
    return new Promise((resolve, reject) => {
      this.ws.send(
        JSON.stringify({
          cmd: "pmsg",
          val: {
            command: "item_purchase",
            payload: args.ITEM,
            id: this.userToken,
            client: this.my_client,
          },
          id: this.accounts,
        }),
      );

      const handlePurchaseItemResponse = (event) => {
        let packet = JSON.parse(event.data);
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "item_purchase") {
            if (packet.val.payload === "Item Purchased") {
              resolve("Item Purchased");
            } else {
              reject(packet.val.payload);
            }
            this.ws.removeEventListener(
              "message",
              handlePurchaseItemResponse,
            );
          }
        }
      };
      this.ws.addEventListener("message", handlePurchaseItemResponse);
    });
  }

  itemInfo(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    if (this.user["sys.purchases"].indexOf(args.ITEM) === -1) {
      return "You Do Not Own This Item";
    }
    return new Promise((resolve) => {
      this.ws.send(
        JSON.stringify({
          cmd: "pmsg",
          val: {
            command: "item_info",
            payload: args.ITEM,
            id: this.userToken,
            client: this.my_client,
          },
          id: this.accounts,
        }),
      );

      const handleItemInfoResponse = (event) => {
        let packet = JSON.parse(event.data);
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "item_info") {
            resolve(typeof packet.val.payload === 'object' ? JSON.stringify(packet.val.payload) : packet.val.payload);
            this.ws.removeEventListener(
              "message",
              handleItemInfoResponse,
            );
          }
        }
      };
      this.ws.addEventListener("message", handleItemInfoResponse);
    });
  }

  getPublicItems(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }

    return new Promise((resolve, reject) => {
      this.ws.send(
        JSON.stringify({
          cmd: "pmsg",
          val: {
            command: "item_public",
            payload: args.PAGE,
            id: this.userToken,
            client: this.my_client,
          },
          id: this.accounts,
        }),
      );

      const handlePublicItemsResponse = (event) => {
        let packet = JSON.parse(event.data);
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "item_public") {
            reject(JSON.stringify(packet.val.payload));
            this.ws.removeEventListener(
              "message",
              handlePublicItemsResponse,
            );
          }
        }
      };
      this.ws.addEventListener("message", handlePublicItemsResponse);
    });
  }

  getPublicItemPages() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return new Promise((resolve) => {
      this.ws.send(
        JSON.stringify({
          cmd: "pmsg",
          val: {
            command: "item_public_pages",
            id: this.userToken,
            client: this.my_client,
          },
          id: this.accounts,
        }),
      );

      const handlePublicItemPagesResponse = (event) => {
        let packet = JSON.parse(event.data);
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "item_public_pages") {
            resolve(packet.val.payload);
            this.ws.removeEventListener(
              "message",
              handlePublicItemPagesResponse,
            );
          }
        }
      }
      this.ws.addEventListener("message", handlePublicItemPagesResponse);
    });
  }

  getMyCreatedItems() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return JSON.stringify(this.user["sys.items"]);
  }

  createItem(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return new Promise((resolve, reject) => {
      this.ws.send(
        JSON.stringify({
          cmd: "pmsg",
          val: {
            command: "item_create",
            payload: {
              name: args.NAME,
              description: args.DESCRIPTION,
              price: args.PRICE,
              data: args.CODE,
              tradable: args.TRADABLE,
            },
            id: this.userToken,
            client: this.my_client,
          },
          id: this.accounts,
        }),
      );

      const handleCreateItemResponse = (event) => {
        let packet = JSON.parse(event.data);
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "item_create") {
            if (packet.val.payload === "Item Created") {
              resolve("Item Created");
            } else {
              reject(packet.val.payload);
            }
            this.ws.removeEventListener("message", handleCreateItemResponse);
          }
        }
      };

      this.ws.addEventListener("message", handleCreateItemResponse);
    });
  }

  updateItem(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    if (this.user["sys.items"].indexOf(args.ITEM) === -1) {
      return "You Do Not Own This Item";
    }
    return new Promise((resolve, reject) => {
      this.ws.send(
        JSON.stringify({
          cmd: "pmsg",
          val: {
            command: "item_update",
            payload: {
              item: args.ITEM,
              key: args.KEY,
              data: args.DATA,
            },
            id: this.userToken,
            client: this.my_client,
          },
          id: this.accounts,
        }),
      );

      const handleUpdateItemResponse = (event) => {
        let packet = JSON.parse(event.data);
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "item_update") {
            if (packet.val.payload === "Item Updated") {
              resolve("Item Updated");
            } else {
              reject(packet.val.payload);
            }
            this.ws.removeEventListener("message", handleUpdateItemResponse);
          }
        }
      };

      this.ws.addEventListener("message", handleUpdateItemResponse);
    });
  }

  deleteItem(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    if (this.user["sys.items"].indexOf(args.ITEM) === -1) {
      return "You Do Not Own This Item";
    }
    return new Promise((resolve, reject) => {
      this.ws.send(
        JSON.stringify({
          cmd: "pmsg",
          val: {
            command: "item_delete",
            payload: args.ITEM,
            id: this.userToken,
            client: this.my_client,
          },
          id: this.accounts,
        }),
      );

      const handleDeleteItemResponse = (event) => {
        let packet = JSON.parse(event.data);
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "item_delete") {
            if (packet.val.payload === "Item Deleted") {
              resolve("Item Deleted");
            } else {
              reject(packet.val.payload);
            }
            this.ws.removeEventListener("message", handleDeleteItemResponse);
          }
        }
      };

      this.ws.addEventListener("message", handleDeleteItemResponse);
    });
  }

  hideItem(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return new Promise((resolve, reject) => {
      this.ws.send(
        JSON.stringify({
          cmd: "pmsg",
          val: {
            command: "item_hide",
            payload: args.ID,
            id: this.userToken,
            client: this.my_client,
          },
          id: this.accounts,
        }),
      );

      const handleHideItemResponse = (event) => {
        let packet = JSON.parse(event.data);
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "item_hide") {
            if (packet.val.payload === "Item Hidden") {
              resolve("Item Hidden");
            } else {
              reject(packet.val.payload);
            }
            this.ws.removeEventListener("message", handleHideItemResponse);
          }
        }
      };

      this.ws.addEventListener("message", handleHideItemResponse);
    });
  }

  showItem(args) {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return new Promise((resolve, reject) => {
      this.ws.send(
        JSON.stringify({
          cmd: "pmsg",
          val: {
            command: "item_show",
            payload: args.ID,
            id: this.userToken,
            client: this.my_client,
          },
          id: this.accounts,
        }),
      );

      const handleShowItemResponse = (event) => {
        let packet = JSON.parse(event.data);
        if (packet?.origin?.username === this.accounts) {
          if (packet.val.source_command === "item_show") {
            if (packet.val.payload === "Item Shown") {
              resolve("Item Shown");
            } else {
              reject(packet.val.payload);
            }
            this.ws.removeEventListener("message", handleShowItemResponse);
          }
        }
      };

      this.ws.addEventListener("message", handleShowItemResponse);
    });
  }

  gotBadgesSuccessfully() {
    return JSON.stringify(this.badges) !== "[]";
  }

  userBadges() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return JSON.stringify(this.user["sys.badges"]);
  }

  userBadgeCount() {
    if (!this.is_connected) {
      return "Not Connected";
    }
    if (!this.authenticated) {
      return "Not Logged In";
    }
    return this.user["sys.badges"].length;
  }

  hasBadge(args) {
    if (!this.is_connected) {
      return false;
    }
    if (!this.authenticated) {
      return false;
    }
    return this.user["sys.badges"].includes(args.BADGE);
  }

  allBadges() {
    console.log(this.badges);
    return JSON.stringify(Object.keys(this.badges));
  }

  badgeInfo(args) {
    return JSON.stringify(this.badges?.[args.BADGE] ?? {});
  }

  redownloadBadges() {
    this._initializeBadges()
  }
}

function randomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result ?? "";
}

Scratch.extensions.register(new RoturExtension());
