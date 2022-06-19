import React, { useState, Fragment } from "react";
/*import axios from "axios";
import { Link, useNavigate } from "react-router-dom";*/
import { nanoid } from "nanoid";
/*import "../Login/styles.module.css";*/
import "./registration.css";
import data from "./mock-data-admin.json";
import ReadOnlyRowAdmin from "./ReadOnlyRowAdmin";
import EditableRowAdmin from "./EditableRowAdmin";
import { addAdminUser } from "../../utils/user";

const Atable = () => {



  const [contacts, setContacts] = useState([]);
  const [createdUsername,setCreatedUserName] = useState("");

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

  const [editContactId, setEditContactId] = useState(data);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const generateUserName = (email) => {
    
    const index = email.indexOf("@");
    setCreatedUserName(email.substring(0,index));
    return email.substring(0,index);
  }

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

    var newContact = {
      id: nanoid(),
      userName: addFormData.userName,
      email: addFormData.email,
      designation: addFormData.designation,
    };
    const username = generateUserName(addFormData.email)
    newContact.userName = username;
    const newContacts = [...contacts, newContact];
    // send backend request
    addAdminUser(newContact).then((res)=>{
      console.log("Add res:",res)
      setContacts(newContacts);
    }).catch((err)=>{
      // show that error occured while adding the user
    });
    
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
                  <EditableRowAdmin
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRowAdmin
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
          type="text"
          name="userName"
                  value={createdUsername}
                  disabled    
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
        <input
          type="text"
          name="designation"
          
          placeholder="Enter designation..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add an admin </button>


      </form>
    </div>

  );
};

export default Atable;