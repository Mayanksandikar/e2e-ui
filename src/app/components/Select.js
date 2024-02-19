import React from "react";

export const Select = (props) => {
  const { lbl, name ,options, fnChange ,errorMsg} = props;
  
  return (
    <div className="row mb-3">
      <div className="col-sm-5 text-end">
        <b>{lbl}:</b>
      </div>
      <div className="col-sm-4">
       <select onChange={fnChange} className='from-control' name={name}> 
       <option value=""> Please Select One</option>
          {
              options.map((val)=> {
                  return <option>{val}</option>
              })
          }

       </select>
      </div>
      <div className="col-sm-3">
      {errorMsg && <b className="text-danger">{errorMsg}</b>}
      </div>
    </div>
  );
};




















