document.addEventListener('DOMContentLoaded', (event) => {
    let text = ""
    for (let x = 1; x <= 8; x++) {
        text = x

        if (text % 2 == 1) {
            text += " # # # # "
        }
        else {
            text += "# # # # "
        }
    }

    document.getElementById("chess").innerText += text + "\r\n"
})
