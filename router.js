const mongoose=require('mongoose')
app.get('/products', (req, res) => {
    db.collection('products').find().toArray((err, products) => {
      if (err) {
        console.error(err);
        return res.sendStatus(500)}
  
            res.render('products', { customers });
          });
        });

            
app.get('/customers', (req, res) => {
    db.collection('customers').find().toArray((err, customers) => {
      if (err) {
        console.error(err);
        return res.sendStatus(500);
      }
  
      res.render('customers', { customers });
    });
  });
  
  app.get('/orders', (req, res) => {
    db.collection('orders').find().toArray((err, orders) => {
      if (err) {
        console.error(err);
        return res.sendStatus(500);
      }
  
      res.render('orders', { orders });
    });
  });
  

  app.post('/products', (req, res) => {
    // Extract product data from request body
    const product = req.body;
  
    // Insert new product into products collection
    db.collection('products').insertOne(product, (err, result) => {
      if (err) {
        console.error(err);
        return res.sendStatus(500);
      }
  
      res.sendStatus(200);
    });
  });

  
  