
const path = require('path');
const fs = require('fs');
class File {
  constructor(filename, name, ext, isFile, size, createTime, updateTime) {
    this.filename = filename;
    this.name = name;
    this.ext = ext;
    this.isFile = isFile;
    this.size = size;
    this.createTime = createTime;
    this.updateTime = updateTime;
  }

  static async getFileData(filename) {

    const stat = await fs.promises.stat(filename);
    const name = path.basename(filename);
    const ext = path.extname(filename)
    const isFile = stat.isFile();
    const size = stat.size;
    const createTime = stat.birthtime;
    const updateTime = stat.mtime;
    return new File(filename, name, ext, isFile, size, createTime, updateTime);
  }

  async getChildren() {
    if (this.isFile) {
      return [];
    }

    const result = await fs.promises.readdir(this.filename);
    return result;
  }


  async getContent(isBuffer) {
    if (!this.isFile) {
      return null;
    }

    if (isBuffer) {

      return await fs.promises.readFile(this.filename);
    }
    return await fs.promises.readFile(this.filename, 'utf-8');

  }
}

async function getFile(filename) {
  const stat = await fs.promises.stat(filename);
  if (stat.isFile()) {
    return []
  }

  const children = await fs.promises.readdir(filename);
  const result = children.map(name => {
    const resPath = path.resolve(filename, name);
    return File.getFileData(resPath)
  })

  return Promise.all(result);

}

async function test() {

  const filename = path.resolve(__dirname, 'myfile/');
  const fileList = await getFile(filename)
  console.log(fileList)
}

test();