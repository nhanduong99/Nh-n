var express=require('express');
var app=express();
app.use(express.static("public"));
const test = require('./models/test.model');
const numeral = require('numeral');
var hbs=require('express-handlebars');


app.engine('hbs',hbs({
    extname: 'hbs',
    defaultLayout:'layout',
    layoutsDir:__dirname+'/views/layouts',
    partialsDir: __dirname+'/views/partials',

    helpers: {
      format: val => numeral(val).format('0,0') + ' VNĐ',
    }
    
}));
app.set('view engine','hbs');

app.get('/', async(req, res) =>{
    const rows = await test.all(); 
    
    res.render('index', {
      ghi : rows,
    });
});
app.get('/danhmuc/:id', async(req, res) => {
  const rows = await test.SP_DM(req.params.id); 
    res.render('danhmuc_sp',{
      abc: rows,
    });
});
app.get('/danhmuc/:madm/chitiet/:masp', async(req, res) => {
  const rows = await test.CT_SP(req.params.madm,req.params.masp); 
    res.render('chitiet_sp',{
      def: rows[0],
    });
});

const PORT = 3000;
app.listen(process.env.PORT || 5000);
