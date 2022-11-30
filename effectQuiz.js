function showScore()
{

    var counter = 0;

    if (document.getElementById('internet').checked) {
        counter += 1
    }

    if (document.getElementById('fb').checked) {
        counter += 1
    }

    if (document.getElementById('18').checked) {
        counter += 1
    }

    if (document.getElementById('9').checked) {
        counter += 1
    }

    if (document.getElementById('balloons').checked) {
        counter += 1
    }

    alert("You got "+ counter + " question(s) right.")
}

function showAnswers()
{
    document.getElementsByName("asn1")[0].value = "B. What the internet thinks of his talk?";
    document.getElementsByName("asn2")[0].value = "D. Facebook";
    document.getElementsByName("asn3")[0].value = "A. 18";
    document.getElementsByName("asn4")[0].value = "C. 2009";
    document.getElementsByName("asn5")[0].value = "B. Why are balloons so expensive?";
}