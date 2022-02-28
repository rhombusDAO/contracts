import _ from "@nomiclabs/hardhat-ethers";

import { ethers } from "hardhat";
import { expect } from "chai";

describe("Hero", function() {
    async function createHero() {
        const Hero = await ethers.getContractFactory("TestHero");
        const hero = await Hero.deploy();
        await hero.deployed();

        return hero;
    }

    let hero;

    before(async function() {
        hero = await createHero();

    });

    it("should fail because of payment", async function() {
        const hero = await createHero();

        await hero.setRandom(69);
        await hero.createHero(0, {
            value: ethers.utils.parseEther("0.05")
        });
        const heros = (await hero.getHeros())[0];

        expect(await hero.getMagic(heros)).to.equal(16);
    });
});
