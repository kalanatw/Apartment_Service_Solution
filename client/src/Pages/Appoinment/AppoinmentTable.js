import { React, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import "./AppoinmentTable.css";
import axios from "axios";
import { addAppoinment } from "../../utils/appoinment";

function AppoinmentTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("called");
    getAppoinmentDetails();
  }, []);

  const navigate = useNavigate();

  const navigateToAddAppoin = () => {
    // 👇️ navigate to /contacts
    console.log("im here");
    navigate("/Appointment");
    
  };

  const getAppoinmentDetails = async () => {
    await axios
      .get("http://localhost:4000/appointment/")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="Heding1">
        <h1>Admin side Appoinment</h1>
        <Button onClick={navigateToAddAppoin}>Add appoinment</Button>
      </div>
      <div className="app-container">
        <table className="table1">
          <thead>
            <th className="thh">ID</th>
            <th className="thh">Date</th>
            <th className="thh">Name</th>
            <th className="thh">NIC</th>
            <th className="thh">Mobile</th>
            <th className="thh">Number of guests</th>

            <th className="thh">Exp Date</th>
            <th className="thh">OTP</th>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => {
                console.log(item);
                return (
                  <>
                    <tr>
                      <td className="tdd">{index + 1}</td>
                      <td className="tdd">
                        {item.appointmentDate.split("T")[0]}
                      </td>
                      <td className="tdd">{item.appointmentName}</td>
                      <td className="tdd">{item.appointmentNIC}</td>
                      <td className="tdd">{item.mobileNumber}</td>
                      <td className="tdd">{item.numOfGuest}</td>
                      <td className="tdd">{item.expireDate.split("T")[0]}</td>
                      <td className="tdd">{item.otp}</td>

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
export default AppoinmentTable;
