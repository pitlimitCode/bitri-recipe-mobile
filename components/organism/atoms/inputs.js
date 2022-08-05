import React from 'react';

export default function Inputs(props) {
  const { icon, type, placeholder, onChange, value } = props;
  const classNamed =`${icon} input-group-text bg-white bi`;
  return (
    <>
      <div className="input-group mt-3">
        <i className={classNamed} id="logInput" ></i>
        <input
          id="idInput"
          className="form-control text-1-cl bg-white"
          type={type} 
          placeholder={placeholder} 
          onChange={onChange} 
          value={value} 
        />
      </div> 
    </>
  );
}

{/* 
<div className="input-group">
  <i className="input-group-text bi bi-search" id="logoinput"></i>
  <input
    placeholder="Cari resep: oseng, sayur, dll"
    type="search"
    className="form-control"
    id="input"
  />
</div> 
*/}