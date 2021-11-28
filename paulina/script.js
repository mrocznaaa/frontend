function testowafunkcja(){
    var txt;
    if (confirm("kliknij OK jeśli zrozumiałeś")){
      txt = "Brawo!";
    } else {
      txt = "musisz jeszcze poćwiczyć";
    }
    document.getElementByld("Demo").innerHTML = txt;
}