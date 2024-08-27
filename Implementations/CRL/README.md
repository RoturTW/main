## Rotur Support

CRL supports Rotur, allowing seamless communication with other web operating systems.
(This is Subject to change and may also become an importable module in the future)

### Rotur Commands

#### Messages:

To send a message, use:

```CRL
rotur message username ingoingport content
```

To connect to a port, use:

```CRL
rotur obtainport port
```

To clear packets on the current port, use:

```CRL
rotur clearpackets
```

#### Mail:

To send a mail to someone, use:
```CRL
rotur sendmail user subject body
```

To delete a mail (by index), use:
```CRL
rotur deletemail index
```

### Rotur Methods

#### Messages:

To get all senders, use:

```CRL
rotur get senders
```

To get all message contents, use:

```CRL
rotur get contents
```

To get all outgoing ports, use:

```CRL
rotur get ports
```

To check if a user is online, use:

```CRL
rotur useronline user
```

To get the current username, use:

```CRL
rotur username
```

#### Currency:

To get the user's credit total, use:
```CRL
rotur get credits
```

To get the user's transaction history, use:
```CRL
rotur get transactions
```

#### Mail:

To get the user's mail inbox, use:
```CRL
rotur mailinbox
```

To get the contents of a piece of mail, use:
```
rotur mailcontents num
```
Where num is the index in the mail inbox command array.
