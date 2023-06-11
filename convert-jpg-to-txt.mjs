const fs = require('fs');

export class Conversor {
  static async convertFiles(){
    for(let i of [1,2,3,4,5,6,7,8,9,10]) {
      fs.readFile(`ebookfile/${i}.jpg`, 'utf8', (err, data) => {
        fs.writeFile(`ebookfile/${i}.txt`,data);
      });
    }
  }
}

let conversor = Conversor.convertFiles();