items = '';
let api = 'https://lanciweb.github.io/demo/api/pictures/'

const elementContainerCard = document.getElementById('container-card');

axios.get(api).then ((response) => {
    console.log(response.data)
    for(let i = 0; i < response.data.length; i++){

    
    items += 
    `
           <div class="col-xl-4" style="width: 15rem;">
                  <div class="card" style="width: 15rem;">
                    <div class="container-img">
                        <img src="${response.data[i].url}" class="card-img-top" alt="Marco Lanci photo">
                    </div>
                    <div class="card-body text-center">
                        <h5>${response.data[i].title}</h5>
                        <p>${response.data[i].date}</p>
                    </div>
                    <div class="position-absolute top-0 start-50 translate-middle">
                        <img src="img/pin.svg" alt="puntina">
                    </div>
                  </div> 
            </div>

    `

    elementContainerCard.innerHTML = items;

    }


})
