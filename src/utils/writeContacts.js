import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    // Перетворення даних у формат JSON
    const jsonData = JSON.stringify(updatedContacts, null, 2); // Форматування для читабельності в текстовий формат JSON із відступами (2 пробіли).

    await fs.writeFile(PATH_DB, jsonData, 'utf-8'); // Запис даних у файл

    console.log('Contacts successfully updated!');
  } catch (error) {
    console.error('Error writing contacts:', error.message);
    throw new Error('Failed to update contacts');
  }
};
