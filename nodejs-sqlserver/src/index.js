import express from 'express';
import models from '../models/index';
const app = express();
models.sequelize.sync({force:true}).then(() => {
    app.listen(8081);
});