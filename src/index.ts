import express from 'express';
const app = express();
const PORT = 5000;

import indexRoutes from './routes/index';

// Middlewares
app.use(express.json());
app.use(express.urlencoded({
    extended: false,
}));

app.use(indexRoutes);

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});