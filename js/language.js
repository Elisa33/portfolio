
const name = document.querySelector('#me');
const about = document.querySelector('#about');
const profile = document.querySelector('#profile');
const language = document.querySelector('#language');
language.addEventListener('click', changeLanguage);


function changeLanguage(){
    fetch('language.json')
    .then(res => res.json())
    .then(data => {

        console.log(data.english['0'].name)
        console.log(data.english['0'].about)
        console.log(data.english['0'].profile)
        profile.innerHTML = (data.english['0'].profile)
        about.innerHTML = (data.english['0'].about)
        
        

    })
        
     
}










/* Con ajax */
/* function changeLanguage(){

    const xhr = new XMLHttpRequest();

    xhr.open('GET','../espaniol.txt',true );
    xhr.onreadystatechange = function(){
        console.log(this.readyState);
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText)
            about.innerHTML = this.responseText;
        }
    }
    xhr.send();

} */
