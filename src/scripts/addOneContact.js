import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFileSync(PATH_DB, 'utf-8'); // зчитує вміст файлу db.json у вигляді рядка
    const contacts = JSON.parse(data); // перетворює цей рядок у масив об’єктів
    const newContact = createFakeContact(); // створення нового контакту
    contacts.push(newContact); // додає об’єкт нового контакту до кінця масиву
    fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8'); // Запис оновленого масиву назад у файл
    console.log('New contact added successfully:', newContact);
  } catch (error) {
    console.error('Error adding contact:', error.message);
    throw new Error('Failed to add contact');
  }
};
addOneContact();
