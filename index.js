const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const inquirer = require('inquirer')
const fs = require('fs')

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
    .prompt(addManager)
    .then((res) => {
        inquirer
        .prompt([
            {
                type: 'list',
                name: 'choice',
                choices: [
                    {
                        name: 'Add Manager',
                        value: 'ADD_MANAGER'
                    },
                    {
                        name: 'Add Engineer',
                        value: 'ADD_ENGINEER'
                    },
                    {
                        name: 'Add Intern',
                        value: 'ADD_INTERN'
                    },
                    {
                        name: 'End',
                        value: 'END'
                    },
                ]
            }
        ])
        .then((res) => {
            if (choice === 'ADD_MANAGER') {
                addManager()
                questions()

            }
            if (choice === 'ADD_ENGINEER') {
                addEngineer()
                questions()
            }
            if (choice === 'ADD_INTERN') {
                addIntern()
                questions()
            }
            if (choice === 'END') {
              process.exit()
            }
        })
    })
}

questions()