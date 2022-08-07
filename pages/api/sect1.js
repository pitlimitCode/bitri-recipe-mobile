import React, { useState } from 'react';
import axios from "axios";

import Link from 'next/link';

export default function Home1() {
  // console.log(props);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="row">
          <div className="col-9">
            <div 
              className="input-group"
              style={{
                border: "none",
                "boxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
                "WebkitBoxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
                "MozBoxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
              }}
            >
              <i className="input-group-text bi bi-search bg-white" id="logosearch"></i>
              <input
                placeholder="Search Pasta, Bread, etc"
                type="search"
                className="form-control"
                id="searchinput"
                onChange={(e) => setSearching(e.target.value)}
                // onClick={linkToName}
              />
            </div>
          </div>
          <div className="col-3">
            <button type="submit" id="searchbutton"
              // onClick={handleSearchingName}
            >Search</button>
          </div>
      </div>
    </form>
  )
}
