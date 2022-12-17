import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { motion } from "framer-motion";

const Contact = ({ firstName, lastName, phone, email, address, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="contact" onClick={() => setIsOpen(!isOpen)}>
        <div className="icon-text-header">
          <div>
            <BsPersonCircle />
          </div>
          <div>First Name: </div>
          <div>{firstName}</div>
        </div>

        <div className="icons">
          <Link
            to="/edit"
            state={{
              firstName: firstName,
              lastName: lastName,
              phone: phone,
              email: email,
              address: address,
              id: id,
            }}
          >
            <BiEdit className="icon" style={{ color: "blue" }} />
          </Link>

          <Link
            to="/remove"
            state={{
              firstName: firstName,
              lastName: lastName,
              phone: phone,
              email: email,
              address: address,
              id: id,
            }}
          >
            <AiFillDelete className="icon" style={{ color: "red" }} />
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="details">
          <div className="icon-text">
            <div>
              <BsPersonCircle />
            </div>
            <div className="title">Last Name:</div>
            <div className="content">{lastName}</div>
          </div>
          <div className="icon-text">
            <div>
              <FiPhone />
            </div>
            <div className="title">Phone:</div>
            <div className="content">{phone}</div>
          </div>

          <div className="icon-text">
            <div>
              <AiOutlineMail />
            </div>
            <div className="title">Email:</div>
            <div className="content">{email}</div>
          </div>
          <div className="icon-text">
            <div>
              <AiOutlineHome />
            </div>
            <div className="title">Address:</div>
            <div className="content">{address}</div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Contact;
