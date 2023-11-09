import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './VideoModal.css';

interface VideoModalProps {
  show: boolean;
  handleClose: () => void;
  videoLink: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ show, handleClose, videoLink }) => {
  return (
    <Modal show={show} onHide={handleClose} size='xl' centered>
      <Modal.Header closeButton>
        <Modal.Title>List of services</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="video-container">
          <iframe
            title="Video Player"
            src={videoLink}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default VideoModal;
