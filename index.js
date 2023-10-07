var form =document.getElementById('my-form')
var nameList =document.getElementById('name')
var emailList =document.getElementById('email')
var submit =document.getElementById('submit')

form.addEventListener('submit',addStorage);

function addStorage(e){
    e.preventDefault();
    localStorage.setItem('name',nameList.value);
    localStorage.setItem('mail',emailList.value)
    console.log(nameList.value,emailList.value)
}

