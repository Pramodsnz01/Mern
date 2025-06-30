// Program to print PROGRAM pattern
const word = "PROGRAM"
for (let i = 0; i < word.length; i++) {
    let pattern = ""
    for (let j = 0; j <= i; j++) {
        pattern += word[j] + " "
    }
    console.log(pattern)
}

for (let i = 1; i <= 5; i++) {
    let printstr = ""
    for (let j = 1; j <= 5; j++) {
        if ((i >= 2 && i <= 4) && (j >= 2 && j <= 4)) {
            printstr += "  "
        } else {
            printstr += j + " "
        }
    }
    console.log(printstr)
}