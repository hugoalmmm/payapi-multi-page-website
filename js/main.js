let openBg = () => document.querySelector('.bg-wrapper').classList.remove('hidden')
let closeBg = () => document.querySelector('.bg-wrapper').classList.add('hidden')

document.querySelector('.open-bg').addEventListener('click', (openBg))
document.querySelector('.close-bg').addEventListener('click', (closeBg))

function validForm () {
    const inputText = document.querySelectorAll('input[type="text"]')
    const errorMessage = document.querySelectorAll('.error-message')

    for (let i = 0; i < inputText.length; i++){
        inputText[i].addEventListener('input', function(){
            if (inputText[i].value === ""){
                inputText[i].setAttribute('id', 'error')
                errorMessage[i].classList.remove('hidden')
            } else {
                inputText[i].setAttribute('id', 'valid')
                errorMessage[i].classList.add('hidden')
            }
        })
    }
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault()
        console.log(inputText)
        for (let i = 0; i < inputText.length; i++){
        if (inputText[i].value === ""){
            inputText[i].setAttribute('id', "error")
            errorMessage[i].classList.remove('hidden')
        } else {
            inputText[i].setAttribute('id', "valid")
        }
    }
    })
}

validForm()