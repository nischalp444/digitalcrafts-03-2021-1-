//data pulled from HTML
 const pulledMainDiv = document.querySelector(".main-div")
 const pulledpersonButton = document.querySelector(".personButton")
 const pulleduserButton = document.querySelector(".userButton")
 const pulledresultsConatiner = document.querySelector(".resultsConatiner")
//async function
const fetchPersons = async () => {
    let personsLink = await fetch("https://fakerapi.it/api/v1/persons?_quantity=30&_gender=male&_birthday_start=2005-01-01")
    let jsonForPeople = await personsLink.json();
    console.log(jsonForPeople)
    for(let people of jsonForPeople.data){
    firstandlast = (`${people.firstname} ${people.lastname}`)
    const rand = (Math.random())
    const createdDiv = document.createElement("div")
    const conatainer1 = `
    <div>
    <img class = "userimage" src = "http://placeimg.com/640/480/people/${rand}"></img>
    </div>
        <div class="name">${firstandlast}</div>
        <div class="email">${people.email}</div>
        <div class="phone">${people.phone}</div>
        <div class="birthday">${people.birthday}</div>
        <div class="gender">${people.gender}</div>`
        createdDiv.insertAdjacentHTML("afterbegin",conatainer1)
    pulledresultsConatiner.append(createdDiv)
    }
    return jsonForPeople
}
// event listener for people
const peopleButton = pulledpersonButton.addEventListener("click", function (){
    pulledresultsConatiner.innerHTML = ""
    fetchPersons()
})
const fetchusers = async () => {
    let userLink = await fetch("https://fakerapi.it/api/v1/users?_quantity=30&_gender=male")

    let jsonForuser = await userLink.json();

    console.log(jsonForuser)

    for(let user of jsonForuser.data){

        firstandlast = (`${user.firstname} ${user.lastname}`)

        const rand = (Math.random())
        
        const createdDiv = document.createElement("div")
        const container2 = `
        <div class="photo">
        <img class="userimage" src="http://placeimg.com/640/480/user/${rand}"></img>
        </div>
        <h6 class="name">${firstandlast}</h6>
        <h6 class="email">${user.email}</h6>
        <h6 class="ip">${user.ip}</h6>
        <h6 class="username">${user.username}</h6>
        <h6 class="password">${user.password}</h6>`
        createdDiv.insertAdjacentHTML("afterbegin",container2)
        pulledresultsConatiner.append(createdDiv)   
    }
}
const userButton = pulleduserButton.addEventListener("click", function (){
    pulledresultsConatiner.innerHTML = ""
    fetchusers()
})