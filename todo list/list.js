class TODO{
    constructor(event,day,hour){
        this.event = event;
        this.day = day;
        this.hour = hour;
    }
}

class FUNC{

    addTODO(todos){
        const bookList = document.getElementById("bookList");
        const newRow = document.createElement("tr")
        newRow.innerHTML= `
        <td>${todos.event}</td>
        <td>${todos.day}</td>
        <td>${todos.hour}</td>
        <td><a href="#" class="delete">X</td>
        `
        bookList.appendChild(newRow)
    }

    clear(){
        document.getElementsByClassName("event")[0].value=""
        document.getElementsByClassName("day")[0].value=""
        document.getElementsByClassName("hour")[0].value=""
    }

    showMessage(message,className){
        let messageDiv = document.createElement("div")
        messageDiv.className = `alert ${className}`;
        messageDiv.appendChild(document.createTextNode(message));
        let todo = document.getElementsByClassName("todo")[0]
        let container = document.getElementsByClassName("container")[0]
        todo.insertBefore(messageDiv,container)

        setTimeout(function(){
            document.querySelector(".alert").remove()
        },3000)
    }

    delete(target) {
        if(target.className === 'delete') {
          target.parentElement.parentElement.remove();
        }
    }

    addEvent(){
       let number=  document.getElementById("number")
       number.innerHTML = parseInt(number.innerHTML)  + 1
    }

}

document.getElementById("add").addEventListener("click", () =>{

    let event = document.getElementsByClassName("event")[0].value
    let day = document.getElementsByClassName("day")[0].value
    let hour = document.getElementsByClassName("hour")[0].value

    let todo = new TODO(event,day,hour)
    let func = new FUNC()

    if(event == "" || day == "" || hour == ""){
        func.showMessage('Please fill all required fields!', 'error');
    }
    else{
        func.addTODO(todo)
        func.clear()
        func.addEvent()
        func.showMessage("Book added successfully", "success")
    }

})

document.getElementById("bookList").addEventListener("click",(e) =>{

    const func = new FUNC();
  
    func.delete(e.target);

    e.preventDefault();

    func.showMessage('kitap Silindi!', 'success');

    number.innerHTML = parseInt(number.innerHTML)  - 1
})