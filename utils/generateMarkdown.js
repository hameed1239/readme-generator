
// function to generate markdown for README
const generateMarkdown = data => {
  const{ title, description, installation, usage, license, contribution,githubName, test, email } = data;
  return `# ${title}

  ![NPM](https://img.shields.io/badge/license-${license.toString().replace(/ /g, '%20')}-<green>)
  ## Description
  ${description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Questions](#questions)

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## License
  ${license}

  ## Contributing
  ${contribution}

  ## Test
  ${test}

  ## Questions
  You can create issues on my git hub page
  [${githubName}](https://github.com/${githubName})
  You can also contact me via email @ ${email}
`;
}

module.exports = generateMarkdown;
