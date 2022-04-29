var positivenumbers = [];
var negativenumbers = [];

function addpositive() {

    let postextbox = document.getElementById("positive");
    let number = postextbox.value
    let h1pos = document.getElementById("hp");
    h1pos.innerHTML += number + "<br>";
    positivenumbers.push(number)

}

function addnegative() {

    let postextbox = document.getElementById("negative");
    let number = postextbox.value
    let h1pos = document.getElementById("hn");
    h1pos.innerHTML += number + "<br>";
    negativenumbers.push(number)


}

function findTotal(array) {
    let total = 0 ;
    for (let x = 0; x<array.length; x++ ) {
        let number = array [x] ;
        total = eval(total) + eval(number);
    }
    return total;

}

function calculate() {

        let positivetotal = findTotal(positivenumbers);
        let negativetotal = findTotal(negativenumbers);
        let deger = document.getElementById("deger")
        let deger2 = document.getElementById("deger2")
        deger.innerHTML = "<h1> positive toplami=" + positivetotal + "</h1>";
        deger2.innerHTML = "<h1> negative toplami=" + negativetotal + "</h1>";

}
