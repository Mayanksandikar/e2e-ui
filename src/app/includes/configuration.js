export const inputControl=[
    {
        lbl: "User ID",
        tag: "input",
        type: "text",
        name: 'uid',
        val : ''
    },
    {
        lbl: "Password",
        tag: "input",
        type: "password",
        name: 'pwd',
        val : ''
    },
    {
        lbl: "Gender",
        tag: "input",
        type: "radio",
        name: 'gen',
        options:['Male' , 'Female'],
        values:["M" , "F"],
        val:""

    },
    {
        lbl: "Hobbies",
        tag: "input",
        type: "checkbox",
        name: 'hobbies',
        options:['cricket' , 'Football' , 'Hockey'],
        val:""

  },
    {
        lbl:"Country",
        tag:'select',
        name:"country",
        options:["india" , "uk" ,"us"],
        val:""

    },
    {
        lbl:"Address",
        tag:'textarea',
        name:"address",
        val:''

    },
    {
        lbl:"Photo",
        tag:'input',
        type:"file",
        name:"photo",
        val:""

    }
]