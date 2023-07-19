class listStudent {
    constructor(studentId,studentName,email,phone,address,sex){
        this.studentId=studentId;
        this.studentName=studentName;
        this.email=email;
        this.phone=phone;
        this.address= address;
        this.sex=sex;
    }
}
const listStudent =[
    new listStudent["SV001","Nguyen Van A","abc@gmail.com","0345678912","Ha Noi","Male"],
   
]
function renderData() {
    let tbody = document.getElementById("content");
    tbody.innerHTML="";
    for (const key in listStudent) {
        tbody.innerHTML+=`<tr>
        <td>${1}</td>
        <td>${listStudent[studentId()]}</td>
        <td>${listStudent[studentName()]}</td>
        <td>${listStudent[email()]}</td>
        <td>${listStudent[phone()]}</td>
        <td>${listStudent[address()]}</td>
        <td>${listStudent[sex()]}</td>
        <td>
            <button onclick="functionACB()">Edit</button>
            <button onclick="functionACB()">Delete</button>
        </td>
      </tr>`
    }
}
document.onload=renderData();