//=========================================
// puertos
//=========================================
process.env.PORT = process.env.PORT || 3000;


//entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// base de datos
let urlDB;


if (process.env.NODE_ENV === 'dev') {

    urlDB = 'mongodb://127.0.0.1:27017/cafe';
} else {

    //urlDB = 'mongodb://fama:cV476m4cfn6PvlTC@cluster0.670ig.mongodb.net/cafe';
    urlDB = 'mongodb+srv://fama:cV476m4cfn6PvlTC@cluster0.670ig.mongodb.net/cafe?retryWrites=true&w=majority';

}
process.env.URLDB = urlDB;

//'mongodb+srv://fama:cV476m4cfn6PvlTC@cluster0.670ig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';