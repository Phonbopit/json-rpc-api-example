Payload

```
{
  "jsonrpc": "2.0",
  "method": "<METHOD_NAME>",
  "params": [],
  "id": 1 // optional
}
```

> https://stackoverflow.com/questions/2210791/json-rpc-what-is-the-id-for

1. Get Web3 Client Version (with public rpc endpoint)

```
curl -X POST --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}' https://rpc.ankr.com/eth
```

Result

```
{"jsonrpc":"2.0","id":1,"result":"Geth/v1.10.25-stable-69568c55/linux-amd64/go1.18.5"}
```

Get Web3 Client version from Polygon

```
curl -X POST --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}' https://polygon-rpc.com
```

Result

```
{"jsonrpc":"2.0","id":1,"result":"bor/v0.2.16-stable-f083705e/linux-arm64/go1.18.1"}
```

Get Block Number from Avalance Chain 

```
curl -H "Content-Type: application/json" -X POST --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' https://api.avax.network/ext/bc/C/rpc
```

Result

```
{"result":"0x14473d2","id":1,"jsonrpc":"2.0"}
```

- `0x14473d2` is hex, convert to number

```
echo $((0x14473d2))

// 21263314
```

> Reference : [Hexadecimal To Decimal in Shell Script](https://stackoverflow.com/a/13280173/1268823)

