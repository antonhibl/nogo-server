var Go = require('gonode').Go;
var go = new Go({
    path : 'nogo-server.go',
});

go.init(function(err) {
    if (err) throw err;

    // TODO: add code to execute commands
    go.execute({commandText: 'Hello friend - from gonode'}, function(result, response) {
        if(result.ok) {
            console.log('Go responded: ' + response.responseText);
        }
    });

    go.close();
})