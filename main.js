//definire variabili


let nome = document.getElementById('nome');
//nome.innerHTML = (nome.value);


let km = document.getElementById('km')
//km.innerHTML = (km.value);


//for dropdown menu

Array.from(document.querySelector("#age").options).forEach(function(/*option_element*/) {
    /*let option_text = option_element.text;
    let option_value = option_element.value;
    let is_option_selected = option_element.selected;

    console.log('Option Text : ' + option_text);
    console.log('Option Value : ' + option_value);
    console.log('Option Selected : ' + (is_option_selected === true ? 'Yes' : 'No'));

    console.log("\n\r");*/
});

let prezzo = (km.value * .21);



let genera = document.getElementById('genera');
genera.addEventListener('click', function () {
    console.log('Your name is: ' + nome.value);
    console.log('You want to travel ' + km.value + ' km');
    console.log('Your age is: ' + age.value);
    console.log('Your biglietto costs:  $' + prezzo);


})

let annulla = document.getElementById('annulla');


/* calcola prezzo biglietto
if (age.value == 'minorenni') {
    console.log(prezzo * 0.81);
} else if (age.value == 'senior') {
    console.log(prezzo * 0.6);
} else {
    console.log(prezzo);
}*/