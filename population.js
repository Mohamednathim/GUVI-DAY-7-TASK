function reqListener() {
    let country = JSON.parse(this.response);
    const population = country.reduce((acc,element) => {
           return acc+element.population;
    })
    console.log(population);
}
const req = new XMLHttpRequest();
req.addEventListener("load",reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
 