import css from './phonebook.module.css';
import PropTypes from 'prop-types';

const Filter = ({ handleFilterUpdate }) => {
  return (
    <div className={css.filter}>
      <label htmlFor="filter-input">Find contacts by name</label>
      <input
        id="filter-input"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Filter"
        onChange={handleFilterUpdate}
      />
    </div>
  );
};

Filter.propTypes = {
  handleFilterUpdate: PropTypes.func,
};

export default Filter;
