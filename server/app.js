var createError = require('http-errors');
var express = require('express');
var path = require('path');
var mssql = require('mssql');
var bodyParser = require('body-parser');


//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();

const config = {
  server: '192.68.100.153\\sqlexpress',
  database: 'Jhonea',
  user: 'sqluser',
  password: 'usersql'

};

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.set('port', process.env.PORT || 1337);
var staticPath = path.join(__dirname, '/');
    app.use(express.static(staticPath));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/client/public/index.html'));
})

 
// app.post('/SignInData', (req, res)=> {

//     var data = {
//         kanEmail: req.body.kanEmail,
//         kanPass: req.body.kanPass,      
//     };
  
//     try {
//         var conn = new mssql.ConnectionPool(config);
     
//         conn.connect().then(function () {
//             var request = new mssql.Request(conn);
  
//             request.input('kanEmail', mssql.NVarChar, data.kanEmail);
//             request.input('kanPass', mssql.NVarChar, data.kanPass);
  
//             request.execute('SpSignIn').then(function (recordsets) {
  
//                // console.log(recordsets.recordset);
//                 res.json(recordsets.recordset[0]);
  
//             });
//         });
//     }
//     catch (e) {
//         res.json(e);
//     }
  
//   });

  app.post('/GetCountryBo', function (req, res) {
   
    let param = req.body;
  
    try {
        var conn = new mssql.ConnectionPool(config);

        conn.connect().then(function () {

            var request = new mssql.Request(conn);
             request.input('couId', mssql.NVarChar, param.couId);

            request.execute('GetCountryData').then(function (recordsets) {
                // console.log(recordsets.recordset[0]);
                res.send(recordsets.recordsets[0]);

            });

            
        });
    }
    catch (e) {
        res.json(e);
    }
});

app.post('/AddCountryBo', function (req, res) {
  
    var param = req.body;
   
    try {
        var conn = new mssql.ConnectionPool(config);
       
        conn.connect().then(function () {
            var request = new mssql.Request(conn);
            request.input('couName', mssql.NVarChar, param.couName);
            request.input('couPhoneCode', mssql.NVarChar, param.couPhoneCode);
            request.input('couIsActive', mssql.NVarChar, param.couIsActive);
            
            request.execute('SpInsertCountryBo').then(function (recordsets) {
                // console.log(recordsets.recordset);
                res.redirect('/');

            });
        });
    }
    catch (e) {
        res.json(e);
    }
});

app.post('/EditCountryData', function (req, res) {
    
    try {
        var conn = new mssql.ConnectionPool(config);
        var data = {
            couId: req.body[0].couId,
            couIsActive: req.body[1].couIsActive,
            couName: req.body[2].couName,
            couPhoneCode: req.body[3].couPhoneCode,
        };
        // connect to your database
        conn.connect().then(function () {
            var request = new mssql.Request(conn);

            request.input('couId', mssql.NVarChar, data.couId);
            request.input('couIsActive', mssql.NVarChar, data.couIsActive);
            request.input('couName', mssql.NVarChar, data.couName);
            request.input('couPhoneCode', mssql.NVarChar, data.couPhoneCode);

            request.execute('SpEditCountryBo').then(function (recordsets) {
               // console.log(recordsets.recordset);
                res.json(recordsets.recordset);

            });
        });
    }
    catch (e) {
        res.json(e);
    }
});

app.post('/IsActive', function (req, res) {

    var param = req.body
    try {
        var conn = new mssql.ConnectionPool(config);
        conn.connect().then(function () {
            var sqlRequest = new mssql.Request(conn);
            sqlRequest.input('id', mssql.NVarChar, param.id);
            sqlRequest.input('isactive', mssql.NVarChar, param.isactive);
            sqlRequest.input('tblname', mssql.NVarChar, param.tblname);
            sqlRequest.input('kid', mssql.NVarChar, param.kid);
            sqlRequest.input('kactive', mssql.NVarChar, param.kactive);

            sqlRequest.execute('SpIsActive').then(function (recordsets) {
                res.redirect('/');
            });

        });
    } catch (e) {
        res.json(e);
    }
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log(err.message);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var server = app.listen(app.get('port'), function () {
    console.log('listening');
});

module.exports = app;
