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
  let _color = null;
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
        <input type='radio' name='color' value='light' ref={(input) => {_color = input;}}/>light<br/>
        <input type='radio' name='color' value='medium' ref={(input) => {_color = input;}}/>Medium<br/>
        <input type='radio' name='color' value='dark' ref={(input) => {_color = input;}}/>Dark<br/>
        <input type='radio' name='color' value='cider' ref={(input) => {_color = input;}}/>Cider<br/>
        <input type='radio' name='color' value='wine' ref={(input) => {_color = input;}}/>Wine<br/>
        <button type='submit' className='btn btn-info'>Done</button>
      </form>
    </div>;
  }

  function handleNewKegFormSubmission(event){
    event.preventDefault;
    props.onNewKegCreation({name: _name.value, brewer: _brewer.value, type: _type.value, abv: parseInt(_abv.value), ibu: parseInt(_ibu.value), prices: [parseInt(_pintprice.value), parseInt(_growler32price.vlaue), parseInt(_growler64price.value)], color: _color.value, id: v4()});
    props.onToggleForm();
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
