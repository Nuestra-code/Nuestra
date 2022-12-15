console.log('connected');

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");

/*import routes module*/
const courseRoutes = require("./routes/courseRoutes");
const userRoutes = require("./routes/userRoutes");

/*mongodb connection & notification*/
mongoose.connect('mongodb+srv://Nuestram21:Jtgs02211908@clusternuestra21.bjctsjs.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`Connected to Database`));
mongoose.set('strictQuery', true);

/*Middlewares*/
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())


/*Routes*/
app.use("/api/courses", courseRoutes);
app.use("/api/users", userRoutes);



app.listen(PORT, () => console.log(`Server running at port ${PORT}`))
