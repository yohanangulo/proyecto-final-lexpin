const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const cors = require("cors");
const app = express();
const port = 3003;
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const  {serialize}  = require('cookie');
const { userSchema, ProductsSchema,  saleSchema, cartSchema } = require('./schemas'); 
app.use(express.json());
app.use(cors());

app.use(express.json());
app.use(cookieParser());

//CORS
const whitelist = ["http://localhost:3000", "http://localhost:3001"];
const corsOptions = {
  origin: (origin, callback) => {
    const existe = whitelist.some((dominio) => dominio === origin);
    if (existe || !origin) {
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  },
}; 

//coneccetar a la base de datos
async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/CRUD");
        console.log("Conectado a la base de datos");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
}

main();

const Sale = mongoose.model('Sale', saleSchema);
const User = mongoose.model('User', userSchema);
const Cart = mongoose.model('Cart', cartSchema);

// Inicio de sesión
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Busca el usuario en la base de datos
        const user = await User.findOne({ email, password });

        if (user && user.password === password) {
            const { name, lastname, email, birthdate, fechaCreacion, _id } = user


            return res.json({
                _id,
                name,
                lastname,
                email,
                birthdate,
                fechaCreacion,
            });
        }

        return res.status(401).json({ error: 'Invalid email or password' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'An error occurred' });
    }
});

// Ruta protegida
app.get('/protected', (req, res) => {
    // Verifica si el usuario tiene una cookie válida
    const token = req.cookies.myTokenName;
  
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    try {
      // Decodifica el token y verifica la autenticidad
      const decoded = jwt.verify(token, 'secret');
      const userEmail = decoded.email;
  
 
      return res.json({ message: 'Access granted' });
    } catch (error) {
      console.error(error);
      return res.status(401).json({ error: 'Unauthorized' });
    }
  });

//--------------------------
// usuarios
//---------------------------


app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al obtener los usuarios');
    }
});

app.get("/users/:email", async(req , res) =>{
    const email = req.params.id;
    const user = await User.findOne({ email: email });

    if (!user) {
        return res.status(404).send("Usuario no encontrado");
    }
    res.send(user);
})

app.post('/users', async (req, res) => {
    try {

        const user = new User(req.body);
        // const user = new User({
        //     name: "dorian",
        //     lastname: "matos",
        //     email: "dorianmatos75@gmail.com",
        //     birthdate: "1997-06-25T00:00:00.000Z",
        //     password: "Programador19.",
            
        // })

        await user.save();
        res.send('Usuario creado');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al crear el usuario');
    }
});

app.put("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const updatedUser = await User.updateOne( {_id: id}, req.body);
    console.log('Este es el usuario actualizado', updatedUser)
    
    if (!updatedUser) {
      return res.status(404).send("usuario no encontrado");
    }

    res.send(updatedUser);

  } catch (error) {
    console.log(error);
    res.status(500).send("Error al actualizar usuario");
  }
});

app.delete("/users/:id", async (req,res)=>{
    try{
        const id = req.params.id;

        const userDelete = await User.deleteOne({_id: id});
        if(!userDelete){
            return res.status(404).send("Usuario no encontrado");
        }
        res.send("Usuario eliminado correctamente");

    }catch(error){
        console.log(error);
        res.status(500).send("Error al eliminar usuario")
    }
});



//-----------------------------
//Ventas
//-----------------------------


app.post("/sales", async (req, res) => {
    try {
        const sales = new Sale({
            userId: mongoose.Types.ObjectId(),
            productos: [
                {   cantidad: 3 },              
            ],
            precioSinIva: 2000,
            precioConIva: 3040, 
            fechaCreacion: new Date(),
            fechaActualizacion: new Date()
        });
        
        await sales.save();
        res.send("venta correcta");
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al crear la venta');
    }
});

app.get("/sales", async(req,res)=>{
    try{
        const sales = await Sale.find();
        res.send(sales);
    }catch{
        console.log(error);
        res.status(500).send('Error al crear la venta')
    }
});

app.put("/sales/:id", async (req,res) =>{
    try {
        const id = req.params.id;
        const updatedVenta = await Sale.updateOne({_id:id}, req.body);
        if(!updatedVenta){
            return res.status(404).send("Venta no existe");
        }
        res.send(updatedVenta)
    } catch (error) {
        console.log(error);
        res.status(500).send("Error al actualizar la venta")
    }
});

app.delete("/sales/:id", async (req,res)=>{
    try {
        const id = req.params.id;
        const deleteSale = await User.deleteOne({_id:id});
        if (!deleteSale) {
            return res.status(404).send("Venta no existe");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Error al eliminar la venta")
    }
});



/**
 * shopping cart
 */

// GET all route
// 
// 
app.get("/cart", async (req, res) => {
  try {

    const cartItems = await Cart.find()
    res.send(cartItems)

  } catch (error) {
    res.status(500).send("ha ocurrido un error al consultar datos del carrito");
  }
});

// GET route
// 
// 
app.get("/cart/:userId", async (req, res) => {
  try {
    const { userId } = req.params

    const cartItems = await Cart.findOne({userId})

    res.send(cartItems.items)

  } catch (error) {
    res.status(500).send("ha ocurrido un error al consultar datos del carrito");
  }
});

// POST route
// 
// 
app.post('/cart', async (req, res) => {
  try {
    const { productId, quantity, userId, productName, image, price } = req.body;

    const userItems = await Cart.findOne({ userId });

    // si no encuentra usuario
    if (!userItems) {
      // crea una nueva entrada
      const addNewItem = new Cart({
        userId,
        items: [],
      });

      addNewItem.items.push({
        productId,
        productName,
        image,
        price,
        quantity,
      })

      await addNewItem.save();
      return res.status(200).send("agregado al carrito");
    }

    // si si lo encuentra
    userItems.items.push({
      productId,
      productName,
      image,
      price,
      quantity,
    })
    await userItems.save()

    res.status(200).send("agregado al carrito");
  } catch (error) {
    res.status(500).send("ha ocurrido un error agregando al carrito");
  }
} )

// PUT rout
// 
// 
app.put('/cart/:userId', async (req, res) => {
  try {

    const productId = req.body.productId
    const userId = req.params.userId

    const userItems = await Cart.findOne({userId})

    userItems.items = userItems.items.filter(item => item.productId != productId)

    const saveRes = await userItems.save()

    res.status(200).send(saveRes)
  } catch (error) {
    res.status(500).send('ha ocurrido un error eliminando del carrito')
  }
})

// DELETE rout
// 
// 
app.delete("/cart/:cartId/item/:itemId", async (req,res)=>{
  try {
      const id = req.params.id;
      const deleteCart = await User.deleteOne({_id:id});
      if (!deleteCart) {
          return res.status(404).send("Producto no existe");
      }
      res.send("Producto eliminado correctamente");
  } catch (error) {
      console.log(error);
      res.status(500).send("Error al eliminar Producto")
  }
});

//--------------------------------------------------------------------
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

app.listen(port, () => {
    console.log('El servidor está escuchando el puerto ' + port);
});
