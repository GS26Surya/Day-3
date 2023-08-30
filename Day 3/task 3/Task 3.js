let a= new XMLHttpRequest;
a.open("get", "https://restcountries.com/v3.1/all")
a.send()
a.onload = function (){
    let b = JSON.parse(a.response)
    for(let i = 0; i<b.length; i++)
    {
        console.log("Name=", b[i].name.common)
        console.log("Region=", b[i].region)
        console.log("Subregion=", b[i].subregion)
        console.log("Population=", b[i].population)


       
    }
}