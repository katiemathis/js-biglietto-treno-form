//definire variabili
let nome = document.getElementById('nome');
let km = document.getElementById('km');


    
//in order to let dropdown menu work...

Array.from(document.querySelector("#age").options).forEach(function(/*option_element*/) {
        /*let option_text = option_element.text;
        let option_value = option_element.value;
        let is_option_selected = option_element.selected;

        console.log('Option Text : ' + option_text);
        console.log('Option Value : ' + option_value);
        console.log('Option Selected : ' + (is_option_selected === true ? 'Yes' : 'No'));

        console.log("\n\r");*/
});

//generate random number for carozza
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    
};

//calcola prezzo biglietto

let genera = document.getElementById('genera');
genera.addEventListener('click', function () {




    //remove "hidden" class from bottom container
    document.querySelector('#bottom').classList.remove('hidden');
    document.querySelector('#biglietto-title').classList.remove('hidden');

    //define variables for function
    let prezzo = ((km.value) * .21).toFixed(2);
    let nomeBiglietto = document.getElementById('tuo-nome');
    let etaBiglietto = document.getElementById('tua-eta');
    let kmBiglietto = document.getElementById('tuo-viaggio');
    let prezzoBiglietto = document.getElementById('costo-biglietto');
    let carozzaBiglietto = document.getElementById('tua-carozza');

    //stampa il numero carozza
    carozzaBiglietto.innerHTML = 'You are in carozza number: ' + getRandomInt(1,9);



    //conditional to calculate the correct price based on age

    if (age.value == 'minorenni') {
        nomeBiglietto.innerHTML = 'Your name is: ' + nome.value;
        etaBiglietto.innerHTML = 'You qualify for the sconto ' + age.value;
        kmBiglietto.innerHTML = 'You want to travel ' + km.value + ' km';
        prezzoBiglietto.innerHTML = 'Your biglietto costs:  $' + (prezzo * 0.8).toFixed(2);
        console.log('Your name is: ' + nome.value);
        console.log('You want to travel ' + km.value + ' km');
        console.log('Your age is: ' + age.value);
        console.log('Your biglietto costs:  $' + (prezzo * 0.8).toFixed(2));
    } else if (age.value == 'senior') {
        nomeBiglietto.innerHTML = 'Your name is: ' + nome.value;
        etaBiglietto.innerHTML = 'You qualify for the sconto ' + age.value;
        kmBiglietto.innerHTML = 'You want to travel ' + km.value + ' km';
        prezzoBiglietto.innerHTML = 'Your biglietto costs:  $' + (prezzo * 0.6).toFixed(2);
        console.log('Your name is: ' + nome.value);
        console.log('You want to travel ' + km.value + ' km');
        console.log('Your age is: ' + age.value);
        console.log('Your biglietto costs:  $' + (prezzo * 0.6).toFixed(2));
    } else {
        nomeBiglietto.innerHTML = 'Your name is: ' + nome.value;
        etaBiglietto.innerHTML = 'You do not qualify for any discounts';
        kmBiglietto.innerHTML = 'You want to travel ' + km.value + ' km';
        prezzoBiglietto.innerHTML = 'Your biglietto costs:  $' + prezzo;
        console.log('Your name is: ' + nome.value);
        console.log('You want to travel ' + km.value + ' km');
        console.log('Your age is: ' + age.value);
        console.log('Your biglietto costs:  $' + prezzo);
    }
});

//reset form and add "hidden" class to bottom container
let annulla = document.getElementById('annulla');
annulla.addEventListener('click', function () {
    document.querySelector('#bottom').classList.add('hidden');
    document.querySelector('#biglietto-title').classList.add('hidden');
    nome.value = '';
    km.value = 0;
    Array.from(document.querySelector("#age").options).forEach(function(/*option_element*/) {
        return age.value = '';
    //age.value = '';
    });

});




