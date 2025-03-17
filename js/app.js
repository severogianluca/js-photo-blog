items = '';
let api = 'https://lanciweb.github.io/demo/api/pictures/'

const elementContainerCard = document.getElementById('container-card');
const elementOverlay = document.getElementById('overlay');
const elementOverlayImg = document.getElementById('overlay-img');

axios.get(api).then ((response) => {
    console.log(response.data)
    for(let i = 0; i < response.data.length; i++){

    
    items += 
    `
           <div class="col-xl-4" style="width: 15rem;">
                  <div class="card" style="width: 15rem;">
                    <div class="container-img">
                        <img src="${response.data[i].url}" class="card-img-top" alt="${response.data[i].title}">
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
    

    const containerCard = document.querySelectorAll('.card')
    console.log(containerCard)

    containerCard.forEach(element =>{
        element.addEventListener('click', function(){
            const displayImg = this.querySelector('.card-img-top')  
            elementOverlayImg.src = displayImg.src;                 
            elementOverlay.classList.replace('d-none', 'd-flex');   //mi permette di fare add d-none e remove 
        })
    })

    }



})
