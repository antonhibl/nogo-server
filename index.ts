var Go : any = require('gonode').Go;
var go : typeof Go = new Go({
    path : 'nogo-server.go',
});

go.init(function(err) {
    if (err) throw err;

    // TODO: add code to execute commands
    go.execute({commandText: 'Hello friend - from gonode'}, function(result: any, response: any) {
        if(result.ok) {
            console.log('Go responded: ' + response.responseText);
        }
    });

    go.close();
})