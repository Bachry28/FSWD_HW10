const express = require('express');
const app = express();
const pool = require('./database.js');
const uploadRouter = require('./upload.js');
const movieRouter = require('./router/movies.js');
const userRouter = require('./router/users.js');
const userrepoRouter= require('./router/usersrepository.js')
const movierepoRouter= require('./router/moviesrepository.js')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./Documentation/swagger.json');
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api-doc/hw10', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/movies', movieRouter);
app.use('/users', userRouter);
app.use('/upload', uploadRouter);
app.use('/upload', express.static(path.join(__dirname, 'upload')));
app.use('/usersrepo', userrepoRouter);
app.use('/movierepo', movierepoRouter);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

pool.connect((err) => {
    if (err) {
        console.error('Kesalahan koneksi database:', err);
    } else {
        console.log('Terhubung ke database');
    }
});

// Menjalankan server pada port 8080
app.listen(8080, () => {
    console.log('Server berjalan di port 8080');
});
