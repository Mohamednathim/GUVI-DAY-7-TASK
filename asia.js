function reqListener() {
    let country = JSON.parse(this.response);
    const asia = country.filter((a) => {
        if(a.region ==='Asia'){
           return a.name
        };
    });
    console.log(asia);
}; 
const req = new XMLHttpRequest();
req.addEventListener("load",reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
