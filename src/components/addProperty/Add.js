import React from "react";
import "./add.css";
function Add() {
  const getFile = (e) => {
    e.preventDefault();
    document.getElementById("file").click();
  };
  return (
    <div>
      <div
        class="modal fade"
        id="exampleModalToggle3"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content">
            <div class="modal-header">
              {/* <h5 class="modal-title" id="exampleModalToggleLabel">
                Modal 1
              </h5> */}
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="forms">
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    placeholder="Title*"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <input
                    type="text"
                    placeholder="Description*"
                    className="form-control"
                    style={{ height: "70px" }}
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                </div>
                <div className="address">
                  <div>
                    <input
                      type="text"
                      placeholder="hey"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="hey"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <select
                      type="select"
                      placeholder="hey"
                      //   className="form-control"
                    >
                      <option>sss</option>
                      <option>sss</option>
                      <option>sss</option>
                      <option>sss</option>
                    </select>
                  </div>
                  <div>
                    <select
                      type="select"
                      placeholder="hey"
                      //   className="form-control"
                    >
                      <option>sss</option>
                      <option>sss</option>
                      <option>sss</option>
                      <option>sss</option>
                    </select>
                  </div>
                </div>
                <div className="price">
                  <div style={{ marginRight: "10%" }}>
                    <label>Price</label>
                    <input
                      type="text"
                      placeholder="Price*"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <label>Price</label>
                    <select
                      type="select"
                      placeholder="hey"
                      //   className="form-control"
                    >
                      <option>sss</option>
                      <option>sss</option>
                      <option>sss</option>
                      <option>sss</option>
                    </select>
                  </div>
                </div>
                <div className="cat">
                  <div className="category">
                    <h4>Category</h4>
                    <div className="buttons">
                      <p>House</p>
                      <p>House</p>
                      <p>House</p>
                      <p>House</p>
                    </div>
                  </div>
                  <div className="purpose">
                    <div className="one">
                      <h4>Purpose</h4>
                      <div className="buttons">
                        <p>House</p>
                        <p>House</p>
                        <p>House</p>
                        <p>House</p>
                      </div>
                    </div>
                    <div className="two">
                      <h4>Purpose</h4>
                      <div className="buttons">
                        <p>House</p>
                        <p>House</p>
                        <p>House</p>
                        <p>House</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="imgSelect">
                  <input type="file" id="file" />
                  <div onClick={getFile} className="addImg">
                    <i class="bi bi-plus-lg">Add Image</i>
                  </div>
                </div>
                <div className="btn">
                  <button> Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              {/* <h5 class="modal-title" id="exampleModalToggleLabel2">
                Modal 2
              </h5> */}
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Hide this modal and show the first with the button below.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
