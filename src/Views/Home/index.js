import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../Components/NavBar";
import TableComponent from "../../Components/TableComponent";
import { connect } from "react-redux";
import "./style.scss";

const Home = (props) => {
  // props destructuring
  const { allUsers, oldUsers } = props;
  // state definitions
  const [users, setUsers] = useState([]);
  const [loadingFlag, setLoadingFlag] = useState(false);
  const [difference, setDifference] = useState(0);
  // useEffect
  useEffect(() => {
    setLoadingFlag(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setLoadingFlag(false);
        console.log("this is response", res);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        id: 1,
        name: "Salman Ahmed",
        username: "Reactive",
        email: "salman.ahmed.abbasi.24@gmail.com",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      })
      .then((res) => console.log("this is response from post", res))
      .catch((err) => console.log(err));
    let differ = allUsers.length - oldUsers.length;
    setDifference(differ);
  }, [difference, allUsers, oldUsers]);
  return (
    <div className="container-fluid bg-home">
      <NavBar difference={difference} />
      <div className="container">
        <TableComponent allUsers={users} loadingFlag={loadingFlag} />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  allUsers: state.users.allUsers,
  oldUsers: state.users.oldUsers,
});
export default connect(mapStateToProps)(Home);
