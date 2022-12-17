import React from "react";
import { Link, useLocation } from "react-router-dom";

import { deleteContact } from "../config/HandleApi";
import Contact from "./Contact";

const DeleteContact = () => {
  const location = useLocation();

  const handleClick = (id) => {
    deleteContact(id);
  };

  return (
    <div className="container">
      <Contact
        firstName={location.state.firstName}
        lastName={location.state.lastName}
        phone={location.state.phone}
        email={location.state.email}
        address={location.state.address}
      />

      <Link
        to="/success"
        className="btn btn-danger ms-2"
        onClick={handleClick(location.state.id)}
      >
        Delete
      </Link>
      <Link to="/" className="btn btn-dark ms-2">
        Cancel
      </Link>
    </div>
  );
};

export default DeleteContact;
