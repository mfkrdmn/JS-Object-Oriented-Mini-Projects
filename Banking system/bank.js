class Person{

    constructor(firstname,lastname,residence,phone,email){

        this.firstname = firstname;
        this.lastname = lastname;
        this.residence = residence;
        this.phone = phone;
        this.email = email

    }

}

class PersonFunction{

    addPerson(newMember){

        let accounts = document.getElementById("accounts");
        let newAccount = document.createElement("tr")
        newAccount.innerHTML = `

            <td>${newMember.firstname}</td>
            <td>${newMember.lastname}</td>
            <td>${newMember.residence}</td>
            <td>${newMember.phone}</td>
            <td>${newMember.email}</td>

        `
        accounts.appendChild(newAccount)

    }

    clear(){
        document.getElementById("Firstname").value = ""
        document.getElementById("Lastname").value = ""
        document.getElementById("Residence").value = ""
        document.getElementById("Phone").value = ""
        document.getElementById("E-mail").value = ""
    }

}

document.getElementById("btn").addEventListener('click', () => {

    let firstname = document.getElementById("Firstname").value
    let lastname = document.getElementById("Lastname").value
    let residence = document.getElementById("Residence").value
    let phone = document.getElementById("Phone").value
    let email = document.getElementById("E-mail").value

    let person = new Person(firstname,lastname,residence,phone,email)
    let personFunction = new PersonFunction()

    console.log(person)

    if (!firstname == "" || !lastname == "" ||!residence == "" ||!phone == "" ||!email == "") {
        personFunction.addPerson(person)
        personFunction.clear()
   }

});