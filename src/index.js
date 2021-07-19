console.log('%c HI', 'color: firebrick')




function fetchDogs() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
.then(response => response.json())
.then(data => data.message.map(renderImage))

}
fetchDogs()

function renderImage(dogs){
    console.log(dogs)
    let div = document.querySelector("#dog-image-container")
    let img = document.createElement("img")

    img.src = dogs
    return div.append(img)

}

function fetchBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
        let dogArray = Object.keys(data.message)
        dogArray.map(renderDogList)
    })

}
fetchBreeds()

function renderDogList(dogs) {
    console.log(dogs)
    let ul = document.querySelector("#dog-breeds")
    let li = document.createElement("li")

    li.addEventListener("click", () => {
        li.style.color = "pink"
    })
    

    li.textContent = dogs
    return ul.append(li)
}

document.querySelector("#breed-dropdown").addEventListener("click", (e) => {

})

