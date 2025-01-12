import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts(); // Зчитуємо існуючі контакти

    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    ); // Генеруємо нові контакти із заданою кількістю

    const updatedContacts = [...existingContacts, ...newContacts]; // Додаємо нові контакти до існуючих (об'єднання)

    await writeContacts(updatedContacts); // Записуємо оновлений масив контактів у файл db.json
  } catch (error) {
    console.error('Error generating contacts:', error.message);
    throw new Error('Failed to generate contacts');
  }
};

generateContacts(2);
