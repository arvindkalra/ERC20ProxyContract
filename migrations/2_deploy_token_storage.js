const TokenStorage = artifacts.require("./TokenStorage.sol");

module.exports = function(deployer, network, accounts) {
  let owner = accounts[0];
  console.log('owner of TokenStorage: ' + owner)
  deployer.deploy(TokenStorage, {from: owner});
};
