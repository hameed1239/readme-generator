// import inquirer
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// array of questions for user
const questions = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project',
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    }
                    else {
                        console.log('Enter a title');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Describe your project.',
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    }
                    else {
                        console.log('Enter a description');
                        return false;
                    }
                }

            },
            {
                type: 'input',
                name: 'installation',
                message: 'How would a User install your application.',
                validate: installInput => {
                    if (installInput) {
                        return true;
                    }
                    else {
                        console.log('Enter an installation guide');
                        return false;
                    }
                }

            },
            {
                type: 'input',
                name: 'usage',
                message: 'Provide instructions for use',
                validate: usageInput => {
                    if (usageInput) {
                        return true;
                    }
                    else {
                        console.log('Enter usage instructions');
                        return false;
                    }
                }

            },
            {
                type: 'checkbox',
                name: 'license',
                message: 'Choose ONE license for your project.',
                choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT', 'Boost Software License 1.0'],
                validate: licenseChoice =>{
                    if (licenseChoice.length === 1) {
                        return true;
                    }
                    else {
                        console.log('Choose ONE license');
                        return false;
                    }
                   
                }

            },
            {
                type: 'input',
                name: 'contribution',
                message: 'How can developers contribute to your project',
                validate: contributionInput => {
                    if (contributionInput) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }

            },
            {
                type: 'input',
                name: 'test',
                message: 'What steps should a developer take to test your project',
                validate: testInput => {
                    if (testInput) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }

            },
            {
                type: 'input',
                name: 'githubName',
                message: 'Enter your github username',
                validate: githubNameInput => {
                    if (githubNameInput ) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }

            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email address',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }

            }
        ]
    );
}
// const mockData = 
//     {
//         title: 'Portfolio Generator',
//         description: 'It is an application that generates professional portfolio',
//         installation: 'oau;hohvrhorhvoehvouehveuohveuoh',
//         usage: 'oirghhoehhbbrhrhborthborhbruhb',
//     license: ['hameed Apache 2.0'],
//         contribution: 'iurufhrfhrviehahuorhfou ouhrfhwrfhrfheauh fouhfuheufeuhfeaouhf oahfouh ahfoahfou',
//         test: 'uahfoahfijhfiwhfuh fowhrfwhfhwr iwrihfuwhrf;ijr fhfuwhf',
//         githubName: 'hameed1239',
//         email: 'hameed.kazeem@gmail.com'
//     }

// function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                console.log('This is the write file err');
                reject(err);
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        })
    });
}

// function to initialize program
function init() {
    questions()
        .then(readmeData => {
            console.log(readmeData);
            return generateMarkdown(readmeData);
        })
        .then (readmeMarkdown => {
            return writeToFile("./dist/README.md", readmeMarkdown);
        })
        .then(writeToFileResponse => {
            console.log(writeToFileResponse);
        })
        .catch(err => {
            console.log(err);
    })
    //writeToFile("./dist/README.md",generateMarkdown(mockData));
}

// function call to initialize program
init();
