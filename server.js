const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');
const env = require('./environment.json').env;

const server = http.createServer(app);
const port = process.env.Port || 5000;

mongoose.connect(process.env.MongoUrl || env.MongoUrl, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    server.listen(port, () => {
        console.log("Server is Running on port : " + port);
    });
}).catch(err => {
    console.error(err);
});
mongoose.Promise = global.Promise;