const express = require("express");
const path = require("path");
const app = express();


const indexRouter = require("./routes/index");
const cancionesRoutes = require("./routes/cancionesRoutes");
const generosRoutes = require("./routes/generosRoutes")

/* method override para usar el put y delete  */
const methodOverride = require("method-override");
app.use(methodOverride("_method"));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))

app.use(express.static(path.resolve(__dirname, "../public")));

app.use(express.urlencoded({ extended: false }));


app.use("/", indexRouter);
app.use("/canciones", cancionesRoutes);
app.use("/generos", generosRoutes)

app.listen(3030, () => console.log("servidor corriendo en el puerto http://localhost:3030"));