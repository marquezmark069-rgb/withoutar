const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3000;


app.use(express.json({ limit: '50mb' })); // Allow large base64 images
app.use(cors()); // Enable CORS for frontend


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'capstone_db'
});


db.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
    process.exit(1);
  }
  console.log('✅ Connected to MySQL database: capstone_db');
});


function generateRefCode() {
  const year = new Date().getFullYear();
  const random = Math.random().toString(36).substr(2, 6).toUpperCase();
  return `DEL-${year}-${random}`;
}



// SIGNUP - Register new user
app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  // Validate inputs
  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }

  
  const checkQuery = 'SELECT * FROM users WHERE email = ?';
  db.query(checkQuery, [email], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Database error'
      });
    }

    if (results.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Email already exists'
      });
    }

    
    const insertQuery = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(insertQuery, [name, email, password], (err, result) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({
          success: false,
          message: 'Failed to create account'
        });
      }

      res.status(201).json({
        success: true,
        message: 'Account created successfully',
        userId: result.insertId
      });
    });
  });
});


app.post('/login', (req, res) => {
  const { email, password } = req.body;

  
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required'
    });
  }

 
  const query = 'SELECT id, name, email FROM users WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Database error'
      });
    }

    if (results.length === 0) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    const user = results[0];
    res.json({
      success: true,
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });
  });
});



// GET all furniture
app.get('/products', (req, res) => {
  const query = 'SELECT * FROM furniture ORDER BY created_at DESC';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to fetch furniture'
      });
    }

    res.json({
      success: true,
      data: results
    });
  });
});


app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM furniture WHERE id = ?';
  
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to fetch furniture'
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Furniture not found'
      });
    }

    res.json({
      success: true,
      data: results[0]
    });
  });
});


app.post('/add-product', (req, res) => {
  const { name, category, price, material, dimensions, description, image } = req.body;

  // Validate inputs
  if (!name || !category || !price) {
    return res.status(400).json({
      success: false,
      message: 'Name, category, and price are required'
    });
  }

  const query = 'INSERT INTO furniture (name, category, price, material, dimensions, description, image) VALUES (?, ?, ?, ?, ?, ?, ?)';
  
  db.query(query, [name, category, price, material || '', dimensions || '', description || '', image || ''], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to add furniture'
      });
    }

    res.status(201).json({
      success: true,
      message: 'Furniture added successfully',
      id: result.insertId
    });
  });
});


app.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const { name, category, price, material, dimensions, description, image } = req.body;

  const query = 'UPDATE furniture SET name = ?, category = ?, price = ?, material = ?, dimensions = ?, description = ?, image = ? WHERE id = ?';
  
  db.query(query, [name, category, price, material, dimensions, description, image, id], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to update furniture'
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Furniture not found'
      });
    }

    res.json({
      success: true,
      message: 'Furniture updated successfully'
    });
  });
});


app.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM furniture WHERE id = ?';
  
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to delete furniture'
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Furniture not found'
      });
    }

    res.json({
      success: true,
      message: 'Furniture deleted successfully'
    });
  });
});



// GET all inventory
app.get('/inventory', (req, res) => {
  const query = 'SELECT * FROM inventory ORDER BY last_updated DESC';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to fetch inventory'
      });
    }

    res.json({
      success: true,
      data: results
    });
  });
});


app.post('/inventory', (req, res) => {
  const { name, category, quantity } = req.body;

  if (!name || !category || quantity === undefined) {
    return res.status(400).json({
      success: false,
      message: 'Name, category, and quantity are required'
    });
  }

  const query = 'INSERT INTO inventory (name, category, quantity) VALUES (?, ?, ?)';
  
  db.query(query, [name, category, quantity], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to add inventory item'
      });
    }

    res.status(201).json({
      success: true,
      message: 'Inventory item added successfully',
      id: result.insertId
    });
  });
});


app.put('/inventory/:id', (req, res) => {
  const { id } = req.params;
  const { name, category, quantity } = req.body;

  const query = 'UPDATE inventory SET name = ?, category = ?, quantity = ?, last_updated = CURRENT_TIMESTAMP WHERE id = ?';
  
  db.query(query, [name, category, quantity, id], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to update inventory'
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Inventory item not found'
      });
    }

    res.json({
      success: true,
      message: 'Inventory updated successfully'
    });
  });
});


app.delete('/inventory/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM inventory WHERE id = ?';
  
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to delete inventory item'
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Inventory item not found'
      });
    }

    res.json({
      success: true,
      message: 'Inventory item deleted successfully'
    });
  });
});


app.get('/deliveries', (req, res) => {
  const query = 'SELECT * FROM deliveries ORDER BY created_at DESC';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to fetch deliveries'
      });
    }

    res.json({
      success: true,
      data: results
    });
  });
});


app.get('/deliveries/track/:refCode', (req, res) => {
  const { refCode } = req.params;
  const query = 'SELECT * FROM deliveries WHERE ref_code = ?';
  
  db.query(query, [refCode], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to fetch delivery'
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Delivery not found'
      });
    }

    res.json({
      success: true,
      data: results[0]
    });
  });
});


app.post('/deliveries', (req, res) => {
  const { customer_name, address, status, delivery_date } = req.body;

  if (!customer_name || !address) {
    return res.status(400).json({
      success: false,
      message: 'Customer name and address are required'
    });
  }

  const refCode = generateRefCode();
  const query = 'INSERT INTO deliveries (ref_code, customer_name, address, status, delivery_date) VALUES (?, ?, ?, ?, ?)';
  
  db.query(query, [refCode, customer_name, address, status || 'Pending', delivery_date || null], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to add delivery'
      });
    }

    res.status(201).json({
      success: true,
      message: 'Delivery added successfully',
      id: result.insertId,
      ref_code: refCode
    });
  });
});


app.put('/deliveries/:id', (req, res) => {
  const { id } = req.params;
  const { customer_name, address, status, delivery_date } = req.body;

  const query = 'UPDATE deliveries SET customer_name = ?, address = ?, status = ?, delivery_date = ? WHERE id = ?';
  
  db.query(query, [customer_name, address, status, delivery_date, id], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to update delivery'
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Delivery not found'
      });
    }

    res.json({
      success: true,
      message: 'Delivery updated successfully'
    });
  });
});


app.delete('/deliveries/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM deliveries WHERE id = ?';
  
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to delete delivery'
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Delivery not found'
      });
    }

    res.json({
      success: true,
      message: 'Delivery deleted successfully'
    });
  });
});


app.get('/sales', (req, res) => {
  const query = 'SELECT * FROM sales ORDER BY sale_date DESC';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to fetch sales'
      });
    }

    res.json({
      success: true,
      data: results
    });
  });
});


app.post('/sales', (req, res) => {
  const { customer_name, product_name, amount, sale_date } = req.body;

  if (!customer_name || !product_name || !amount) {
    return res.status(400).json({
      success: false,
      message: 'Customer name, product name, and amount are required'
    });
  }

  const query = 'INSERT INTO sales (customer_name, product_name, amount, sale_date) VALUES (?, ?, ?, ?)';
  
  db.query(query, [customer_name, product_name, amount, sale_date || new Date()], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to add sales record'
      });
    }

    res.status(201).json({
      success: true,
      message: 'Sales record added successfully',
      id: result.insertId
    });
  });
});


app.delete('/sales/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM sales WHERE id = ?';
  
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to delete sales record'
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Sales record not found'
      });
    }

    res.json({
      success: true,
      message: 'Sales record deleted successfully'
    });
  });
});


app.get('/reviews', (req, res) => {
  const query = 'SELECT * FROM reviews ORDER BY review_date DESC';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to fetch reviews'
      });
    }

    res.json({
      success: true,
      data: results
    });
  });
});


app.post('/reviews', (req, res) => {
  const { product_name, reviewer_name, rating, review_text, review_date } = req.body;

  if (!product_name || !reviewer_name || !rating || !review_text) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }

  const query = 'INSERT INTO reviews (product_name, reviewer_name, rating, review_text, review_date) VALUES (?, ?, ?, ?, ?)';
  
  db.query(query, [product_name, reviewer_name, rating, review_text, review_date || new Date()], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to add review'
      });
    }

    res.status(201).json({
      success: true,
      message: 'Review added successfully',
      id: result.insertId
    });
  });
});


app.delete('/reviews/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM reviews WHERE id = ?';
  
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to delete review'
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Review not found'
      });
    }

    res.json({
      success: true,
      message: 'Review deleted successfully'
    });
  });
});



app.get('/business-info', (req, res) => {
  const query = 'SELECT * FROM business_info WHERE id = 1';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to fetch business info'
      });
    }

    if (results.length === 0) {
      
      return res.json({
        success: true,
        data: {
          hero_title: 'About ECL FURNITURE MART',
          hero_description: 'We offer complete line of ready made home and office furnitures.',
          story: 'ECL FURNITURE MART has been serving the community for years with quality furniture solutions.',
          policies: 'Our policies ensure customer satisfaction and quality service.',
          mission: 'To provide high-quality, affordable furniture that transforms houses into homes.',
          return_policy: 'We accept returns within 30 days of purchase with original receipt.',
          warranty_policy: 'All furniture comes with a 1-year manufacturer warranty.',
          delivery_policy: 'Free delivery within 50km radius. Additional charges may apply for distant locations.',
          payment_policy: 'We accept cash, credit cards, and online payment methods.'
        }
      });
    }

    res.json({
      success: true,
      data: results[0]
    });
  });
});


app.post('/business-info', (req, res) => {
  const { 
    hero_title, 
    hero_description, 
    story, 
    mission, 
    return_policy, 
    warranty_policy, 
    delivery_policy, 
    payment_policy 
  } = req.body;

  
  const checkQuery = 'SELECT * FROM business_info WHERE id = 1';
  
  db.query(checkQuery, (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Database error'
      });
    }

    if (results.length === 0) {
      
      const insertQuery = `INSERT INTO business_info 
        (id, hero_title, hero_description, story, mission, return_policy, warranty_policy, delivery_policy, payment_policy) 
        VALUES (1, ?, ?, ?, ?, ?, ?, ?, ?)`;
      
      db.query(insertQuery, [
        hero_title, hero_description, story, mission, 
        return_policy, warranty_policy, delivery_policy, payment_policy
      ], (err) => {
        if (err) {
          console.error('Database error:', err);
          return res.status(500).json({
            success: false,
            message: 'Failed to save business info'
          });
        }

        res.json({
          success: true,
          message: 'Business information saved successfully'
        });
      });
    } else {
      
      const updateQuery = `UPDATE business_info SET 
        hero_title = ?, 
        hero_description = ?, 
        story = ?, 
        mission = ?, 
        return_policy = ?, 
        warranty_policy = ?, 
        delivery_policy = ?, 
        payment_policy = ?,
        updated_at = CURRENT_TIMESTAMP
        WHERE id = 1`;
      
      db.query(updateQuery, [
        hero_title, hero_description, story, mission, 
        return_policy, warranty_policy, delivery_policy, payment_policy
      ], (err) => {
        if (err) {
          console.error('Database error:', err);
          return res.status(500).json({
            success: false,
            message: 'Failed to update business info'
          });
        }

        res.json({
          success: true,
          message: 'Business information updated successfully'
        });
      });
    }
  });
});


app.get('/contact-info', (req, res) => {
  const query = 'SELECT * FROM contact_info WHERE id = 1';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to fetch contact info'
      });
    }

    if (results.length === 0) {
      
      return res.json({
        success: true,
        data: {
          phone: '+1 234 567 8900',
          email: 'info@eclfurniture.com',
          address: '123 Furniture Street, City, State 12345',
          business_hours: 'Mon-Sat: 9:00 AM - 6:00 PM'
        }
      });
    }

    res.json({
      success: true,
      data: results[0]
    });
  });
});


app.post('/contact-info', (req, res) => {
  const { phone, email, address, business_hours } = req.body;

  const checkQuery = 'SELECT * FROM contact_info WHERE id = 1';
  
  db.query(checkQuery, (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Database error'
      });
    }

    if (results.length === 0) {
      
      const insertQuery = `INSERT INTO contact_info (id, phone, email, address, business_hours) VALUES (1, ?, ?, ?, ?)`;
      
      db.query(insertQuery, [phone, email, address, business_hours], (err) => {
        if (err) {
          console.error('Database error:', err);
          return res.status(500).json({
            success: false,
            message: 'Failed to save contact info'
          });
        }

        res.json({
          success: true,
          message: 'Contact information saved successfully'
        });
      });
    } else {
      
      const updateQuery = `UPDATE contact_info SET phone = ?, email = ?, address = ?, business_hours = ?, updated_at = CURRENT_TIMESTAMP WHERE id = 1`;
      
      db.query(updateQuery, [phone, email, address, business_hours], (err) => {
        if (err) {
          console.error('Database error:', err);
          return res.status(500).json({
            success: false,
            message: 'Failed to update contact info'
          });
        }

        res.json({
          success: true,
          message: 'Contact information updated successfully'
        });
      });
    }
  });
});

app.get('/staff', (req, res) => {
  const query = 'SELECT id, name, email, created_at FROM users ORDER BY created_at DESC';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to fetch staff accounts'
      });
    }

    res.json({
      success: true,
      data: results
    });
  });
});


app.post('/staff', (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and password are required'
    });
  }

  
  const checkQuery = 'SELECT * FROM users WHERE email = ?';
  db.query(checkQuery, [email], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Database error'
      });
    }

    if (results.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Email already exists'
      });
    }

    
    const insertQuery = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(insertQuery, [name, email, password], (err, result) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({
          success: false,
          message: 'Failed to create staff account'
        });
      }

      res.status(201).json({
        success: true,
        message: 'Staff account created successfully',
        id: result.insertId
      });
    });
  });
});


app.delete('/staff/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM users WHERE id = ?';
  
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to delete staff account'
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Staff account not found'
      });
    }

    res.json({
      success: true,
      message: 'Staff account deleted successfully'
    });
  });
});


app.listen(PORT, () => {
  console.log('==============================================');
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log('==============================================');
});