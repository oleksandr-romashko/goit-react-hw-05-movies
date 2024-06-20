import React from "react";
import PropTypes from "prop-types";
import imgLeftArrow from "images/left-arrow.svg";
import css from "./Pagination.module.css";

const SEPARATOR_ITEM_TEXT = "...";

/**
 * Pages pagination component.
 * @param {number} [props.page=1] Current page.
 * @param {number} [props.total_pages=1] Total number of pages.
 * @param {callback} props.onPageChange Callback that handles page change.
 * @returns {React.Component} Pagination component.
 */
const Pagination = ({page = 1, total_pages = 1, onPageChange}) => {
  if (page < 1 || page > total_pages) {
    console.error(`Error: Provided current pagination page '${page}' ` 
      + `is out of pagination bounds from '1' to '${total_pages}'.`);
    return;
  }

  const handleClick = (event) => {
    const btnEl = event.target.closest(".js-nav-btn");
    if (btnEl) {
      const nextPageNumber = Number(btnEl.dataset.page);
      onPageChange(nextPageNumber);
    }
    
  };
  
  return (
    <>
      <nav className={css["pagination"]} onClick={handleClick}>
        <button 
          key="nav-btn-go-prev" 
          className={`js-nav-btn ${css["arrow-btn"]}`} 
          data-page={page - 1}
          disabled={page && page === 1 ? "disabled" : ""}
        >
          <img 
            className={`${css["arrow-img"]} ${css["arrow-img-left"]}`} 
            src={imgLeftArrow} alt="previous reviews" 
          />
        </button>
        <ul key="nav-pages-list" className={css["pages-list"]}>
          {createPaginationList(page, total_pages)}
        </ul>
        <button 
          key="nav-btn-go-next" 
          className={`js-nav-btn  ${css["arrow-btn"]}`}
          data-page={page + 1}
          disabled={page === total_pages ? "disabled" : ""}
        >
          <img 
            className={`${css["arrow-img"]} ${css["arrow-img-right"]}`} 
            src={imgLeftArrow} 
            alt="next reviews" 
          />
        </button>
      </nav>
    </>
  );

  /**
   * Creates the list of page items.
   * The order of adding elements matters.
   * The list will have from 1 up to 7 items.
   * If there are pages between 
   *  either first page and the one before current
   *  or last page and the one after current
   *  non-interactive separator will be added to the list,
   *  so in the end there may be maximum 7 items 
   *  (all names except separators related to page numbers):
   *  <first> <separator> <current-1> <current> <current+1> <separator> <last>
   *  example (diamond brackets wraps item element):
   *  <1> <...> <4> <5> <6> <...> <10>
   * @returns {JSX} JSX markdown.
   */
  function createPaginationList() {
    const pagesArr = [];
    
    // add current page as the first element
    pagesArr.push(createPaginationListItem({page: page, isCurrent: true}));

    // add previous to the current page to the left of current
    if (page > 1) {
      pagesArr.unshift(createPaginationListItem({page: page - 1}));
    }

    // add first page
    if (page > 2) {
      // add separator in-between pages if more pages to the left
      if (page > 3) {
        pagesArr.unshift(createPaginationListItem(
          {page: "left-separator", isSeparator: true}
        ));
      }
      pagesArr.unshift(createPaginationListItem({page: 1}));
    }

    // add next to the current page to the right of current
    if (page < total_pages) {
      pagesArr.push(createPaginationListItem({page: page + 1}));
    }

    // add last page item
    if (page + 1 < total_pages) {
      // add separator in-between pages if more pages to the right
      if (page + 2 < total_pages) {
        pagesArr.push(createPaginationListItem(
          {page: "right-separator", isSeparator: true}
        ));
      }
      pagesArr.push(createPaginationListItem({page: total_pages}));
    }

    return pagesArr;
  }

  /**
   * Creates pagination item.
   * @param {number | string} props.page Page number or separator description.
   * @returns {React.Component} List item JSX markdown.
   */
  function createPaginationListItem({
    page, 
    isCurrent = false, 
    isSeparator = false
  }) {
    return (
      <li key={`item-${page}`}>
        <button 
          className={
            `js-nav-btn ${css["pagination-btn"]} ${isCurrent ? css.current : ""}`
          }
          data-page={page} 
          disabled={isCurrent || isSeparator ? "disabled" : false}
        >
          {isSeparator ? SEPARATOR_ITEM_TEXT : page}
        </button>
      </li>
    );
  };
};

export default Pagination;

Pagination.propTypes = {
  page: PropTypes.number,
  total_pages: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
};