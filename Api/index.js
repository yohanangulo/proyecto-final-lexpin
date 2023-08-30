const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const cors = require("cors");
const app = express();
const port = 3003;
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const  {serialize}  = require('cookie');
const { userSchema, ProductsSchema,  saleSchema } = require('./schemas'); 
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

// Inicio de sesión
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Busca el usuario en la base de datos
        const user = await User.findOne({ email, password });

        if (user && user.password === password) {
            const { name, lastname, email, birthdate, fechaCreacion } = user
            // const claveSecreta = 'miClaveSecreta';
            // Generar un token
            // const token = jwt.sign({
            //     email: user.email,
            //     name: user.name,
            // }, claveSecreta, { expiresIn: '1h' });

            // res.cookie('token', token);
            // res.cookie('user', user.email);

            return res.json({
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
    try {
        const email = req.params.email;
        const user = await User.findOne({email});

        if(!user) {
            return res.status(404).send('user not found')
        }

        res.send(user);
    } catch (error) {
        
    }
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

app.put("/users/:id", async (req,res) =>{
    try{
    const id = req.params.id;
    

    const updatedUser = await User.updateOne({_id : id}, req.body);
    if(!updatedUser){
        return res.status(404).send("usuario no encontrado");
    }
    res.send(updateOne);
    }catch(error){
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
            precioSinIva: 500,
            precioConIva: 600, 
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

//--------------------------------------------------------------------
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

app.listen(port, () => {
    console.log('El servidor está escuchando el puerto ' + port);
});
