class Income{
    constructor(title,amount){
        this.title = title;
        this.amount = amount
    }
}

class IncomeFunction{

    addIncome(element){

        let incomeLine = document.createElement("div")
        incomeLine.innerHTML = `

        <span class="ms-3">${element.title}</span>
        <span class="ms-3 incomeAmount">${element.amount}</span>
        <span class="ms-3"><a href="#" class="delete">X</a></span>

        `
        document.getElementById("incomeRow").appendChild(incomeLine)
        
    }

    inflowAddings(){
        let Inflow = document.getElementById("Inflow")
        Inflow.innerText = parseInt(Inflow.innerText) + parseInt(document.getElementById("amount").value)
        document.getElementById("balance").innerText = Inflow.innerText - Outflow.innerText
    }


    emptyInputs(){
        document.getElementById("title").value = ""
        document.getElementById("amount").value = ""
    }

    deleteIncome(target){

        let Inflow = document.getElementById("Inflow")
        let incomeAmount = document.querySelector(".incomeAmount")

        if(target.className == "delete"){
            
            target.parentElement.parentElement.remove()
            Inflow.innerText = parseInt(Inflow.innerText) - parseInt(incomeAmount.innerText) 

        }

    }

}

document.getElementById("plusIncome").addEventListener("click", () => {

    let titles = document.getElementById("title").value
    let amounts = document.getElementById("amount").value


    let income = new Income(titles,amounts)
    let incomefunction = new IncomeFunction()

    if(titles=="" || amounts==""){
        console.log("fill the blanks")
    }
    else{
        incomefunction.addIncome(income);
        incomefunction.inflowAddings()
        incomefunction.emptyInputs()
    }

})

document.getElementById("incomeRow").addEventListener("click", (e) => {

    let incomefunction = new IncomeFunction()
    incomefunction.deleteIncome(e.target)

    e.preventDefault();

})

class Outcome{
    constructor(title,amount){
        this.title = title;
        this.amount = amount
    }
}

class OutcomeFunction{

    addOutcome(element){

        let outcomeLine = document.createElement("div")
        outcomeLine.innerHTML = `

        <span class="ms-3">${element.title}</span>
        <span class="ms-3">${element.amount}</span>
        <span class="ms-3 delete" id="delete"><a href="#">X</a></span>

        `
        document.getElementById("outcomeRow").appendChild(outcomeLine)
        
    }

    OutflowAddings(){
        let Outflow  = document.getElementById("Outflow")
        Outflow .innerText = parseInt(Outflow .innerText) + parseInt(document.getElementById("amount").value)
        document.getElementById("balance").innerText = parseInt(Inflow.innerText) - parseInt(Outflow.innerText)
    }


    emptyInputs(){
        document.getElementById("title").value = ""
        document.getElementById("amount").value = ""
    }

    deleteIncome(target){

        if(target.className == "delete"){
            target.parentElement.parentElement.remove()
        }

    }

}

document.getElementById("plusOutcome").addEventListener("click", () => {

    let titles = document.getElementById("title").value
    let amounts = document.getElementById("amount").value

    let outcome = new Outcome(titles,amounts)
    let outcomefunction = new OutcomeFunction()

    if(titles=="" || amounts==""){
        console.log("fill the blanks")
    }
    else{
        outcomefunction.addOutcome(outcome);
        outcomefunction.OutflowAddings()
        outcomefunction.emptyInputs()
    }

})



