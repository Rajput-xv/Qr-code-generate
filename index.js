import qr from "qr-image";
import inquirer from "inquirer";
import fs, { writeFile } from "fs";

inquirer
  .prompt([
    {"message" : "Type your url : ",
    "name": "URL"}
  ])
  .then((answers) => {
    const url = answers.URL;
    
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("qr__img.png"));
    fs.writeFile("url.text",url,(err) => {
        if (err) throw err;
        console.log("FIle Saved !!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      } else {
      }
  });
