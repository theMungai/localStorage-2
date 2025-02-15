const studentName = document.querySelector(".student-name");
const admissionNumber = document.querySelector(".student-admission");
const dateOfBirth = document.querySelector(".birth-date");

class Student{
    constructor(name, admission,dob){
        this.name = name;
        this.admission = admission;
        this.dob = dob;
    }
}

const registerButton = document.querySelector(".register-student");
registerButton.addEventListener("click", () => {
    addStudent()
})

const studentArray = JSON.parse(localStorage.getItem("students")) || []

function addStudent(){
    let newStudent = new Student(studentName.value, admissionNumber.value,dateOfBirth.value);

    let generatedStudent = `
        <div class="student-details">
            <p>${newStudent.name}</p>
            <p>${newStudent.admission}</p>
            <p>${newStudent.dob}</p>
            <button class = "remove-student">Remove Student</button>
        </div>
    `;

    document.querySelector(".student-container").innerHTML += generatedStudent
    studentArray.push(newStudent);
    localStorage.setItem("students", JSON.stringify(studentArray))
    

}

function removeStudent(){
    studentArray
    renderStudent()
}

function renderStudent(){
    const studentContainer = document.querySelector(".student-container");
    studentContainer.innerHTML = "";

    studentArray.forEach((student) => {
        const renderedStudent = `
        <div class="student-details">
            <p>${student.name}</p>
            <p>${student.admission}</p>
            <p>${student.dob}</p>
            <button class = "remove-student">Remove Student</button>
        </div>
    `

    studentContainer.innerHTML += renderedStudent
    })
    
}
renderStudent()