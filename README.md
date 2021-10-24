# react-typescript-firebase-auth-template

This boiler plate is intended to give users a basic setup with Authentification of forms and Firebase, using Typescript, Next.js, and The awesome Chakra UI library for styling.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node](https://nodejs.org/en/download/) minimum v12.18.0
- NPM (should come preinstalled with Node)
- [Typescript](https://www.typescriptlang.org/download)
- [Set up SSH](https://support.atlassian.com/bitbucket-cloud/docs/set-up-an-ssh-key/)
- Your preferred text editor or IDE

### Preferred package manager

The preferred package manager for this project is `yarn`

### Installing

- Clone the repository using SSH

```
git clone https://github.com/DanteLentsoe/react-typescript-firebase-auth-template.git
```

- Navigate to the cloned repo

```
cd react-typescript-firebase-auth-template
```

- Ensure you are using the supported node version for this project. Currently it is set to Node v14

```
nvm use
```

_If you dont have nvm installed then you can do so with curl, read more [here] (https://github.com/nvm-sh/nvm/blob/master/README.md)_

- Install dependencies

```
yarn
```

- Run the server locally

```
yarn dev
```

## Running the tests

- To run tests normally, use

```
yarn test
```

### Detail testing methods

- To run tests with coverage reporting, use

```
yarn coverage
```

- To run tests with coverage reporting and update snapshots, use

```
yarn coverage:update
```

- For more testing scripts, have a look at the `scripts` section in the `package.json` file

## Environments

There is 1 environment each corresponding to a branch on the repository:

- Production - `master` branch

### Adding Environments

To add more environments:

- Go to [Netlify]
- Navigate to `Domains`
- Add an additional domain and link to it to a specific branch

### Removing Environments

To remove an environment

- Navigate to `Domains`
- Click the `Edit` button on whichever domain you wish to remove
- Click the `Remove` button

## Deployment

The application is deployed on [Netlify](https://react-firebase-auth-template.netlify.app)

## Environment Variables + Keys + Secrets

All environment and development keys are managed via Github using `git-crypt`

## Built With

Details of the tech stack that has been used.

- [Next](https://reactjs.org/) - The client framework used
- [Chakra Ui UI](https://chakra.com/) - The component library

## Architecture

A basic architecture diagram or description of the chosen architecture should be detailed here.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on the DanWare Academy standard for commit messages and the accepted pull request process.

## Versioning

We use [SemVer](http://semver.org/) for versioning. Versioning occurs automatically in the pipelines using [Semantic Release](https://github.com/semantic-release/semantic-release). For the versions available, see the tags on this repository.

## Changelog

A running changelog can be found here: [CHANGELOG.md](CHANGELOG.md)

## Authors

- **Dante Lentsoe** <dllentsoe@gmail.com>

## Licenses

Results from `npx license-checker --summary`

```
├─ MIT: 953
├─ ISC: 78
├─ BSD-3-Clause: 37
├─ BSD-2-Clause: 29
├─ Apache-2.0: 26
├─ MIT*: 8
├─ BSD: 5
├─ (MIT OR CC0-1.0): 5
├─ CC0-1.0: 4
├─ WTFPL: 2
├─ Unlicense: 2
├─ 0BSD: 2
├─ Custom: https://github.com/tmcw/jsonlint: 1
├─ BSD-3-Clause OR MIT: 1
├─ (MIT OR Apache-2.0): 1
├─ CC-BY-4.0: 1
├─ Public Domain: 1
├─ AFLv2.1,BSD: 1
├─ (MIT AND Zlib): 1
├─ (MIT AND BSD-3-Clause): 1
└─ CC-BY-3.0: 1
```

## Troubleshooting

Here is a list of common errors and possible solutions:

Failed to push to Github due to out of date snapshots:

- Run

  > yarn test:update

- or
  > yarn coverage:update

## Meta

| Version | Author                              | Date       |
| ------- | ----------------------------------- | ---------- |
| 0.0.1   | Dante Lentsoe <dllentsoe@gmail.com> | 24/10/2021 |

## APP SCREENSHOTS
<img width="1406" alt="Screenshot 2021-10-24 at 21 59 48" src="https://user-images.githubusercontent.com/65385487/138610740-95071f4d-df7c-4172-8217-0ceb6d4ff62e.png">
<img width="1387" alt="Screenshot 2021-10-24 at 21 59 55" src="https://user-images.githubusercontent.com/65385487/138610741-cd4f1351-a94e-4e01-9069-d25c898237ae.png">

