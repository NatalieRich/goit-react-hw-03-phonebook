import s from './Phonebook.module.css'
import PropTypes from 'prop-types';

const Phonebook = ({contacts, deleteContact}) => {
    return (

        <div>
           
        <ul className={s.list}>
            {contacts.map(contact => <li
                key={contact.id}
                className={s.contact}>
                <p className={s.name}>{contact.name}:</p><p>{contact.number}</p>
                <button
                    type='button'
                    onClick={() => deleteContact(contact.id)}
                    className={s.buttonDelete}>
                    Delete</button>
                </li>)}
        </ul>
        </div>
        )
} 

Phonebook.propTypes = {
 contacts: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }),
  ),
  deleteContact: PropTypes.func.isRequired,
  
}

export default Phonebook