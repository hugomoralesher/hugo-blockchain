//coment, note


const Blockchain = require('./blockchain')

const hugocoin = new Blockchain(); //makes a new instance (or Brand) of our
//blockchain data structure (module)
console.log(hugocoin)

//const bearcoin2 = new Blockchain();
//We can create as much as we want
//console.log(hugocoin)
//node dev/test.js
//node dev/test
//1.node -v
//2.npm -v
//3.npm init
//console.log(bearcoin.newTransactions[bearcoin.newTransactions.length - 1]);



//remember. createNewBlock() needs these 3 parameters: nonce
//previousBlockHash, hash
hugocoin.createNewBlock(12342, 'Q340NAPGAGB', 'AAJABJSABB0BO');
hugocoin.createNewBlock(98765, 'H449665UGO1', 'MOHH881130CMR');
hugocoin.createNewBlock(45678, 'QWERTY12QW2', 'ASDF1122ASSDF');

hugocoin.createNewTransaction(200, 'H449665UGO1', 'MOHH881130CMR');

/******************* PART HASH CODE ****************************************************/


const previousBlockHash = 'A9089AUD8A8UA8GSDA';
const currentBlockData = [{
        "amount": 50,
        "sender": "ALEX00IIO99GHAHBA1",
        "recipient": "RODRIGOOOIJOI9ABAABAS1",
    },
    {
        "amount": 150,
        "sender": "ALEX00IIO99GHAHBA2",
        "recipient": "RODRIGOOOIJOI9ABAABAS2",
    },
    {
        "amount": 5,
        "sender": "ALEX00IIO99GHAHBA3",
        "recipient": "RODRIGOOOIJOI9ABAABAS3",
    }
];
//const nonce = 100;

//console.log(hugocoin.hashBlock(previousBlockHash, currentBlockData, nonce));

/******************* PART HASH CODE ****************************************************/


/*++-+-+-+-+-+-+-+-+-+-+-+-+-+    GET FOR 00 IN HASH   -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+*/
let nonce = hugocoin.proofOfWork(previousBlockHash, currentBlockData);
console.log('nonce from Proof of Work : ' + nonce);

console.log(hugocoin.hashBlock(previousBlockHash, currentBlockData, nonce));


console.log(hugocoin)

//console.log(hugocoin.chain[2]);
//console.log(hugocoin.newTransactions[0])
//console.log(hugocoin.newTransactions[0].amount)