const fs = require("fs");
const handleData = (operation, data) => {
  if (operation === "data")
    return JSON.parse(fs.readFileSync("./data/data.json", "utf-8"));
  else if (operation === "add") {
    fs.writeFile("./data/data.json", JSON.stringify(data), err => {
      if (err) throw err;
      console.log("Task added".white.bgGreen);
    });
  } else if (operation === "remove") {
    fs.writeFile("./data/data.json", JSON.stringify(data), err => {
      if (err) throw err;
      console.log("Task removed".white.bgGreen);
    });
  }
};
module.exports = handleData;
