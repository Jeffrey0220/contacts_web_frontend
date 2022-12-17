import React from "react";
import { Link } from "react-router-dom";
import { FaRegAddressBook } from "react-icons/fa";
import { SlPlus } from "react-icons/sl";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-dark bg-dark navbar-expand-sm"
      style={{ marginBottom: "0.5rem" }}
    >
      <div className="container-fluid">
        <div className="">
          <Link to="/" className="navbar-brand">
            <div>
              <FaRegAddressBook />
            </div>
            <div>Contacts Book</div>
          </Link>
        </div>

        <div>
          <Link to="/add" className="btn btn-success">
            <div>
              <SlPlus />
            </div>
            <div>Add New</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
