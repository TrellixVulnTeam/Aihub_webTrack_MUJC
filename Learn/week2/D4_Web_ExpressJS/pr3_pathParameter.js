const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("OK");
});

// path parameter 사용하기
app.get('/say/:greeting', (req, res) => {
    const { greeting } = req.params;
    res.send(greeting);
    //방법2
    // const greeting = req.params.greeting;
    // res.send(greeting)
});

app.listen(8080);