import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ContactListItem from "./ContactListItem";

const ContactList = ({ contacts }) => {
  if (contacts.length > 0) {
    return (
      <ul>
        {contacts.map(({ id }) => (
          <ContactListItem key={id} id={id} />
        ))}
      </ul>
    );
  } else return null;
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

const mapStateToProps = ({ contacts }) => {
  const { items, filter } = contacts;

  const visibleContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return {
    contacts: visibleContacts,
  };
};

export default connect(mapStateToProps)(ContactList);
