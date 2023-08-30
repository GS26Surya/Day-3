let a= new XMLHttpRequest;
a.open("get", "https://restcountries.com/v3.1/all")
a.send()
a.onload = function (){
    let b = JSON.parse(a.response)
  
    for(let i = 0; i<b.length; i++)
    {
        console.log(b[i].name.common, "-",b[i].flags.png)
       
    }
}