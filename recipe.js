const searchinp = document.querySelector('#searchinp');




const searchbtn = document.querySelector('#src-btn');
const recipecont = document.querySelector(`.recipecontainer`);

const fetchrecipe = async (query) => {
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
         <h3>${element.strMeal} </h3>\n
                              
         `;
         
         recipecont.appendChild(recipediv);
        
    
    });
    
}
searchbtn.addEventListener('click', (e) => {
    e.preventDefault;
    const recipeinp = searchinp.value.trim();
    console.log("hello");
   return fetchrecipe(recipeinp);
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





    