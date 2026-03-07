const chassisGrid = document.querySelector('.chassis-grid')
const chassisCard = document.querySelector('.chassis-card')


async function getAll(){
    try{
        const response = await fetch('http://localhost:5000/api/chassis')

        if(!response.ok){
            throw new Error('Api hatası')
        }

        const data = await response.json()
        
        chassisGrid.innerHTML = ""

        data.data.forEach(result => {
            
            const cardHTML = `
            <div class="chassis-card" data-slug="${result.slug}">
                    <div class="card-body">
                        <div class="card-top">
                            <span class="code">${result.code}</span>
                            <span class="brand">${result.brand}</span>
                        </div>
                        <div class="chassis-model">${result.model}</div>
                        <div class="chassis-year">${result.production.start} - ${result.production.end}</div>
                        <div class="card-tags">
                           ${result.body_styles.map(style => `<span class="tag">${style.type} </span>`).join('')}
                            
                        </div>
                        <div class="card-engines">
                           ${result.variants.map(variant => `
                                <div class=engine-row>
                                    <span class="engine-code">${variant.name}</span>
                                    <span class="engine-power">${variant.power_hp} HP</span>     
                            </div>
                            
                            `).join('')}
                           
                        </div>
                    </div>
                    <div class="card-image">
                        <img src="${result.images[0].url}" alt="">
                    </div>
                </div>
                           `
            
            
                           
            chassisGrid.insertAdjacentHTML('beforeend', cardHTML);    
        
        })
    }catch(error){
        console.log('hata',error)
    }
    
}

getAll()

chassisGrid.addEventListener('click',(e)=>{
                const card = e.target.closest(".chassis-card")

                if(card){
                    const slug = card.dataset.slug

                    window.location.href = `/detail.html?slug=${slug}`
                }
            })
           

