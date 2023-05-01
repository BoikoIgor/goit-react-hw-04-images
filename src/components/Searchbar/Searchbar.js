import { Formik, Form, Field } from 'formik';
import { CiSearch } from 'react-icons/ci';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    onSubmit(e.searchValue);
  };

  return (
    <header className="Searchbar">
      <Formik initialValues={{ searchValue: '' }} onSubmit={handleSubmit}>
        <Form className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">
              <CiSearch size="30" />
            </span>
          </button>
          <Field
            name="searchValue"
            className="SearchForm-input"
            type="text"
            placeholder="Search images and photos"
            autoComplete="off"
            autoFocus
          />
        </Form>
      </Formik>
    </header>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
