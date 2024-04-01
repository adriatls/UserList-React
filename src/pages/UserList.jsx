import React from "react";
import PropTypes from "prop-types";

const UserList = ({ userList, setUserList, loggedWith }) => {
  console.log(userList, loggedWith);
  return <div>UserList</div>;
};

UserList.propTypes = {
  userList: PropTypes.array,
  setUserList: PropTypes.func,
  loggedWith: PropTypes.object
};

export default UserList;
