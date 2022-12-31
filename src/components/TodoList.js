import React from 'react';
import PropTypes from 'prop-types';

function TodoList({ data }) {
  return (
    <div className="modal_popup">
      {data.map((item) => (
        <div className="result_box" key={item.id}>
          <div className="box v-flex">
            <i className="fa-solid fa-magnifying-glass" />
            <p className="results">{item.search}</p>
          </div>
          <button id={item.id} type="button" className="remove_btn">
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

// props validation should be proTypes
TodoList.propTypes = {
  data: PropTypes.arrayOf.isRequired,
};

export default TodoList;
