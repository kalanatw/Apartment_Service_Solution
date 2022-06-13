import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./registration.css";
/*import data from "./mock-data.json";*/
import ReadOnlyRow from "./ReadOnlyRowAdmin";
import EditableRow from "./EditableRowAdmin";

const Atable = () => {

  const [contacts, setContacts] = useState( data ); 
  const [addFormData, setAddFormData] = useState({
    userName: "",
    email: "",
    designation: "",
  });

  const [editFormData, setEditFormData] = useState({
    userName: "",
    email: "",
    designation: "",
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
      email: addFormData.email,
      designation: addFormData.designation,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      userName: editFormData.userName,
      email: editFormData.email,
      designation: editFormData.designation,
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
        email: contact.email,
        designation: contact.designation,
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
              <th>E-mail</th>
              <th> Desigation</th>
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

      <h2>Admin Management</h2>
      <form onSubmit={handleAddFormSubmit}>

        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="designation"
          required="required"
          placeholder="Enter designation..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add an admin </button>


      </form>
    </div>

  );
};

export default Atable;
