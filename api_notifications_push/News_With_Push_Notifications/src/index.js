var babel = require("@babel/core");



import express from 'express';
import consign from 'consign';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());


consign({
    cwd: __dirname
})
.include('libs/config.js')
.then('db.js')
.then('libs/middleware.js')
.then('routes')
.then('libs/boot.js')
.into(app);

