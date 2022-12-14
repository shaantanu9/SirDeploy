const shell = require("shelljs");
const path = require("path");
const fs = require("fs");
const details = require("./details.json");
// console.log(details.reactApp.appJsData.join("\n"))

const herokuDeploy = () => {
  shell.exec("git init");
  shell.exec("git add .");
  shell.exec("git commit -m 'deploy'");
  shell.exec("heroku create");
  shell.exec("git push heroku master");
};

const createIndexFile = () => {
  shell.exec("touch index.js");
  indexFileData = details.indexCode.join("\n");
  fs.writeFileSync("index.js", indexFileData);
  herokuDeploy();
};

// function to edit package json file
const editPackageJson = () => {
  const packageJson = require(shell.pwd() + "/package.json");
  packageJson.scripts.start = "node index.js";
  packageJson.scripts.deploy = "heroku create";
  packageJson.scripts.updatedeploy =
    "git add . && git commit -m 'updated' && git push heroku master";

  fs.writeFileSync("package.json", JSON.stringify(packageJson));
};

const configureJsonServer = () => {
  shell.exec("npm init -y");

  shell.exec("npm install json-server");
  shell.exec("npm i --location=global heroku");
  editPackageJson();
  createIndexFile();
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
