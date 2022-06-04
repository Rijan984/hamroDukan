import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartRedux, selectCart } from '../../features/userSlice';
import itemContext from './context/ItemContext';
import './popup.css';
import { NotificationManager } from 'react-notifications';

function Popup({ info, setShow }) {
  const { itemId, setItemId, reduxCart, setReduxCart } = useContext(
    itemContext
  );
  const [hide, setHide] = useState(false);
  const pic = `https://electronic-ecommerce.herokuapp.com/${info.image}`;
  const dispatch = useDispatch();

  const reduxData = useSelector(selectCart);
  const userName = reduxData.data;
  // const [cartsData, setCartsData] = useState([info]);
  useEffect(() => {
    setReduxCart(userName);
  }, [userName]);

  useEffect(() => {
    if (info) {
      const filterId = userName.filter((newData) => {
        const { id } = newData;

        return id === info.id;
      });

      // if(filterId.le)
      if (filterId.length !== 0) {
        if (filterId[0].id === info.id) {
          setHide(true);
        }
      }
    }
  });

  const addCart = (e, id) => {
    e.preventDefault();
    setItemId(id);
    console.log(info);
    setReduxCart([...reduxCart, info]);
    NotificationManager.success('Addedto Cart', 'Info!', 3000);
  };

  return (
    <div>
      {/* {console.log(info)} */}
      <div className="backDrop" onClick={() => setShow(false)}></div>
      <div className="mainBlog-popup">
        <div className="blogPopup">
          <img src={pic} alt={info.name} />
          <div className="location">
            <i className="bi bi-geo-alt-fill"></i>
          </div>
          <div className="info">
            {/* <div className="top">
              <p className="btn btn-primary"> Purpose</p>
              <p className="btn btn-primary"> Purpose</p>
              <p className="btn btn-primary"> Purpose</p>
            </div> */}
            <div className="description">
              <div className="title">
                <p>{info.name}</p>
              </div>
              <p>Stock : {info.stock} </p>
              {/* <span>State </span>
              <span>District</span> */}
              {/* <p>
                <i class="bi bi-star-fill"></i> Rating and comment
              </p> */}
              <p>Price: {info.price} </p>
              {/* <span className="btn btn-primary">Negotiable</span> */}
              <div className="underline" style={{ margin: '10px 0' }}></div>
              <div className="emoji">
                <i class="bi bi-emoji-smile"></i>
                <i class="bi bi-emoji-smile"></i>
                <i class="bi bi-emoji-smile"></i>
                <i class="bi bi-emoji-smile"></i>
                <i class="bi bi-emoji-smile"></i>
                <i class="bi bi-emoji-smile"></i>
              </div>
              <div className="underline" style={{ margin: '10px 0' }}></div>
              <p>
                Category: {info.category[1]} ({info.category[0]} item)
              </p>
              <p>Tota Area: </p>
              {!hide && (
                <button
                  className="btn btn-primary"
                  onClick={(e) => {
                    addCart(e, info.id, info.name, info.stock, info.price);

                    console.log(userName);
                  }}
                >
                  Add to cart
                </button>
              )}
              {hide && (
                <button className="btn btn-primary" disabled={true}>
                  Already Added
                </button>
              )}
              {/* <p>Tota Area: </p>
              <p>Tota Area: </p>
              <p>Tota Area: </p> */}
            </div>
            <div className="exit">
              <button
                className="btn btn-primary close"
                onClick={() => setShow(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
