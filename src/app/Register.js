"use client"
import React, { useState } from 'react'
import { Input } from "./components/Input"
import { Select } from "./components/Select"
import { TextArea } from './components/TextArea'
import { inputControl } from "./includes/configuration"
import { regValidations } from "./validations/registerValidation"
export const Register = () => {
    const [data, setData] = useState(inputControl)


    const fnRegister = () => {
        let isValid = true;
        let dataObj = {}
        const _data = JSON.parse(JSON.stringify(data));
        _data.forEach((obj) => {
            dataObj[obj.name] = obj.val;
            const errorMsg = regValidations(obj.name, obj.val);
            obj.errorMsg = errorMsg || '';
            if(errorMsg)isValid=false
        })
        setData(_data)
        if(!isValid) return;
        console.log(dataObj)
        alert("sending request to the server")
    }
    const fnChange = (eve) => {
        // debugger;
        const { name, value, type, checked, id ,files } = eve.target;
        const _data = JSON.parse(JSON.stringify(data));
        let errorMsg;
        const inputObj = _data.find((obj) => {
            return obj.name == name
        })
        switch(type){
            case "file":
                const selectedFile = files[0]
                errorMsg = regValidations(name, inputObj.val,selectedFile?.size,selectedFile?.type)
                if(!errorMsg){
                    inputObj.errorMsg = errorMsg || '';
                    
                    const reader = new FileReader();
                    reader.readAsDataURL(selectedFile);
                    reader.onload=()=>{
                       inputObj.val = reader.result;
                       setData(_data)
                    }
                    reader.onerror=()=>{
                       inputObj.val = ""
                       errorMsg = "Unable to read file"
                       inputObj.errorMsg = errorMsg || '';
                       setData(_data)
                    }
                }else{
                    inputObj.errorMsg = errorMsg || '';
                    setData(_data)

                }
                break;
            case "checkbox":
                const checkedValues = inputObj.val ? inputObj.val.split(',') : []
                if(checked){
                    checkedValues.push(id)
                }else{
                    const index = checkedValues.indexOf(id)
                    checkedValues.splice(index,1)
                }
                inputObj.val = checkedValues.join();
                errorMsg = regValidations(name, inputObj.val)
                inputObj.errorMsg = errorMsg || '';
                setData(_data)
                break;
            default:
                inputObj.val = value;
                errorMsg = regValidations(name, value)
                inputObj.errorMsg = errorMsg || '';
                setData(_data)
                break;     
        }
    }
return (
    <div>
        <h3 className="text-center my-3">Register</h3>
        <div className="container-fluid">
            {
                data.map((obj) => {
                    //  inputControl.map((obj)=> {
                    switch (obj.tag) {
                        case 'input':
                            return <Input {...obj} fnChange={fnChange} />
                        case 'select':
                            return <Select {...obj} fnChange={fnChange} />
                        case 'textarea':
                            return <TextArea {...obj} fnChange={fnChange} />
                }
                })
            }
            <div className="row">
                <div className="offset-sm-5 col-sm-7">
                    <button onClick={fnRegister} className="btn btn-primary">Register</button>
                </div>

            </div>
        </div>

    </div>
)
}
