import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "../AdminRegistration/registration.css";
//import data from "./mock-data-resident.json";
import ReadOnlyRow from "./ReadOnlyRowResident";
import EditableRow from "./EditableRowResident";

const Rtable = () => {

  const [contacts, setContacts] = useState([]);
  const [addFormData, setAddFormData] = useState({
    email: "",
    block_number: "",
    house_number: "",
  });

  const [editFormData, setEditFormData] = useState({
  
    email: "",
    block_number: "",
    house_number: "",
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
      email: addFormData.email,
      block_number: addFormData.block_number,
      house_number: addFormData.house_number,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      email: editFormData.email,
      block_number: editFormData.block_number,
      house_number: editFormData.house_number,
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
        email: contact.email,
        block_number: contact.block_number,
        house_number: contact.house_number,
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
     
      <form onSubmit={handleEditFormSubmit} className='registrationform'>

        <table>
          <thead>
            <tr>

              <th>E-mail</th>
              <th> House Number</th>
              <th>Block Number</th>
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

      <h2>Resident Management</h2>
      <form onSubmit={handleAddFormSubmit} className='registrationform'>

        <input
          type="email"
          name="email"
          required
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="block_number"
          required
          placeholder="Enter block number..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="house_number"
          required
          placeholder="Enter house number..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Create Account </button>


      </form>
    </div>

  );
};

export default Rtable;
