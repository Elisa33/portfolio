/*
// Crear elementos con atributos e hijo
export const createCustomElement = (element,attributes,children) => {
    let customElement = document.createElement(element);
    if (children !== undefined) children.forEach(el => {
      if (el.nodeType) {
        if (el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
      } else {
        customElement.innerHTML += el;
      }
    });
    addAttributes(customElement,attributes);
    return customElement;
  };

  //Imprimir modal

  const printModal = content =>{
      //crear contenedor interno
      const modalContentEl = createCustomElement('div',{
        id: 'modal-content',
        class: 'modal-content'
    },[content]),
    //crear contenedor principal
        modalContainerEl = createCustomElement('div', {
        id: 'modal-container',
        class: 'modal-container'
    }, [modalContentEl]);
    //Imprimir el modal
    document.body.appendChild(modalContainerEl);

    //remover el modal
    const removeModal = () => document.body.removeChild(modalContainerEl)

    modalContainerEl.addEventListener("click",e =>{

    })
}

printModal(`<h1>Hola mundo</h1>`)*/

var btnOpen = document.getElementById('btn-open'),
    overlay = document.getElementById('overlay'),
    modal = document.getElementById('modal'),
    btnClose = document.getElementById('btn-close');

btnOpen.addEventListener('click',function(){
  overlay.classList.add('active');  
  //aqui puedo poner las animaciones cmabiando la clase
  //modal.classList.add('animation');  
})

btnClose.addEventListener('click',function(){
  overlay.classList.remove('active');
  //aqui puedo poner las animaciones cmabiando la clase
  //modal.classList.remove('animation');   
})


  