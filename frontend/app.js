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
            const chassisCard = document.createElement('div')
            chassisCard.className = "chassis-card"

            const cardBody = document.createElement('div')
            cardBody.className = "card-body"

            const cardTop = document.createElement("div")
            cardTop.className = "card-top"

            const code = document.createElement("span")
            code.textContent = result.code
            code.className = "code"
            

            const brand = document.createElement('span')
            brand.className = "brand"
            brand.textContent = result.brand
           

            const chassisModel = document.createElement('div')
            chassisModel.className = "chassis-model"
            chassisModel.textContent = result.model

            const chassisYear = document.createElement('div')
            chassisYear.className = "chassis-year"
            chassisYear.textContent = `${result.production.start} - ${result.production.end}`


            const cardTags = document.createElement("div")
            cardTags.className = "card-tags"

            const tag = document.createElement("span")
            tag.className = "tag"
            tag.textContent = result.body_styles[0].type

            const cardEngines = document.createElement('div')
            cardEngines.className = 'card-engines'

            const engineRow = document.createElement("div")
            engineRow.className = "engine-row"
            
            const engineCode = document.createElement('span')
            engineCode.className = 'engine-code'
            engineCode.textContent = result.engines[0].engine_code
           
            const enginePower = document.createElement('span')
            enginePower.className = 'engine-power'
            enginePower.textContent = result.engines[0].power_hp

            const cardImage = document.createElement('div')
            cardImage.className = "card-image"
            
            const image = document.createElement("img")
            image.src = result.images[0].url
           


            engineRow.appendChild(enginePower)
            engineRow.appendChild(engineCode)
            cardEngines.appendChild(engineRow)
            cardTags.appendChild(tag)
            cardTop.appendChild(brand)
            cardTop.appendChild(code)
            
            cardBody.appendChild(cardTop)
            cardBody.appendChild(chassisModel)
            cardBody.appendChild(chassisYear)
            cardBody.appendChild(cardTags)
            cardBody.appendChild(cardEngines)

            chassisCard.appendChild(cardBody)

            cardImage.appendChild(image)
            chassisCard.appendChild(cardImage)

            chassisGrid.appendChild(chassisCard)



        
        })
    }catch(error){
        console.log('hata',error)
    }
    
}

getAll()

