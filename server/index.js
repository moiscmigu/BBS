    let express = require('express'),

    app = express()
    path = require('path');


let port = process.env.PORT || 3000;

//USES
app.use(express.static('public'));

//ROUTERS
app.get('/', (req, res) => {
    console.log('Main URL hit')
    res.sendFile(path.resolve('public/views/index.html'))
});

app.post('/', (req, res) => {
    console.log('post to Main URl hit');
    res.sendStatus(200);
})




app.listen(port, () => {
console.log('server up on port:', port);
})
