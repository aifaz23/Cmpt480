function showScore()
{

    var counter = 0;

    if (document.getElementById('national').checked) {
        counter += 1
    }

    if (document.getElementById('650').checked) {
        counter += 1
    }

    if (document.getElementById('sun').checked) {
        counter += 1
    }

    if (document.getElementById('qat').checked) {
        counter += 1
    }

    if (document.getElementById('tra').checked) {
        counter += 1
    }

    alert("You got "+ counter + " question(s) right.")
}

function showAnswers()
{
    document.getElementsByName("asn1")[0].value = "C. National Security Advisor";
    document.getElementsByName("asn2")[0].value = "B. 650";
    document.getElementsByName("asn3")[0].value = "B. Sunday";
    document.getElementsByName("asn4")[0].value = "D. Qatar";
    document.getElementsByName("asn5")[0].value = "A. Traffic Policemen";
}