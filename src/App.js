import React, { Component } from 'react';
import './App.css';
import Phonebook from './Components/Phonebook'
import InputContacts from './Components/InputContacts'
import shortid from 'shortid'
import Filter from './Components/Filter'

class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
   filter: ''
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      console.log('Обновилось поле contacts, записываю contacts в хранилище');
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }

  }

  invalidParams = (contact) => {
    let existedContact = this.state.contacts.find(i => i.name === contact.name);
    return existedContact ? true : false;
    
  }

  addContact = ({name, number}) => {
    const contact = {
      id: shortid.generate(),
      name,
      number
    }

   if (this.invalidParams(contact)) {
      alert(`${contact.name} already exist`)
      return 
    }


    this.setState(({contacts}) => ({
      contacts: [contact, ...contacts]
    }))

     
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !==  contactId)
    }))
  }

  
  inputChange = e => {
        this.setState({ filter: e.currentTarget.value})
    }
     
  render() {
    const { filter } = this.state
    const normalizedFilter = this.state.filter.toLocaleLowerCase()
    const filterContacts = this.state.contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter))
    
        return (
          <div className="App">
             <h1>Phonebook</h1>
            <InputContacts submit={this.addContact} />
            <h2>Contacts</h2>
            <Filter filter={filter} onChange={this.inputChange} />
            <Phonebook contacts={filterContacts} deleteContact={this.deleteContact} />
            </div>
        )
    }
}



export default App;
