const textInput = document.getElementById('textInput')
const textOutput = document.getElementById('textOutput')
const inputText = window.location.href.slice(-5, -3)
const outputText = window.location.href.slice(-2)
let storeText = [];
textInput.addEventListener('keydown', function (e) {
    if (e.code === 'Space') {

        let text = textInput.value;
        let textArr = text.split(" ");
        const data = textArr[textArr.length - 1]
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputText}&tl=${outputText}&dt=t&q=${data}`
        const translate = async function (url) {
            const res = await fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    storeText.push(data[0][0][0]);
                    textOutput.value = storeText.toString().replace(/,/g, " ");
                    return console.log(storeText.toString().replace(/,/g, " "))
                }
                )


        }

        translate(url)
    }
})
