// const fs = require("fs");
// const fs = require("fs/promises");
const fs = require("fs").promises;

const readFile = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return data;
  } catch (error) {
    throw error;
  }
};

const addToFile = async (filePath, addData) => {
  try {
    fs.appendFile(filePath, addData);
  } catch (error) {
    throw error;
  }
};

const replaceFileData = async (filePath, newData) => {
  try {
    fs.writeFile(filePath, newData);
  } catch (error) {
    throw error;
  }
};

// readFile("file.txt").then((data) => console.log(data));
// addToFile("file.txt", "\nНо и от сгущенки не откажется");
replaceFileData("file.txt", "Кто-то слишком много ест!");
// fs.readFile("file.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// fs.readFile("file.txt", "utf8", (error, data) => {
//   if (error) {
//     return console.log(error);
//   }
//   console.log(error);
//   console.log(data);
// });
