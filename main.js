const loading = document.querySelector(".loading")

const modal = document.querySelector(".modal")
const modalImage = document.querySelector(".modal-image")
const modalContent = document.querySelector(".modal-content")
const modalClose = document.querySelector(".modal-close")
const bowlSlots = document.querySelectorAll(".bowl-slot")
const cookBtn = document.querySelector(".cook-btn")

cookBtn.addEventListener("click", createRecipe)

modalClose.addEventListener("click", function () {
    modal.classList.add("hidden")
    clearBowl()
})

// an array representing the selected ingredients
let bowl = []
const maxBowlSlots = bowlSlots.length

function clearBowl() {
    bowl = []

    bowlSlots.forEach(function (el, i) {
        el.innerText = "?"
    })
}

function addIngredient(ingredient) {
    if (bowl.length === maxBowlSlots) {
        bowl.shift()
    }
    bowl.push(ingredient)

    bowlSlots.forEach(function (el, i) {
        let selectedIngredient = "?"
        if (bowl[i]) {
            selectedIngredient = bowl[i]
        }

        el.innerText = selectedIngredient
    })

    if (bowl.length === maxBowlSlots) {
        cookBtn.classList.remove("hidden")
    }

}

async function makeRequest(endpoint, data) {
    try {
        const response = await fetch(_CONFIG_.API_BASE_URL + endpoint, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${_CONFIG_.API_KEY}`
            },
            method: "POST",
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error("Request failed");
        }
        
        return await response.json();
    } catch (error) {
        console.error(error);
        // Handle the error, show an error message, or take appropriate action
    }
}


async function createRecipe() {
    loading.classList.remove("hidden")

    const result = await makeRequest("/chat/completions", {
        model: _CONFIG_.GPT_MODEL,
        messages: [
            {
                role: "user",
                content: `Create a recipe with these ingredients ${bowl.join(", ")}. The recipe should be easy and with a creative and fun title. Your replies should be in a JSON format like this example:### {"title": "Recipe title", "ingredients": "1 egg, 1 tomato", "instructions": "mix the ingredients and put in the oven"}###`
            }
        ],
        temperature: 0.7
    })

    const content = JSON.parse(result.choices[0].message.content)

    const imageJSON = await makeRequest("/images/generations", {
        prompt: `Create an image for this recipe: ${content.title}`,
        n: 1,
        size: "512x512",
        response_format: "url"
    })

    const imageUrl = imageJSON.data[0].url

    modalContent.innerHTML = `
    <h2>${content.title}</h2>
    <p>${content.ingredients}</p>
    <p>${content.instructions}</p>
    `

    modalImage.innerHTML = `<img src="${imageUrl}" />`

    modal.classList.remove("hidden")
    loading.classList.add("hidden")
}


function init() {
    const ingredients = document.querySelectorAll(".ingredient")

    ingredients.forEach(function (element) {
        element.addEventListener("click", function () {
            addIngredient(element.innerText)
        })
    })

}

123

init()