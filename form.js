// declarations
const frm = document.getElementById("lab7-form");
let btn = document.getElementById("go-btn");
let txtarea = document.getElementById("story");
let countOutput = document.getElementById("txtareaValCount");
let progressBar = document.getElementById("form-progress");
let charCountMsg = document.getElementById("char-count-error-msg");
let txtareaValCount = 0;
let percentComplete = 0;

// textarea function
txtarea.addEventListener("keyup", function(evt) {
    let txtareaVal = txtarea.value.trim();
    txtareaValCount = txtareaVal.length;
    countOutput.textContent = txtareaValCount;

    percentComplete = txtareaValCount;
    progressBar.setAttribute('value', percentComplete);
    progressBar.textContent = percentComplete + "%";

    if (txtareaValCount >= 100) {
        charCountMsg.setAttribute('class', 'char-count-error-msg-valid');
    } else {
        charCountMsg.setAttribute('class', 'char-count-error-msg-invalid');
    }
});

// go button function
btn.addEventListener("click", function(evt) {
    /*if (frm.checkValidity()) {
        frm.submit();
    }*/

    // json
    let inputs = frm.querySelectorAll("input, select, textarea");
    let data = new FormData();

    for (let inp of inputs) {
        data.append(inp.id || inp.name || inp.value.trim());
    }

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "submit.php", true);
    xmlhttp.send(data);

});