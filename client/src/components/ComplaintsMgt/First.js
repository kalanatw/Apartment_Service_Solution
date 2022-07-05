import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Table.css";
import axios from "axios";
import PendingBtn from "./PendingBtn";

const BUTTON_STATUS = {
  EDIT: 0,
  SAVE: 1,
};

function ComplaintsTable() {
  const [post, setPosts] = useState([]);
  const [buttonStatus, setButtonStatus] = useState(BUTTON_STATUS.EDIT);
  const [editingTab, setEditingTab] = useState(null);
  const [reply, setReply] = useState("");
  const [status, setStatus] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [originalPosts, setOriginalPosts] = useState([]);

  useEffect(() => {
    console.log("called");
    getComplaintsDetails();
  }, []);

  useEffect(() => {
    if (searchInput.length === 0) {
      setPosts(originalPosts);
    } else {
      const temp = post;
      const filteredData = temp.filter((item) =>
        item.resident_id.includes(searchInput)
      );

      setPosts(filteredData);
    }
  }, [searchInput]);

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
        console.log("res.data.data");

        console.log(res.data.data);
        setPosts(res.data.data);
        setOriginalPosts(res.data.data);
        console.log("data");
        console.log(post);
        console.log("data");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const filterItem = (curcat) => {
    let temoProduct = post.slice().filter((newVal) => {
      return newVal.Status === curcat;
    });
    setPosts(temoProduct);
  };

  const filterCategory = (curcat) => {
    let temoProduct = post.slice().filter((newVal) => {
      return newVal.category === curcat;
    });
    setPosts(temoProduct);
  };

  const filterAll = (curcat) => {
    getComplaintsDetails();
  };

  return (
    <>
      <div className="aa">
        <Link to="#" onClick={() => filterAll()}>
          <PendingBtn name="All" />
        </Link>

        <Link to="#" onClick={() => filterItem("Completed")}>
          <PendingBtn name="Completed" />
        </Link>
        <Link to="#" onClick={() => filterItem("Pending")}>
          <PendingBtn name="Pending" />
        </Link>

        <Link to="#" onClick={() => filterCategory("Air Conditioner")}>
          <PendingBtn name="A/C" />
        </Link>

        <Link to="#" onClick={() => filterCategory("Electricity")}>
          <PendingBtn name="Electricity" />
        </Link>

        <Link to="#" onClick={() => filterCategory("Elevator")}>
          <PendingBtn name="Elevator" />
        </Link>

        <Link to="#" onClick={() => filterCategory("Plumber")}>
          <PendingBtn name="Plumber" />
        </Link>

        <Link to="#" onClick={() => filterItem("Waste MAnagement Issues")}>
          <PendingBtn name="Waste Mgt" />
        </Link>

        <Link to="#" onClick={() => filterCategory("Other")}>
          <PendingBtn name="Other" />
        </Link>
      </div>

      <div id="head">Complaints Management</div>

      <div className="app-container">
       Enter Resident ID :  <input
          placeholder="Resident ID" 
          onChange={(event) => setSearchInput(event?.target?.value)}
        />
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
            {post.length > 0 ? (
              post.map((item, index) => {
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
export default ComplaintsTable;
