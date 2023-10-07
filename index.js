var form =document.getElementById('my-form')
var nameList =document.getElementById('name')
var emailList =document.getElementById('email')
var submit =document.getElementById('submit')

// console.log(localStorage.getItem("myObj"))  it gives [obj,obj] not proper
form.addEventListener('submit',addStorage);

function addStorage(e){
    e.preventDefault();
    let myObj ={
        mname:nameList.value,
        email:emailList.value
    }
    // let myObj1 ={
    //     mname:"raju",
    //     email:"ramaraqju2123"
    // }
    // let myObj1_serialized = JSON.stringify(myObj1)
    // let myObj1_deserialized = JSON.parse(myObj1_serialized)

    let myobj_serialized = JSON.stringify(myObj)
    localStorage.setItem("myObj",myobj_serialized)
    localStorage.setItem('name',nameList.value);
    localStorage.setItem('mail',emailList.value)
}

