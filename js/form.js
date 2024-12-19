function validForm () {
    const inputText = document.querySelectorAll('input[type="text"]')
    document.querySelector('form').addEventListener('input', function (e) {
        e.preventDefault()
        console.log(inputText)
        for (let i = 0; i < inputText.length; i++){
        if (inputText[i].value === ""){
            console.log("pas valid")
            inputText[i].setAttribute('id', "error")
        } else {
            inputText[i].setAttribute('id', "valid")
        }
    }
    })
}

validForm()