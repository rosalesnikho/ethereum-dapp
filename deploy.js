const HDWalletProvide = require('truffle-hdwallet-provider');
const Web3 = require('web3')
const {interface, bytecode} = require('./compile')


const RINK_ENDPOINT_HTTPS = 'https://rinkeby.infura.io/v3/87ca110915084f31b93643850f29e838'

const provider = new HDWalletProvide(
	'capital appear glove armor economy shoot drip maximum age awesome category sun',
	RINK_ENDPOINT_HTTPS
);

const web3 = new Web3(provider)

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();
	console.log('Deployed from account: ' + accounts[0])

	// deploy statement
	const res = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({data: bytecode, arguments: ['init-msg']})
		.send({gas: '1000000', from:accounts[0]})
	console.log('Deployed to: ', res)
};

deploy()