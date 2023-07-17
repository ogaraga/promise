let myName = document.getElementById("name");
let email = document.getElementById("email");
let span = document.getElementById("labs");
function update() {
    const promise = new Promise((resolve, reject) => {
        if (email.value !== isNaN && myName.value !== isNaN &&
            email.value !== "" && email.value.includes("@") && myName.value !== "") {
            email.value = "valid email";
            myName.value = "valid name";
            email.style.border = "2px solid green";
            myName.style.border = "2px solid green";
            span.style.color = "green";
            email.style.color = "green";
            myName.style.color = "green";
            resolve("Resolution");
        }
        else {
            span.style.color = "red";
            email.style.border = "2px solid red";
            myName.style.border = "2px solid red";
            email.style.color = "red";
            myName.style.color = "red";
            email.value = "invalid email";
            myName.value = "invalid name";
            reject("Rejection");
        }

    }).then((resolve) => {
        span.innerText = `${resolve}: Promise fulfilled with valid UserIds`;
    }).catch((reject) => {
        span.innerText = `${reject}: Promise rejected due to invalid UserIds`
    })
}
