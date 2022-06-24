import './ItemListContainer.css';
import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function ItemListContainer(props) {
    return(
      <Fragment>
        <h2>{props.saludo}</h2>
      </Fragment>
      );
  }
  

export default ItemListContainer;