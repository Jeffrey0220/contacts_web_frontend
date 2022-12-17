import Contact from "./Contact";
import { useState, useEffect } from "react";
import { getAll } from "../config/HandleApi";
import Form from "react-bootstrap/Form";
import { motion } from "framer-motion";

const HomePage = () => {
  const [contacts, setContacts] = useState([]);
  const [selectTerm, setselectTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  console.log(alphabet);

  useEffect(() => {
    getAll(setContacts);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>Contacts List</h1>
        <input
          type="search"
          style={{ width: "23em" }}
          placeholder="Search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <div className="top">
          <Form.Select
            aria-label="Default select example"
            style={{ width: "20em" }}
            onChange={(event) => {
              console.log(event.target.value);
              setselectTerm(event.target.value);
            }}
          >
            <option value={""}>Select by Initial Letter</option>
            {alphabet.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </Form.Select>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="list"
        >
          {contacts
            .filter((e) => {
              if (selectTerm === "") {
                return e;
              } else if (selectTerm === e.firstName.charAt(0)) {
                return e;
              } else {
                return null;
              }
            })
            .filter((e) => {
              if (searchTerm === "") {
                return e;
              } else if (
                e.firstName.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return e;
              } else {
                return null;
              }
            })

            .sort((a, b) =>
              a.firstName.toUpperCase() > b.firstName.toUpperCase() ? 1 : -1
            )
            .map((item) => (
              <Contact
                key={item._id}
                firstName={item.firstName}
                lastName={item.lastName}
                phone={item.phone}
                email={item.email}
                address={item.address}
                id={item._id}
              />
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
