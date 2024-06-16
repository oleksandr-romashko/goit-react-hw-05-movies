import css from "./SearchForm.module.css";

const SearchForm = ({onSearch}) => {
  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.searchQuery.value;
    onSearch(query);
    event.target.searchQuery.blur();
  };

  return (
    <form 
      className={css["search-form"]} 
      onSubmit={handleSearch}
    >
      <input 
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