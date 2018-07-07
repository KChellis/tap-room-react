import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function AddEditKegForm(props){
  let _name = null;
  let _brewer = null;
  let _type = null;
  let _abv = null;
  let _ibu = null;
  let _pintprice = null;
  let _growler32price = null;
  let _growler64price = null;
  let color = null;
  let currentContent= null;
  if(props.showAddForm){
    currentContent = <div>
      <form onSubmit={handleNewKegFormSubmission}>

        <label>Name</label>
        <input type='text' id='name' placeholder='Enter name here' ref={(input) => {_name = input;}}/><br/>
        <label>Brewer</label>
        <input type='text' id='brewer' placeholder='Enter brewer here' ref={(input) => {_brewer = input;}}/><br/>
        <label>Type</label>
        <input type='text' id='type' placeholder='Enter type here' ref={(input) => {_type = input;}}/><br/>
        <label>ABV</label>
        <input type='number' id='abv' placeholder='Enter ABV here' ref={(input) => {_abv = input;}}/><br/>
        <label>IBU</label>
        <input type='number' id='ibu' placeholder='Enter IBU here' ref={(input) => {_ibu = input;}}/><br/>
        <label>Pint price</label>
        <input type='number' id='pintprice' placeholder='Enter Price here' ref={(input) => {_pintprice = input;}}/><br/>
        <label>32 oz growler price</label>
        <input type='number' id='growler32price' placeholder='Enter Price here' ref={(input) => {_growler32price = input;}}/><br/>
        <label>64 oz growler price</label>
        <input type='number' id='growler32price' placeholder='Enter Price here' ref={(input) => {_growler64price = input;}}/><br/>
        <label>Color</label><br/>
        <input type='radio' name='color' value='light' onChange={handleChange}/>light<br/>
        <input type='radio' name='color' value='medium' onChange={handleChange}/>Medium<br/>
        <input type='radio' name='color' value='dark' onChange={handleChange}/>Dark<br/>
        <input type='radio' name='color' value='cider' onChange={handleChange}/>Cider<br/>
        <input type='radio' name='color' value='wine' onChange={handleChange}/>Wine<br/>
        <button type='submit' className='btn btn-info'>Done</button>
      </form>
    </div>;
  }

  function handleNewKegFormSubmission(event){
    event.preventDefault;
    props.onNewKegCreation({name: _name.value, brewer: _brewer.value, type: _type.value, abv: parseInt(_abv.value), ibu: parseInt(_ibu.value), prices: [parseInt(_pintprice.value), parseInt(_growler32price.vlaue), parseInt(_growler64price.value)], color: color, id: v4()});
    props.onToggleForm();
  }

  function handleChange(changeEvent){
    color= changeEvent.target.value;
  }
  return(
    <div>
      {currentContent}
    </div>
  );
}

AddEditKegForm.propTypes = {
  showAddForm: PropTypes.bool.isRequired,
  selectedKeg: PropTypes.object,
  onNewKegCreation: PropTypes.func.isRequired,
  onToggleForm: PropTypes.func.isRequired
};


export default AddEditKegForm;
