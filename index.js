const fs = require('fs');

const path = require('path');

const filename = path.resolve(__dirname, './myfile/1.jpg');
// fs.promises.readFile(filename).then((res) => {
//   const newFilename = path.resolve(__dirname, './myfile/2.jpg');
//   return fs.promises.writeFile(newFilename, res);
// }).then(() => {
//   console.log('复制图片成功');
// })


// fs.readFile(filename, (err, res) => {
//   console.log(res.toString());
// })

// fs.writeFile(filename, '内容变化', {
//   flag: 'a', // append追加内容
// }, () => {
//   console.log(1111);
// });

function createPromose() {
  return Promise.reject(100)
}
async function test() {
  const a = await createPromose();
  console.log(a);
}
test();