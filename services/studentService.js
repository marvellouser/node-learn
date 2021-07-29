const Student = require("../models/Student");
exports.addStudent = async function (stuObj) {
  const ins = await Student.create(stuObj);
  return ins.toJSON();
};

exports.deleteStudent = async function (id) {
  return await Student.destroy({
    where: {
      id,
    },
  });
};

exports.updateStudent = async function (id, obj) {
  return await Student.update(obj, {
    where: {
      id,
    },
  });
};

exports.getStudents = async function (page = 1, limit = 10) {
  const results = await Student.findAll({
    offset: (page - 1) * limit,
    limit: +limit,
  })

  const total = await Student.count();
  console.log(total);
  return {
    datas: JSON.parse(JSON.stringify(results)),
    total,
  }
}
