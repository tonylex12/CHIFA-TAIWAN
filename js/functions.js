const dishesHTML = (arr, container) => {
    container.innerHTML = '';
    for (const element of arr) {
        container.innerHTML += `<div class="card m-2 p-2" style="width: 18rem;">
                                    <img src="../images/especiales/${element.id}.jpg" class="card-img-top">
                                    <div class="card-body">
                                        <h5 class="card-title text-center fs-4 fw-light my-2">${element.name}</h5>
                                        <button href="#" class="btn btn-danger d-block mx-auto mt-3">S/. ${element.price}.00</button>
                                    </div>
                                </div>`
    }
    $('#especialesContainer').fadeOut('fast', () => {
        $('#especialesContainer').fadeIn('slow');
    });
}