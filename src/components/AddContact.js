import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { addContact } from "../config/HandleApi";

const AddContact = () => {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
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
    addContact(info);
    navigate("/success");
  };

  return (
    <div>
      <h3 className="text-success fw-bold">Create Contact</h3>

      <form
        onSubmit={handleSubmit}
        style={{ width: "30em", display: " inline-block" }}
      >
        <input
          type="text"
          name="firstName"
          className="form-control mb-3"
          placeholder="FirstName"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          className="form-control mb-3"
          placeholder="LastName"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="phone"
          className="form-control mb-3"
          placeholder="PhoneNumber"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          className="form-control mb-3"
          placeholder="Email"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          className="form-control mb-3"
          placeholder="Address"
          required
          onChange={handleChange}
        />
        <input
          type="submit"
          className="btn btn-primary"
          value="Create"
          style={{ width: "17%" }}
          required
        />
        <Link to="/" className="btn btn-dark ms-5">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default AddContact;
