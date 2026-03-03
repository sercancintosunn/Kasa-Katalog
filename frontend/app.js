const chassisGrid = document.querySelector('.chassis-grid')
// const chassisCard = document.querySelector('.chassis-card')
// const cardBody = document.querySelector('.card-body')
// const cardTop = document.querySelector('.card-top')
// const code = document.querySelector('.code')
// const brand = document.querySelector('.brand')
// const chassisModel = document.querySelector('.chassis-model')
// const chassisYear = document.querySelector('.chassis-year')
// const cardTags = document.querySelector('.card-tags')
// const tag = document.querySelector('.tag')
// const cardEngines = document.querySelector('.card-engines')
// const engineRow = document.querySelector('.engine-row')
// const engineCode = document.querySelector('.engine-code')
// const enginePower = document.querySelector('.engine-power')
// const cardImage = document.querySelector('.card-image') 

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
            <div class="chassis-card">
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
                           ${result.engines.map(engine => `
                                <div class=engine-row>
                                    <span class="engine-code">${engine.engine_code}</span>
                                    <span class="engine-power">${engine.power_hp} HP</span>     
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

