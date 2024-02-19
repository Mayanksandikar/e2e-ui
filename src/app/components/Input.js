import React from "react";
export const Input = (props) => {
  const { lbl, type, name ,options, fnChange, val, errorMsg, values} = props;
  const fnPrepareInput=()=>{
      switch(type){
          case 'text':
          case 'password':
              return  <input value={val} onChange={fnChange} type={type} name={name} className='form-control' />
          case 'file':
              return  <> <input onChange={fnChange} type={type} name={name} /> <img width={100} height={100} src={val}  /></>
              
          case 'radio':
            const radiobtns = options.map((val,ind)=> {
              return <> <input value={values[ind]} onChange={fnChange} type={type} name={name}  /> <span className='ms-2 me-4' />{val}</>
            })
            return radiobtns;
          case 'checkbox':
            const chkBoxs = options.map((val)=> {
                return <> <input id={val} onChange={fnChange} type={type} name={name}  /> <span className='ms-2 me-4' />{val}</>
            })
            return chkBoxs;
      }    
  }
  return (
    <div className="row mb-3">
      <div className="col-sm-5 text-end">
        <b>{lbl}:</b>
      </div>
      <div className="col-sm-4">
          {fnPrepareInput()}
    
      </div>
      <div className="col-sm-3">
            {errorMsg && <b className="text-danger">{errorMsg}</b>}
      </div>
    </div>
  );
};
