import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact, filter }) => {
  const shownContacts = contacts.filter(person => person.name.includes(filter));
  return (
    <ul>
      {shownContacts.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name} {contact.number}{' '}
            <button type="button" name={contact.name} onClick={deleteContact}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
  filter: PropTypes.string,
};

export default ContactList;
