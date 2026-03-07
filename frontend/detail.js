const detailGrid = document.querySelector('.detail-grid')

let currentResult = null

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

        currentResult = data.data;
        const related = data.related;

            const cardHTML = `
            
           
                <div> 
                    <div class="detail-header">
                        <div class="detail-code">${currentResult.code}</div>
                        <div class="detail-subtitle">${currentResult.brand} ${currentResult.model} serisi -  ${currentResult.generation}.Nesil</div>
                    </div>
                    <p class="detail-description">${currentResult.description}</p>
                    <div class="spec-table"> 
                        <div class="spec-row">
                            <span class="spec-key">Üretim</span>
                            <span class="spec-val">${currentResult.production.start} - ${currentResult.production.end} </span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-key">0/100 km/s Hızlanma</span>
                            <span class="spec-val"  id="specAcceleration">${currentResult.variants[0].acceleration}s</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-key">Çeker Sistemi</span>
                            <span class="spec-val"  id="specTraction">${currentResult.variants[0].traction}</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-key">Ağırlık</span>
                            <span class="spec-val" id="specWeight" >${currentResult.variants[0].weight}kg</span>
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
                            ${currentResult.variants.map((variant, index) =>`
                                <tr class="engine-row-clickable ${index === 0 ? 'active' : '' }" data-index="${index}">
                                    <td>${variant.name}</td>
                                    <td>${Number(variant.engine_size).toFixed(1)}l</td>
                                    <td>${variant.power_hp}hp</td>
                                    <td>${variant.torque_nm}Nm</td>
                                    <td>${variant.fuel_type}</td>
                                </tr>
                                  `
                            ).join('')}

                            </tbody>  
                          
                        </table>

                    </div>
                
                </div>   
                <div class="detail-image-sticky">
                    <div class="detail-main-image">
                        <img src="${currentResult.images[0].url}">
                    </div>
               
                <div class="sidebar-card">
                    <div class="sidebar-card-label">İlgıli Kasalar</div>
                    ${related.map(style => `

                        <a href="?slug=${style.slug}" style="text-decoration:none; color:inherit;">
                        
                        <div class="related-item">
                            <span class="related-code">${style.code}</span>
                            <span class="related-years">${style.production.start} - ${style.production.end}</span>
                        </div>
                        </a>
                        
                        `).join('')}       
                </div>

                <div class="sidebar-card">
                    <div class="sidebar-card-label">Kasa Tipleri</div>
                    ${currentResult.body_styles.map(style => `
                        
                        <div class="related-item">
                            <span class="related-code">${style.type}</span>
                            <span class="related-years">${style.doors}</span>
                        </div>
                       
                        
                        `).join('')}       
                </div>
                 </div>
            
            `
        
             detailGrid.insertAdjacentHTML('beforeend', cardHTML);    
             
             console.log(document.querySelector('.engines-table tbody'))


             document.querySelector('.engines-table tbody').addEventListener('click',(e)=>{
                console.log('tıklandı', e.target)
                console.log('row', e.target.closest('tr'))
                const row = e.target.closest('tr')
                if(!row) return

                const index = row.dataset.index
                const variant = currentResult.variants[index]

                document.querySelectorAll('.engine-row-clickable').forEach(r => r.classList.remove('active'))
                row.classList.add('active')
    

                document.getElementById('specAcceleration').textContent = variant.acceleration + "s"
                document.getElementById('specTraction').textContent = variant.traction 
                document.getElementById('specWeight').textContent = variant.weight + "kg"
             })

        

    }catch(error){
        console.log(error)
    }
    
}


getBySlug()