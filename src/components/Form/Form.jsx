import { useDispatch, useSelector } from 'react-redux';
import css from './Form.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { addContactsThunk } from '../../redux/contactsSlice/operations';
import { Button, Input } from '@chakra-ui/react';

export const Form = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const formSubmit = e => {
    e.preventDefault();

    const contact = {
      id: nanoid(),
      name: e.target.name.value,
      number: e.target.number.value,
    };
    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert('Oops!');
      return;
    }
    dispatch(addContactsThunk(contact));
    e.target.reset();
  };

  // const { name, number } = form;

  return (
    <div className={css.container}>
      <form onSubmit={formSubmit}>
        <label>
          <h1 className={css.title}>Name</h1>
          <Input
            className={css.input}
            type="text"
            name="name"
            placeholder="Oleksandr Korniichuk"
            required
            id={nameInputId}
          />
          <h1 className={css.title}>Number</h1>
          <Input
            className={css.input}
            type="tel"
            name="number"
            placeholder="123-45-67"
            required
            id={numberInputId}
          />
        </label>
        <Button type="submit" className={css.btnSubmit}>
          Add contact
        </Button>
      </form>
    </div>
  );
};
