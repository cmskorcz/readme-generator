module.exports = templateData => {
    const { title, description, installation, usage, license, contribution, tests, github, email } = templateData;

    const template = 
`# ${title} ![GitHub license](https://img.shields.io/badge/license-${license}-blue)
## Description
${description}
## Table of Contents
- Installation
- Usage
- License
- Contributing
- Tests
- Questions
### Installation
${installation}
### Usage
${usage}
### License
${license}
### Contributing
${contribution}
### Tests
${tests}
### Questions
GitHub: ${github}

If you have any questions, you may reach out to me via email at: ${email}
`;

    return template
}