import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises'; // Використовується для асинхронної роботи з файловою системою

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8'); // Зчитуємо вміст файлу
    return JSON.parse(data); // Парсимо JSON-дані та повертаємо їх
  } catch (error) {
    console.error('Error reading contacts:', error.message);
    throw new Error('Failed to read contacts');
  }
};
