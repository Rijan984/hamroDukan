import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { data } from '../../property.js';
import LoadingGif from '../../images/loading.gif';
// import Search from "../searchProperty/Search";
import './list.css';
import Popup from '../Popup.js';
const url2 = 'https://electronic-ecommerce.herokuapp.com/api/v1/product';
function List({ search, minPrice }) {
  const [electric, setElectric] = useState();
  const [property, setProperty] = useState(electric);
  const [miPrice, setMiPrice] = useState(electric);
  const [show, setShow] = useState();
  const [info, setInfo] = useState();

  //   const [search, setSearch] = useState("");
  const fetchSecondUrl = async () => {
    const response = await fetch(url2);
    const result = await response.json();
    setElectric(result.data.product);
    console.log(result.data.product);
  };
  useEffect(() => {
    if (search) {
      const newProp = electric.filter((details) => {
        const { name } = details;
        return name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
      });
      setProperty(newProp);
      setMiPrice(newProp);
    } else {
      setProperty(electric);
      setMiPrice(electric);
    }
  }, [search, electric]);
  useEffect(() => {
    fetchSecondUrl();
  }, []);
  // useEffect(() => {
  //   if (minPrice) {
  //     const newProp = miPrice.filter((details) => {
  //       const { price } = details;
  //       return price >= minPrice;

  //     });
  //     setProperty(newProp);
  //   } else {
  //     setProperty(miPrice);
  //   }
  // }, [minPrice, miPrice]);

  const showPop = (e, id, name, image, price, stock, category) => {
    setShow(true);
    setInfo({
      ...info,
      id,
      name,
      image,
      price,
      stock,
      category,
    });
  };
  return (
    <div className="list">
      {/* <Search /> */}
      {!property && (
        <p style={{ textAlign: 'center' }}>
          <img src={LoadingGif} alt="loading..." />
        </p>
      )}
      {show && <Popup info={info} setShow={setShow} />}
      {property && (
        <div className="propContent">
          {property.length <= 0 && (
            <p
              style={{
                color: 'red',
                textAlign: 'center',
                margin: '100px 0',
                fontSize: '20px',
                fontWeight: 'bold',
              }}
            >
              No data found
            </p>
          )}
          {property.map((newData) => {
            const { id, name, image, price, stock, category } = newData;
            const pic = `https://electronic-ecommerce.herokuapp.com/${image}`;
            return (
              <React.Fragment key={id}>
                <div
                  className="property"
                  onClick={(e) => {
                    showPop(e, id, name, image, price, stock, category);
                  }}
                >
                  <div className="top">
                    {/* <div id="one">
                      <span
                        style={{
                          float: "left",

                          backgroundColor: "rgb(212, 212, 94)",
                        }}
                        id="span"
                      >
                        Featured
                      </span>
                    </div> */}
                    <span
                      style={{
                        float: 'right',
                        backgroundColor: 'rgb(226, 62, 62)',
                      }}
                    >
                      New Offer
                    </span>
                    <span
                      style={{
                        float: 'right',
                        backgroundColor: 'rgb(62, 128, 226)',
                      }}
                    >
                      Sales
                    </span>
                  </div>

                  <div className="pic">
                    <img src={pic} alt="house" />
                    {/* <div className="bottom">
                    <p>
                      <i className="bi bi-geo-alt-fill"></i>Greenvile, Kathmandu
                    </p>
                    <p style={{ float: "right", marginLeft: "10px" }}>
                      <i className="bi bi-camera-fill"></i>
                    </p>
                    <p style={{ float: "right" }}>
                      <i className="bi bi-camera-video-fill"></i>
                    </p>
                  </div> */}
                  </div>
                  <div className="propText">
                    <h4>{name}</h4>
                    <p style={{ color: '#0079bf', fontWeight: 'bold' }}>
                      {price}
                    </p>
                    {/* <p>{description}</p> */}
                    <div className="details">
                      <p style={{ marginRight: '10px' }}>Stock {stock}</p>
                    </div>
                  </div>
                  {/* <div className="userInfo">
                  <div className="profileUser">
                    <img src={profileImg} alt="" />
                    <span>{name}</span>
                  </div>
                  <div className="userInfo-logo">
                    <i
                      className="bi bi-share"
                      style={{ marginLeft: "5px" }}
                    ></i>
                    <i
                      className="bi bi-heart"
                      style={{ marginLeft: "5px" }}
                    ></i>
                    <i
                      className="bi bi-plus-lg"
                      style={{ marginLeft: "5px" }}
                    ></i>
                  </div>
                </div> */}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default List;
