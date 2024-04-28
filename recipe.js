const searchinp = document.querySelector('#searchinp');
const searchbtn = document.querySelector('#src-btn');
const recipecont = document.querySelector(`.recipecontainer`);
const recipedetail = document.querySelector(`.recipedetail`);
const recipepopup = document.querySelector(`.recipepopup`);
const recipeclosebtn = document.querySelector('.recipeclosebtn');
const sidebaropenbtn = document.querySelector('#sidebarbutton');
const sidebar = document.querySelector('.sidebar');
const sidebarclosebtn = document.querySelector('#sidebarclosebutton');
const navlist = document.querySelector('.nav-list');
const srcicon =document.querySelector('.src-iconss');
const srcemptybtn =document.querySelector('.src-empty-btn');
const loader =document.querySelector('.main-loader');
const recipemainbox =document.querySelector('.recipemainbox');
const recipeinp = searchinp.value.trim();
const recipeheading =document.querySelector('#abcd');
const signinbtn =document.querySelector('#signinbtn');
const signupbtn =document.querySelector('#signupbtn');
const namefield =document.querySelector('#namefield');
const phonefield =document.querySelector('#phonefield');
const titlesignup =document.querySelector('#title');
const signinp = document.querySelector('.signinp');
const signemptybtn =document.querySelector('.sign-empty-btn');
const nullsearch =document.querySelector('#nullsearch');
const nullresponse =document.querySelector('#nullresponse');
const  nullresponseheading =document.querySelector('#nullresponse h2');





signinbtn.onclick= function(e){
    e.preventDefault;
    console.log("hello");
    namefield.style.display="none";
    phonefield.style.display="none";
    titlesignup.innerHTML="Sign In";
    signupbtn.classList.add("disable");
    signinbtn.classList.remove("disable");
    
}
signupbtn.onclick= function(e){
    e.preventDefault;
    console.log("hello");
    namefield.style.display="flex";
    phonefield.style.display="flex";
    titlesignup.innerHTML="Sign Up";
    signinbtn.classList.add("disable");
    signupbtn.classList.remove("disable");
    
}
signemptybtn.addEventListener('click',(e)=>{
    e.preventDefault;
    signinp.value="";
})    





















sidebaropenbtn.addEventListener('click',() =>{
        sidebar.style.display = "flex";
        navlist.style.display = "none";

})
sidebarclosebtn.addEventListener('click',() =>{
    sidebar.style.display = "none";
    navlist.style.display = "flex";

})
const fetchrecipe = async (query) => {
    recipecont.innerHTML="";
    recipeheading.innerHTML=``;
    loader.style.display="flex";

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  //  console.log(response);

    let data = await response.json();
    console.log(data);
     console.log(data.meals);
     if (data.meals==null) {
        console.log("sorry");
        loader.style.display="none";
        nullresponse.style.display="flex";
        nullresponseheading.innerHTML=`<h3>Sorry for the inconvenience <br> I don't have ${query} in my collection <br> I will definitely learn from my other chef friends and add it until next time</h3>`;
     }
     else{
    data.meals.forEach(meal => {
        let recipediv = document.createElement('div');
        recipediv.classList.add('recipe');
        console.log(meal);
    recipeheading.innerHTML=`<h2>Showing Search Results for ${query}</h2>`;
    loader.style.display="none";
        

         recipediv.innerHTML = `<img src = "${meal.strMealThumb}">
         <h3>${meal.strMeal}</h3>\n
         <p>${meal.strArea}</p>
         <p>${meal.strCategory}</p>`;

         const recipebtn = document.createElement('button');
         recipebtn.classList.add('recipebtn');
         recipebtn.innerHTML =`View Recipe`;
         recipediv.appendChild(recipebtn);

        


         recipebtn.addEventListener('click', (e) => {
            e.preventDefault;
            recipepopup.style.display = "flex";
            return openpopup(meal);
        })
        recipeclosebtn.addEventListener('click', () => {
            recipepopup.style.display = "none";
        })
         recipecont.appendChild(recipediv);
        
    
    });}
    
}
const fetchingredients = (meal) => {
    let ingredientlists="" ;

    for(let d=1; d<=20; d++){
        const ingredient = meal[`strIngredient${d}`];
        console.log(ingredient)
        if (ingredient !== "") {
            const measure =meal[`strMeasure${d}`];
            ingredientlists += `<li>${measure} ${ingredient}</li>`;
        }
        else{
            
            break;
        }
    }
    return ingredientlists;
}
const openpopup = (meal) =>{
       recipedetail.innerHTML = `
       <h2> ${meal.strMeal}</h2>\n\n
        <h3>Ingredients:</h3>
        <ul>${fetchingredients(meal)}</ul>
        <h3>Instructions:</h3> \n \n ${meal.strInstructions}

       `;
}

/*const recipedetails = async (query) => {
    recipecont.innerHTML="";
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  //  console.log(response);
    let data = await response.json();
    //console.log(data);
    data.meals.forEach(element => {
        let recipediv = document.createElement('div');
        recipediv.classList.add('recipe');
        console.log(element);
         recipediv.innerHTML = `<img src = "${element.strMealThumb}">
         <h3>${element.strMeal}</h3>\n
         <p>${element.strArea}</p>
         <p>${element.strCategory}</p>`;

         const recipebtn = document.createElement('button');
         recipebtn.classList.add('recipebtn');
         recipebtn.innerHTML =`View Recipe`;
         recipediv.appendChild(recipebtn);
        
         recipecont.appendChild(recipediv);
        
    
    });*/
searchbtn.addEventListener('click', (e) => {
    e.preventDefault;
    let recipeinp = searchinp.value.trim();
    console.log("hello");
    nullresponse.style.display="none";

    if (recipeinp=="") {
        recipecont.innerHTML="";

        recipeheading.style.display="none";
        nullsearch.style.display="flex";
    }else if(recipeinp=="biriyani" || recipeinp=="biryani" || recipeinp=="Biriyani" || recipeinp=="Biryani" ||recipeinp=="BIRIYANI" || recipeinp=="BIRYANI"){
         recipeinp="biryani";
         return fetchrecipe(recipeinp);
    }else {
        nullsearch.style.display="none";
        recipeheading.style.display="flex";

        return fetchrecipe(recipeinp);
    }
   
    
})
srcicon.addEventListener('click', (e) => {
    e.preventDefault;
    const recipeinp = searchinp.value.trim();
    console.log("hello");
    
   return fetchrecipe(recipeinp);
})
srcemptybtn.addEventListener('click',(e)=>{
      e.preventDefault;
      searchinp.value="";
})

// api ninja api
/*const url = `https://www.api.api-ninjas.com/v1/recipe?query=` ;
const options = {
    method : 'GET',
    headers : { 'X-Api-Key': '20tSP4B16WRlKSpobsrJVA==PB3kaYZtWGA3sKUi'},
};



const fetchrecipe = async (query) => {
    let response = await fetch(`https://api.api-ninjas.com/v1/recipe?query=${query}`,options);
  //  console.log(response);
    let data = await response.json();
    console.log(data);
    data.forEach(element => {
        const recipediv = document.createElement('div');
        recipediv.classList.add('recipe')
         recipediv.innerHTML = `Name:${element.title} \n
                                Ingredients:${element.ingredients}
         `;
         
         recipecont.appendChild(recipediv);
        
    
    });
    
}*/

let sections = document.querySelectorAll('section');
let sec = document.querySelector('#Home');
let sec2 = document.querySelector('#about');

let navlinks = document.querySelectorAll('.nav-list li a');


window.addEventListener('scroll',()=>{
    let top = document.documentElement.scrollHeight;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;

    let offset2 = sec2.offsetTop;
    let height2 = sec2.offsetHeight;

    console.log(top,offset,height,heightc,offset2,height2);
});


/*window.onscroll = ()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        console.log(top,offset,height,id);
        if (top>=offset && top<offset+height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
               let linked= document.querySelector('.nav-list li a [href*=' +id+ ']');
               console.log(linked);
            })
        };
    });
    
};*/



    