import express from 'express'
import gpt from "./gpt.js"
import ocr from "./ocr.js"
import job from "./job.js"
import courses from "./courses.js"
import scrapeCourses from "./scrapeCourses.js"

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.use('/convert',ocr);
app.use('/gptAts',gpt);
app.use('/gptJobs',job);
app.use('/gptCourses',courses);
app.use('/scrapeCourses', scrapeCourses);



app.get('/analyze', (req, res) => {
  res.status(200).sendFile('analyze.html', { root: path.join(__dirname, '../public') });
  // res.sendFile('analyze.html', { root: path.join(__dirname, '../public') });
})


app.get('/', (req, res) => {
  res.status(200).sendFile('index.html', { root: path.join(__dirname, '../public') });
  // res.sendFile('index.html', { root: path.join(__dirname, '../public') });
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
