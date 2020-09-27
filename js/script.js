function buttonSum() {
    let res = 0;
    res = parseInt(document.getElementById('input1').value, 10) + parseInt(document.getElementById('input2').value, 10)
    document.getElementById('output').value = res
}
function buttonUmn() {
    let res = 0;
    res = parseInt(document.getElementById('input1').value, 10) * parseInt(document.getElementById('input2').value, 10)
    document.getElementById('output').value = res
}
function buttonMin() {
    let res = 0;
    res = parseInt(document.getElementById('input1').value, 10) - parseInt(document.getElementById('input2').value, 10)
    document.getElementById('output').value = res
}
function buttonDel() {
    let res = 0;
    res = parseInt(document.getElementById('input1').value, 10) / parseInt(document.getElementById('input2').value, 10)
    document.getElementById('output').value = res
}