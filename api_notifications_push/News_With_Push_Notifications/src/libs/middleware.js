import hbs from 'express-handlebars';
import bodyParser from 'body-parser';
import path from 'path';
import express from 'express';
import cors from 'cors';

module.exports = app => {

    app.use(express.static(path.join(__dirname, '../../pages')));
    app.use(express.static(path.join(__dirname, '../../pages/Ts')));
    app.use(bodyParser.json());
    app.use(cors());

    app.engine('hbs', hbs({
        extname: 'hbs',
        layoutsDir: path.join(__dirname,'../../pages'),
        helpers: {
            section: function(name, options) { 
              if (!this._sections) this._sections = {};
                this._sections[name] = options.fn(this); 
                return null;
              }
          }    
    }));

    app.set('view engine', 'hbs');
    app.set('port', 3000);
    console.log("port setted in:", app.get('port'));
    
}