function reqListener() {
    let country = JSON.parse(this.response);
    const population = country.filter((element) => {
           return element.population<200000;
    })
    console.log(population);
}
const req = new XMLHttpRequest();
req.addEventListener("load",reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();