import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { removeContact } from "../redux/phohebookActions";

const ContactListItem = ({ name, number, onRemove }) => (
  <li>
    <span>
      {name} {number}
    </span>
    <button type="button" className="deleteBtn" onClick={onRemove}>
      x
    </button>
  </li>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const item = state.contacts.items.find((item) => item.id === ownProps.id);
  return { ...item };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
