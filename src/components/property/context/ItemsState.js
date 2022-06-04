import React, { useEffect, useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { useDispatch, useSelector } from 'react-redux';
import { cartItems, cartRedux, selectCart } from '../../../features/userSlice';
import ItemContext from './ItemContext';

function ItemState(props) {
  const url2 = 'https://electronic-ecommerce.herokuapp.com/api/v1/product';
  const [electric, setElectric] = useState('');
  const [cartItem, setCartItem] = useState([]);
  const [itemId, setItemId] = useState('');
  const [disp, setDisp] = useState(false);

  const [reduxCart, setReduxCart] = useState([]);
  const dispatch = useDispatch();

  const fetchSecondUrl = async () => {
    const response = await fetch(url2);
    const result = await response.json();
    setElectric(result.data.product);
    // console.log(electric);
  };
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetchSecondUrl();
  }, [electric]);
  useEffect(() => {
    if (itemId) {
      const result = electric.filter((newCart) => {
        const { id } = newCart;
        // console.log(id);
        return id === itemId;
      });
      setDatas(...result);
      // console.log(datas);
      // console.log([...cartItem, datas]);
      // setCartItem([...cartItem, datas]);
      // console.log(cartItem);
    }
  }, [itemId]);
  useEffect(() => {
    if (datas) {
      setCartItem([...cartItem, datas]);
    }
  }, [datas]);
  // useEffect(() => {
  // console.log(reduxCart);
  if (reduxCart.length !== 0 || disp) {
    dispatch(
      cartRedux({
        id: 1,
        data: reduxCart,
      })
    );
  }

  // }, [cartItem]);

  // console.log(cartItem);
  return (
    <ItemContext.Provider
      value={{
        electric,
        setElectric,
        cartItem,
        setCartItem,
        itemId,
        setItemId,
        reduxCart,
        setReduxCart,
        disp,
        setDisp,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
}

export default ItemState;
