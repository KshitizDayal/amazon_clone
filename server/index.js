//IMPORT FROM PACKAGES
const express = require('express');
const mongoose = require('mongoose');

//IMPORT FROM OTHER FILES
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");




//INIT   
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://kshitiz:kshitiz14@cluster0.nyshd9b.mongodb.net/?retryWrites=true&w=majority";

//middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);




//connections
mongoose.connect(DB).then(() => {
    console.log('connection successful');
}).catch((e) => {
    console.log(e);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
});
