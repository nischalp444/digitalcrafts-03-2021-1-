
const pulledTableContainer = document.querySelector(".table-container")
const pulledtable = document.querySelector(".table")
let number = 1
const fetchdata = async () => {
    let data = await fetch("https://fakerapi.it/api/v1/persons?_quantity=10&_gender=male&_birthday_start=2005-01-01")
    let jsonData = await data.json()
    console.log(jsonData)
    const sportsArray = ["Soccer", "Football", "Tennis",    "Basketball", "Table-Tennis", "Boxing", "Cycling", "Fencing"]
    
    let today = new Date().toISOString().slice(0, 10)
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    for (let people of jsonData.data){
        let sport = sportsArray[Math.floor(Math.random()*sportsArray.length)]
        var randomtime = `${getRandomInt(12)}:${getRandomInt(60)} PM`
        const fullName =  `${people.firstname} ${people.lastname}`
        const createdDivForTable = document.createElement("tr")
        createdDivForTable.className = "trClass"
    const tableContainerInHTML = `
            <td>${number}</td>
            <td>${fullName}</td>
            <td>${sport}</td>
            <td>${people.address.street}</td>
            <td>${today}</td>
            <td>${randomtime}</td>
        `

        createdDivForTable.innerHTML = tableContainerInHTML

        pulledtable.append(createdDivForTable)
        number +=1 
    }}

fetchdata()

const pulledScheduleGameDiv = document.querySelector(".ScheduleGameDiv")

const pulledScheduleGameClass = document.querySelector(".scheduleGameClass")

pulledScheduleGameClass.addEventListener("click",(event)=>{
    const pulledName = document.querySelector(".Name").value
    const pulledSport = document.querySelector(".Sport").value
    const pulledLocation = document.querySelector(".Location").value
    const pulledDate = document.querySelector(".Date").value
    const pulledTime = document.querySelector(".Time").value
    const createdDivForTable = document.createElement("tr")
    createdDivForTable.className = "trClass"
const tableContainerInHTML = `
        <td>${number}</td>
        <td>${pulledName}</td>
        <td>${pulledSport}</td>
        <td>${pulledLocation}</td>
        <td>${pulledDate}</td>
        <td>${pulledTime}</td>
    `

    createdDivForTable.innerHTML = tableContainerInHTML

    pulledtable.append(createdDivForTable)
    number +=1 
})