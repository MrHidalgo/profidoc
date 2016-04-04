var	express	    =	require('express'),
    app         =	express();

app.set('port',	(process.env.PORT	||	4000));
app.use('/scope',	express.static('./dist/page/', {'index' : 'scope.html'}));
app.use('/',	express.static('./dist/', {'index' : 'index.html'}));

app.listen(app.get('port'),	function()	{
    console.log('Server	started:	http://localhost:'	+	app.get('port')	+	'/');
});