const btn = document.querySelector(`.translate`)
const inputText = window.location.href.slice(-5, -3)
const outputText = window.location.href.slice(-2)
console.log(inputText, outputText, window.location.href)
btn.addEventListener(`click`, function () {
    const data = document.querySelector(`#inputText`).value
    const output = document.querySelector(`#outputText`)
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputText}&tl=${outputText}&dt=t&q=${data}`
    const translate = async function (url) {
        const res = await fetch(url)
            .then((response) => response.json())
            .then((data) => output.value = data[0][0][0])


    }
    translate(url)
})
