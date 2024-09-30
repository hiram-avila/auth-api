import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Redis from 'ioredis';
import dotenv from 'dotenv';

dotenv.config();

const redisClient = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

export const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword });
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Error creando usuario' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Primero, intenta obtener el usuario desde Redis
    const cachedUser = await redisClient.get(email);

    let user;
    if (cachedUser) {
      // Si el usuario está en caché, lo parseamos
      user = JSON.parse(cachedUser);
    } else {
      // Si no, obtenemos el usuario de la base de datos
      user = await User.findOne({ where: { email } });
      if (user) {
        // Almacena el usuario en Redis con un tiempo de expiración de 1 hora
        await redisClient.set(email, JSON.stringify(user), 'EX', 3600);
      }
    }

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error en el inicio de sesión' });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await User.destroy({ where: { id } });
    // También puedes eliminar el usuario del caché
    await redisClient.del(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
};
