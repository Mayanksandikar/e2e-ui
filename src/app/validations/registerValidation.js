export const regValidations = (name, value , size, type)=>{
  let errorMsg = '';
  switch(name) {
    case "uid":
      if (!value) {
        errorMsg = "Please Enter Your User ID";
      }else{
        const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!regExp.test(value)){
          errorMsg = "email id should be in gmail format";
        }
      }
      break;
    case "pwd":
        if(!value){
            errorMsg="Please Enter  Password";
        }
        if(value && value.length < 5){
            errorMsg="Password should have min 5 char";
        }
      break;
    case "gen":
    case "hobbies":
    case "country":
    case "address":
      if(!value){ 
        errorMsg=`Please Enter  ${name}`;
        }
      break;
    case "photo":
      if (size > 555000 || (type && !type.startsWith("image/"))) {
        errorMsg = "Please select a valid image.";
    }
    break;   
  }
  return errorMsg
};
