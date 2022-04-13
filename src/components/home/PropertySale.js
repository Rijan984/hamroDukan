import React from "react";

function PropertySale({ sale }) {
  return (
    <div style={{ float: "left" }} className="PropSale">
      {sale.Message && <p>{sale.Message} for property on sale</p>}
      {!sale.Message && (
        <div className="propContent">
          {/* {property.length <= 0 && (
          <p
            style={{
              color: "red",
              textAlign: "center",
              margin: "100px 0",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            No data found
          </p>
        )} */}
          <div
            className="onSale"
            style={{
              borderBottom: " 1px solid rgb(221, 221, 221)",
              padding: "1%",
            }}
          >
            <p
              style={{
                marginBottom: "0rem",

                fontWeight: "bold",
              }}
            >
              Property on rent
            </p>
          </div>
          {sale.Message.map((newData) => {
            const {
              PropertyId,
              Category,
              UserFullName,
              UserImage,
              Image,

              Title,
              Address,
              District,
              description,
              Price,
              PricePer,
              Area,
              AreaUnit,
              room,
            } = newData;
            const userImg = `http://gharelukam.com/gharelukam/${Image}`;
            return (
              <React.Fragment key={PropertyId}>
                <div className="property">
                  <div className="top">
                    <div id="one">
                      <span
                        style={{
                          float: "left",

                          backgroundColor: "rgb(62, 128, 226)",
                        }}
                        id="span"
                      >
                        {Category}
                      </span>
                    </div>
                  </div>

                  <div className="pic">
                    <img src={userImg} alt="house" />
                    {/* <div className="bottom">
                    <p>
                      <i class="bi bi-geo-alt-fill"></i>Greenvile, Kathmandu
                    </p>
                    <p style={{ float: "right", marginLeft: "10px" }}>
                      <i class="bi bi-camera-fill"></i>
                    </p>
                    <p style={{ float: "right" }}>
                      <i class="bi bi-camera-video-fill"></i>
                    </p>
                  </div> */}
                  </div>
                  <div className="propText">
                    <h4>{Title}</h4>
                    <p>
                      {Address} {District}
                    </p>
                    <p style={{ color: "#0079bf", fontWeight: "bold" }}>
                      from ${Price} <br /> ${PricePer} year
                    </p>
                    <p>{description}</p>
                    <div className="details">
                      <p style={{ marginRight: "10px" }}>
                        <i
                          className="fa-solid fa-bed"
                          style={{ marginRight: "5px" }}
                        ></i>
                        {room}
                      </p>
                      <p>
                        <i
                          className="fas fa-vector-square"
                          style={{ marginRight: "5px" }}
                        ></i>
                        {Area} {AreaUnit}
                      </p>
                    </div>
                  </div>
                  <div className="userInfo">
                    <div className="profileUser">
                      <img src={UserImage} alt="" className />
                      <span>{UserFullName}</span>
                    </div>
                    {/* <div className="userInfo-logo">
                    <i class="bi bi-share" style={{ marginLeft: "5px" }}></i>
                    <i class="bi bi-heart" style={{ marginLeft: "5px" }}></i>
                    <i class="bi bi-plus-lg" style={{ marginLeft: "5px" }}></i>
                  </div> */}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PropertySale;
