async function main() {
    const [deployer] = await ethers.getSigners();

    let tx;

    [owner] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("MissInternetToken");
    const token = await Token.deploy();

    console.log('hardhatToken: ', token.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });