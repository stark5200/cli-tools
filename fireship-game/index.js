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

const sleep  = () =>
async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow('who wants to be a Millionaire? \n');
}
