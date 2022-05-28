require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install infant fox turn fan razor screen proud harvest flower army gauge'; 
let testAccounts = [
"0xa0a754b6664ac64587ead3744ac1483ba0cac70658ecab81699dd3a991191147",
"0x1150e87b612285bb4411621da6c19687877e829a322251488724b17fe5d8ff46",
"0x01faee0051c2be7bb1c8742e1c9347b5e1e76a6a59c3f31111c9e9abf3815375",
"0x4e26df17369dc531ba1c4ca514c39b7af692957729fe3bfd27ba87da4cdda91f",
"0x3c1dfa49fce19c50c7f40f8f90cbe65501909791caacf93a360af3818a84f177",
"0x8f485805e62a5ec44c7e336e4395ab71d4a0f3a390f6636c54df2551d365ddb5",
"0xf0c1a778678da44d18b20379f4b57caaae3dc07da55a5fba30db0ff0dd8ccac2",
"0xc2b87d0cff46e8230f246b5f7f87beca8cb9bc77c2d81567e38ca1fcf66130e3",
"0xbc2d2f126aecf986844198bbf78da8272ff83953d6ebcd1dbad9080f48a505f9",
"0x75ff3326aaaaa014031043cc8e9955e6c12f0669a1b53648b8bbbacddf445f7a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

