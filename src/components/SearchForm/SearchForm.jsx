import { useState } from "react";
import PropTypes from "prop-types";
import css from "./SearchForm.module.css";

/**
 * Form for submitting search queries.
 * @param {callback} props.onSearch Callback to pass search query. 
 * @returns {React.Component}
 */
const SearchForm = ({onSearch}) => {
  const [searchQuery, setSearchQuery] = useState("");

  /**
   * Handles input change by changing correspond state value.
   * @param {React.SyntheticEvent} event 
   */
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  /**
   * Handles form submit by calling provided props function.
   * @param {React.SyntheticEvent} event 
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
    setSearchQuery("");
    event.target.searchQuery.blur();
  };

  return (
    <form 
      className={css["search-form"]} 
      onSubmit={handleSubmit}
    >
      <input 
        name="searchQuery"
        onChange={handleSearchQueryChange}
        value={searchQuery}
        type="text" 
        className={css["search-query-input"]} 
        placeholder="Movie name" 
        autoFocus 
        autoComplete="off" 
        aria-label="movie search title"
        required 
      />
      <button className={css["search-btn"]} type="submit">Search</button>
    </form>
  )
};

export default SearchForm;

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
}