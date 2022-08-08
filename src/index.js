module.exports = function reverse (n) {
    let stringNum = n + ''
    let numArr = stringNum.split('')
    let revesredNumArr = []
    let revesredStringNum = ''
    for (let element of numArr){
        if (element == "0" && numArr[numArr.length-1] == element
        || element == "-"){
            //pass
        }
        else{
            revesredNumArr.unshift(element)
        }
    }
    for (let element of revesredNumArr){
        revesredStringNum += element
    }

    return Number(revesredStringNum)

}
