import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onClick }) => {
  const handleDeleteContact = id => {
    onClick(id);
  };

  return (
    <ul className={css.contacts}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactsItem}>
          {name}: {number}
          <button type="button" onClick={() => handleDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
