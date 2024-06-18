import { useSearchParams } from "react-router-dom";
import css from "./SearchForm.module.css";

/**
 * Form for submitting search queries.
 * Updates 
 * @param {callback} props.onSearch Callback to pass search query. 
 * @returns {React.Component}
 */
const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();
  /**
   * Handles form submit by calling provided props function.
   * Clears form values and removes focus.
   * @param {React.SyntheticEvent} event 
   */
  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({search: event.target.searchQuery.value});
    event.target.reset();
    event.target.searchQuery.blur();
  };

  return (
    <form 
      className={css["search-form"]} 
      onSubmit={handleSubmit}
    >
      <input 
        id="searchQueryInput"
        name="searchQuery"
        type="text" 
        className={css["search-query-input"]} 
        placeholder="Movie name" 
        autoComplete="off" 
        aria-label="movie search title"
        required 
      />
      <button className={css["search-btn"]} type="submit">Search</button>
    </form>
  )
};

export default SearchForm;
