import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    const emptyContacts = []; // Очищаємо масив контактів
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(emptyContacts, null, 2),
      'utf-8',
    ); // // Записуємо порожній масив у файл
    console.log('All contacts have been removed successfully.');
  } catch (error) {
    console.error('Error removing contacts:', error.message);
    throw new Error('Failed to remove all contacts');
  }
};

removeAllContacts();
