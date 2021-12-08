console.log('Hello World!');
let TodoLogs = document.getElementById('div');
let Image = document.querySelector('.todo img');
let todo = document.querySelector('.todo');
let Button = document.querySelector('.todo button');
let Input = document.querySelector('.todo input');
let TodoUserInterFace = document.querySelector(".todo");
let BackImage = document.querySelector('#div img');
index = 0;
function fname(){
   for (let i = 0;i<AllArrayList.length;i++){
   let createDiv = document.createElement('div');
    let p = document.createElement('p');
    p.innerHTML = AllArrayList[i];
    let button = document.createElement('button');
    button.innerHTML = "NotWork";
   
    createDiv.appendChild(p);
    createDiv.appendChild(button);
    TodoLogs.appendChild(createDiv);
     button.addEventListener('click',(event)=>{
      AllArrayList.pop(i);
    });
   }
   
   
   if (TodoLogs.style.display == "none"){
     TodoUserInterFace.style.display = "none";
     TodoLogs.style.display = "unset";
   }
   index = 0;
  
}
Image.addEventListener('click',(evnt)=>{
    fname();
 });

let AllArrayList = new Array();

Button.addEventListener('click',(event)=>{
  if (Input.value != ""){
    AllArrayList.push(Input.value);
     Input.value = "";
     index = 1;
  }
});

BackImage.addEventListener('click',(event)=>{
  if (todo.style.display == "none"){
    todo.style.display = "unset";
    TodoLogs.style.display = "none";
  }
});
function a(i) {
  console.log(i);
}