document.addEventListener('DOMContentLoaded', (event) => {
    let text = ""
    for (let x = 1; x <= 8; x++) {
        text += x
        if (x % 2 == 1) {
            text += " # # # # "
        }
        else {
            text += "# # # # "
        }
        text += "\r\n"
    }

    document.getElementById("chess").innerText = text
})
