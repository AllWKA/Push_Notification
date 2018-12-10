import path from 'path';


module.exports = app =>{

    app.get('/',(req,res) =>{
       res.render(path.join(__dirname, '../pages/layouts/login.hbs'));
    });
    app.get('/notifications.hbs',(req,res) =>{
        res.render(path.join(__dirname, '../pages/layouts/notifications.hbs'));
     });

};