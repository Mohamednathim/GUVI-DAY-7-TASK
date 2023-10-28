function reqListener() {
    let country = JSON.parse(this.response);
    for(i=0;i<country.length;i++){
        if(country[i].currencies[0].code==="USD")
        {
            console.log("name:",country[i].name,"==>" ,country[i].currencies[0].code)
        }
    }
}

const req = new XMLHttpRequest();
req.addEventListener("load",reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
