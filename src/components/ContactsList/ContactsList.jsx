import { useDispatch, useSelector } from 'react-redux';
import css from './ContactsList.module.css';
import { deleteContactsThunk } from '../../redux/contactsSlice/operations';
import { Button, Item, List, Loading } from './ContactsList.styled';
import { Text } from '@chakra-ui/react';

export const ContactsList = () => {
  const isLoading = useSelector(state => state.contacts.isLoading);
  const contacts = useSelector(state => state.contacts.items);

  const filterContact = useSelector(state => state.filters.filter);

  const dispatch = useDispatch();

  const delContact = id => {
    dispatch(deleteContactsThunk(id));
  };

  const getFilterContact = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterContact)
    );
  };

  const visible = getFilterContact();

  return (
    <>
      <Loading>{isLoading && <p>Loading...</p>}</Loading>

      <List>
        {visible.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <Text fontSize={'30px'} color={'#041607'} fontWeight={'600'}>
                {name}: {number}
              </Text>

              <Button type="button" onClick={() => delContact(id)}>
                delete
              </Button>
            </Item>
          );
        })}
      </List>
    </>
  );
};
