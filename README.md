
# Terra Application

[![Cerner OSS](https://badgen.net/badge/Cerner/OSS/blue)](http://engineering.cerner.com/2014/01/cerner-and-open-source/)
[![License](https://badgen.net/github/license/cerner/terra-application)](https://github.com/cerner/terra-application/blob/main/LICENSE)
[![Build Status](https://github.com/cerner/terra-application/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/cerner/terra-application/actions/workflows/ci-cd.yml)
[![devDependencies status](https://badgen.net/david/dev/cerner/terra-application)](https://david-dm.org/cerner/terra-application?type=dev)
[![lerna](https://badgen.net/badge/maintained%20with/lerna/cc00ff)](https://lerna.js.org/)

Please see [terra-ui](https://engineering.cerner.com/terra-ui/home/terra-ui/index) for all terra documentation.

## Internationalization (I18n)

Please review [Terra's Internationalization documentation](https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/internationalization) for more information. Included are directions on consumption and how internationalization is setup.

## Contributing

Please read through our [contributing guidelines](https://engineering.cerner.com/terra-ui/about/terra-ui/contributing/contribution-guidelines). Included are directions for issue reporting and pull requests.

## Local Development

1. Install docker https://www.docker.com/ to run browser tests.
2. Install dependencies and run tests.
```sh
npm install
npm run test
```

## Local Development using Docker (Dev Containers)

1. Install [Rancher](https://rancherdesktop.io/) or [Docker](https://www.docker.com/).
    - [Rancher](https://rancherdesktop.io/) is free and open-source and is highly recommended whereas Docker may require a license for use.
2. Install [Microsoft VS Code](https://code.visualstudio.com/Download).
3. Install the [Dev Container extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).
    - Navigate to View -> Extension  -> Search for and install _Dev Containers_ (or "ms-vscode-remote.remote-containers")
    - More information on [Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers)
4. Build the dev container:
    - (Option 1) - Opening local workspace in dev container
      - Clone the repository (or fork) locally and open the project in Visual Studio Code
      - Navigate to View -> Command Palette and run **Dev Containers: Open Workspace in Container**
    - (Option 2) - Recommended for Windows for hot-reloading to work during development and improved performance: Creating the dev container using dev volumes (for more information and guidance, see the [Official Guide](https://code.visualstudio.com/docs/devcontainers/containers#_quick-start-open-a-git-repository-or-github-pr-in-an-isolated-container-volume))
      - If you have git setup and have global config file _~/.gitconfig_ locally, these settings should automatically be transferred to the dev container
      - Navigate to View -> Command Palette and run **Dev Containers: Clone Repository in Container Volume**
      - Paste the GitHub URL of this repository (or fork)
      - VS Code will now reload the workspace and create/start the dev container and volume
      - Please note: changes made using this option will only update files in the Docker volume. It is recommended to commit changes often in case the volume is deleted or dev container gets removed.
5. You're now running in a dev container.  Use the terminal of the dev container in Visual Studio Code to issue any npm or bash commands.
6. Before running any WDIO tests, make sure to perform the following steps:
    - Open a new terminal (outside the dev container) and navigate to  ".devcontainer/" path in your repository.
    - Execute the command `"docker compose -f docker-compose-wdio.yml up"`. Selenium hub should spin up. Leave this running in the background. If you see errors saying "container name already exists", run `"docker container prune"` command followed by pressing "y" to clear up any unused containers and try running the previous command again.
    - You can now run `npm run test:docker` or `npm run wdio:docker` commands to run WDIO tests from inside the Dev Container.
    - NOTE: Optionally, if you want to run other WDIO commands in the dev container, you can also edit the root package.json file WDIO scripts to include `--disableSeleniumService=true` flag. This will disable the selenium service from spinning up again.
      For example:
       ```sh
       "scripts": {
        "wdio-fusion": "terra wdio --disableSeleniumService=true --themes orion-fusion-theme",
        }
       ```
7. To terminate a dev container:
    - Use command line or Rancher/Docker Desktop OR
    - Using Visual Studio Code
      - Select the Remote Explorer icon in the Activity Bar or View -> Command Palette and run **Remote Explorer: Focus on Containers View**
      - Locate the **terra-application_devcontainer** or currently running dev container under "Dev Containers"
      - Right click and select **Stop Container** and close the workspace
        - You can also select **Rebuild Container** to restart the dev container
8. To reopen a dev container:
    - Existing local workspace (for Option 1)
      - Open the project in Visual Studio Code
      - Ensure the workspace contains the .devcontainer folder
      - Navigate to View -> Command Palette and run **Dev Containers: Open Workspace in Container**
    - Isolated dev container volume (for Option 2)
      - Open Visual Studio Code
      - Use the Remote Explorer icon in the Activity Bar or View -> Command Palette and run **Remote Explorer: Focus on Containers View** to view containers
      - Locate the **terra-application_devcontainer** under "Dev Containers"
      - Hover over the dev container and click the Folder icon labelled **Open Folder in Container** or by right clicking and selecting **Open Folder in Container**

## LICENSE

Copyright 2019 - present Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
