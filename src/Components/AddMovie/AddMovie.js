import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';



const AddMovie = ({ add }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleRate = (e) => {
    setRate(e.target.value);
   };
   const handlePosterUrl = (e) => {
    setPosterUrl(e.target.value);
   };

   const handleMovie = (e) => {
    let newMovie = {title,rate,posterUrl}
    add(newMovie)
   }
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
      Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
               <Form.Label>Movie Title</Form.Label>
               <Form.Control type="text" placeholder="Enter Movie Title" value={title} onChange={handleTitle} />
               <Form.Label>Movie Rate</Form.Label>
               <Form.Control type="number" placeholder="Enter Rating" value={rate} onChange={handleRate} />
               <Form.Label>Movie Poster</Form.Label>
               <Form.Control type='url' placeholder="Enter Valid URL" value={posterUrl} onChange={handlePosterUrl}/>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
