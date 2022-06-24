/*

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
      .put("/complaint/" + details._id, details)
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
      //.get("http://localhost:8000/complaints")
      .get("/complaint")
      .then((res) => {
        console.log(res.data.data);

        let complaints = res.data.data;

        let completedComplaints = complaints.filter((singleComplaint) => {
          return (
            singleComplaint.Status.toString().toLowerCase().trim() === "pending"
          );
        });

        setData(completedComplaints);
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
            <th>Resident ID</th>
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
                      <td>{item.resident_id}</td>
                      <td>{item.date.split("T")[0]}</td>
                      <td>{item.category}</td>
                      <td>{item.description}</td>
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
export default ComplaintsTable;*/


{/*
showBillDetails() {
    if (){
      return (
        <>
          <br /><br />
          <div id="head">Complaints Management</div>
            <div className="app-container">
                <table id="complaints">
                    <thead>
                        <th>Number</th>
                        <th>Resident ID</th>
                        <th>Resident Name</th>
                        <th>Bill ID</th>
                        <th>Bill Amount</th>
                        <th>Paid Amount</th>
                        
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                        data.map((item, index) => {
                            return (
                                <>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.resident_id}</td>
                                    <td>{item.resident_name}</td>
                                    <td>{item.bill_id}</td>
                                    <td>{item.bill_amount}</td>
                                    <td>{item.paid_amount}</td>
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
        )
        }
        else{
          return <></>
}

render() {
    return (
      <>
        <form>

          <label className='lablecss'>
            Enter Bill Month
          </label>
          = <input type="text" name='month' onChange={this.handleChange} className='inputcss' required="required" />
          <br /><br />

          <label className='lablecss'>
            Enter Bill Type
          </label>
          = <input type="text" name='billType' onChange={this.handleChange} className='inputcss' required="required" />
          <br /><br />

          <button onClick={this.handlesubmit} className='submitcss'>Submit</button>

          {this.showBillDetails()}

        </form>

      </>
*/}