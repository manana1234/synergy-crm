import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { db } from '../firebase';

const SalesRepManager = () => {
  const [salesReps, setSalesReps] = useState([]);
  const [showAddRepModal, setShowAddRepModal] = useState(false);
  const [newRepId, setNewRepId] = useState('');
  const [newRepName, setNewRepName] = useState('');

  useEffect(() => {
    const unsubscribe = db.collection('salesReps').onSnapshot((snapshot) => {
      const reps = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setSalesReps(reps);
    });

    return () => unsubscribe();
  }, []);

  const handleClose = () => setShowAddRepModal(false);
  const handleShow = () => setShowAddRepModal(true);

  const handleAddRep = (e) => {
    e.preventDefault();

    db.collection('salesReps').add({
      repId: newRepId,
      name: newRepName,
    });

    setNewRepId('');
    setNewRepName('');
    handleClose();
  };

  const handleDeleteRep = (repId) => {
    db.collection('salesReps').doc(repId).delete();
  };

  return (
    <div>
      <h2>Sales Rep Manager</h2>
      <Button variant="primary" onClick={handleShow}>
        Add Sales Rep
      </Button>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Rep ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {salesReps.map((rep) => (
            <tr key={rep.id}>
              <td>{rep.data.repId}</td>
              <td>{rep.data.name}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteRep(rep.id)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showAddRepModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Sales Rep</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddRep}>
            <Form.Group>
              <Form.Label>Rep ID</Form.Label>
              <Form.Control
                type="text"
                value={newRepId}
                onChange={(e) => setNewRepId(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={newRepName}
                onChange={(e) => setNewRepName(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Rep
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SalesRepManager;