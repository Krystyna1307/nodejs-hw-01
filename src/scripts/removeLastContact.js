import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8'); // Зчитуємо вміст файлу db.json
    const contacts = JSON.parse(data); // Перетворюємо JSON у масив

    if (contacts.length === 0) {
      console.log('The contact list is already empty.');
      return;
    }
    const removedContact = contacts.pop(); // Видаляємо останній контакт

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8'); // Записуємо оновлений масив у файл

    console.log('Last contact removed successfully:', removedContact);
  } catch (error) {
    console.error('Error removing last contact:', error.message);
    throw new Error('Failed to remove last contact');
  }
};

removeLastContact();
