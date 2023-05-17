// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if(license === "Boost"){
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }
  else if(license === "Creative Commons"){
    return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
  }
  else if(license === "Exclipse"){
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [License](#license)
  4. [Usage](#usage)
  5. [Credits](#credits)
  6. [Features](#features)
  7. [Tests](#tests)

## Description
${data.description}

## Installation
${data.installation}

## License
This app is licensed under ${data.license}

## Usage
${data.usage}

## Credits
${data.credits}

## Features
${data.features}

## Tests
${data.tests}

##Questions
Please reach out with any questions:  ${data.email} or [Github](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
