const hours=document.querySelector(".hours")
const minitus=document.querySelector(".minitus")
const seconds=document.querySelector(".seconds")
const form=document.querySelector("form")
const creatForm=document.querySelector(".creat_form")
const inputText=document.querySelector(".input_text")
const message =document.querySelector(".message")
const table=document.querySelector("table")

//times
function data1(){
    setInterval(()=>{
        let days=new Date;
        // console.log(days);

        hours.textContent=days.getHours();
        minitus.textContent=days.getMinutes();
        seconds.textContent=days.getSeconds(); 
    },1000)
}

data1()

let todos =JSON.parse(localStorage.getItem("list"))
? JSON.parse(localStorage.getItem("list"))
:[]

if(todos.length) getData()

const setData = () => {
    localStorage.setItem('list', JSON.stringify(todos))
  }

//malumot olish

function getData(){
    const data2=JSON.parse(localStorage.getItem("list"));
    // console.log(data2);
    table.innerHTML=''
    data2.forEach((item,index) => {
        table.innerHTML+=`
        <tr>
            <td>
                <p>${item.text}</p>
                <button onclick="deletes(${index})">Delete</button>
            </td>
        </tr>
        `    
    });
}



// console.log(creatForm);
creatForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const text =inputText.value.trim()
    // console.log(text);
    creatForm.reset()
    if(text.length>0){
        todos.push({
            text:text
        })
        setData()
        getData()
    }
    else{
        message.style.display="block"
        message.textContent="Malumotni kiriting..."
        setInterval(()=>{
        message.textContent=""
        },3000)
    }
    // console.log(todos);
})

function deletes(id){
  const filtered=todos.filter((item,i)=>{
    return id!==i;
  })

  todos=filtered;
  setData();
  getData();
}




