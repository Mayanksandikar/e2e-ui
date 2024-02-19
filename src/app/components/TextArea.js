import React from "react";

export const TextArea = (props) => {
  const { lbl, name, fnChange ,errorMsg} = props;
  
  return (
    <div className="row mb-3">
      <div className="col-sm-5 text-end">
        <b>{lbl}:</b>
      </div>
      <div className="col-sm-4">
      <textarea onChange={fnChange}  name={name} className="form-control">

      </textarea>
      </div>
      <div className="col-sm-3">
      {errorMsg && <b className="text-danger">{errorMsg}</b>}
      </div>
    </div>
  );
};
