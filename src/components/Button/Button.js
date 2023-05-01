import PropTypes from 'prop-types';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <button type="button" className="Button" onClick={onClick}>
      Load more
    </button>
  );
};
LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
