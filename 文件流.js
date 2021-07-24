// console.log(global);
// require('./test');
const os = require('os');
// console.log(os.arch());
// console.log(os.cpus());

// console.log(os.freemem() / 2 ** 30);

// console.log(os.homedir())

// console.log(os.hostname());

const path = require('path');
const fs = require('fs');

const filename = path.resolve(__dirname, './writeable/a.txt');


const filename2 = path.resolve(__dirname, './writeable/b.txt')


async function test () {

  const rs = fs.createReadStream(filename);

  const ws = fs.createWriteStream(filename2);

  rs.on('open', () => {
    console.time('开始复制');
  })
  rs.on('data', (chunk) => {
    const flag = ws.write(chunk);
    if (!flag) {
      rs.pause();
    }
  })

  ws.on('drain', () => {
    rs.resume();
  })

  rs.on('close', () => {
    console.timeEnd('开始复制');
  })
}

test();