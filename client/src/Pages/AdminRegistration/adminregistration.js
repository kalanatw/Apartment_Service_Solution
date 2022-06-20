import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./registration.css";
//import data from "./mock-data-security.json";
import ReadOnlyRow from "./ReadOnlyRowAdmin";
import EditableRow from "./EditableRowAdmin";

const Atable = () => {

  const [contacts, setContacts] = useState([]);
  const [addFormData, setAddFormData] = useState({
    email:"",

  });

  const [editFormData, setEditFormData] = useState({
    email:"",

  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();
    console.log(event.target.value)
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

  const handleAddFormSubmit = async () => {
    await axios
      //.get("http://localhost:8000/complaints")
      .get("/admin/create")
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /*const handleAddFormSubmit = (event) => {
    event.preventDefault();
    console.log(addFormData)
    const getComplaintsDetails = async () => {
      await axios
        //.get("http://localhost:8000/complaints")
        .get("/complaint")
        .then((res) => {
          console.log(res.data.data);
          setData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const newContact = {
      id: nanoid(),
      email: addFormData.email,

    };*/

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
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

      <h2>Admin Management</h2>
      <form onSubmit={handleAddFormSubmit}>

        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={(e) =>
            setAddFormData({
              ...addFormData,
              email: e.target.value,
            })
          }

        />

        <button type="submit">Create Account </button>


      </form>
    </div>

  );
};

export default Atable;
