"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[634],{40634:(e,n,a)=>{a.r(n),a.d(n,{default:()=>d});var t=a(87462),r=a(44925),i=(a(67294),a(81254)),o=["components"],l={},m="wrapper";function d(e){var n=e.components,a=(0,r.Z)(e,o);return(0,i.mdx)(m,(0,t.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"terra-application"},"Terra Application"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"http://engineering.cerner.com/2014/01/cerner-and-open-source/"},(0,i.mdx)("img",{parentName:"a",src:"https://badgen.net/badge/Cerner/OSS/blue",alt:"Cerner OSS"})),"\n",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-application/blob/main/LICENSE"},(0,i.mdx)("img",{parentName:"a",src:"https://badgen.net/github/license/cerner/terra-application",alt:"License"})),"\n",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-application/actions/workflows/ci-cd.yml"},(0,i.mdx)("img",{parentName:"a",src:"https://github.com/cerner/terra-application/actions/workflows/ci-cd.yml/badge.svg",alt:"Build Status"})),"\n",(0,i.mdx)("a",{parentName:"p",href:"https://david-dm.org/cerner/terra-application?type=dev"},(0,i.mdx)("img",{parentName:"a",src:"https://badgen.net/david/dev/cerner/terra-application",alt:"devDependencies status"})),"\n",(0,i.mdx)("a",{parentName:"p",href:"https://lerna.js.org/"},(0,i.mdx)("img",{parentName:"a",src:"https://badgen.net/badge/maintained%20with/lerna/cc00ff",alt:"lerna"}))),(0,i.mdx)("p",null,"Please see ",(0,i.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/home/terra-ui/index"},"terra-ui")," for all terra documentation."),(0,i.mdx)("h2",{id:"internationalization-i18n"},"Internationalization (I18n)"),(0,i.mdx)("p",null,"Please review ",(0,i.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/internationalization"},"Terra's Internationalization documentation")," for more information. Included are directions on consumption and how internationalization is setup."),(0,i.mdx)("h2",{id:"contributing"},"Contributing"),(0,i.mdx)("p",null,"Please read through our ",(0,i.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/contributing/contribution-guidelines"},"contributing guidelines"),". Included are directions for issue reporting and pull requests."),(0,i.mdx)("h2",{id:"local-development"},"Local Development"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Install docker ",(0,i.mdx)("a",{parentName:"li",href:"https://www.docker.com/"},"https://www.docker.com/")," to run browser tests."),(0,i.mdx)("li",{parentName:"ol"},"Install dependencies and run tests.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},"npm install\nnpm run test\n")),(0,i.mdx)("h2",{id:"local-development-using-docker-dev-containers"},"Local Development using Docker (Dev Containers)"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Install ",(0,i.mdx)("a",{parentName:"li",href:"https://rancherdesktop.io/"},"Rancher")," or ",(0,i.mdx)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker"),".",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://rancherdesktop.io/"},"Rancher")," is free and open-source and is highly recommended whereas Docker may require a license for use."))),(0,i.mdx)("li",{parentName:"ol"},"Install ",(0,i.mdx)("a",{parentName:"li",href:"https://code.visualstudio.com/Download"},"Microsoft VS Code"),"."),(0,i.mdx)("li",{parentName:"ol"},"Install the ",(0,i.mdx)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers"},"Dev Container extension"),".",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Navigate to View -> Extension  -> Search for and install ",(0,i.mdx)("em",{parentName:"li"},"Dev Containers"),' (or "ms-vscode-remote.remote-containers")'),(0,i.mdx)("li",{parentName:"ul"},"More information on ",(0,i.mdx)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/devcontainers/containers"},"Dev Containers")))),(0,i.mdx)("li",{parentName:"ol"},"Build the dev container:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"(Option 1) - Opening local workspace in dev container",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Clone the repository (or fork) locally and open the project in Visual Studio Code"),(0,i.mdx)("li",{parentName:"ul"},"Navigate to View -> Command Palette and run ",(0,i.mdx)("strong",{parentName:"li"},"Dev Containers: Open Workspace in Container")))),(0,i.mdx)("li",{parentName:"ul"},"(Option 2) - Recommended for Windows for hot-reloading to work during development and improved performance: Creating the dev container using dev volumes (for more information and guidance, see the ",(0,i.mdx)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/devcontainers/containers#_quick-start-open-a-git-repository-or-github-pr-in-an-isolated-container-volume"},"Official Guide"),")",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"If you have git setup and have global config file ",(0,i.mdx)("em",{parentName:"li"},"~/.gitconfig")," locally, these settings should automatically be transferred to the dev container"),(0,i.mdx)("li",{parentName:"ul"},"Navigate to View -> Command Palette and run ",(0,i.mdx)("strong",{parentName:"li"},"Dev Containers: Clone Repository in Container Volume")),(0,i.mdx)("li",{parentName:"ul"},"Paste the GitHub URL of this repository (or fork)"),(0,i.mdx)("li",{parentName:"ul"},"VS Code will now reload the workspace and create/start the dev container and volume"),(0,i.mdx)("li",{parentName:"ul"},"Please note: changes made using this option will only update files in the Docker volume. It is recommended to commit changes often in case the volume is deleted or dev container gets removed."))))),(0,i.mdx)("li",{parentName:"ol"},"You're now running in a dev container.  Use the terminal of the dev container in Visual Studio Code to issue any npm or bash commands."),(0,i.mdx)("li",{parentName:"ol"},"Before running any WDIO tests, make sure to perform the following steps:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},'Open a new terminal (outside the dev container) and navigate to  ".devcontainer/" path in your repository.'),(0,i.mdx)("li",{parentName:"ul"},"Execute the command ",(0,i.mdx)("inlineCode",{parentName:"li"},'"docker compose -f docker-compose-wdio.yml up"'),'. Selenium hub should spin up. Leave this running in the background. If you see errors saying "container name already exists", run ',(0,i.mdx)("inlineCode",{parentName:"li"},'"docker container prune"'),' command followed by pressing "y" to clear up any unused containers and try running the previous command again.'),(0,i.mdx)("li",{parentName:"ul"},"You can now run ",(0,i.mdx)("inlineCode",{parentName:"li"},"npm run test:docker")," or ",(0,i.mdx)("inlineCode",{parentName:"li"},"npm run wdio:docker")," commands to run WDIO tests from inside the Dev Container."),(0,i.mdx)("li",{parentName:"ul"},"NOTE: Optionally, if you want to run other WDIO commands in the dev container, you can also edit the root package.json file WDIO scripts to include ",(0,i.mdx)("inlineCode",{parentName:"li"},"--disableSeleniumService=true")," flag. This will disable the selenium service from spinning up again.\nFor example:",(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},'"scripts": {\n "wdio-fusion": "terra wdio --disableSeleniumService=true --themes orion-fusion-theme",\n }\n'))))),(0,i.mdx)("li",{parentName:"ol"},"To terminate a dev container:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Use command line or Rancher/Docker Desktop OR"),(0,i.mdx)("li",{parentName:"ul"},"Using Visual Studio Code",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Select the Remote Explorer icon in the Activity Bar or View -> Command Palette and run ",(0,i.mdx)("strong",{parentName:"li"},"Remote Explorer: Focus on Containers View")),(0,i.mdx)("li",{parentName:"ul"},"Locate the ",(0,i.mdx)("strong",{parentName:"li"},"terra-application_devcontainer"),' or currently running dev container under "Dev Containers"'),(0,i.mdx)("li",{parentName:"ul"},"Right click and select ",(0,i.mdx)("strong",{parentName:"li"},"Stop Container")," and close the workspace",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"You can also select ",(0,i.mdx)("strong",{parentName:"li"},"Rebuild Container")," to restart the dev container"))))))),(0,i.mdx)("li",{parentName:"ol"},"To reopen a dev container:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Existing local workspace (for Option 1)",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Open the project in Visual Studio Code"),(0,i.mdx)("li",{parentName:"ul"},"Ensure the workspace contains the .devcontainer folder"),(0,i.mdx)("li",{parentName:"ul"},"Navigate to View -> Command Palette and run ",(0,i.mdx)("strong",{parentName:"li"},"Dev Containers: Open Workspace in Container")))),(0,i.mdx)("li",{parentName:"ul"},"Isolated dev container volume (for Option 2)",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Open Visual Studio Code"),(0,i.mdx)("li",{parentName:"ul"},"Use the Remote Explorer icon in the Activity Bar or View -> Command Palette and run ",(0,i.mdx)("strong",{parentName:"li"},"Remote Explorer: Focus on Containers View")," to view containers"),(0,i.mdx)("li",{parentName:"ul"},"Locate the ",(0,i.mdx)("strong",{parentName:"li"},"terra-application_devcontainer"),' under "Dev Containers"'),(0,i.mdx)("li",{parentName:"ul"},"Hover over the dev container and click the Folder icon labelled ",(0,i.mdx)("strong",{parentName:"li"},"Open Folder in Container")," or by right clicking and selecting ",(0,i.mdx)("strong",{parentName:"li"},"Open Folder in Container"))))))),(0,i.mdx)("h2",{id:"license"},"LICENSE"),(0,i.mdx)("p",null,"Copyright 2019 - present Cerner Innovation, Inc."),(0,i.mdx)("p",null,'Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at'),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"http://www.apache.org/licenses/LICENSE-2.0"},"http://www.apache.org/licenses/LICENSE-2.0")),(0,i.mdx)("p",null,'Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.'))}d.isMDXComponent=!0},87462:(e,n,a)=>{function t(){return t=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},t.apply(this,arguments)}a.d(n,{Z:()=>t})},44925:(e,n,a)=>{function t(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(n,{Z:()=>t})}}]);