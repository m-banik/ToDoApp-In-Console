const handleData = require("./handleData");
const handleCommand = ({ add, remove, list }) => {
  if (list || (add && add !== true) || (remove && remove !== true)) {
    let data = handleData("data");
    if (list) {
      console.log("Tasks to be done:".white.bgGreen);
      data.forEach(obj =>
        obj.id % 2
          ? console.log(`${obj.id} ${obj.content}`.yellow)
          : console.log(`${obj.id} ${obj.content}`.green)
      );
    } else if (
      (add && String(add).length < 8) ||
      (remove && String(remove).length < 8)
    ) {
      console.log("Task content must count at least eight signs".red);
    } else if (add) {
      if (data.findIndex(obj => obj.content === add) > -1)
        return console.log("Such task already exists".red);
      const newTask = { id: data.length + 1, content: add };
      data.push(newTask);
      handleData("add", data);
    } else {
      if (data.findIndex(obj => obj.content === remove) < 0)
        return console.log("Such task doesn't exist".red);
      const index = data.findIndex(obj => obj.content === remove);
      data = data.filter((obj, id) => {
        if (id === index) return false;
        else if (id > index) obj.id--;
        return obj;
      });
      handleData("remove", data);
    }
  } else {
    console.log(
      "You must provide an argument. You may add or remove a task or just display the list. Use such formula:\n--add='task content'\n--remove='task content'\n--list"
        .red
    );
  }
};
module.exports = handleCommand;
