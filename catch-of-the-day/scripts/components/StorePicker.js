/*
  StorePicker
  Thish will let us make <StorePicker/>
*/

import React from 'react';
import { History } from 'react-router';
import h from '../helpers';

var StorePicker = React.createClass({
  mixins : [History],
  gotToStore : function(event) {
    event.preventDefault();
    // get data from form
    var storeId = this.refs.storeId.value;
    // transition from StorePicker to App
    this.history.pushState(null, '/store/' + storeId);
  },

  render : function() {
    return (
      <form className='store-selector' onSubmit={this.gotToStore}>
        <h2>Please Enter A Store</h2>
        <input type='text' ref='storeId' required defaultValue={h.getFunName()} />
        <input type='Submit' />
      </form>
      )
  }

});

export default StorePicker;
