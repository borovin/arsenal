var app = require('./index.js');

app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), function(){
    console.log("Node app is running at: " + app.get('port'))
});
