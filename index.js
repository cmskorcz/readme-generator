const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./src/markdown-template')

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
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
            validate: emailInput => {
                if (emailInput) {
                    return true
                } else {
                    console.log('Please enter an email address')
                    return false
                }
            }
        },

        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description for your project',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true
                } else {
                    console.log('Please provide a description')
                    return false
                }
            }
        },

        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions',
            validate: installationInput => {
                if (installationInput) {
                    return true
                } else {
                    console.log('Please provide installation instructions')
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
            choices: ['AGPLv3', 'GPLv3', 'LGPLv3', 'MPLv2', 'ALv2', 'MIT', 'BSLv1', 'Unlicensed'],
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

promptProject()
    .then(projectData => {
       return generateReadme(projectData);
    })
    .then(markdownTemplate => {
        fs.writeFile('./dist/README.md', markdownTemplate, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        })
    })