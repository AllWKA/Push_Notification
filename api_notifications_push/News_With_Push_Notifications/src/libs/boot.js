module.exports = app => {

    console.log("starting server");

    app.listen(app.get('port'), () => {
        
       
    });
    console.log('server in port:', app.get('port'));
};