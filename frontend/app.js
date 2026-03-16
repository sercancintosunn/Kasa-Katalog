const chassisGrid = document.querySelector('.chassis-grid')
const chassisCard = document.querySelector('.chassis-card')
const searchInput = document.querySelector('.search-input')
const filterBtn = document.querySelectorAll('.filter-btn')
const sidebar = document.querySelector('aside')
const mobileFilterBtn = document.getElementById('mobileFilterBtn')

const activeFilters = {
    q: '',
    brand: '',
    fuel: '',
    body: ''
}


async function getAll({q = '' , brand = '', fuel = '', body = ''} = {}){
    try{

        const params = new URLSearchParams()
        if(q) params.append('q',q)
        if(brand) params.append('brand',brand)
        if(fuel) params.append('fuel',fuel)
        if(body) params.append('body',body)
        
        const url = `https://kasa-katalog.onrender.com/api/chassis?${params.toString()}`
        

        const response = await fetch(url)

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



chassisGrid.addEventListener('click',(e)=>{
                const card = e.target.closest(".chassis-card")

                if(card){
                    const slug = card.dataset.slug

                    window.location.href = `/detail.html?slug=${slug}`
                }
            })


searchInput.addEventListener('input',(e)=>{
   activeFilters.q = e.target.value
   getAll(activeFilters)
})

filterBtn.forEach(btn =>{
    btn.addEventListener('click',function(){
        this.closest('.filter-options').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'))
        this.classList.add('active')

        const filterType = this.closest('.filter-group').dataset.filter
        const value = this.dataset.value

        activeFilters[filterType] = value

        getAll(activeFilters)
    })
})


mobileFilterBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});


document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !mobileFilterBtn.contains(e.target)) {
        sidebar.classList.remove('active');
    }
});


getAll()
