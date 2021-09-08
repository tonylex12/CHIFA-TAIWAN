const dishes = [];
let arroz = [];
let especiales = [];
let combinados = [];
let pato = [];
let pollo = [];
let chancho = [];
let sopas = [];
let tallarines = [];

$(document).ready(function () {
    $.get('especiales.json', function(data, status) {
        if(status == 'success') {
            for (let literal of data) {
                dishes.push(new Dish(literal.name, literal.price, literal.id, literal.category))
            }
        }
        arroz = dishes.filter(element => element.category == "ARROZ");
        especiales = dishes.filter(element => element.category == "ESPECIALES");
        combinados = dishes.filter(element => element.category == "COMBINADOS");
        pato = dishes.filter(element => element.category == "PATO");
        pollo = dishes.filter(element => element.category == "POLLO");
        chancho = dishes.filter(element => element.category == "CHANCHO");
        sopas = dishes.filter(element => element.category == "SOPAS");
        tallarines = dishes.filter(element => element.category == "TALLARINES");
        dishesHTML(dishes, especialesContainer);
    })
})

const especialesContainer = document.getElementById('especialesContainer');

const all = () => {
    dishesHTML(dishes, especialesContainer);
    $('#especialesContainer').slideUp(10, () => {
        $('#especialesContainer').slideDown('fast');
    })
}

const arrozDishes = () => {
    dishesHTML(arroz, especialesContainer);
}

const especialesDishes = () => {
    dishesHTML(especiales, especialesContainer);
}

const combinadosDishes = () => {
    dishesHTML(combinados, especialesContainer);
}

const patoDishes = () => {
    dishesHTML(pato, especialesContainer);
}

const polloDishes = () => {
    dishesHTML(pollo, especialesContainer);
}

const chanchoDishes = () => {
    dishesHTML(chancho, especialesContainer);
}

const sopasDishes = () => {
    dishesHTML(sopas, especialesContainer);
}

const tallarinesDishes = () => {
    dishesHTML(tallarines, especialesContainer);
}

$('#allBtn').on('click', all);
$('#arrozBtn').on('click', arrozDishes);
$('#especialesBtn').on('click', especialesDishes);
$('#combinadosBtn').on('click', combinadosDishes);
$('#patoBtn').on('click', patoDishes);
$('#polloBtn').on('click', polloDishes);
$('#chanchoBtn').on('click', chanchoDishes);
$('#sopasBtn').on('click', sopasDishes);
$('#tallarinesBtn').on('click', tallarinesDishes);

const searchDiv = document.getElementById('results-container');
let searchInput = document.getElementById('search-dish');

/* To get input from search */
$('#search-dish').keyup(function(e) {
    const inputSearch = this.value.toUpperCase();
    if(inputSearch != "") {
        const result = dishes.filter(dish => dish.name.includes(inputSearch.toUpperCase()));
        dishesHTML(result, searchDiv);
    } else {
        searchDiv.innerHTML = ""
    }
})

$('.btn-cancel').on('click', function() {
    console.log("click")
    searchInput.value = "";
    searchDiv.innerHTML = "";
})