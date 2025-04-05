import 'reflect-metadata';
import express from 'express';

import { AppDataSource } from './database/data-source';

AppDataSource.initialize()
  .then(() => {
    const app = express();

    app.use(express.json());

    const PORT = process.env.PORT || 3333;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Erro ao conectar no banco:', err);
  });
