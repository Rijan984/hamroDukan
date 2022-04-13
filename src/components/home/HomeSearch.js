import React, { useState } from "react";
import "./homeSearch.css";
function HomeSearch() {
  // console.log(rent.RecentPropertie);
  const [toogle, setToogle] = useState(1);
  return (
    <div className="mainHome">
      <div className="homeSearch">
        <div className="homeCnt">
          <span
            onClick={() => setToogle(1)}
            className={toogle === 1 ? "actives tab" : "tab"}
          >
            Property
          </span>
          <span
            onClick={() => setToogle(2)}
            className={toogle === 2 ? "actives tab" : "tab"}
          >
            Services
          </span>
        </div>
        <div className="hmsearch">
          {toogle === 1 && (
            <>
              <div className="input">
                <input
                  type="search"
                  placeholder="Enter Address, district, purpose, state, category"
                />
                <div
                  className="btn btn-primary"
                  style={{ padding: "0.3% 2% 0.3% 2%" }}
                >
                  Search
                </div>
                <div className="btn" style={{ fontSize: "13px" }}>
                  Advance Search
                </div>
              </div>
              <div className="hmSelect">
                <select defaultValue="DEFAULT">
                  <option value="DEFAULT" disabled hidden>
                    Select State
                  </option>
                  <option value="s">Select District</option>
                  <option value="s">Select Purpose</option>
                  <option value="s">Select Category</option>
                </select>
                <select defaultValue="DEFAULT">
                  <option value="DEFAULT" disabled hidden>
                    Select District
                  </option>
                  <option value="s">s</option>
                  <option value="s">s</option>
                  <option value="s">s</option>
                </select>
                <select defaultValue="DEFAULT">
                  <option value="DEFAULT" disabled hidden>
                    Select Purpose
                  </option>
                  <option value="s">s</option>
                  <option value="s">s</option>
                  <option value="s">s</option>
                </select>
                <select defaultValue="DEFAULT">
                  <option value="DEFAULT" disabled hidden>
                    Select Category
                  </option>
                  <option value="s">s</option>
                  <option value="s">s</option>
                  <option value="s">s</option>
                </select>
              </div>
            </>
          )}
          {toogle === 2 && (
            <>
              <div className="input">
                <input
                  type="search"
                  placeholder="Enter Name, District, State, Services"
                />
                <div
                  className="btn btn-primary"
                  style={{ padding: "0.3% 2% 0.3% 2%" }}
                >
                  Search
                </div>
                <div className="btn" style={{ fontSize: "13px" }}>
                  Advance Search
                </div>
              </div>
              <div className="hmSelect">
                <select defaultValue="DEFAULT">
                  <option value="DEFAULT" disabled hidden>
                    Select State
                  </option>
                  <option value="s">Select District</option>
                  <option value="s">Select Purpose</option>
                  <option value="s">Select Category</option>
                </select>
                <select defaultValue="DEFAULT">
                  <option value="DEFAULT" disabled hidden>
                    Select District
                  </option>
                  <option value="s">s</option>
                  <option value="s">s</option>
                  <option value="s">s</option>
                </select>
                <select style={{ width: "30%" }} defaultValue="DEFAULT">
                  <option value="DEFAULT" disabled hidden>
                    Select Services
                  </option>
                  <option value="s">s</option>
                  <option value="s">s</option>
                  <option value="s">s</option>
                </select>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeSearch;
