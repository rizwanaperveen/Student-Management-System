#! /usr/bin/env
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgBlue("****** Welcome To Student Mnagement System ******"))
let studentList =[];
let condition = true;

while(condition){
    const answers = await inquirer.prompt([
    {
        name : "question1",
        type : "input",
        message : chalk.bgBlueBright("Please enter  student name")
        
    },
    {
        name : "question2",
        type : "input",
        message : chalk.bgCyan("Please enter roll no.")
    },
    {
        name : "question3",
        type : "list",
        choices : ["MS.Office/2000","MS.Word/2000","HTML/2000","CSS/2000","Javascript/3000","Typescript/3000"],
        message : chalk.bgGreenBright("Please enter course")
    },
    {
        name : "question4",
        type : "confirm",
        message : chalk.bgMagentaBright("Would you like to add more students?"),
        default : "true"
    }    
]);
studentList.push(answers.question1)
studentList.push(answers.question2)
studentList.push(answers.question3)
        //console.log(studentList)
    condition = answers.question4;

let studentInformation = answers.question1 + "" +answers.question2 + "" + answers.question3
console.log(chalk.greenBright(studentInformation));
}
let i = 0;
for(let i=0;i<studentList.length;i++){  
console.log(chalk.magentaBright(studentList[i]))};