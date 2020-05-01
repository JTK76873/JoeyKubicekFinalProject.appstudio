// url that Postman made with all the parameters embedded into it

let requestURL = "https://covid-api.mmediagroup.fr/v1/history?country=US&status=confirmed"

function onXHRLoad() {
    let message = ""
    let apiData = JSON.parse(this.responseText)
    for (i = 0; i <= apiData.dates.length - 1; i++) {
    //console.log(`${apiData.dates[i]}`) }
   message = message + apiData.dates[i] + "\n"
  }    
    TxtaUS.value = message
  }

function callAPI(URL) {
    var xhttp = new XMLHttpRequest();
    
        xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)
        
    // if you need to set the returned data type, use this line of code: 
        xhttp.setRequestHeader('Content-Type', 'application/json')
    
    // if you need authorization token (stored in myToken) use this line of code: 
        // xhttp.setRequestHeader('Authorization', 'Bearer ' + myToken)
    
    // if you need a key and it's not in the url use code in one of the following
    // examples (think of headers as parameters)
    // or just use the Postman url which has all the parameters already added like I did here. 
    
        
        //xhttp.setRequestHeader('key','AIzaSyCE-pjULPU_Gp5Qf0qL39tVsdJBX55J0cY')
        //xhttp.setRequestHeader('location','41.276900,-95.942310')
        //xhttp.setRequestHeader('rankby','distance')
        //xhttp.setRequestHeader('type','restaurant')
        

    // make the API request
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}
    


BtnUpdate.onclick=function(){
callAPI(requestURL)
}


COVIDSTATS.onshow=function(){
    TxtaUS_contents.style.height = "100px"
    callAPI(requestURL)
}

BtnGoHome.onclick=function(){
  ChangeForm(HomePage)
}

BtnDonateNow.onclick=function(){
  ChangeForm(Donate)
}
