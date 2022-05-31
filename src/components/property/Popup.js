import React from 'react';
import './popup.css';

function Popup({ info, setShow }) {
  const pic = `https://electronic-ecommerce.herokuapp.com/${info.image}`;

  console.log(info.category);
  return (
    <div>
      {console.log(info)}
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
              <button className="btn btn-primary">Add to cart</button>
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
