import React from 'react';

export default function Inputs(props) {
  const { icon, type, placeholder, onChange, value } = props;
  const classNamed =`${icon} input-group-text bg-white bi`;
  return (
    <>
      <div className="input-group mt-3">
        <i
          className={classNamed}
          style={{
            border: "none",
            "boxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
            "WebkitBoxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
            "MozBoxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
          }}
        ></i>
        <input
          className="form-control text-1-cl bg-white"
          type={type} 
          placeholder={placeholder} 
          onChange={onChange} 
          // value={value} 
          style={{
            border: "none",
            "boxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
            "WebkitBoxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
            "MozBoxShadow": "2px 2px 5px 1px rgba(0,0,0,0.12)",
          }}
        
        />
      </div> 
    </>
  );
}