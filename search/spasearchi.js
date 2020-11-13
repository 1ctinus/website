function search() {
  var delyeet = document.getElementById("css");
  var delyeet2 = document.getElementById("Dave");
  var xy = ["X","Y"]
  var xyp = parseInt(Math.random() * xy.length);
  var skew = 20*Math.random() - 10
  var date = new Date();
  var x = document.getElementById("Dave").value;
  var punctuationless = x.replace(/[.,\/#!?$'%\^&\*;:{}=\-_`~()]/g,"");
var finalString = punctuationless.replace(/\s{2,}/g," ");
  var res = finalString.split(" ");
  switch(finalString){
    // let's start out with the hrefs...
    case "haiku": case "haikus":
window.location.href = "haikus.html"
break;case "changelog":
window.location.href = "changelog.html"
break;case "json":case "videos":case "about":
window.location.href = "coming-soon.html"
break;case "self":case "doxx":
window.location.href = "self.html"
break;case "pics":
window.location.href = "pics"
break;case "plans":
window.location.href = "plans.html"
break;case "wotw":case "monday":
window.location.href = "wotw"
break;case "news":case "bad news":case "bad news site":
window.location.href = "wotw/10-19-2020"
break;case "count":case "counter":case "counting":
window.location.href = "wotw/11-02-2020"
break;case "yo mama":case "yo mama generator":
window.location.href = "wotw/11-09-2020"
break;case "alphabet":case "alphabet shuffle":
window.location.href = "wotw/10-26-2020"
break;case "politics":
window.location.href = "politics.html"
break;case "discord":
window.location.href = "discord.html"
case "youtube":
  window.location.href = "https://www.youtube.com/channel/UCm4Ptfu96iahGA0SOHq84VA"
//debugging 
break;case "test" :case "debug":
document.getElementById("output").innerHTML="test or debug";
//now the fun stuff...
break;case "white":
  document.body.style.backgroundColor = "#ffffff";
  document.getElementById("output").innerHTML="this webzone was not made for white you smoothbrain"
break;case "groove": case "groovy": 
window.location.href = "https://en.wikipedia.org/wiki/Pelican"
break;case "self destruct":
delyeet2.remove();
break;case "dark": 
document.body.style.backgroundColor = "#111";
break;case "amoled": case "black":
document.body.style.backgroundColor = "#000000";
break;case "red": 
document.body.style.backgroundColor = "#330000";
break;case "blue": 
document.body.style.backgroundColor = "#000033";
break;case "green": 
document.body.style.backgroundColor = "#003300";
break;case "purple": 
document.body.style.backgroundColor = "#330033";
break;case "yellow": 
document.body.style.backgroundColor = "#333300";
break;case "cyan": 
document.body.style.backgroundColor = "#003333";
break;case "grey":case "gray": 
document.body.style.backgroundColor = "#333333";
break;case "stretch":
document.body.style.setProperty("-webkit-transform", "scaleX(1.2)", null)
break;case "squeeze":
document.body.style.setProperty("-webkit-transform", "scaleX(0.5)", null)
break;case "rotate": case "askew":
  document.body.style.setProperty("-webkit-transform", "rotate("+ skew +"deg)", null)
  break;case "skew":
  document.body.style.setProperty("-webkit-transform", "skewY(20deg)", null)
break;case "reflect":case "flip":
document.body.style.setProperty("-webkit-transform", "Scale"+ xy[xyp]+"(-1)", null)
break;case "refresh":
location.reload();
break;case "fuck css":case "anti css":
delyeet.remove();
break;case "js":case "javascript":case "help":
window.location.href = "search/spasearchi.js"
break;case"css":case"style":case"styles":case"stylesheet":
window.location.href = "indexstyle.css"
break;case"flip a coin":
var coin = Math.random();
if (coin > 0.5){
  document.getElementById("output").innerHTML="heads"
}else(    document.getElementById("output").innerHTML="tails")
break;case"egg":case"eggs":
window.location.href = "search/egg.html"
break;case "delete":
while (document.firstChild) {
  document.removeChild(document.firstChild);
}

//q&a
break;case"are you bill wurtz":case"wurtz soon":
window.location.href = "https://www.youtube.com/watch?v=qWwb8S02f_c"
break;case"who won the election":
document.getElementById("output").innerHTML="i think the old guy won"
break;case"what":
document.getElementById("output").innerHTML="ask some questions, search for eggs, and have some shortcuts too"
break;case"you suck":
document.getElementById("output").innerHTML=":("
break;case"ping":
document.getElementById("output").innerHTML="pong"
break;case"what is your gender":case"what is your sex":case"are you male or female":
document.getElementById("output").innerHTML="male"
break;case"who are you":case"who":
document.getElementById("output").innerHTML="a program made and run by 1ctinus."
break;case"where":case"where am i":case"what is your favorite website":case"what is the best website":
document.getElementById("output").innerHTML="https://1ctinus.me"
break;case"when":
document.getElementById("output").innerHTML="now, or you could wait 2pm est on monday for the wotw"
break;case"who made you":
document.getElementById("output").innerHTML="either 1ctinus or George Washington. But it's up to you"
break;case"how":
document.getElementById("output").innerHTML="github and vsc, and shotcut too"
break;case"why":
document.getElementById("output").innerHTML="because why not"
break;case"what programming languages do you know":case"what programming languages did you learn":
document.getElementById("output").innerHTML="javascript, but hopefully php and json soon"
break;case"what time is it":case"what is the time":case"whats the time":case"time":
document.getElementById("output").innerHTML=date.getHours() +":"+ date.getMinutes()
break;case"who is 1ctinus":case"who is ictinus":
document.getElementById("output").innerHTML="a dude just trying to get by"
break;case"how are you doing":case"how you doing":case"how are you":
document.getElementById("output").innerHTML="maybe alright, maybe not. but most of the times, ok."
  }
  if (finalString.startsWith('are you')){ document.getElementById("output").innerHTML="oh yell yeah"}
 if (finalString.startsWith('color')){
    document.getElementById("output").innerHTML = "background color changed to " + res[1];
      document.body.style.backgroundColor = "#" + res[1];
  }
  if (finalString.startsWith('fontcolor') || finalString.startsWith('textcolor')){
    var all = document.getElementsByTagName("*");
    document.getElementById("output").innerHTML = "font/text color changed to " + res[1];
    for (var i=0, max=all.length; i < max; i++) {
     all[i].style.color = "#" + res[1];
    }
  }
  if (finalString.startsWith('replace')){
    document.getElementById("para").innerHTML = res[1];
    }
    if (finalString.startsWith('title')){document.getElementById("svga").innerHTML = res[1];document.getElementById("svgb").innerHTML = res[1];document.getElementById("svgc").innerHTML = res[1];
      }
  ;

}
document.body.addEventListener("keydown", function (event) {
    if (event.keyCode ==13 ) {        
        search();
    }
});
