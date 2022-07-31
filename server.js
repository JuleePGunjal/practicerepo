
var express=require('express');
var app=express();


app.get("/",(req,res)=>{
    res.send(
        "<h1>Sagunja Consultant<h1>"
        +"<h4>Workship of God<h4>"
        +"<hr/>"
        +"<h2>Way to enter industries<h2>"
        +"<ol>"
        +"<li>Provide Guidance for Career</li>"
        +"<li>Provide Basic training related to enter in IT world</li>"
        +"<li>Communication</li>"
        +"<li>Personality Improvement</li>"
        +"<li>Consult for a job</li>"
        +"</ol>"
    )
})

app.get("/aboutus",(req,res)=>{
    res.send(
        "<h1>Sagunja Consultant<h1>"
        +"<h4>Workship of God<h4>"
        +"<hr/>"
        +"<h3>OWner:Julee Gunjal</h3>"
        +"<h3>Location:All INDIA"
        +"<h3>Contact:Vardhman building,Daregaon,Malegaon,Nashik</h3>"
        +"<h4>email:julee@gmail.com</h4>"
    )
})

var server=app.listen(9000);
console.log("listning server at 9000");