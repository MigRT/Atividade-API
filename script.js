let divbutton = document.getElementById("divbutton")
let divh1 = document.getElementById("divh1")
document.getElementById("divbutton").onclick=function(){
    fetch("https://api.kanye.rest/")
    .then(
        function(res){
            return (res.json())
        }
    )
    .then(
        function(res){
            let h1 = document.createElement("h1")
            h1.append(document.createTextNode(res.quote))
            divh1.append(h1)
        }
    )
}