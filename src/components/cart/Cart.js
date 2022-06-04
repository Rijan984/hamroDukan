import { createSlice } from '@reduxjs/toolkit';
import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '../../features/userSlice';
import itemContext from '../property/context/ItemContext';
import './cart.css';
function Cart() {
  const { cartItem, setReduxCart, disp, setDisp } = useContext(itemContext);
  const [newData, setNewData] = useState('');
  const redux = useSelector(selectCart);
  const cartsData = redux.data;
  useEffect(() => {
    setNewData(cartsData);
  }, [cartsData]);

  // console.log(cartsData);
  const [addCart, setAddCart] = useState(cartsData);

  const removeCart = (getId) => {
    const filterData = cartsData.filter((newData) => {
      const { id } = newData;

      return id !== getId;
    });
    console.log(filterData);
    setDisp(true);
    setReduxCart(filterData);
    // setDisp(false);
  };
  // console.log(newData);
  return (
    <div className="cart">
      {/* <p>Carts</p> */}
      {/* {console.log(cartItem)} */}
      {newData.length !== 0 ? (
        <div className="cartList">
          {newData.map((newCart, index) => {
            const { id, name, image, price, stock, category } = newCart;
            const pic = `https://electronic-ecommerce.herokuapp.com/${image}`;
            return (
              <React.Fragment key={index}>
                <div className="innerCart">
                  <div className="picture">
                    <img src={pic} alt="" />
                  </div>
                  <div className="desc">
                    <p>{name}</p>
                    <p>Price: {price}</p>
                    <p>{stock}</p>
                    <p>{category}</p>
                  </div>
                  <div className="buttons">
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        removeCart(id);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                  {/* {console.log([cartsData])} */}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      ) : (
        <div>
          <p>Your Cart is empty</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
