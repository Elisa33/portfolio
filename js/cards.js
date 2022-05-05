window.addEventListener('load', loadData);

function loadData() {
    fetch('cards.json')
        .then((respuesta) => respuesta.json())
        .then((data) => {
            showData(data);
        });
}

    function showData(data) {
        
        const { projects } = data;
        const portfolio = document.querySelector('.portfolio'); 
       
        projects.forEach((element, index) => {

            /* colocamos el titulo */
            const title = document.createElement('h2')
            title.innerText = (Object.keys(projects[index])[0]);
            portfolio.appendChild(title)
            
            /* creamos el contenedor de las cards */
            const cards = document.createElement('div');
            cards.classList.add('cards');
            portfolio.appendChild(cards)
           
            /* Iteramos al objeto */
            let claves = Object.keys(element); 

            for(let i=0; i< claves.length; i++){

                const array = element[claves[i]];
                for (let i of array.keys()){
                    //console.log(array[i])
                    const { id,  
                        client, 
                        icon01, 
                        icon02,
                        img,
                        clase,
                        rol,
                        techs,
                        mode,
                        description,
                        site,
                        code } = array[i];
        
        
                        const card = document.createElement('div');
                
                        const contenido = ` 
                                <div id="${id}">
                                    <div class="contain">
                                        <img src="${img}" alt="" />
                                    </div>
                                    <div class="flex">
                                        <a href="#dm">${client}</a>
                                        <div class="tech">
                                            ${icon01}
                                            ${icon02}
                                        </div>
                                    </div>
                                </div> 
                            `;
        
                    card.classList.add('card');
                    card.classList.add(`${clase}`);
                    card.innerHTML = contenido;
                    cards.appendChild(card);
                    card.addEventListener('click', showModal);
                    
        
                    //Modals 
                    function showModal(){
                        
                        const overlay = document.querySelector('.overlay');
                        overlay.classList.add('active');
                        const modal = document.createElement('div');
                        modal.classList.add('modal')
                        
                            const modalContent = `
                                        <div id="btn-close" class="btn-close" onClick="close">X</div>
                                        <div class="m-info">
                                            <div class="img-wrapper">
                                            
                                                <img src="${img}" alt="" />
                                            </div>
                                            <div class="project">
                                                <div className="project-info">
                                                    <div class="pr-info">
                                                        <h3>Client:</h3>
                                                        <p>${client}</p>
                                                    </div>
                                                    <div class="pr-info">
                                                        <h3>Rol:</h3>
                                                        <p>${rol}</p>
                                                    </div>
                                                    <div class="pr-info">
                                                        <h3>Techs:</h3>
                                                        <p>${techs}</p>
                                                    </div>
                                                    <div class="pr-info">
                                                        <h3>Mode:</h3>
                                                        <p>${mode}</p>
                                                    </div>
                                                    <div class="pr-info">
                                                        <h3>Description:</h3>
                                                        <p>${description}</p>
                                                    </div>
                                                </div>
                                                <div class="project-code">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                `
                            modal.innerHTML = modalContent;
                            overlay.appendChild(modal);
                            const projectCode = document.querySelector(".project-code");
                            const btnClose = document.querySelector("#btn-close");

                            const siteContent = `
                            <a href="${site}" target="_blank"><img src='img/icons/eye.svg' alt=''> Site</a>
                            `
                            const codeContent = `
                            <a href="${code}" target="_blank"><img src='img/icons/github.svg' alt=''>Code</a>
                            `

                            site ? projectCode.innerHTML += siteContent : '';
                            code ? projectCode.innerHTML += codeContent : '';

                            btnClose.addEventListener('click', close);
                
                        };  
                        
                        function close(){
                            const overlay = document.querySelector('.overlay');
                            const modal = document.querySelector('.modal');
                            modal.innerHTML = '';
                            overlay.classList.remove('active');
                            modal.classList.remove('modal');
                            console.log('close')
                        }
                } 
            }       
        })
    }

    
      
    
        
    

   

