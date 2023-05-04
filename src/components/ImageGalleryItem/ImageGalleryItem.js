import { ModalPhoto } from 'components/Modal/Modal';
import { useState } from 'react';
import PropTypes from 'prop-types';

// export class ImageGalleryItem extends Component {
//   state = {
//     isModal: false,
//   };
//   toggleModal = () => {
//     this.setState({ isModal: !this.state.isModal });
//   };
//   render() {
//     const { previewURL, photoURL, alt } = this.props;
//     return (
//       <li>
//         <img
//           src={previewURL}
//           alt={alt}
//           className="ImageGalleryItem"
//           onClick={this.toggleModal}
//         />
//         <ModalPhoto
//           isModal={this.state.isModal}
//           onClose={this.toggleModal}
//           photoURL={photoURL}
//           alt={alt}
//         />
//       </li>
//     );
//   }
// }

export const ImageGalleryItem = ({ previewURL, photoURL, alt }) => {
  const [isModal, setIsModal] = useState(false);
  const toggleModal = () => {
    setIsModal(!isModal);
  };
  return (
    <li>
      <img
        src={previewURL}
        alt={alt}
        className="ImageGalleryItem"
        onClick={toggleModal}
      />
      <ModalPhoto
        isModal={isModal}
        onClose={toggleModal}
        photoURL={photoURL}
        alt={alt}
      />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  previewURL: PropTypes.string,
  photoURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
