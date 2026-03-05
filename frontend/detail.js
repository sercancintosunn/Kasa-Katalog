const detailGrid = document.querySelector('.detail-grid')



async function getBySlug() {

    try{
        const params = new URLSearchParams(window.location.search)
        const slug = params.get('slug')

        const response = await fetch(`http://localhost:5000/api/chassis/${slug}`)

        if(!response.ok){
            throw new Error('Api hatasi')
        }

        const data = await response.json()

        console.log(data)

        detailGrid.innerHTML = ''

        const result = data.data

            const cardHTML = `
            
           <div class = "detail-grid"> 
                <div> 
                    <div class="detail-header">
                        <div class="detail-code">${result.code}</div>
                        <div class="detail-subtitle">${result.brand} ${result.model} serisi -  ${result.generation}.Nesil</div>
                    </div
                    <p class="detail-description">${result.description}</p>
                    <div class="spec-table"> 
                        <div class="spec-row">
                            <span class="spec-key">Üretim</span>
                            <span class="spec-value">${result.production.start} - ${result.production.end} </span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-key">0/100 km/s Hızlanma</span>
                            <span class="spec-value">${result.variants.acceleration}</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-key">Çeker Sistemi</span>
                            <span class="spec-value">${result.variants.traction}</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-key">Ağırlık</span>
                            <span class="spec-value">${result.variants.weight}</span>
                        </div>
                    </div>

                    <div class="engines-section">
                        <table class="engines-table">
                        
                        
                            <thead>
                                <tr>
                                    <th>Motor Kodu</th>
                                    <th>Hacim</th>
                                    <th>Güç</th>
                                    <th>Tork</th>
                                    <th>Yakıt</th>
                                </tr>
                            </thead>
                            <tbody>
                            ${result.variants.map(variant =>`
                                <tr>
                                    <td>${variant.name}</td>
                                    <td>${variant.engine_size}</td>
                                    <td>${variant.power_hp}</td>
                                    <td>${variant.torque_nm}</td>
                                    <td>${variant.fuel_type}</td>
                                </tr>
                            </tbody>  
                            `
                        ).join('')}

                        </table>




                    </div>
                
                </div>   
                
        
            
            </div>
            
            
            
            `
        
             detailGrid.insertAdjacentHTML('beforeend', cardHTML);    

        

    }catch(error){
        console.log(error)
    }
    
}


getBySlug()