const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const zlib = require("zlib");
const nodemailer = require("nodemailer");
const url = "https://inventorsoft.co/careers";

request(url, (err, res, body) => {
  if (err) {
    console.log(err);
  } else {
    let $ = cheerio.load(body);
    let strVacancies = "";
    $(".vacancy-card").each((index, elem) => {
      strVacancies += `${index + 1}. ${$(elem)
        .find(".vacancy__title")
        .text()} \n Seniority: ${$(elem)
        .find(".vacancy__seniority")
        .text()} \n`;
    });

    zipAndSendFile(strVacancies);
    console.log("done");
  }
});

const zipAndSendFile = async (content) => {
  await zipFile(content);

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "testfornodemailer5@gmail.com",
      pass: "TestPassword987",
    },
  });

  let result = await transporter.sendMail({
    from: '"Node js" <nodejs@example.com>',
    to: "brizhem@gmail.com",
    subject: "Vacansies from inventorsoft",
    text: "Vacansies in attachment",
    attachments: [
      {
        filename: "vacancies.txt.gz",
        path: "./vacancies.txt.gz",
      },
    ],
  });

  console.log(result.response);
};

const writeToFile = async (content) => {
  const ws = fs.createWriteStream("vacancies.txt");
  ws.write(content);
  ws.end();
};

const zipFile = async (content) => {
  await writeToFile(content);

  const rs = fs.createReadStream("vacancies.txt");
  const wsgzip = fs.createWriteStream("vacancies.txt.gz");
  const gzip = zlib.createGzip();

  rs.pipe(gzip).pipe(wsgzip);
};
