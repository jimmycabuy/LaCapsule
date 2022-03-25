var cryptoCount = $(".crypto_container").length;
$("#compteur_crypto").text(cryptoCount);

// $("#compteur_crypto").text($(".crypto_container").length); // autre technique



$(".titreh1").click(
    function(){
        console.log("click detecté");
        
        $("#main_container").append(litecoin)
        $("#compteur_crypto").text($(".crypto_container").length);
    }
)

var litecoin = `
    <div class="crypto_container">
        <img src="images/ripple.png" alt="ripple" class="picto-crypto">
        <h6>Ripple</h6>
        <div class="divider"></div>
        <p>0,54€</p>
    </div>
`;