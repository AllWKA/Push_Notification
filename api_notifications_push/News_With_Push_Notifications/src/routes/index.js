import path from 'path';


module.exports = app => {

   app.get('/', (req, res) => {
      res.render(path.join(__dirname, '../../pages/layouts/login.hbs'));
      
   });
   app.get('/menu', (req, res) => {
      res.render(path.join(__dirname, '../../pages/layouts/menu.hbs'));
   });
   app.get('/createUser', (req, res) => {
      res.render(path.join(__dirname, '../../pages/layouts/createUser.hbs'));
   });
   app.get('/createAdmin', (req, res) => {
      res.render(path.join(__dirname, '../../pages/layouts/createAdmin.hbs'));
   });
   app.get('/modifyUser', (req, res) => {
      res.render(path.join(__dirname, '../../pages/layouts/modifyUser.hbs'));
   });
   app.get('/modifyAdmin', (req, res) => {
      res.render(path.join(__dirname, '../../pages/layouts/modifyAdmin.hbs'));
   });

};