import 'reflect-metadata';
import express from 'express';
import cors from 'cors';

import { AppDataSource } from './database/data-source';
import routes from './routes/index.routes';
import 'shared/container';
import 'dotenv/config';



AppDataSource.initialize()
  .then(() => {
    const app = express();
    
    app.use(cors({
      origin: 'http://localhost:5173',
      credentials: true,
    }));

    app.use(express.json());
    app.use(routes);

    const PORT = process.env.PORT || 3333;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Erro ao conectar no banco:', err);
  });
