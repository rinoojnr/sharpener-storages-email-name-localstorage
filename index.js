var form =document.getElementById('my-form')
var nameList =document.getElementById('name')
var emailList =document.getElementById('email')
var submit =document.getElementById('submit')
var itemList =document.getElementById("items");



// console.log(localStorage.getItem("myObj"))  it gives [obj,obj] not proper
form.addEventListener('submit',addStorage);
itemList.addEventListener('click',removeLi);




function addStorage(e){
    e.preventDefault();
    var li =document.createElement('li')
    li.className="list-group-item"
  
    var text=document.createTextNode(nameList.value);
    var text1=document.createTextNode(emailList.value);
    var text2=document.createTextNode(" - ");
    let button = document.createElement('button')
    button.className="btn-sm float-right delete";
    button.appendChild(document.createTextNode("X"))
    li.appendChild(text)
    li.appendChild(text2)
    li.appendChild(text1)
    li.appendChild(button)
    itemList.appendChild(li)
    let myObj ={
        name:nameList.value,
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
    localStorage.setItem(emailList.value,myobj_serialized)

}
function removeLi(e){
    console.log("gggggg")
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure")){
            var rem = e.target.parentElement;
            itemList.removeChild(rem);
        }
    }
}
    
   
 


