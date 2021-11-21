import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
  <div className="btn-container">
    <button className="filter-btn" onClick={() =>
       filterItems('fruits')}>Fruits</button>

  <button className="filter-btn" onClick={() =>
        filterItems('vegetables')}>Vegetables</button>
       
       <button className="filter-btn" onClick={() =>
        filterItems('vitamins')}>Vitamins</button>

  <button className="filter-btn" onClick={() =>
        filterItems('all')}>All</button>
  </div>
  
  
  );
};

export default Categories;