import { ethers } from "ethers";
import MidiNotes from "../artifacts/contracts/MidiNotes.sol/MidiNotes.json";

async function hasSigners(): Promise<boolean> {
    //@ts-ignore
    const metamask = window.ethereum;
    const signers = await (metamask.request({method: 'eth_accounts'}) as Promise<string[]>);
    return signers.length > 0;
}

async function requestAccess(): Promise<boolean> {
    //@ts-ignore
    const result = (await window.ethereum.request({ method: 'eth_requestAccounts' })) as string[];
    return result && result.length > 0;
}

async function getContract() {
    const address = process.env.CONTRACT_ADDRESS;

    if (!(await hasSigners()) && !(await requestAccess())) {
        console.log("You are in trouble, no one wants to play");
    }

    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum).getSigner();
    const contract = new ethers.Contract(
        address,
        MidiNotes.abi,
        provider
    );

    
    const el = document.createElement("div");
    async function setCounter(count?) {
        el.innerHTML = count || await contract.getCounter();
    }

    const mintButton  = document.createElement("button");
    mintButton.innerText = "Mint MIDI";
    mintButton.onclick = async function () {

        await contract.addFirstMelodyPart(
            0,  //numchord progressions
            '0x40393E373C353B34' // melody call data
        );

        const tokenID = await contract.mint(
            {
                 value: ethers.utils.parseEther("0.001")
             }
         );

         console.log(tokenID);
    }
    // setCounter();

    const button = document.createElement("button");
    button.innerText = "Play MIDI from Smart Contract";
    button.onclick = async function () {
        // await contract.count();
        // setCounter();        // (boolean mintingEnables, uint256 supply);
        await contract.setMintingEnabled(true, ethers.BigNumber.from(10));
        const midiData = await contract.midi();
        let melodyArray = [];
        [...a2hex(midiData)].map((letter, i) => {
            //melody starts after the 14th byte
            if(i>13) {
                // console.log(parseInt(letter, 16));
                //convert to int and push to array
                melodyArray.push(parseInt(letter, 16));
            }
        })
        console.log(melodyArray);

        let j = 0;
        setInterval(function() {
            sendMIDINote(melodyArray[j%8]);
            j++;
        }, 400);

    }

    //ethers generates this nice functions
    // contract.on(contract.filters.CounterInc(), function(count) {
    //     setCounter(count);
    // });

    document.body.appendChild(el);
    document.body.appendChild(button);
    document.body.appendChild(mintButton);

}


getContract();

let midiOutput;
// request MIDI access
if (window.navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess({
        sysex: false // this defaults to 'false' and we won't be covering sysex in this article. 
    }).then(onMIDISuccess, onMIDIFailure);
} else {
    alert("No MIDI support in your browser.");
}

// midi functions
function onMIDISuccess(midiAccess) {
    // when we get a succesful response, run this code
    console.log('MIDI Access Object', midiAccess);
    midiOutput = midiAccess;
}

function onMIDIFailure(e) {
    // when we get a failed response, run this code
    console.log("No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim " + e);
}

function sendMIDINote(data) {
    var noteOnMessage = [0x90, data, 0x7f];    // note on, middle C, full velocity
    var output = midiOutput.outputs;
    let ID = 0;
    output.forEach( function( port, key ) {
        var opt = document.createElement("option");
        opt.text = port.name;
       ID = port.id;
      });
      
    output.get(ID).send(noteOnMessage); // sends the message.

    var noteOffMessage = [0x80, data, 0x7f];
    output.get(ID).send(noteOffMessage);
}

//https://stackoverflow.com/questions/3745666/how-to-convert-from-hex-to-ascii-in-javascript
function a2hex(str) {
    var arr = [];
    for (var i = 0, l = str.length; i < l; i ++) {
      var hex = Number(str.charCodeAt(i)).toString(16);
      arr.push(hex);
    }
    return arr;
  }