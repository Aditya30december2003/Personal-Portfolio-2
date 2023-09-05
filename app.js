let pImage=document.getElementById('pimage');
let Name=document.querySelector('.name');
let title=document.querySelector('.title')
let blur=document.querySelectorAll('.blur')

function typeText() {
    const textElement = document.querySelector('.about');
    const textToType = textElement.textContent.trim();
    textElement.textContent = '';
    
    let currentIndex = 0;
    function typeTextContent() {
      if (currentIndex < textToType.length) {
        textElement.textContent += textToType[currentIndex];
        currentIndex++;
        setTimeout(typeTextContent, 50); // Adjust the delay as needed
      }
    }
  
    typeTextContent();
  }
  typeText();

  //Projects

  let projectArray=[
    {
        id:1,
        type:'product',
        img:'projects/apple.png',
        desc:'Responsive Apple Iphone Product using html,css,Javascript and media query.',
        title:'Apple Page'
    },
    {
        id:2,
        type:'apps',
        img:'projects/batgpt2.png',
        desc:"Interactive Ai chatbot application made using html ,css and Javascript with the help OpenAi's Api.(In progress as once it is made will talk like batman)",
        title:'BatGPT'
    },
    {
        id:3,
        type:'apps',
        img:'projects/bmi.png',
        desc:'BMI-Calculator made with html,css and Javascript with BMI api key. It will show bmi of the person and if they are overweight or underweight or normal.',
        title:'BMI-Calculator'
    },
    {
        id:4,
        type:'apps',
        img:'projects/country.png',
        desc:"Its a country guide.Enter any country's name and it will give the basic information about that country. Made with html,sass, Javascript with the help of country-guide api. ",
        title:'Country-Guide'
    },
    {
        id:5,
        type:'apps',
        img:'projects/currency.png',
        desc:"Its a currency convertor web app. You can convert any currency into any other currency of country.Made with html css and Javascript with currency-convertor api.",
        title:"Currency Convertor"
    },
    {
        id:6,
        type:'apps',
        img:'projects/dictionery.png',
        desc:'Its a dictionary which tells you the meaning of the word and displays the word in a sentence. Made with html, css and Js with dictionary api.',
        title:'Dictonary'
    },
    {
        id:7,
        type:'landing',
        img:'projects/netflix.png',
        desc:"Its a clone of netflix's home page. Made with html, css and Javascript.",
        title:'Netflix-Home'
    },
    {
        id:8,
        type:'apps',
        img:'projects/handsmash.png',
        desc:'Its a web application that lets you choose which one is more handsome of the displayed actors. A rip-off of the facemash made by Mark Zuckerberg. Using html, css and Javascript.',
        title:'Handsmash'
    },
    {
        id:9,
        type:'landing',
        img:'projects/linktree.png',
        desc:'Its a landing page of my personal linktree which has access to my cv my personal website and the social media sites. Made with html and css.',
        title:'Linktree'
    },
    {
        id:11,
        type:'landing',
        img:'projects/menu.png',
        desc:"Landing page of menu for a restaurent using array methods maps, filters anf join in javascript.(Used in every ecommerse website).",
        title:'Menu-Page'
    },
    {
        id:12,
        type:'landing',
        img:'projects/gym.png',
        desc:'Gym landing page using html, css and Bootstrap.',
        title:'Gym-Landing Page'
    },
    {
        id:13,
        type:'product',
        img:'projects/nike.png',
        desc:'Responsive Nike Air Shoes Product Page using html, css and Javascript.',
        title:'Nike Product Page'
    },
    {
        id:14,
        type:'apps',
        img:'projects/pt1.png',
        desc:'Web app for periodic table which gives all the specific informations about every element using html, css, javascript and GSAP for animation.',
        title:'Periodic Table'
    },
    {
        id:15,
        type:'games',
        img:'projects/target.png',
        desc:'Target Practise is a game designed to improve your shooting skills and mouse movement performance. Made using html,css and Javascript.',
        title:"Target Practise"
    },
    {
        id:16,
        type:'apps',
        img:'projects/tip.png',
        desc:"Tip'n'Split is a web app for calculating tip and split between people the total amount. Made using html, css and Javascript.",
        title:"Tip'n'Split"
    },
    {
        id:17,
        type:'apps',
        img:'projects/todo.png',
        desc:'Todo list made with html css and Javascript.',
        title:"Todo List"
    },
    {
        id:18,
        type:'apps',
        img:'projects/weather.png',
        desc:'Weather app made with html, css , Javascript used with weather api.',
        title:"Weather App"
    },
]
let projectContainer=document.querySelector('.projects-container');
//display

function projectDisplay(project){
    let displayproject=project.map((project)=>{
      return`<div class="project" id="project${project.id}">
      <h1>${project.title}</h1>
      <img src=${project.img} alt="" width="350px" height="200px" class="projectImage" >
      <p>${project.desc}</p>
      <button>Try It</button>
  </div>`
    })
   displayproject=displayproject.join("");
   projectContainer.innerHTML=displayproject
}

window.addEventListener('DOMContentLoaded',()=>{
    projectDisplay(projectArray);
})

let filterBtn=document.querySelectorAll('.filter-btn');

filterBtn.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        let filterProject=projectArray.filter((project)=>{
            if(project.type==e.target.id){
                return project
            }
        })
        if(e.target.id=="all"){
            projectDisplay(projectArray)
        }
        else{
            projectDisplay(filterProject)
        }
    })
})

let projectImage=document.querySelectorAll(".projects-container");

projectImage.forEach((image)=>{
    image.addEventListener('click',(e)=>{
       console.log(e.target.classList) 
    })
})

//arrow-down
let arrowDown=document.querySelector('.arrow-down');
let arrowUp=document.querySelector('.arrow-up');
let hidden=document.querySelector('.hidden');
arrowDown.addEventListener('click',()=>{
   hidden.style.display="block";
   arrowDown.style.display="none";
   arrowUp.style.display="block"
})
arrowUp.addEventListener('click',()=>{
    hidden.style.display="none";
    arrowDown.style.display="block";
    arrowUp.style.display="none"
 })


//responsive inputs
let responsiveImage=document.querySelector('.responsive-image');
function Desktop(){
    responsiveImage.src="Images/pc.png";
    responsiveImage.style.width="28rem";
    responsiveImage.style.height="23rem";
}

function Laptop(){
    responsiveImage.src="Images/laptop.png";
    responsiveImage.style.width="28rem";
    responsiveImage.style.height="16rem";
}

function Tablet(){
    responsiveImage.src="Images/tablet.png";
    responsiveImage.style.width="20rem";
    responsiveImage.style.height="20rem";
}

function Mobile(){
    responsiveImage.src="Images/mobile.png";
    responsiveImage.style.width="15rem";
    responsiveImage.style.height="21rem";
}


