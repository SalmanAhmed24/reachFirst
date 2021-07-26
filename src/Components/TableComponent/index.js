import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import FormModal from "../../Views/FormModal";
import "./style.scss";

const TableComponent = (props) => {
  // props destructure
  const { AllUsers } = props;
  // state definitions
  const [addToggle, setAddToggle] = useState(false);
  const [users, setUsers] = useState(AllUsers);
  const [searchValue, setSearchValue] = useState("");
  const [editToggle, setEditToggle] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  // useEffect
  useEffect(() => {
    setUsers(AllUsers);
  }, [AllUsers]);
  // functions
  const formModalToggle = () => {
    setAddToggle(!addToggle);
  };
  const editModalToggle = () => {
    console.log("called", editToggle);
    setEditToggle(!editToggle);
  };
  const onSearchHandler = (e) => {
    setSearchValue(e.target.value);
  };
  const editHandler = (item) => {
    editModalToggle();
    setCurrentItem(item);
  };
  const search = () => {
    let filteredUser = AllUsers.filter(
      (item) => item.jobTitle.toLowerCase() == searchValue.toLowerCase()
    );
    setUsers(filteredUser);
  };
  const clear = () => {
    setSearchValue("");
    setUsers(AllUsers);
  };
  return (
    <div className="table-component-main-wrap">
      <div className="container mt-5 mb-3">
        <div className="search-bar">
          <div className="inner-bar">
            <input
              type="text"
              onChange={(e) => onSearchHandler(e)}
              className="form-control"
              value={searchValue}
            />
          </div>
          <span className="search" onClick={() => search()}>
            Search
          </span>
          <span className="clear" onClick={() => clear()}>
            Clear
          </span>
        </div>
      </div>
      <div className="heading-wrapper">
        <span className="heading">Job Management</span>
        <span className="add-btn" onClick={() => formModalToggle()}>
          + Add New User
        </span>
      </div>
      {users && users.length ? (
        <table className="table cus-table-styles">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Job Title</th>
              <th scope="col">Experience</th>
              <th scope="col">Education</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.jobTitle}</td>
                    <td>{item.experience}</td>
                    <td>{item.education}</td>
                    <td>
                      <span
                        className="edit-btn"
                        onClick={() => editHandler(item)}
                      >
                        Edit
                      </span>
                      <span className="del-btn">Delete</span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : (
        <div className="no-result">
          <p>No Results Found</p>
        </div>
      )}
      {addToggle ? (
        <FormModal formModalToggle={formModalToggle} toggleFlag={addToggle} />
      ) : null}
      {editToggle ? (
        <FormModal
          currentItem={currentItem}
          editFlag={true}
          editModalToggle={editModalToggle}
          toggleFlag={editToggle}
        />
      ) : null}
    </div>
  );
};
const mapStateToProps = (state) => ({
  AllUsers: state.users.allUsers,
});
export default connect(mapStateToProps)(TableComponent);
