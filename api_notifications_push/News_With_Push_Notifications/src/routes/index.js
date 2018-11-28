import http from 'http';
import fs, { createReadStream } from 'fs';
import path from 'path';

module.exports = app =>{

    app.get('/',(req,res) =>{
        console.log(__dirname+'../pages/admin/adminPortal.html');
        
        res.writeHead(200,{'Content-Type': 'text/html5'});
        var myreadStream = fs.createReadStream(path.join(__dirname,'../pages/admin/adminPortal.html'))
        myreadStream.pipe(res);
    });

};