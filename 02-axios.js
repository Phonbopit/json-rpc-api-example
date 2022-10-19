const axios = require('axios')

const rpcUrls = {
  ankr: 'https://rpc.ankr.com/eth',
  polygon: 'https://polygon-rpc.com',
  avalanche: 'https://api.avax.network/ext/bc/C/rpc',
}

const getWeb3ClientVersion = async () => {
  const payload = {
    jsonrpc: '2.0',
    method: 'web3_clientVersion',
    params: [],
    id: 1,
  }
  const response = await axios.post(rpcUrls.ankr, payload)

  console.log(`web3_clientVersion`, response.data)
}

const getBlockNumber = async () => {
  const payload = {
    jsonrpc: '2.0',
    method: 'eth_blockNumber',
    params: [],
    id: 1,
  }
  const response = await axios.post(rpcUrls.polygon, payload)
  console.log(`eth_blockNumber`, response.data)

  const blockNumber = parseInt(response.data.result)
  console.log('blockNumber', blockNumber)
}

const main = async () => {
  await getWeb3ClientVersion()
  await getBlockNumber()
}

main().catch((error) => console.log(error))
