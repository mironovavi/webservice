
//после полной загрузки дом дерева отправляем http запрос на сервер
window.onload = function () {
    // let url = "http://localhost:3000/";
    let url = "http://gumball.wickedlysmart.com/gumball/gumball.html";
    let request = new XMLHttpRequest(); 

    //метод передает url и указывает запрос 
    request.open("GET", url);

    //обрабочик ловит поступление данных так как это занимаем много времени по комп меркам
    request.onload = function () {
        if (request.status == 200) {
            alert("data received");
            // console.log(request.responseText);
            updateSales(request.responseText);
        }else{
            console.log("data didn't get!");
        }
    }
     

    //извлечение данных - null не отправляет никаких данных на сервер)
    request.send(null);
}


//обработчик кладет в наш элемент документа полученную jSON строку 
function updateSales(responseText){
    let salesDiv = document.getElementById("sales");
    // salesDiv.innerHTML = responseText;
    let sales = JSON.parse(responseText);//преобращование в JS объект

    for(let i = 0; i < sales.length; i++){
        let sale = sales[i];
        let div = document.createElement("div");
        div.setAttribute("class", "salesItem");
        div.innerHTML = sale.name + " sold " + sale.sales + " gumbalss";
        salesDiv.appendChild(div);
    }
} 
