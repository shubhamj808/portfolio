# [1.1.0](https://github.com/shubhamj808/portfolio/compare/v1.0.0...v1.1.0) (2025-06-21)


### Features

* enable manual triggering of the release workflow ([49b3bd3](https://github.com/shubhamj808/portfolio/commit/49b3bd37cf9a245a7e78629d56aa9537dcf2028b))

# [1.1.0](https://github.com/shubhamj808/portfolio/compare/v1.0.0...v1.1.0) (2025-06-21)


### Features

* enable manual triggering of the release workflow ([49b3bd3](https://github.com/shubhamj808/portfolio/commit/49b3bd37cf9a245a7e78629d56aa9537dcf2028b))

# 1.0.0 (2025-06-21)


* Added Pipelines for Build, Release and Deploy ([#8](https://github.com/shubhamj808/portfolio/issues/8)) ([867f998](https://github.com/shubhamj808/portfolio/commit/867f99839ec582c43a027229fc0007404a9e2757))


### Bug Fixes

* ensure correct branch is pulled before running semantic-release ([763b3db](https://github.com/shubhamj808/portfolio/commit/763b3dbbe3c0d5e691e1ebed7e783b6bcf6ae4c0))
* ensure release branch is updated before running semantic-release ([72c26db](https://github.com/shubhamj808/portfolio/commit/72c26dbd46daab6ed54ff283a83bbdfcead6d3c6))
* improve logging and ensure branch cleanup in release workflow ([c980904](https://github.com/shubhamj808/portfolio/commit/c98090499a2c66dbd2ed73ebaf9159ab8e66ebed))
* remove redundant branch entry in semantic-release configuration ([7f5d3de](https://github.com/shubhamj808/portfolio/commit/7f5d3de2de51f8963bf8a15687da62e87d161f94))
* remove unnecessary argument from sed command in release workflow ([9105f77](https://github.com/shubhamj808/portfolio/commit/9105f77bfe738caba847bd3a48c93fb7ed700a60))
* simplify semantic-release command by removing branch option ([ebb1498](https://github.com/shubhamj808/portfolio/commit/ebb149892082589d498534132fc421125ac06552))
* streamline semantic-release execution by ensuring correct branch checkout ([6bfbacb](https://github.com/shubhamj808/portfolio/commit/6bfbacbeedca195eb9e963e65a7c79ca1c67a834))
* update release branch reference in semantic-release step to use current branch ([993168b](https://github.com/shubhamj808/portfolio/commit/993168be7024ce0e0cde3fc3072f38ca227fece1))
* update release branch setting in .releaserc.json before running semantic-release ([bb39b4c](https://github.com/shubhamj808/portfolio/commit/bb39b4c6f879d1a69d37b8d684daf42e4058048b))
* update release branch trigger and versioning in workflow and configuration ([1bd4497](https://github.com/shubhamj808/portfolio/commit/1bd44975c26f8f28cde5147b763ebeec40775b13))
* update sed command to use pipe for release branch substitution in .releaserc.json ([5bed7f7](https://github.com/shubhamj808/portfolio/commit/5bed7f78e26cf2fde02e210c3bc7ed50b24af891))
* update semantic-release command to use shorthand for branch option ([13a4654](https://github.com/shubhamj808/portfolio/commit/13a4654ed973b01cf1b3ad8ca9c2954bb86ea410))
* update version extraction regex in release workflow ([#14](https://github.com/shubhamj808/portfolio/issues/14)) ([467e570](https://github.com/shubhamj808/portfolio/commit/467e5706a8f10549b1034566cda58d7455826f38))


### BREAKING CHANGES

* Refactor code style and formatting across multiple components

- Updated import statements to use consistent quotation marks.
- Standardized class names to use double quotes for JSX attributes.
- Removed unnecessary line breaks and whitespace for cleaner code.
- Ensured consistent formatting in CSS keyframes and styles.
- Improved readability by organizing code structure and indentation.
- Minor adjustments to comments and documentation for clarity.

* Update Node.js version in build workflow to 23

* Replace react-tilt with react-parallax-tilt for enhanced tilt effects and update package dependencies

* Update Node.js version in build workflow to 23.7.0

* Change dependency installation command from npm ci to npm install for better compatibility

* Refactor GitHub Actions workflows for consistency and update Node.js version to 23.7.0

* Add ESLint configuration and update format check script in package.json

* fix: update linting command to target 'src' directory and add eslint-plugin-react dependency

* style: format eslint.config.js for improved readability

* fix: change dependency installation command from npm install to npm ci for consistency

* refactor: streamline imports and update dependencies

- Removed unused dependency "caniuse-lite" from package.json.
- Updated "eslint-plugin-react" to "eslint-config-prettier" in package.json.
- Simplified import statements in various files by removing unnecessary line breaks.
- Ensured consistent export syntax across components and constants.

* fix: update dependency installation step to include npm install before npm ci

* style: format code for consistency and readability across multiple files

* fix: require semicolons in ESLint config and update linting scripts for consistency
refactor: remove unnecessary blank lines in component imports and styles
fix: set default values for staggerChildren and delayChildren in motion utility

* fix: update Node.js version in deployment workflow and add condition for artifact upload
