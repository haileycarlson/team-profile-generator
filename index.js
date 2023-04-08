const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const inquirer = require('inquirer')
const fs = require('fs')
const generateHtml = require('./src/builder.js')



const employees = []

const addManager = [
  {
    type: 'input',
    name: 'managerName',
    message: 'What is the name of the manager?',
  },
  {
    name: 'managerId',
    message: 'What is the managers Id?',
  },
  {
    name: 'managerEmail',
    message: 'What is the managers email?',
  },
  {
    name: 'managerOffice',
    message: 'What is the managers office number?',
  },
]

const addEngineer = [
  {
    type: 'input',
    name: 'engineerName',
    message: 'What is the name of the engineer?',
  },
  {
    type: 'input',
    name: 'engineerId',
    message: 'What is the engineers Id?',
  },
  {
    type: 'input',
    name: 'engineerEmail',
    message: 'What is the engineers email?',
  },
  {
    type: 'input',
    name: 'engineerGithub',
    message: 'What is the engineers GitHub username?',
  },
]

const addIntern = [
  {
    type: 'input',
    name: 'internName',
    message: 'What is the name of the intern?',
  },
  {
    type: 'input',
    name: 'internId',
    message: 'What is the interns Id?',
  },
  {
    type: 'input',
    name: 'internEmail',
    message: 'What is the interns email?',
  },
  {
    type: 'input',
    name: 'internSchool',
    message: 'What is the interns school name?',
  },
]

function questions() {
 
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'choice',
          choices: [
            {
              name: 'Add Manager',
              value: 'ADD_MANAGER',
            },
            {
              name: 'Add Engineer',
              value: 'ADD_ENGINEER',
            },
            {
              name: 'Add Intern',
              value: 'ADD_INTERN',
            },
            {
              name: 'End',
              value: 'END',
            },
          ],
        },
      ])
      .then((answer) => {
        const choice = answer.choice
        if (choice === 'ADD_MANAGER') {
          inquirer.prompt(addManager).then((answer) => {
            const manager = new Manager(
              answer.managerName,
              answer.managerId,
              answer.managerEmail,
              answer.managerOffice,
            )
            employees.push(manager)
            questions()
          })
        }
        if (choice === 'ADD_ENGINEER') {
          inquirer.prompt(addEngineer).then((answer) => {
          const engineer = new Engineer(
            answer.engineerName,
            answer.engineerId,
            answer.engineerEmail,
            answer.engineerGithub,
          )
          employees.push(engineer)
          questions()
          })
        }
        if (choice === 'ADD_INTERN') {
          inquirer.prompt(addIntern).then((answer) => {
          const intern = new Intern(
            answer.internName,
            answer.internId,
            answer.internEmail,
            answer.internOffice,
          )
          employees.push(intern)
          questions()
          })
        }
        if (choice === 'END') {
        
          fs.writeFile('./dist/team.html', generateHtml(employees), (err) =>
            err
              ? console.error(err)
              : console.log('Your team has been generated!'),
          )
        
        }
      })
      .catch((err) => {
        if (err) {
          throw err;
        }
      });
  // })
}

questions()
