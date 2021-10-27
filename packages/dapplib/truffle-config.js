require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remind method hockey clinic fresh twenty'; 
let testAccounts = [
"0x27011b252974ae9f2ccf8bc0f245615959726947b5a11338eeef136872530de6",
"0x825669118c9ffb915ee0bc1f43df18112e41fb4910496fd42e89362965ae81f3",
"0x0e40cd099c785eafba31810706cfe0fd68f909d5a1dc0f4e2ece6317c443dd86",
"0x54bd85f6d0e3dc5a9efd2e3beb785ec0b075bc578a6ced9a1d6f39ad4e847c5c",
"0xf880fc77b0d2571fcefeaf47835fd402a24fa04e91f90a258933211dc35c13be",
"0x91dfdedfba1d79cc93983ad3944bbd68d4b2863c144c56b1ab5a364950e4349b",
"0x57ef52663687c8b5069080d98bd8098fe658a36e1b8acf9dab48f243cae17290",
"0x550a4be7bb9c2648bca0f835343609e939680f54e23a8c2bf12c4d273ae766d4",
"0xbe148c41fc27934902c95af5ce8a93696b6503343a2fc164b072b17108fcd157",
"0x60ad7e45991c2d2876d154439a34b04287d7403182275ca3785d7162504acd3d"
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

