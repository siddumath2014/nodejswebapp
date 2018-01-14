const express=require('express');
const hbs=require('hbs');

//test

var app=express();

hbs.registerPartials(__dirname+'/views/partials')

hbs.registerHelper("currentYear", function() {
  return new Date().getFullYear();
});



app.set('view engine','hbs');



app.use((req,res,next)=>{
  var now=new Date().toString();
var log=`${now}: ${req.method} ${req.url}`;
console.log(log);
  next();
});

//app.use((req,res,next)=>{
//  res.render('maintainance.hbs');
//});

app.use(express.static(__dirname+'/public'));


app.get('/',(req,res)=>{
  //res.send('<h1><b>Hello express!</h1></b>');
res.send({
  name : 'Siddu',
  address:'Gulbarga'
});
});

app.get('/home',(req,res)=>{
  res.render('home.hbs',{
  pageTitle: 'home page'
  }
  );
})



app.get('/help',(req,res)=>{
  res.render('help.hbs',{
  pageTitle: 'Help page'
  }
  );
})

app.get('/about',(req,res)=>{
  //res.send('about page');

  res.render('about.hbs',{
  currentDate:new Date().getFullYear(),
  pageTitle: 'About page'
  }
  );
})

//send back json with error handler
app.get('/bad',(req,res)=>{

  res.send({

  errorMessage:'error message handle'
  });
});
app.listen(3000);
