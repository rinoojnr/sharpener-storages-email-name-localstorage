var form =document.getElementById('my-form')
var nameList =document.getElementById('name')
var emailList =document.getElementById('email')
var submit =document.getElementById('submit')
var itemList =document.getElementById("items");
var phoneList =document.getElementById("phone")

let userList;



// console.log(localStorage.getItem("myObj"))  it gives [obj,obj] not proper
form.addEventListener('submit',addStorage);

// itemList.addEventListener('click',removeLi);
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

// function showOnscreen(e){
    
//     var li =document.createElement('li')
//     li.className="list-group-item"
   
  
//     var text=document.createTextNode(e.name);
//     var text1=document.createTextNode(e.email);
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
// }




function addStorage(e){
    e.preventDefault()
    const myObj ={
        name:nameList.value,
        email:emailList.value,
        phone:phoneList.value
    }
    
axios.post('https://crudcrud.com/api/f687f337dc2946769a47dbbdfea8b2f8/Appointments',myObj).then((res)=>{
console.log(res)
listUsers();
}).catch((error)=>{
    console.log("found error",error)
})
     

}



window.addEventListener('DOMContentLoaded',()=>{
    listUsers();
})

function listUsers() {
    console.log('================')
    axios.get('https://crudcrud.com/api/f687f337dc2946769a47dbbdfea8b2f8/Appointments').then((resolve)=>{
        console.log(resolve.data)
        var nHTML = '';
        userList= resolve.data
        for(let i=0;i<resolve.data.length;i++){
            // showOnscreen(resolve.data[i])
            nHTML += `<div class="notes" id=`+String(resolve.data._id)+`" ">
                <div class="items" id="item-color" >                                      
                <div class="s3-btn" name="Open"  id=`+i+` onclick="updateNotePopupOpen(id, name='update_note');">`+
                    `<li id="update-title" class="list-group-item"  style="list-style-type:none">` + resolve.data[i].name + "-"+resolve.data[i].email
                    +
                    
                    `<span class="material-icons-outlined" id=`+i+` onclick="deleteUser(id)">
                        <button type='button' class="btn-sm float-right delete">DELETE
                    </span>`

                    +`</li>` +
                    // `<li id="update-note" class="update-note" style="list-style-type:none">` + resolve.data[i].email +
                    // `</li>` +
                // `</div>`+
                // `<div class="sub-buttons" id="display-buttons">`+
                //     `<span class="material-icons-outlined" id=`+i+` onclick="deleteUser(id)">
                //         <button type='button' class="btn-sm float-right delete">DELETE
                //     </span>`+
                // `</div>`+
                // `</div>`+  
            `</div>` 
        }
        document.getElementById("items").innerHTML = nHTML;
    })
    
    .catch((error)=>console.log(error))
    
}


// function removeLi(e){
//     if(e.target.classList.contains('delete')){
//         if(confirm("Are you sure to delete")){
//             axios.get(`https://crudcrud.com/api/7604fb59ea1648b88af96a1485bdc8e0/Appointment`).then((response)=>{
//                 console.log(response.data._id,"lll")
//             })
//         }
//     }

// }

function deleteUser(id) {
    axios.delete(`https://crudcrud.com/api/f687f337dc2946769a47dbbdfea8b2f8/Appointments/${userList[id]._id}`).then((res)=>    listUsers()
    )
}


// function removeLi(e){
//     var id_ = ""
//     if(e.target.classList.contains('delete')){
//         if(confirm("Are you sure to delete")){
//             var rem = e.target.parentElement;
//             let name_ = e.target.parentElement.childNodes[0].textContent;
//             let mail_ = e.target.parentElement.childNodes[2].textContent;
//             axios.get('https://crudcrud.com/api/240d74cb42674384a81ff3183c69f1dd/Appointments').then((res)=>{
//                 for(let i=0;i<res.data.length;i++){
//                     if(res.data[i].name && res.data[i].email){
//                         if(res.data[i].name == name_ && res.data[i].email==mail_){
//                             id_ = res.data[i]._id
//                             console.log(id_)
//                             axios.delete(`https://crudcrud.com/api/240d74cb42674384a81ff3183c69f1dd/Appointments/${id_}`).then((res)=>console.log(res))
//                         }
//                     }
                   
//                 }
//             })
    
        
       
            

//             itemList.removeChild(rem);
//             em_rem = rem.childNodes[2].textContent;
//             localStorage.removeItem(em_rem)
//         }
//     }
// }
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
    
   
 


