// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache 2.0 License') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    
  Apache 2.0 License`
  }
  if (license === 'Boost Software License 1.0') {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
    
  Boost Software License 1.0`
  }
  if (license === 'BSD 3-Clause License') {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
    
  BSD 3-Clause License`
  }
  if (license === 'BSD 2-Clause License') {
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)
    
  BSD 2-Clause License`
  }
  if (license === 'CC0') {
    return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
    
  CC0`
  }
  if (license === 'Attribution 4.0 International') {
    return `[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
    
  Attribution 4.0 International`
  }
  if (license === 'Attribution-ShareAlike 4.0 International') {
    return `[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
    
  Attribution-ShareAlike 4.0 International`
  }
  if (license === 'Attribution-NonCommercial 4.0 International') {
    return `[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)
    
  Attribution-NonCommercial 4.0 International`
  }
  if (license === 'Attribution-NoDerivates 4.0 International') {
    return `[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)
    
  Attribution-NoDerivates 4.0 International`
  }
  if (license === 'Attribution-NonCommmercial-ShareAlike 4.0 International') {
    return `[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
    
  Attribution-NonCommmercial-ShareAlike 4.0 International`
  }
  if (license === 'Attribution-NonCommercial-NoDerivatives 4.0 International') {
    return `[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
    
  Attribution-NonCommercial-NoDerivatives 4.0 International`
  }
  if (license === 'Eclipse Public License 1.0') {
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)
    
  Eclipse Public License 1.0`
  }
  if (license === 'GNU GPL v3') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
    
  GNU GPL v3`
  }
  if (license === 'GNU GPL v2') {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
    
  GNU GPL v2`
  }
  if (license === 'GNU AGPL v3') {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
    
  GNU AGPL v3`
  }
  if (license === 'GNU LGPL v3') {
    return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)
    
  GNU LGPL v3`
  }
  if (license === 'GNU FDL v1.3') {
    return `[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)
    
  GNU FDL v1.3`
  }
  if (license === 'The Hippocratic License 2.1') {
    return `[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)
    
  The Hippocratic License 2.1`
  }
  if (license === 'The Hippocratic License 3.0') {
    return `[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)
    
  The Hippocratic License 3.0`
  }
  if (license === 'IBM Public License Version 1.0') {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
    
  IBM Public License Version 1.0`
  }
  if (license === 'ISC License (ISC)') {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
    
  ISC License (ISC)`
  }
  if (license === 'The MIT License') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    
  The MIT License`
  }
  if (license === 'Mozilla Public License 2.0') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
    
  Mozilla Public License 2.0`
  }
  if (license === 'Attribution License (BY)') {
    return `[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)
    
  Attribution License (BY)`
  }
  if (license === 'Open Database License (ODbL)') {
    return `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)
    
  Open Database License (ODbL)`
  }
  if (license === 'Public Domain Dedication and License (PDDL)') {
    return `[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)
    
  Public Domain Dedication and License (PDDL)`
  }
  if (license === 'The Perl License') {
    return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)
    
  The Perl License`
  }
  if (license === 'The Artistic License 2.0') {
    return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)
    
  The Artistic License 2.0`
  }
  if (license === 'SIL Open Font License 1.1') {
    return `[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)
    
  SIL Open Font License 1.1`
  }
  if (license === 'The Unlicense') {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
    
  The Unlicense`
  }
  if (license === 'The Do What the Fuck You Want to Public License') {
    return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)
    
  The Do What the Fuck You Want to Public License`
  }
  if (license === 'The zlib/libpng License') {
    return `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)
    
  The zlib/libpng License`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ``
  }
  return `
  ## License
  ${renderLicenseBadge(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = {generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection};

