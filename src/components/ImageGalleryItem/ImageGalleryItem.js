import { ModalPhoto } from 'components/Modal/Modal';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    // image: null,
    // alt: '',
    isModal: false,
  };
  // setImage = () => {
  //   const { photoURL, alt } = this.props;
  //   this.setState({ image: photoURL, alt: alt });
  // };
  // closeModal = () => {
  //   this.setState({ image: null, alt: '' });
  // };
  toggleModal = () => {
    this.setState({ isModal: !this.state.isModal });
  };
  render() {
    const { previewURL, photoURL, alt } = this.props;
    return (
      <li>
        <img
          src={previewURL}
          alt={alt}
          className="ImageGalleryItem"
          onClick={this.toggleModal}
        />
        <ModalPhoto
          isModal={this.state.isModal}
          onClose={this.toggleModal}
          photoURL={photoURL}
          alt={alt}
        />
      </li>
    );
  }
}
ImageGalleryItem.propTypes = {
  previewURL: PropTypes.string,
  photoURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
