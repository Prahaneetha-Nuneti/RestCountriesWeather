city=[];
fetch("https://restcountries.com/v3/all")
.then(function(data){
    return data.json();
})
.then(function(jasondata){
    var wholediv=document.createElement("div");
    wholediv.setAttribute("class","column");
    for(var i=0;i<250;i++)
    {
        var mydiv = document.createElement("div");
        mydiv.setAttribute("class","card divcontainer");
            var counname = document.createElement("div");
            counname.setAttribute("class","card-header");
            counname.innerHTML="<b>"+jasondata[i].name.official+"</b><br>";
            mydiv.appendChild(counname);
            var cardbdydiv = document.createElement("div");
            cardbdydiv.setAttribute("class","card-body");
                var countryflag = document.createElement("img");
                countryflag.src=jasondata[i].flags[1];
                cardbdydiv.appendChild(countryflag);
                var cont = document.createElement("div");
                cont.innerHTML+="Capital :"+jasondata[i].capital+"<br>";
                cont.innerHTML+="Region :"+jasondata[i].region+"<br>";
                cont.innerHTML+="Country code :"+jasondata[i].cca2+"<br>";
                cardbdydiv.appendChild(cont);
                var butdiv = document.createElement("div");
                var mybutton = document.createElement("button");
                mybutton.setAttribute("id",jasondata[i].capital);
                mybutton.setAttribute("onclick","displayweather(this)");
                mybutton.innerHTML = "Click for Weather";
                butdiv.appendChild(mybutton);
                cardbdydiv.appendChild(butdiv);
            mydiv.appendChild(cardbdydiv);
        wholediv.appendChild(mydiv);
    }
    document.body.appendChild(wholediv);
})
.catch(function(err){
    console.log(err);
})
function displayweather(param){
    console.log("executing");
    console.log(param);
    console.log(param.id);
    fetch("http://api.openweathermap.org/data/2.5/weather?q="+param.id+
	"&appid=4c57ba119b7b59e6a53a607db3743960")
    .then(function(data1){
        return data1.json();
    })
    .then(function(resultdata){
        var temp= resultdata.main.temp;
        console.log(temp);
        alert("The temperature is :"+temp);
    })
    .catch(function(err){
        console.log(err);
    })
}