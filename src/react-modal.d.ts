declare module 'react-modal' {
  import * as React from 'react';

  export interface Props {
    isOpen: boolean;
    onRequestClose: () => void;
    contentLabel: string;
    className: string;
    overlayClassName: string;
    children?: React.ReactNode;
  }

  export function setAppElement(element: string | HTMLElement): void;

  const Modal: React.FC<Props>;

  export default Modal;
}