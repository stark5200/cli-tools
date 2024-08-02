#!/usr/bin/env node
// above command tells th OS to execute the code with node.js version the user has installed

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import gradient from "gradient-string";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

console.log(chalk.bgGreen("Crazy frog"));

let playerName = "Player 1";
let friendName = "Player 2";

const sleep  = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
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
}

async function askName() {
  const answers = await inquirer.prompt({
    name: 'player_name', 
    type: 'input', 
    message: 'What is your name?', 
    default() {
      return 'Player 1';
    },
  });
  
  playerName = answers.player_name;
}

async function askFriend() {
  const answers = await inquirer.prompt({
    name: 'friend_name', 
    type: 'input', 
    message: 'What is your rivals name?', 
    default() {
      return 'Player 2';
    },
  });
  
  friendName = answers.friend_name;
}

async function question1() {
  const answers = await inquirer.prompt({
    name: 'question_1', 
    type: 'list', 
    message: 'Javascript was created in 10 days on\n',
    choices: [
      'May 23 , 1995',
      'Nov 24, 1995',
      'Dec 4, 1995',
      'Dec 17, 1996',
    ],
  });

  return handleAnswer(answers.question_1 == 'Dec 4, 1995');
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner('Checking answer...').start();
  await sleep();

  if(isCorrect) {
    spinner.success({text: `Nice work ${playerName}. That's a legit answer.`});
  } else {
    spinner.error({text: `💀💀💀 Game Over, you lose ${playerName}! `});
    process.exit(1);
  }
}

function winner() {
  //console.clear();
  const msg = `Congrats, ${playerName} !\n $ 1 , 0 0 0 , 0 0 0 \n
  💀💀💀 Better Luck Next Time, \n ${friendName} ! $ 0 \n`;

  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data))
  });
}

await welcome();
await askName();
await askFriend();
await question1();
winner();


