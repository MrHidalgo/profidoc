var	express	    =	require('express'),
    app         =	express();

app.set('port',	(process.env.PORT	||	4000));


// MAIN PAGE
app.use('/',	        express.static('./dist/',
    {
        'index' : 'index.html'
    }
));

// // SCOPE PAGE
// app.use('/scope',	    express.static('./dist/page/',
//     {
//         'index' : 'scope.html'
//     }
// ));
//
// // SECURITY PAGE
// app.use('/security',	express.static('./dist/page/',
//     {
//         'index' : 'security.html'
//     }
// ));
//
// // ABOUT PAGE
// app.use('/about',	express.static('./dist/page/',
//     {
//         'index' : 'about.html'
//     }
// ));
//
// // CONTENT INFO PAGE
// app.use('/content',	express.static('./dist/page/',
//     {
//         'index' : 'content-info.html'
//     }
// ));
//
// // REGISTRATION PAGE
// app.use('/registration',	express.static('./dist/page/',
//     {
//         'index' : 'registration.html'
//     }
// ));
//
// // CONTENT PAGE
// app.use('/content-page',	express.static('./dist/page/',
//     {
//         'index' : 'content-page.html'
//     }
// ));
//
// // NEWS DETAILS PAGE
// app.use('/news-details',	express.static('./dist/page/',
//     {
//         'index' : 'news-details.html'
//     }
// ));
//
// // CHECK
// app.use('/check',	express.static('./dist/page/',
//     {
//         'index' : 'check.html'
//     }
// ));

 // IDEA FOR BUSINESS
 app.use('/idea',	express.static('./dist/page/',
     {
         'index' : 'idea.html'
     }
 ));

 // IDEA FOR BUSINESS ALL
 app.use('/idea/all',	express.static('./dist/page/',
     {
         'index' : 'idea-all.html'
     }
 ));

 // IDEA FOR BUSINESS DETAILS
 app.use('/idea/details',	express.static('./dist/page/',
     {
         'index' : 'idea-details.html'
     }
 ));

// // REVIEWS
// app.use('/reviews',	express.static('./dist/page/',
//     {
//         'index' : 'reviews.html'
//     }
// ));
//
// // NEWS
// app.use('/news',	express.static('./dist/page/',
//     {
//         'index' : 'news.html'
//     }
// ));
//
// // IDEA FOR BUSINESS ALL
// app.use('/terms',	express.static('./dist/page/',
//     {
//         'index' : 'terms.html'
//     }
// ));
//
// // IDEA FOR BUSINESS ALL
// app.use('/privacy',	express.static('./dist/page/',
//     {
//         'index' : 'privacy.html'
//     }
// ));





app.listen(app.get('port'),	function()	{
    console.log('Server	started:	http://localhost:'	+	app.get('port')	+	'/');
});