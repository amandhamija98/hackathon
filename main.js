
'use strict'
const SHA256 = require('crypto-js/sha256')
class Block
{
constructor(index,timestamp,data,previousHash)
{
this.index=index;
console.log(index +" ");
this.timestamp=timestamp;
this.data=data;
console.log(data);
this.previousHash=previousHash;
this.hash=this.calculateHash();
this.nonce=0;
}

calculateHash(){
return SHA256(this.index+this.previousHash+this.timestamp+JSON.stringify(this.data)+this.nonce).toString();
}
  mineblock(difficulty)
  {
    while(this.hash.substring(0,difficulty)!== Array(difficulty+1).join("0"))
    {
      this.nonce++;
      this.hash=this.calculateHash();
    }
    console.log("Mined "+ this.hash);
  }
}
class genesis
{
	constructor(userid,password)
	{
		this.userid=userid;
		this.password=password;
    var d=new Date();
    this.hash= SHA256(this.userid+ this.d).toString();;
	}
}
class Blockchain
{
constructor(userid,password)
{
this.chain=[this.createGenesisBlock(userid,password)];
 this.difficulty=2;
}
createGenesisBlock(userid,password)
{
var d=new Date();
return new genesis(userid,password);
}
	extractblockchain()
	{
		return chain;
	}
	calculateHash()
	{
	return SHA256(this.userid+this.timestamp).toString();
	}
	uniqueid()
	{
		return calculateHash();
	}
	changepass(password)
	{
		this.password=password;
	}
getLatestBlock()
{
return this.chain[this.chain.length-1];
}

addBlock(newBlock)
{
newBlock.previousHash=this.getLatestBlock().hash;
newBlock.hash=newBlock.calculateHash();
newBlock.mineblock(this.difficulty);
this.chain.push(newBlock);
}
display()
{
  ans=console.log(JSON.stringify(this.chain));
  return ans;
}
}

let u1=new Blockchain(1,"chetna");
u1.addBlock(new Block(1,"10/07/2017",{amount:4}));
u1.addBlock(new Block(2,"11/07/2017",{amount:20}));
var i;
for(i=1;i<u1.chain.length;i++)
{
  if(u1.chain[i].hash!=u1.chain[i].calculateHash())
     {
       console.log("Problem"+u1.chain[i].index);
       break;
     }

}
//console.log(JSON.stringify(u1,null,4));
/*u1.chain[2].data={amount: 100};
var i;
for(i=1;i<u1.chain.length;i++)
{
  if(u1.chain[i].hash!=u1.chain[i].calculateHash())
     {
       console.log("Problem"+ u1.chain[i].index);
       break;
     }

}*/

//console.log(JSON.stringify(obj.chain));
module.exports=Blockchain;
//module.exports=Block;
//module.exports=genesis;
//module.exports.display;
