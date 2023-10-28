function reqListener() {
    let country = JSON.parse(this.response);
      country.forEach((element) => {
           console.log(element.name,element.capital,element.flag);
    });
};

const req = new XMLHttpRequest();
req.addEventListener("load",reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();