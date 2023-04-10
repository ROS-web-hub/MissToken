const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    let tx;

    [owner, addr1, addr2, addr3] = await ethers.getSigners();

    const pancakeFactory = await ethers.getContractFactory("PancakeFactory");

    const hardhatPancakeFactory = await pancakeFactory.deploy(owner.address);

    console.log(await hardhatPancakeFactory.INIT_CODE_PAIR_HASH());

    const WBNB = await ethers.getContractFactory("WBNB");

    const hardhatWBNB = await WBNB.deploy();

    const pancakeRouter = await ethers.getContractFactory("PancakeRouter");

    const hardhatPancakeRouter = await pancakeRouter.deploy(hardhatPancakeFactory.address, hardhatWBNB.address);

    const Token = await ethers.getContractFactory("MissInternetToken");

    const hardhatToken = await Token.deploy();

    // selling and buying 



    tx = await hardhatToken.transfer(hardhatToken.address, ethers.utils.parseEther("100"));
    await tx.wait();

    tx = await hardhatToken.transfer(addr1.address, ethers.utils.parseEther("90"));
    await tx.wait();

    tx = await hardhatToken.connect(addr1).transfer(addr2.address, ethers.utils.parseEther("10"));
    await tx.wait();

    tx = await hardhatToken.approve(hardhatPancakeRouter.address, ethers.utils.parseEther("100"));

    await tx.wait();

    console.log("Adding liquidity");


    console.log('owner.address: ', owner.address);
    tx = await hardhatPancakeRouter.addLiquidityETH(
      hardhatToken.address,
      ethers.utils.parseEther("100"),
      0,
      0,
      owner.address,

      999999999999, { value: ethers.utils.parseEther("100") }
    );

    await tx.wait();

    tx = await hardhatToken.setUniswapV2Pair(await hardhatPancakeFactory.getPair(hardhatToken.address, hardhatWBNB.address));
    await tx.wait();

    // //for sell
    tx = await hardhatToken.connect(addr1).approve(hardhatPancakeRouter.address, "0xffffffffffffffffffffffffffffffffffff");
    await tx.wait();

    console.log("sell ",  ethers.utils.formatEther(await hardhatToken.balanceOf(await hardhatPancakeFactory.getPair(hardhatToken.address, hardhatWBNB.address))));
    tx = await hardhatPancakeRouter.connect(addr1).swapExactTokensForETH(
      ethers.utils.parseEther("10"),
      0,
      [hardhatToken.address, hardhatWBNB.address],
      addr1.address,
      9999999999
    );
    await tx.wait();
    console.log("After sell ", ethers.utils.formatEther(await hardhatToken.balanceOf(await hardhatPancakeFactory.getPair(hardhatToken.address, hardhatWBNB.address))));

    // console.log("after ", await hardhatPancakeRouter.getAmountsOut(ethers.utils.parseEther("10"), [hardhatToken.address, hardhatWBNB.address]))

    console.log("buy   ");
    console.log(ethers.utils.formatEther(await hardhatToken.balanceOf(addr1.address)));
    tx = await hardhatPancakeRouter.swapETHForExactTokens(
      ethers.utils.parseEther("1"),
      [hardhatWBNB.address, hardhatToken.address],
      addr1.address,
      99999999999, { value: ethers.utils.parseEther("1") }
    );

    await tx.wait();
    console.log(ethers.utils.formatEther(await hardhatToken.balanceOf(addr1.address)));
    console.log("buy   after");

    tx = await hardhatToken.connect(addr1).approve(hardhatPancakeRouter.address, ethers.utils.parseEther("10"));

    await tx.wait();

    console.log("before add ", ethers.utils.formatEther(await hardhatToken.balanceOf(await hardhatPancakeFactory.getPair(hardhatToken.address, hardhatWBNB.address))));

    tx = await hardhatPancakeRouter.connect(addr1).addLiquidityETH(
        hardhatToken.address,
        ethers.utils.parseEther("10"),
        0,
        0,
        owner.address,
  
        999999999999, { value: ethers.utils.parseEther("13") }
      );

      console.log("after add ", ethers.utils.formatEther(await hardhatToken.balanceOf(await hardhatPancakeFactory.getPair(hardhatToken.address, hardhatWBNB.address))));

    // console.log(await hardhatPancakeRouter.getAmountsOut(ethers.utils.parseEther("1"), [hardhatToken.address, hardhatWBNB.address]));
  })
})


