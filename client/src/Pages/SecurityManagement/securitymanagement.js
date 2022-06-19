import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "../AdminRegistration/registration.css";
import data from "./mock-data-security.json";
import ReadOnlyRow from "./ReadOnlyRowSecurity";
import EditableRow from "./EditableRowSecurity";

const Stable = () => {

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    userName: "",
    nic: "",
    email:"",

  });

  const [editFormData, setEditFormData] = useState({
    userName: "",
    nic: "",
    email:"",

  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      userName: addFormData.userName,
      nic: addFormData.nic,
      email: addFormData.email,

    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      userName: editFormData.userName,
      nic: editFormData.nic,
      email: editFormData.email,

    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
        userName: contact.userName,
        nic: contact.nic,
        email: contact.email,

    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
     
      <form onSubmit={handleEditFormSubmit}>

        <table>
          <thead>
            <tr>
              <th>User Name</th>
              <th>NIC</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Security Management</h2>
      <form onSubmit={handleAddFormSubmit}>

      <input
          type="text"
          name="userName"
          required="required"
          placeholder="Enter username..."
          onChange={handleAddFormChange}
        />

        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />

        <button type="submit">Create Account </button>


      </form>
    </div>

  );
};

export default Stable;
