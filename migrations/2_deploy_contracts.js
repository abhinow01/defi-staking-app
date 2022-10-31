const Tether = artifacts.require('Tether');
const Naruto = artifacts.require('Naruto');
const RWD = artifacts.require('RWD');
const DecentralBank = artifacts.require('DecentralBank');
module.exports =  async function(deployer, network, accounts){
    await deployer.deploy(Tether);



    await deployer.deploy(Naruto);



    await deployer.deploy(RWD);
    const rwd = await RWD.deployed()



    await deployer.deploy(DecentralBank);
    const decentralBank = await DecentralBank.deployed()


    await rwd.transfer(DecentralBank.address, '1000000000000000000000000')

    await Tether.transfer(accounts[1], '1000000000000000000')



};