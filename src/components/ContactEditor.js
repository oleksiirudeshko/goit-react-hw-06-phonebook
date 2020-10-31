import React, { Component } from "react";
import { connect } from "react-redux";

import { addContact } from "../redux/phohebookActions";

const INIT = {
  name: "",
  number: "",
};

class ContactEditor extends Component {
  state = INIT;
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddContact(this.state);
    this.setState(INIT);
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Name
            <br />
            <input
              type="text"
              value={name}
              onChange={this.handleChange}
              name="name"
            />
          </label>
          <label htmlFor="number">
            Number
            <br />
            <input
              type="text"
              value={number}
              onChange={this.handleChange}
              name="number"
            />
          </label>
          <button type="submit" className="add_contact">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onAddContact: addContact,
};

export default connect(null, mapDispatchToProps)(ContactEditor);
