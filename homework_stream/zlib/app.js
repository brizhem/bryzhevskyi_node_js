import fs from "fs";
import { createGzip, createGunzip } from "zlib";

//Archiving
const readebleStream = fs.createReadStream("./test.txt");
const writebleStream = fs.createWriteStream("./test.txt.gz");
const gzip = createGzip();

readebleStream.pipe(gzip).pipe(writebleStream);

//start with a delay to wait for the archive to be created
setTimeout(() => {
  //Unzip
  const readebleStreamUZ = fs.createReadStream("./test.txt.gz");
  const writebleStreamUZ = fs.createWriteStream("./testunzip.txt");
  const gunzip = createGunzip();

  readebleStreamUZ.pipe(gunzip).pipe(writebleStreamUZ);
}, 100);
