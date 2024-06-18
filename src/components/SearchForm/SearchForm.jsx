import { useState } from "react";
import css from "./SearchForm.module.css";

const SearchForm = ({onSearch}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

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