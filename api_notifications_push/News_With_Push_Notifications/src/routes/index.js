import http from 'http';
import fs, { createReadStream } from 'fs';
import path from 'path';

module.exports = app =>{

    app.get('/',(req,res) =>{
        
        res.writeHead(200,{'Content-Type': 'text/html'});
        var myreadStream = fs.createReadStream(path.join(__dirname,'../pages/admin/adminPortal.html'))
        myreadStream.pipe(res);
    });

};