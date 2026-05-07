import { Button, Modal } from "react-bootstrap";

function ConfirmEditModal({ show, onCancel, onSubmit }) {
  return (
    <Modal show={show} onHide={onCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>Sure to submit?</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        By clicking submit item will be edited without ability to restore
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="dark" onClick={onSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmEditModal;