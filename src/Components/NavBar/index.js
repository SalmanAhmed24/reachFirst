import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./style.scss";
import { AllUsers } from "../../Utils/constants";
import { updateOldUser } from "../../store/actions/users";

const NavBar = (props) => {
  // props destructure
  const { allUsers, oldUsers, difference, updateOldUser } = props;
  const [notificationFlag, setNotificationFlag] = useState(false);
  const [newUsers, setNewUsers] = useState(null);
  const [oldUserCop, setOldUserCop] = useState([...oldUsers]);

  useEffect(() => {}, [oldUserCop, difference]);
  const openNotification = () => {
    const oldUserCopy = [...oldUsers];
    setNotificationFlag(!notificationFlag);
    let newAddedUsers = allUsers.filter((x) => !oldUserCopy.includes(x));
    setNewUsers(newAddedUsers);
  };
  const clearNotification = () => {
    const oldUserCopy = [...oldUsers];
    oldUserCopy.push(...newUsers);
    AllUsers.push(...newUsers);
    setNotificationFlag(!notificationFlag);
    setOldUserCop(oldUserCopy);
    updateOldUser(allUsers);
  };
  return (
    <div className="navbar-main">
      <div className="navbar-logo-wrap">
        <span>Logo</span>
      </div>
      <div className="navbar-bell-wrap">
        <div
          className={
            difference == 0 ? "navbar-circle" : "navbar-circle new-notification"
          }
        >
          <span>{difference}</span>
        </div>
        <i
          className="far fa-bell"
          onClick={() => {
            openNotification();
          }}
        ></i>
        {notificationFlag ? (
          <div className="notificationBar">
            {newUsers && newUsers.length ? (
              newUsers.map((item) => {
                return (
                  <div className="single-notification">
                    <span>icon</span>
                    <span>{item.jobTitle}</span>
                    <span>Description</span>
                  </div>
                );
              })
            ) : (
              <p>No new notifications found</p>
            )}
            {newUsers && newUsers.length ? (
              <span onClick={() => clearNotification()}>Clear All</span>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  allUsers: state.users.allUsers,
  oldUsers: state.users.oldUsers,
});
const mapStateToDispatch = (dispatch) => ({
  updateOldUser: (users) => dispatch(updateOldUser(users)),
});
export default connect(mapStateToProps, mapStateToDispatch)(NavBar);
