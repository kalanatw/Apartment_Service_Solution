import { React, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./Table.css";
import axios from "axios";

const BUTTON_STATUS = {
  EDIT: 0,
  SAVE: 1,
};

function ComplaintsTable() {
  const [data, setData] = useState([]);
  const [buttonStatus, setButtonStatus] = useState(BUTTON_STATUS.EDIT);
  const [editingTab, setEditingTab] = useState(null);
  const [reply, setReply] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    console.log("called");
    getComplaintsDetails();
  }, []);

  const editTheRow = (details) => {
    // Call the api
    axios
      .patch("http://localhost:8000/complaints/" + details._id, details)
      .then((res) => {
        console.log("Respnse IS : ", res);
        getComplaintsDetails();
        setButtonStatus(BUTTON_STATUS.EDIT);
        setEditingTab(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getComplaintsDetails = async () => {
    await axios
      .get("http://localhost:8000/complaints")
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div id="head">Complaints Management</div>
      <div className="app-container">
        <table id="complaints">
          <thead>
            <th>Complaint ID</th>
            <th>Date</th>
            <th>Category</th>
            <th>Description</th>
            <th>Reply</th>
            <th>Status</th>
            <th>Action Button</th>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => {
                return (
                  <>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.Date.split("T")[0]}</td>
                      <td>{item.Category}</td>
                      <td>{item.Description}</td>
                      {editingTab?._id === item?._id ? (
                        <td>
                          <input
                            type="text"
                            onChange={(event) => setReply(event.target.value)}
                          />
                        </td>
                      ) : (
                        <td>{item?.Reply || "Reply"}</td>
                      )}
                      {editingTab?._id === item?._id ? (
                        <td>
                          <input
                            type="text"
                            onChange={(event) => setStatus(event.target.value)}
                          />
                        </td>
                      ) : (
                        <td>{item?.Status || "Status"}</td>
                      )}

                      <td>
                        <button
                          onClick={() => {
                            if (buttonStatus === BUTTON_STATUS.EDIT) {
                              setEditingTab(item);
                              setButtonStatus(BUTTON_STATUS.SAVE);
                            } else {
                              // Call the api with edited details
                              const data = {
                                ...item,
                                Reply: reply,
                                Status: status,
                              };
                              editTheRow(data);
                            }
                          }}
                        >
                          {item?._id === editingTab?._id ? "Save" : "Edit"}
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default ComplaintsTable;
