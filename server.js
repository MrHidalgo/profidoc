var	express	    =	require('express'),
    app         =	express();

app.set('port',	(process.env.PORT	||	4000));


// MAIN PAGE
app.use('/',	        express.static('./dist/',
    {
        'index' : 'index.html'
    }
));

app.use('/about',	        express.static('./dist/',
    {
        'index' : 'about.html'
    }
));

app.use('/about-program',	        express.static('./dist/',
    {
        'index' : 'about-program.html'
    }
));

app.use('/check',	        express.static('./dist/',
    {
        'index' : 'check.html'
    }
));

app.use('/check-in',	        express.static('./dist/',
    {
        'index' : 'check-in.html'
    }
));

app.use('/check-in-register',	        express.static('./dist/',
    {
        'index' : 'check-in-register.html'
    }
));

app.use('/contacts',	        express.static('./dist/',
    {
        'index' : 'contacts.html'
    }
));

app.use('/content-info',	        express.static('./dist/',
    {
        'index' : 'content-info.html'
    }
));

app.use('/content-page',	        express.static('./dist/',
    {
        'index' : 'content-page.html'
    }
));

app.use('/contracts-creating',	        express.static('./dist/',
    {
        'index' : 'contracts-creating.html'
    }
));

app.use('/contracts-designer',	        express.static('./dist/',
    {
        'index' : 'contracts-designer.html'
    }
));

app.use('/contracts-list',	        express.static('./dist/',
    {
        'index' : 'contracts-list.html'
    }
));
app.use('/documents-designer',	        express.static('./dist/',
    {
        'index' : 'documents-designer.html'
    }
));
app.use('/idea',	        express.static('./dist/',
    {
        'index' : 'idea.html'
    }
));
app.use('/idea-all',	        express.static('./dist/',
    {
        'index' : 'idea-all.html'
    }
));
app.use('/idea-details',	        express.static('./dist/',
    {
        'index' : 'idea-details.html'
    }
));
app.use('/news',	        express.static('./dist/',
    {
        'index' : 'news.html'
    }
));
app.use('/news-details',	        express.static('./dist/',
    {
        'index' : 'news-details.html'
    }
));
app.use('/personal-area',	        express.static('./dist/',
    {
        'index' : 'personal-area.html'
    }
));
app.use('/personal-area-payment',	        express.static('./dist/',
    {
        'index' : 'personal-area-payment.html'
    }
));
app.use('/personal-area-document',	        express.static('./dist/',
    {
        'index' : 'personal-area-document.html'
    }
));
app.use('/personal-area-profile',	        express.static('./dist/',
    {
        'index' : 'personal-area-profile.html'
    }
));
app.use('/personal-area-check',	        express.static('./dist/',
    {
        'index' : 'personal-area-check.html'
    }
));
app.use('/personal-area-bonus',	        express.static('./dist/',
    {
        'index' : 'personal-area-bonus.html'
    }
));
app.use('/personal-area-order',	        express.static('./dist/',
    {
        'index' : 'personal-area-order.html'
    }
));
app.use('/registration',	        express.static('./dist/',
    {
        'index' : 'registration.html'
    }
));
app.use('/reviews',	        express.static('./dist/',
    {
        'index' : 'reviews.html'
    }
));
app.use('/scope',	        express.static('./dist/',
    {
        'index' : 'scope.html'
    }
));
app.use('/security',	        express.static('./dist/',
    {
        'index' : 'security.html'
    }
));


app.listen(app.get('port'),	function()	{
    console.log('Server	started:	http://localhost:'	+	app.get('port')	+	'/');
});