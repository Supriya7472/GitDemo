let heading=document.createElement('h1')
heading.innerText='This is heading inside body'
document.body.append(heading);
heading.style.color='blue'

let container=document.getElementById('container')
let h2tag=document.createElement('h2')
h2tag.innerText='This is headong inside div-conatiner'
h2tag.style.backgroundColor='yellow'
container.appendChild(h2tag)

let users=['abhay','bharath','chethan'];
let h1tag=document.createElement('h1')
h1tag.innerText=`this is a list of ${users.length} users`
document.body.append(h1tag)
let olist=document.createElement('ol')
document.body.append(olist)
for(let ele of users){
    
    let list=document.createElement('li')
    list.innerText=ele
    olist.appendChild(list)
}

let table=document.getElementsByTagName('table')
let EmpObjs=[{
    id:101,
    name:"xyz",
    salary:5000
},
{
    id:102,
    name:"abc",
    salary:7000
    
}

]
let i=2;
for(let ele of EmpObjs){
    let trow=document.createElement('tr')
    trow.innerHTML=`
     <td>${EmpObjs.length-(i--)}</td>
     <td>${ele.name}</td>
     <td>${ele.salary}</td>`

    table.appendChild(trow)
}