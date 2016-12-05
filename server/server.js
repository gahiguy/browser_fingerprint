/**
 * server.js
 *
 * @author Nicolas GIGOU
 * @date_created 12/05/2016
 * @description The server settings
 */

/*
 * --------------------------------------------
 * Required modules and router modules
 * npm modules
 * --------------------------------------------
 */
// Express framework and other tools/modules
var express       = require('express');
var path          = require('path');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');

// Routes
var stats         = require('./routes/sa_stats');

// Application
var app = express();

/*
 * --------------------------------------------
 * View engine setup and static files
 * --------------------------------------------
 */
// If you don't choose a view engine, comment this section
app.set('views', path.join(__dirname, '../src/'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended: false
    }
));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../src')));


/*
 * --------------------------------------------
 * Routing
 * --------------------------------------------
 */
app.use('/api/fingerprints', fingerprints);


/*
 * --------------------------------------------
 * Server settings
 * --------------------------------------------
 */
var server = app.listen(3000, function()
{
    var host = '192.168.1.25';
    var port = server.address().port;

    console.log("         _______           ");
    console.log("       _/       \\_        ");
    console.log("      / |       | \\       ");
    console.log("     /  |__   __|  \\      ");
    console.log("    |__/((o| |o))\\__|     ");
    console.log("    |      | |      |      ");
    console.log("    |\\     |_|     /|     ");
    console.log("    | \\           / |     ");
    console.log("     \\| /  ___  \\ |/     ");
    console.log("      \\ | / _ \\ | /      ");
    console.log("       \\_________/        ");
    console.log("        _|_____|_          ");
    console.log("   ____|_________|____     ");
    console.log("  /                   \\   ");

    console.log('Big Brother is watching you at http://%s:%s', host, port);
});

module.exports = app;