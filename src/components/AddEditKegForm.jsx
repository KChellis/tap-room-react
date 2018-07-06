import React from 'react';
import PropTypes from 'prop-types';

function AddEditKegForm(props){
  let currentContent= null;
  if(props.showAddForm){
    currentContent = <div>
      <label>Name</label>
      <input type='text' placeholder="Enter name here"/><br/>
      <label>Brand</label>
      <input type='text' placeholder="Enter brand here"/><br/>
      <label>Type</label>
      <input type='text' placeholder="Enter type here"/><br/>
      <label>ABV</label>
      <input type='number' placeholder="Enter ABV here"/><br/>
      <label>IBU</label>
      <input type='number' placeholder="Enter IBU here"/><br/>
      <label>Pint price</label>
      <input type='number' placeholder="Enter Price here"/><br/>
      <label>32 oz growler price</label>
      <input type='number' placeholder="Enter Price here"/><br/>
      <label>64 oz growler price</label>
      <input type='number' placeholder="Enter Price here"/><br/>
      <label>Color</label><br/>
      <input type="radio" value="light"/>light<br/>
      <input type="radio" value="medium"/>Medium<br/>
      <input type="radio" value="dark"/>Dark<br/>
      <input type="radio" value="cider"/>Cider<br/>
      <input type="radio" value="wine"/>Wine<br/>
      <button className="btn btn-info">Done</button>
    </div>;
  }
  return(
    {currentContent}
  );
}

AddEditKegForm.propTypes = {
  showAddForm: PropTypes.bool.isRequired,
  selectedKeg: PropTypes.object,
  onNewKegCreation: PropTypes.func,
  onToggleForm: PropTypes.func
};


export default AddEditKegForm;
