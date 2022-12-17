import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { updateContact } from "../config/HandleApi";

const EditContact = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    id: `${location.state.id}`,
    firstName: `${location.state.firstName}`,
    lastName: `${location.state.lastName}`,
    phone: `${location.state.phone}`,
    email: `${location.state.email}`,
    address: `${location.state.address}`,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setInfo((prev) => {
      return { ...prev, [name]: value };
    });

    console.log(info);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log("b-->", info);
    updateContact(info);
    navigate("/success");
  };

  return (
    <div>
      <h3 className="text-primary fw-bold">Edit Contact</h3>
      <form
        onSubmit={handleSubmit}
        style={{ width: "30em", display: " inline-block" }}
      >
        <input
          type="text"
          name="firstName"
          className="form-control mb-3"
          defaultValue={location.state.firstName}
          placeholder="FirstName"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          className="form-control mb-3"
          defaultValue={location.state.lastName}
          placeholder="LastName"
          onChange={handleChange}
        />
        <input
          type="number"
          name="phone"
          className="form-control mb-3"
          defaultValue={location.state.phone}
          placeholder="PhoneNumber"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          className="form-control mb-3"
          defaultValue={location.state.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          className="form-control mb-3"
          defaultValue={location.state.address}
          placeholder="Address"
          onChange={handleChange}
        />
        <input
          type="submit"
          className="btn btn-primary"
          value="Update"
          style={{ width: "17%" }}
        />
        <Link to="/" className="btn btn-dark ms-2">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default EditContact;
