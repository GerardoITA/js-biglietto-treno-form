const iNome = document.getElementById("inputNome");
const iKm = document.getElementById("inputKm");
const iEta = document.getElementById("inputEta");

const genera = document.getElementById("genera");
const annulla = document.getElementById("annulla");


genera.addEventListener("click",
    function(){
        let nome = iNome.value;
        let distanza = iKm.value;
        let eta = iEta.value;

        console.log(nome);
        console.log(distanza);
        console.log(eta);


        let cp = Math.floor(Math.random() * 999) + 9000;
        let carrozza = Math.floor(Math.random() * 10) + 1;
        let initialPrice = 0.21 * (distanza);



        let finalPrice = (initialPrice);

        if ( eta > 65) {
            finalPrice = (initialPrice) * 0.6;
        }
        else if ( eta < 18) {
            finalPrice = (initialPrice) * 0.8;
        }
        else finalPrice = (initialPrice);


        document.getElementById("name").innerHTML = `${nome}`;
        document.getElementById("wagon").innerHTML = `${carrozza}`;
        document.getElementById("CPCode").innerHTML = `${cp}`;
        document.getElementById("ticketPrice").innerHTML = `${finalPrice}€`;
    }
)

annulla.addEventListener("click",
    function () {
        document.getElementById("inputNome").value = "";
        document.getElementById("inputKm").value = "";
        document.getElementById("inputEta").value = "";

        document.getElementById("name").innerHTML = "";
        document.getElementById("wagon").innerHTML = "";
        document.getElementById("CPCode").innerHTML = "";
        document.getElementById("ticketPrice").innerHTML = "";
    }
)



