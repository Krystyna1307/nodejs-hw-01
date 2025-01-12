import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8'); // Зчитуємо вміст файлу db.json
    const allContacts = JSON.parse(data); // Перетворюємо JSON-рядок у масив об'єктів
    return allContacts; // Повертаємо масив контактів
  } catch (error) {
    console.error('Error reading contacts:', error.message);
    throw new Error('Failed to get contacts');
  }
};

console.log(await getAllContacts());
