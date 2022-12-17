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
        style={{ width: "23em", display: " inline-block" }}
      >
        <input
          type="text"
          title="Enter first name"
          name="firstName"
          className="form-control mb-3 mt-2"
          placeholder="FirstName"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          title="Enter last name"
          name="lastName"
          className="form-control mb-3"
          placeholder="LastName"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          title="Enter a phone number"
          name="phone"
          className="form-control mb-3"
          placeholder="PhoneNumber"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          title="Enter an email"
          name="email"
          className="form-control mb-3"
          placeholder="Email"
          required
          onChange={handleChange}
        />
        <textarea
          type="text"
          title="Enter an address"
          name="address"
          className="form-control mb-3"
          placeholder="Address"
          required
          onChange={handleChange}
        />
        <input
          type="submit"
          className="btn btn-primary mt-2"
          value="Create"
          style={{ width: "19%" }}
          required
        />
        <Link to="/" className="btn btn-dark ms-5 mt-2">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default AddContact;
