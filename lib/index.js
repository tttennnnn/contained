const express = require("express");
const cors = require("cors");
const app = express();
const port = require('./config').port;

// CORS
const corsOptions = {
    origin: "*"
};
app.use(cors(corsOptions));

// json && urlencoded
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

// default route
app.get("/", (req, res) => {
    res.json({
        message: "good to go",
    });
});

// auth
const userRouter = require("./routes/user");
app.use("/user", userRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});