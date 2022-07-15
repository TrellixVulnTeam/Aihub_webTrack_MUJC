//------------------- index.js : 메인 -----------------
const express = require('express');
const router = require('./routes/users')
const app = express();

app.get('/', (req, res) => {
    res.send("OK");
});

/* 라우터를 '/users' 경로에 연결 */
// var userRouter = require('./routes/users'); /
app.use('/users',router);

app.listen(8080);


//---------------------- routes/users.js ---------------
const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('GET /users');
});

router.post('/', (req, res) => {
    res.send('POST /users');
});

router.put('/', (req, res) => {
    res.send('PUT /users');
});

router.delete('/', (req, res) => {
    res.send('DELETE /users');
});


module.exports = router;