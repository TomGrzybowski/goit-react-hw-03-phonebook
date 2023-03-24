import { Component } from 'react';
import { nanoid } from '../../../node_modules/nanoid/index.js';
import ContactForm from './ContactForm.jsx';
import ContactList from './ContactList.jsx';
import Filter from './Filter.jsx';
import PropTypes from 'prop-types';

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
  };

  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem('contacts')),
      });
    } else {
      localStorage.setItem('contacts', JSON.stringify([]));
    }
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  addContact = event => {
    event.preventDefault();

    // @ts-ignore
    const nameInput = document.querySelector('#name').value;

    // @ts-ignore
    const numberInput = document.querySelector('#number').value;
    const { contacts } = this.state;

    const nameExists = contacts.some(contact => contact.name === nameInput);

    if (nameExists) {
      alert(`${nameInput} is already present in the phonebook`);
      return;
    }
    const newContact = {
      id: `id-${nanoid()}`,
      name: nameInput,
      number: numberInput,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = event => {
    event.preventDefault();

    const targetName = event.target.name;
    const newContacts = [...this.state.contacts];

    const targetIndex = newContacts.findIndex(
      element => element.name === targetName
    );

    newContacts.splice(targetIndex, 1);

    this.setState(() => ({
      contacts: newContacts,
    }));
  };

  handleFilterUpdate = event => {
    event.preventDefault();
    // @ts-ignore
    const newFilterValue = document.querySelector('#filter-input').value;
    console.log(newFilterValue);
    this.setState(() => ({
      filter: newFilterValue,
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const { addContact, handleFilterUpdate, deleteContact } = this;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <h2>Contacts</h2>
        <Filter handleFilterUpdate={handleFilterUpdate} />
        <ContactList
          contacts={contacts}
          deleteContact={deleteContact}
          filter={filter}
        />
      </>
    );
  }
}

export default Phonebook;
