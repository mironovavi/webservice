
let lastReportTime = 0;

//после полной загрузки дом дерева отправляем http запрос на сервер
window.onload = function () {
//    setInterval(handleRefresh, 3000);
}


//обработчик кладет в наш элемент документа полученный JS объект
function updateSales(sales){

    

    let salesDiv = document.getElementById("sales");

    for(let i = 0; i < sales.length; i++){
        let sale = sales[i];
        let div = document.createElement("div");
        div.setAttribute("class", "salesItem");
        div.innerHTML = sale.name + " sold " + sale.sales + " gumbalss";
        salesDiv.appendChild(div);
    }

    if(sales.length > 0){
        lastReportTime = sales[sales.length-1].time;
    }
} 



function handleRefresh(){
    let url = "http://gumball.wickedlysmart.com?callback=updateSales" + "&lastreporttime=" + lastReportTime + "&random=" + (new Date()).getTime();

    //создадим новый элемент script 
    let newScriptElem = document.createElement("script");
    newScriptElem.setAttribute("src", url);
    newScriptElem.setAttribute("id", "jsonp");

    let oldScriptElem = document.getElementById("jsonp");
    let head = document.getElementsByTagName("head")[0];
    
    if(oldScriptElem == null){
        head.appendChild(newScriptElem);
    }else{
        head.replaceChild(newScriptElem, oldScriptElem);
    }
}