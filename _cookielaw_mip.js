//--------------------------------
//--------------------------------
//---------- PLUGIN MiP ----------
//--------------------------------
//--------------------------------

// SISTEMA AUTOMATICO DI VERIFICA COOKIE PER LA COOKIE LAW, LEGGE SUI COOKIE.
// http://portapipe.wordpress.com
//
// Perché funzioni devi inserire dentro il tag <head>(qui)</head> il seguente codice:
//
// <script language="JavaScript" type="text/javascript" src="_cookielaw_mip.js"></script>
//

// Come Funziona:
// L'utente entra nel sito e gli compare una barra in alto con un Messaggio e un Bottone.
// Cliccando sul bottone la barra non gli comparirà più (anche in caso di redirect).
// Si può anche settare un redirect alla pagina della privacy, basta aggiungere
// il link nella variabile qui sotto.


//
// Puoi modificare i tre parametri seguenti: Il messaggio che comparirà,
// il testo del pulsante e il redirect
//
// Modifica il messaggio di avviso di utilizzo cookie da qui
var Messaggio = "Questo sito utilizza i cookie per assicurarvi una navigazione ottimale!"

// Qui il testo del bottone
var AccettoBtn = "Accetto"

// Se vuoi che il bottone reindirizzi ad una pagina (altrimenti lascialo vuoto)
var Redirect = ""


//-------------------------------------------------------------
//-------------------------------------------------------------
//-------- DA QUI NON MODIFICARE NULLA!!! DON'T EDIT!! --------
//-------------------------------------------------------------
//-------------------------------------------------------------

function mostraAvviso() {

    var message = "<div id='CookieLaw'> <div style='text-align:center; margin:0px; padding:10px; width:100%; background:grey; color:white; font-size:18px; position:fixed; z-index:10000000'>";

    message = message + Messaggio + "&nbsp;&nbsp;&nbsp;&nbsp;";

    message = message + "<button type='button' name='' onClick='JavaScript:Accetta();' value='' style='cursor:pointer;   font-family: Arial, Helvetica, sans-serif;font-size: 14px;color: #079400;padding: 10px 20px;background: -moz-linear-gradient(top,#ffffff 0%,#ffffff 50%,#b5b5b5);background: -webkit-gradient(linear, left top, left bottom, from(#ffffff),color-stop(0.50, #ffffff),to(#b5b5b5));-moz-border-radius: 10px;-webkit-border-radius: 10px;border-radius: 10px;border: 3px solid #2ea100;-moz-box-shadow:0px 1px 3px rgba(000,000,000,0.5),inset 0px 0px 3px rgba(255,255,255,1);-webkit-box-shadow:0px 1px 3px rgba(000,000,000,0.5),inset 0px 0px 3px rgba(255,255,255,1);box-shadow:0px 1px 3px rgba(000,000,000,0.5),inset 0px 0px 3px rgba(255,255,255,1);text-shadow:0px -1px 0px rgba(000,000,000,0.2),0px 1px 0px rgba(255,255,255,1);'>" + AccettoBtn + "</button>";

    message = message + "</div></div><div style='height:65px'></div>";

    document.writeln(message);


}

function Accetta() {
    setCookie("CookieEu", null, 365);
    location.reload(true);
    //Gestione del Redirect
    if(redirect!=""){
        window.location.href = "" + redirect;
    }
}

function setCookie(nomecookie, valore, finegiorni) {
    var datafine = new Date();
    datafine.setDate(datafine.getDate() + finegiorni);
    var valoreCookie = escape(valore) + ((finegiorni == null) ? "" : "; expires=" + datafine.toUTCString() + "; path=/");
    document.cookie = nomecookie + "=" + valoreCookie;    
}


function getCookie(nomecookie) {
    var i, x, y, array = document.cookie.split(";");
    for (i = 0; i < array.length; i++) {
        x = array[i].substr(0, array[i].indexOf("="));
        y = array[i].substr(array[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == nomecookie) {
            return unescape(y);
        }
    }
}


function checkCookie() {

    var nomeCookie = "CookieEu";
    var cookieverifica = getCookie(nomeCookie);
    if (cookieverifica != null && cookieverifica != "") {

        setCookie(nomeCookie, cookieverifica, 365); 
    }
    else {
        mostraAvviso();
    }
}

checkCookie();
