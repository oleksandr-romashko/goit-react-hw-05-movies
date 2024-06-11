import css from "./SearchForm.module.css";

const SearchForm = ({searchQuery, onQueryChange, onSearch}) => {
  const hadleSearchQueryChange = (event) => {
    onQueryChange(event.target.value);
  };

  return (
    <form className={css["search-form"]} onSubmit={onSearch}>
      <input 
        value={searchQuery} 
        onChange={hadleSearchQueryChange} 
        name="searchQuery" 
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