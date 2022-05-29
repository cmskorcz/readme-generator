const inquirer = require('inquirer');
const fs = require('fs');

const promptProject = () => {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true
                } else {
                    console.log('Please enter a title for your project')
                    return false
                }
            }
        },

        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter your GitHub username')
                    return false
                }
            }
        },

        {
            type: 'confirm',
            name: 'confirmDesc',
            message: 'Would you like to add a description for your README?',
            default: true
        },

        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description for your project',
            when: ({ confirmDesc }) => {
                if (confirmDesc) {
                    return true
                } else {
                    return false
                }
            }
        },

        {
            type: 'confirm',
            name: 'confirmInstall',
            message: 'Would you like to include installation instructions?',
            default: true
        },

        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions',
            when: ({ confirmInstall }) => {
                if (confirmInstall) {
                    return true
                } else {
                    return false
                }
            }
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information for the project',
            validate: usageInput => {
                if (usageInput) {
                    return true
                } else {
                    console.log('Please provide usage information for the project')
                    return false
                }
            }
        },

        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose a license for the project (Please select only one)',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT', 'Boost Software License 1.0', 'Unlicensed'],
            validate: choiceArr => {
                if (choiceArr.length === 1) {
                    return true
                } else {
                    console.log('Please select only one of the license choices')
                    return false
                }
            }
        },

        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter contribution guidelines for the project',
            validate: contributionInput => {
                if (contributionInput) {
                    return true
                } else {
                    console.log('Please enter contribution guidlines for the project')
                    return false
                }
            }
        },

        {
            type: 'input',
            name: 'tests',
            message: 'Please enter instructions on how to test applications function',
            validate: testInput => {
                if (testInput) {
                    return true
                } else {
                    console.log('Please enter instructions on how to test application function')
                    return false
                }
            }
        }
    ]);
};

promptProject();