var form =document.getElementById('my-form')
var nameList =document.getElementById('name')
var emailList =document.getElementById('email')
var submit =document.getElementById('submit')
var itemList =document.getElementById("items");
var phoneList =document.getElementById("phone")



// console.log(localStorage.getItem("myObj"))  it gives [obj,obj] not proper
form.addEventListener('submit',addStorage);

itemList.addEventListener('click',removeLi);
itemList.addEventListener('click',editLi);



// function addStorage(e){
//     e.preventDefault();
//     var li =document.createElement('li')
//     li.className="list-group-item"

  
//     var text=document.createTextNode(nameList.value);
//     var text1=document.createTextNode(emailList.value);
//     var text2=document.createTextNode(" - ");
//     let button = document.createElement('button')
//     button.className="btn-sm float-right delete";
//     button.appendChild(document.createTextNode("X"))
//     var edit =document.createElement('button')
//     edit.className="btn-sm float-right edit"
//     edit.appendChild(document.createTextNode("Edit"))
//     li.appendChild(text)
//     li.appendChild(text2)
//     li.appendChild(text1)
//     li.appendChild(button)
//     li.append(edit)
//     itemList.appendChild(li)
//     let myObj ={
//         name:nameList.value,
//         email:emailList.value,
//         phone:phoneList.value
//     }
//     // let myObj1 ={
//     //     mname:"raju",
//     //     email:"ramaraqju2123"
//     // }
//     // let myObj1_serialized = JSON.stringify(myObj1)
//     // let myObj1_deserialized = JSON.parse(myObj1_serialized)

//     let myobj_serialized = JSON.stringify(myObj)
//     // localStorage.setItem("myObj",myobj_serialized)
//     // localStorage.setItem('name',nameList.value);
//     // localStorage.setItem('mail',emailList.value)
//     localStorage.setItem(emailList.value,myobj_serialized)

// }

function showOnscreen(e){
    
    var li =document.createElement('li')
    li.className="list-group-item"
   
  
    var text=document.createTextNode(e.name);
    var text1=document.createTextNode(e.email);
    var text2=document.createTextNode(" - ");
    let button = document.createElement('button')
    button.className="btn-sm float-right delete";
    button.appendChild(document.createTextNode("X"))
    var edit =document.createElement('button')
    edit.className="btn-sm float-right edit"
    edit.appendChild(document.createTextNode("Edit"))
    li.appendChild(text)
    li.appendChild(text2)
    li.appendChild(text1)
    li.appendChild(button)
    li.append(edit)
    itemList.appendChild(li)
    let myObj ={
        name:nameList.value,
        email:emailList.value,
        phone:phoneList.value
    }
}




function addStorage(e){
    e.preventDefault()
    const myObj ={
        name:nameList.value,
        email:emailList.value,
        phone:phoneList.value
    }
    
axios.post('https://crudcrud.com/api/7604fb59ea1648b88af96a1485bdc8e0/Appointment',myObj).then((res)=>{
console.log(res)
showOnscreen(res.data)
}).catch((error)=>console.log("found error",error))        

}



function removeLi(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure to delete")){
            var rem = e.target.parentElement;
            itemList.removeChild(rem);
            console.log(rem)
            em_rem = rem.childNodes[2].textContent;
            localStorage.removeItem(em_rem)
        }
    }
}
function editLi(e){
    if(e.target.classList.contains('edit')){
        if(confirm("Are you sure to edit")){
            var rem = e.target.parentElement;
            itemList.removeChild(rem);
            nameList.value = rem.childNodes[0].textContent;
            emailList.value = rem.childNodes[2].textContent;
            em_rem = rem.childNodes[2].textContent;
            localStorage.removeItem(em_rem)

        }
    }
}
    
   
 


