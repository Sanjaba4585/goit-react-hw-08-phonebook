import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContactsThunk } from '../../redux/contactsSlice/operations';
import css from './Contacts.module.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Form } from 'components/Form/Form';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Your Tasks</title>
      </Helmet>
      <div className={css.container}>
        {isLoading && 'Request in progress...'}
      </div>
      <title>Phonebook</title>
      <Form />
      <title>Contacts</title>
      <Filter />
      <ContactsList />
    </HelmetProvider>
  );
};

export default Contacts;
