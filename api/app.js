const express = require('express');
const app = express();
const postsRoutes = require('./routes/posts');
const authorsRoutes = require('./routes/authors');

app.use(express.json());
app.use('/api/posts', postsRoutes);
app.use('/api/authors', authorsRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
