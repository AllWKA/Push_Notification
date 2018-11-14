module.exports = app => {
    
    console.log("setting port");
    
    app.set('port', 3000);
    console.log("port setted in:", app.get('port'));
    
}