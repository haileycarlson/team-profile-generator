const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const inquirer = require('inquirer')
const fs = require('fs')

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
  inquirer.prompt(addManager).then((res) => {
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
      .then((res) => {
        if (choice === 'ADD_MANAGER') {
          addManager()
          const manager = new Manager(
            questions.managerName,
            questions.managerId,
            questions.managerEmail,
            questions.managerOffice,
          )
          employees.push(manager)
          questions()
        }
        if (choice === 'ADD_ENGINEER') {
          addEngineer()
          const engineer = new Engineer(
            questions.engineerName,
            questions.engineerId,
            questions.engineerEmail,
            questions.engineerGithub,
          )
          employees.push(engineer)
          questions()
        }
        if (choice === 'ADD_INTERN') {
          addIntern()
          const intern = new Intern(
            questions.internName,
            questions.internId,
            questions.internEmail,
            questions.internOffice,
          )
          employees.push(intern)
          questions()
        }
        if (choice === 'END') {
const teamPage = genereateTeam(employees)

          fs.writeFile(outputPath, render(teamPage), (err) =>
            err ? console.error(err) : console.log('Your team has been generated!'),
          )
          process.exit()
        }
      })
  })
}

questions()
