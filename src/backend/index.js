require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./Route/User_route');
const challengeRoutes = require('./Route/Challenge_route');
const quizRoutes = require('./Route/Quiz_route');
const landmarkRoutes = require('./Route/LandMark_route');
const marketplaceRoutes = require('./Route/Item_route');
const userAuthRoutes=require('./Route/AuthRoute')
const app = express();
const PORT =  5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', userAuthRoutes);
app.use('/api/users', userRoutes);
app.use('/api/challenges', challengeRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/landmarks', landmarkRoutes);
app.use('/api/marketplace', marketplaceRoutes);
const url="mongodb://localhost:27017/tuniquest"
// MongoDB Connection
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('DB Connected'))
.catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));