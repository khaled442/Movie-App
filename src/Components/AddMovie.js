import React, { useState } from "react";
import Modal from "react-modal";
import Rate from "./Rate";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const AddMovie = ({ handelAdd }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [form, setForm] = useState({
    Title: "",
    url: "",
    rate:'5',
    description: "",
  });
  const handelsubmit = (e) => {
    e.preventDefault();
    const newmovie = { ...form, id: Math.random() };
    handelAdd(newmovie);
  };
  const handelChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
    const handelRate = (rate) => setForm({ ...form, searchRating: rate });

  return (
    <div className='add'>
      <button className="add-movies" onClick={()=> setIsOpen(true)}>
        Add
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={()=> setIsOpen(false)}
        style={customStyles}
      >
        <div>Add new movie</div>
        <form onSubmit={handelsubmit} className="search-form">
          <label className="name">Title</label>
          <input
            type="text"
            value={form.Title}
            name="Title"
            onChange={handelChange}
          />
          <label className="name">Description</label>
          <input
            type="text"
            value={form.description}
            name="description"
            onChange={handelChange}
            
          />
          <label className="name">URL</label>
          <input
            type="text"
            src={form.url}
            name="image"
            onChange={handelChange}
            requred
          />
          <label className="name">Rate</label>
          <Rate searchRating={form.Rate} handelRate={handelRate} />
          <button onClick={handelAdd} type="submit">
            {" "}
            save
          </button>
          <button onClick={()=> setIsOpen(false)}>close</button>
        </form>
      </Modal>
    </div>
  );
};

export default AddMovie;
