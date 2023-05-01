import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ values }) => {
  return (
    <ul className="GalleryList">
      {values.map(value => (
        <ImageGalleryItem
          key={value.id}
          previewURL={value.webformatURL}
          photoURL={value.largeImageURL}
          alt={value.tags}
        ></ImageGalleryItem>
      ))}
    </ul>
  );
};
ImageGallery.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string,
    }).isRequired
  ).isRequired,
};
