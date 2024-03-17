const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", handleInput);

function handleInput(event) {
    event.preventDefault();
    let name = nameInput.value.trim();
    

    if (name === "" || name.includes(" ")) {
        nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = name;
    }
};

