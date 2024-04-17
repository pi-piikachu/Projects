const searchinp = document.querySelector('#searchinp');
const searchbtn = document.querySelector('#src-btn');
const recipecont = document.querySelector(".recipe-container");


const url = `https://www.api.api-ninjas.com/v1/recipe?query=` ;
const options = {
    method : 'GET',
    headers : { 'X-Api-Key': '20tSP4B16WRlKSpobsrJVA==PB3kaYZtWGA3sKUi'},
};



const fetchrecipe = async (query) => {
    let response = await fetch(`https://api.api-ninjas.com/v1/recipe?query=${query}`,options);
    console.log(response);
    let data = await response.json();
    console.log(data);
    
}
searchbtn.addEventListener('click', (e) => {
    e.preventDefault;
    const recipeinp = searchinp.value.trim();
    console.log("hello");
   return fetchrecipe(recipeinp);
})






    