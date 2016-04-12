var	express	    =	require('express'),
    app         =	express();

app.set('port',	(process.env.PORT	||	4000));


// MAIN PAGE
app.use('/',	        express.static('./dist/',
    {
        'index' : 'index.html'
    }
));

// SCOPE PAGE
app.use('/scope',	    express.static('./dist/page/',
    {
        'index' : 'scope.html'
    }
));

// SECURITY PAGE
app.use('/security',	express.static('./dist/page/',
    {
        'index' : 'security.html'
    }
));

// ABOUT PAGE
app.use('/about',	express.static('./dist/page/',
    {
        'index' : 'about.html'
    }
));

// CONTENT INFO PAGE
app.use('/about-program',	express.static('./dist/page/',
    {
        'index' : 'content-info.html'
    }
));



app.listen(app.get('port'),	function()	{
    console.log('Server	started:	http://localhost:'	+	app.get('port')	+	'/');
});