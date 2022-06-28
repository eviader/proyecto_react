import './ItemListContainer.css';
import React, { Fragment } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


function ItemListContainer(props) {
    const [num, setNum] = useState(0);

    const sumar = () =>{
      setNum(num + 1);
    }

    const restar= () =>{
      if(num>0){
      setNum(num - 1);
      }
    }

    return(
      <Fragment>
        <div className='container'>
        <h2>{props.saludo}</h2>
          <div className='row'>
            <div className='col-md-3'>
              <div className='card'>
                <div className='card-body'>
                    <h4 className='card-title'>Producto</h4>
                    <p className='card-text text-secundary'>Contador</p>
                    <a href='#' onClick={sumar} className='btn btn outline-secundary rounded-0' >+</a>
                    <a href='#' onClick={restar} className='btn btn outline-secundary rounded-0' >-</a>
                    <p >{num}</p>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </Fragment>
      );
  }
  

export default ItemListContainer;