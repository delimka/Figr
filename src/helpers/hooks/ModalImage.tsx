import React, {useState } from "react";
import { Modal, Button} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface ModalImageProps {
  show: boolean; 
  handleClose: () => void; 
  images: string[]; 
  altText: string; 
  initialSlide: number;
}

const ModalImage: React.FC<ModalImageProps> = ({
  show,
  handleClose,
  images,
  altText,
  initialSlide,
}) => {

  const [slideIndex, setSlideIndex] = useState<number>(initialSlide);

  const settings = {
    initialSlide: slideIndex,
    afterChange: (current : number) => setSlideIndex(current),
  };

  console.log("Show:", show);
  console.log("Images:", images);
  console.log("Alt Text:", altText);
  console.log("Initial Slide:", initialSlide);
  console.log("Slide Index:", slideIndex);

  return ( 
    <Modal show={show} onHide={handleClose} className="modal-lg" centered>
      <Modal.Body>
        <Slider {...settings}> 
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`${altText} ${index + 1}`} className="img-fluid" />
            </div>
          ))}
        </Slider>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalImage;