import axios from "axios";

const baseUrl = process.env.REACT_APP_SERVER_URL;

const getAll = (setContacts) => {
  axios
    .get(baseUrl)
    .then(({ data }) => {
      console.log("data: ", data);
      setContacts(data);
    })
    .catch((err) => console.log(err));
};

const addContact = (info) => {
  axios
    .post(`${baseUrl}/save`, {
      firstName: info.firstName,
      lastName: info.lastName,
      phone: info.phone,
      email: info.email,
      address: info.address,
    })
    .then(({ data }) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
};

const updateContact = (info) => {
  axios
    .post(`${baseUrl}/update`, {
      _id: info.id,
      firstName: info.firstName,
      lastName: info.lastName,
      phone: info.phone,
      email: info.email,
      address: info.address,
    })
    .then(({ data }) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
};

const deleteContact = (id) => {
  axios
    .post(`${baseUrl}/delete`, {
      _id: id,
    })
    .then(({ data }) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
};

// const deleteContact = (_id, setContacts) => {
//   axios
//     .post(`${baseUrl}/delete`, { _id: "" })
//     .then((data) => {
//       getAll(setContacts);
//     })
//     .catch((err) => console.log(err));
// };

export { getAll, addContact, updateContact, deleteContact };
