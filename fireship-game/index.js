#!/usr/bin/env node
// above command tells th OS to execute the code with node.js version the user has installed

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import gradient from "gradient-string";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

console.log(chalk.bgGreen("Crazy frog"));

let playerName;

const sleep  = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {

  const rainbowTitle = chalkAnimation.rainbow('who wants to be a Millionaire? \n');
  await sleep();
  rainbowTitle.stop();

  console.log(`
    ${chalk.bgBlue('HOW TO PLAY')}
    i am a process on your computer.
    if you get any question wrong I will be ${chalk.bgRed('killed')}
    so get all the questions right...
    `)

    async function askName() {
      const answers = await inquirer.prompt({
        name: 'stark', 
        type: 'input', 
        message: 'What is your role?', 

        default() {
          return 'Player';
        },
      });
      
      playerName = answers.player_name
    }

}

//await welcome()
//await askName()
