const shell = require("shelljs");
const path = require("path");
const fs = require("fs");
const details = require("./details.json");
// console.log(details.reactApp.appJsData.join("\n"))

const herokuDeploy = () => {
  shell.exec("git add .")
  shell.exec("git commit -m 'deploy'")
  shell.exec("heroku create")
  shell.exec("git push heroku master")
}

const createIndexFile = () => {
  shell.exec("touch index.js")
  indexFileData= details.indexCode.join("\n");
  fs.writeFileSync("index.js", indexFileData);
  herokuDeploy();
}
const configureJsonServer = () => {
  shell.exec("npm init -y");

  shell.exec("npm install json-server");
  shell.exec("npm i --location=global heroku");
  createIndexFile()
};

const createFakeServer = (name) => {
  const projectExist = require("./projectExist");
  if (projectExist(name) !== true) {
    shell.exit();
  }

  try {
    // shell.exec(`npx create-react-app ${name} --template redux`);
    shell.cd(name);
    configureJsonServer();
  } catch (err) {
    console.log(err.message);
    shell.exit();
  }
};

module.exports = createFakeServer;
