const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const cors = require("cors");
const app = express();
const port = 3003;
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
app.use(express.json());
app.use(cors());



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



// Registro de usuario
app.post('/signup', async (req, res) => {
    try {
        const { name, lastname, email, birthdate, password,confirmPassword } = req.body;
        const hashedPassword = await bcrypt.hash(contraseña, 10);

        const user = new User({
            name,
            lastname,
            email,
            birthdate,
            password,
            confirmPassword
        });

        await user.save();
        res.status(201).send('Usuario registrado correctamente');
    } catch (error) {
        res.status(500).send('Error al registrar el usuario');
    }
});

// Inicio de sesión
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ correo });

        if (!user) {
            return res.status(404).send('Usuario no encontrado');
        }

        const match = await bcrypt.compare(contraseña, user.contraseña);
        if (!match) {
            return res.status(401).send('Credenciales incorrectas');
        }

        // Aquí puedes generar un token de autenticación y enviarlo en la respuesta
        res.send('Inicio de sesión exitoso');
    } catch (error) {
        res.status(500).send('Error en el inicio de sesión');
    }
});

const productSchema = new mongoose.Schema({
    // productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    cantidad: { type: Number, required: true, min: 1 },
});


//Esquemas
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 50 },
    lastname: { type: String, required: true, minlength: 3, maxlength: 50 },
    email: { type: String, required: true, unique: true, minlength: 3, maxlength: 50 },
    birthdate: { type: Date, required: true, validate: [isValidAge] },
    password: { type: String, required: true, minlength: 8, maxlength: 50, validate: [isValidPassword] },
    fechaCreacion: { type: Date, default: Date.now },
    fechaActualizacion: { type: Date, default: Date.now },
});

const ProductsSchema = new mongoose.Schema({
    nombre: { type: String, required: true, minlength: 3, maxlength: 100 },
    descripcion: { type: String, required: true, minlength: 3, maxlength: 500 },
    precio: { type: Number, required: true, min: 0, max: 1000000 },
    cantidadEnInventario: { type: Number, required: true, min: 0 },
    categoria: { type: String, required: true, minlength: 3, maxlength: 50 },
    tipo: { type: String, required: true, enum: ['fisico', 'digital'] },
    // idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    fechaCreacion: { type: Date, default: Date.now },
    fechaActualizacion: { type: Date, default: Date.now },
    image:{type:String, require:true}
});

const saleSchema = new mongoose.Schema({
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },z
    productos: { type: [productSchema], required: true },
    precioSinIva: { type: Number, required: true, min: 0 },
    precioConIva: { type: Number, required: true, min: 0 },
    fechaCreacion: { type: Date, default: Date.now },
    fechaActualizacion: { type: Date, default: Date.now },
});


function isValidAge(value) {
    const currentDate = new Date();
    const userDate = new Date(value);
    return (currentDate.getFullYear() - userDate.getFullYear() >= 18);
}

function isValidPassword(value) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(value);
}


// modules
const User = mongoose.model('User', userSchema);
const Product = mongoose.model('Product', ProductsSchema);
const Sale = mongoose.model('Sale', saleSchema);

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

app.post('/users', async (req, res) => {
    try {
        // const user = new User(req.body);
        const user = new User({
            name: "Dorian",
            lastname: "Matos",
            email: "dorian@ddfs.com",
            birthdate: 123,
            password: "Programmer19.",
            fechaCreacion: 1234, 
            fechaActualizacion: 1234
        })
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

//----------------------------
//productos
//---------------------------
app.get("/products",upload.fields([{name: 'image', maxCount: 1}]), async(req,res)=>{
    try{
            const body = req.body;
            const image = req.file.image;

            if(image && image.length > 0){
                const{} = await uploadFile(image[0])
              
            }
        const productsAwait = await Product.find();
        res.send(productsAwait);
    }catch{
        console.log(error);
        res.status(500).send('Error al crear el usuario')
    }
});

app.post("/products", async (req, res) => {
    try {
        // const producto = new Product({
        //     nombre: "Dorian Matos",
        //     descripcion: "Hola",
        //     precio: 1234,
        //     cantidadEnInventario: 4,
        //     categoria: "camisa",
        //     tipo: 'fisico',
        //     // idUsuario:  mongoose.Types.ObjectId(),
        //     fechaCreacion: 123,
        //     fechaActualizacion: 123
        // });

        const producto = new Product(req.body);

        await producto.save();
        res.send("Producto creado");
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al crear el producto');
    }
});

app.put("/products/:id", async (req,res)=>{
    try{
        const id = req.params.id;
    

        const updatedProduct = await Product.updateOne({ _id: id }, req.body);
        if (!updatedProduct) {
            return res.status(404).send("Producto no encontrado");
        }
        res.send(updatedProduct);
    }catch(error){
        console.log(error);
        res.status(500).send("Error al actualizar el producto");
    }
});

app.delete("/products/:id", async (req,res)=>{
    try{
        const id = req.params.id;

        const deleteProduct = await Product.deleteOne({_id : id });
        if (!deleteProduct) {
            return res.status(404).send("Producto no encontrado");
        }
        res.send("Producto eliminado correctamente");

    }catch(error){
        console.log(error);
        res.status(500).send("Error al eliminar el producto")
    }
});


//-----------------------------
//Ventas
//-----------------------------


app.post("/sales", async (req, res) => {
    try {
        const sales = new Sale({
            // userId: mongoose.Types.ObjectId(),
            productos: [
                {   cantidad: 2 }, 
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
