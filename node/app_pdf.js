const express = require("express");
const app = express();
const port = 3000;

const path = require('path');
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

app.get("/hello", (req, res) => {
  console.log(req.url);
  res.send("Hello World!");
});

app.get("/api/board", (req, res) => {
  res.send({ title: "노드 api 서버 update!!!!" });
});

const puppeteer = require('puppeteer');
const fs = require('fs');

app.get('/pdf1', async (req,res)=>{

  const browser = await puppeteer.launch(); // 서버에서 쓸 땐 launch 옵션 주의
  const page = await browser.newPage();

  // HTML 또는 URL 로딩
  await page.goto('https://example.com', { waitUntil: 'networkidle0' });

  // PDF 저장
  // await page.pdf({
  //   path: 'output.pdf',         // 저장될 파일명
  //   format: 'A4',               // 종이 크기
  //   printBackground: true       // 배경 포함
  // });
  // Downlaod the PDF
  const pdf = await page.pdf({
  //  path: 'result.pdf',
    margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
    printBackground: true,
    format: 'A4',
  });
  await browser.close();
  res.set({
    "Content-Type": "application/pdf",
    "Content-Disposition": `attachment; filename=data.pdf`,
  });
  res.send(pdf);
});

app.get('/pdf2', async (req,res)=>{
  //puppeteer
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
//   await page.goto('https://news.ycombinator.com', {
//   waitUntil: 'networkidle2',
// });
await page.setContent(`
  <html>
    <head><title>Test PDF</title></head>
    <body>
      <h1>Hello, PDF!</h1>
      <p>This is generated from HTML.</p>
    </body>
  </html>
`);
// Saves the PDF to hn.pdf.
await page.pdf({
  path: 'hn.pdf',
});

await browser.close();
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "./public", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
