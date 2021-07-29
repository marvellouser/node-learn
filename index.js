require("./models/relation");
const stuServices = require('./services/studentService');

stuServices.getStudents().then(res => {
  console.log(res);
})