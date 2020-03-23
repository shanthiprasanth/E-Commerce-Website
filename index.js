const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', {
        title: "Home"
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About Us"
    });
});

app.get('/blog', (req, res) => {
    res.render('blog');
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: "contact me"
    });
});

app.get('/shop', (req, res) => {
    res.render('shop');
});

app.get('/product-single', (req, res) => {
    res.render('product-single');
});

app.get('/cart', (req, res) => {
    res.render('cart');
});

app.get('/checkout', (req, res) => {
    res.render('checkout');
});

app.get('/blog-single', (req, res) => {
    res.render('blog-single');
});

app.get('/product/:id', (req, res) => {
    console.log(req.params.id);
    var data = [{
        id: 1,
        productName: "Jeans"
    },
    {
        id: 2,
        productName: "T-Shirt"
    }
    ]
    var result;
    data.forEach((product) => {
        if (product.id == req.params.id) {
            result = product;
            return true;
        }

    }

    )
    res.render('productdetail', {
        title: "Product Details"
    });
});


app.listen(process.env.PORT || 3000);