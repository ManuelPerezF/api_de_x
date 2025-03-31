import tweetsRoutes from './src/routes/tweets';
import userRoutes from './src/routes/users';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({message: 'Hello World!'});
});

app.use('/api/tweets', tweetsRoutes);
app.use('api/users', userRoutes);

app.listen(7000, () => {
    console.log('Server running on port 7000');
});
