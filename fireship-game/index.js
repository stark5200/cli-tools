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

/*
As you know, git log shows you the history of commits in your repo. There are a few flags I like to use from time to time to make the output easier to read.

The first is --decorate. It can be one of:

short (the default)
full (shows the full ref name)
no (no decoration)
Run git log --decorate=full. You should see that instead of just using your branch name, it will show the full ref name. A ref is just a pointer to a commit. All branches are refs, but not all refs are branches.

Run git log --decorate=no. You should see that the branch names are no longer shown at all.

The second is --oneline. This flag will show you a more compact view of the log. I use this one all the time, it just makes it so much easier to see what's going on.
*/
