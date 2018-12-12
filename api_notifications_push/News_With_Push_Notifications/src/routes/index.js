import path from 'path';


module.exports = app => {

   app.get('/', (req, res) => {
      res.render(path.join(__dirname, '../../pages/layouts/login.hbs'));
   });
   app.get('/menu.hbs', (req, res) => {
      res.render(path.join(__dirname, '../../pages/layouts/menu.hbs'));
   });
   app.get('/createUser.hbs', (req, res) => {
      res.render(path.join(__dirname, '../../pages/layouts/createUser.hbs'));
   });

};