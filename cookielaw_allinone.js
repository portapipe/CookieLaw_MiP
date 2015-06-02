//--------------------------------
//--------------------------------
//---------- PLUGIN MiP ----------
//--------------------------------
//--------------------------------

// SISTEMA AUTOMATICO DI VERIFICA COOKIE PER LA COOKIE LAW, LEGGE SUI COOKIE, BASATO SU JQUERY E CON INFORMATIVA INTEGRATA, UTILIZZANDO ATTRIBUTI DATA HTML5 PER PERSONALIZZAZIONE.
// http://portapipe.wordpress.com
//
// Perché funzioni devi inserire dentro il tag <head>(qui)</head> il seguente codice:
//
// <script language="JavaScript" type="text/javascript" src="_cookielaw_mip.js"></script>
//
// Aggiungerà in automatico la libreria jQuery solo se specificato negli attributi

// Come Funziona:
// L'utente entra nel sito e gli compare una barra con un Messaggio e un Bottone.
// Cliccando sul bottone la barra non gli comparirà più (anche in caso di redirect).
// Si può anche settare un redirect alla pagina della privacy, basta aggiungere
// il link negli attributi html5 oppure comparirà una normativa standard!


//
// Puoi modificare i tre parametri seguenti: Il messaggio che comparirà,
// il testo del pulsante e il redirect
//



//-------------------------------------------------------------
//-------------------------------------------------------------
//------------ NON MODIFICARE NULLA!!! DON'T EDIT!! -----------
//-------------------------------------------------------------
//-------------------------------------------------------------


/*
FULL

		<script
			type="text/javascript" src="/cookielaw_allinone.js" id="cookieLaw"
			data-titolo="Questo sito utilizza i cookie per assicurarvi una navigazione ottimale! Continuando la navigazione si accetta l'utilizzo dei cookie"
			data-bottone="Ok ho capito"
			data-linkCookie=""
			data-sito="www.ilTuoSito.it"
			data-nome="Nome del Titolare"
			data-email="EmailDi@riferimento.it"
			data-nomeAzienda="Nome dell'azienda o del Titolare del sito"
		></script>	
	
*/

var cookieLaw = document.getElementById('cookieLaw');
var Messaggio = cookieLaw.getAttribute('data-titolo');
var AccettoBtn = cookieLaw.getAttribute('data-bottone');
var maggioriInfoBtn = "Maggiori Informazioni";
var Redirect = cookieLaw.getAttribute('data-linkCookie');
var sito = cookieLaw.getAttribute('data-sito');
var nome = cookieLaw.getAttribute('data-nome');
var email = cookieLaw.getAttribute('data-email');
/*
	var nomeAzienda = cookieLaw.getAttribute('data-nomeAzienda');
*/


function mostraAvviso() {

    var message = "<div id='CookieLaw'> <div style='text-align:center; margin:0px; padding:10px; width:100%; background:grey; color:white; font-size:18px; position:fixed; z-index:10000000'>";

    message = message + Messaggio + "&nbsp;&nbsp;&nbsp;&nbsp;";

    message = message + "<button type='button' name='' onClick='JavaScript:Accetta();' value='' style='cursor:pointer;   font-family: Arial, Helvetica, sans-serif;font-size: 14px;color: #079400;padding: 10px 20px;background: -moz-linear-gradient(top,#ffffff 0%,#ffffff 50%,#b5b5b5);background: -webkit-gradient(linear, left top, left bottom, from(#ffffff),color-stop(0.50, #ffffff),to(#b5b5b5));-moz-border-radius: 10px;-webkit-border-radius: 10px;border-radius: 10px;border: 3px solid #2ea100;-moz-box-shadow:0px 1px 3px rgba(000,000,000,0.5),inset 0px 0px 3px rgba(255,255,255,1);-webkit-box-shadow:0px 1px 3px rgba(000,000,000,0.5),inset 0px 0px 3px rgba(255,255,255,1);box-shadow:0px 1px 3px rgba(000,000,000,0.5),inset 0px 0px 3px rgba(255,255,255,1);text-shadow:0px -1px 0px rgba(000,000,000,0.2),0px 1px 0px rgba(255,255,255,1);'>" + AccettoBtn + "</button>";

    message = message + "<button type='button' name='' onClick='JavaScript:mostraCookie();' value='' style='cursor:pointer;   font-family: Arial, Helvetica, sans-serif;font-size: 14px;color: #d2a80d;padding: 10px 20px;background: -moz-linear-gradient(top,#ffffff 0%,#ffffff 50%,#b5b5b5);background: -webkit-gradient(linear, left top, left bottom, from(#ffffff),color-stop(0.50, #ffffff),to(#b5b5b5));-moz-border-radius: 10px;-webkit-border-radius: 10px;border-radius: 10px;border: 3px solid #d2a80d;-moz-box-shadow:0px 1px 3px rgba(000,000,000,0.5),inset 0px 0px 3px rgba(255,255,255,1);-webkit-box-shadow:0px 1px 3px rgba(000,000,000,0.5),inset 0px 0px 3px rgba(255,255,255,1);box-shadow:0px 1px 3px rgba(000,000,000,0.5),inset 0px 0px 3px rgba(255,255,255,1);text-shadow:0px -1px 0px rgba(000,000,000,0.2),0px 1px 0px rgba(255,255,255,1);'>" + maggioriInfoBtn + "</button>";

    message = message + "</div></div><div style='height:65px'></div><div id='CookieLawText'></div>'";

    document.writeln(message);

}


function mostraCookie() {
	
	if(Redirect!=null && Redirect!=""){
        window.location.href = Redirect;
	}else{
	
    	var message = "<div style='padding:10px; width:90%; height: 80%; margin-left:5%; overflow-y:scroll; overflow-x:auto; background:#333; color:white; font-size:18px; position:fixed; z-index:10000001;' ><hr>";
    	
    	var chiudiBtn = "<button type='button' name='' onClick='JavaScript:chiudi();' value='' style='cursor:pointer;   font-family: Arial, Helvetica, sans-serif;font-size: 14px;color: #079400;padding: 10px 20px;background: -moz-linear-gradient(top,#ffffff 0%,#ffffff 50%,#b5b5b5);background: -webkit-gradient(linear, left top, left bottom, from(#ffffff),color-stop(0.50, #ffffff),to(#b5b5b5));-moz-border-radius: 10px;-webkit-border-radius: 10px;border-radius: 10px;border: 3px solid #2ea100;-moz-box-shadow:0px 1px 3px rgba(000,000,000,0.5),inset 0px 0px 3px rgba(255,255,255,1);-webkit-box-shadow:0px 1px 3px rgba(000,000,000,0.5),inset 0px 0px 3px rgba(255,255,255,1);box-shadow:0px 1px 3px rgba(000,000,000,0.5),inset 0px 0px 3px rgba(255,255,255,1);text-shadow:0px -1px 0px rgba(000,000,000,0.2),0px 1px 0px rgba(255,255,255,1);'>Chiudi</button>";

		message = message + chiudiBtn + "<h2>INFORMAZIONI SUI COOKIE</h2><br>\
<strong>1. Cosa sono e a cosa servono</strong><br>\
I siti Web si avvalgono di tecniche utili e intelligenti per aumentare la semplicità di utilizzo e rendere i siti più interessanti per ogni visitatore. Una delle tecniche più conosciute prevede il ricorso ai cookie. I cookie possono essere utilizzati dai proprietari di siti Web o da terze parti, ad esempio inserzionisti pubblicitari, che comunicano attraverso il sito Web visitato.<br>\
I cookie sono piccoli file di testo che il sito Web memorizza nei computer degli utenti. Le informazioni contenute nei cookie possono essere utilizzate anche per tenere traccia dell’esplorazione effettuata in diversi siti Web che si avvalgono dello stesso cookie.<br>\
I cookie sono classificati in base alla durata e al sito che li ha impostati.<br>\
Riteniamo che sia essenziale fornire agli utenti informazioni sui cookie di cui il nostro sito Web si avvale e sugli scopi per cui vengono utilizzati. L’obiettivo è triplice: garantire la vostra privacy, assicurare la semplicità di utilizzo e ottimizzare lo sviluppo dei nostri siti Web. La spiegazione riportata di seguito illustra più dettagliatamente i cookie utilizzati nei nostri siti Web e i relativi scopi.<br>\
<br>\
<strong>2. Utilizzo dei cookie da parte del sito "+sito+" e/o delle aziende e dei marchi che ne fanno parte</strong><br>\
Utilizza i cookie per raccogliere dati statistici sui visitatori e per registrare informazioni sulle vostre preferenze durante l’esplorazione dei siti Web. Il nostro scopo nell’utilizzo dei cookie è migliorare l’esperienza offerta dal nostro sito ai visitatori.<br>\
<br>\
<strong>3. Cookie e relative funzionalità</strong><br>\
A seconda dei singoli obiettivi, si utilizzano cookie differenti.<br>\
Di seguito viene fornito un elenco dei tipi di cookie più diffusi e degli scopi per cui vengono utilizzati.<br>\
<br>\
<strong>3.1. Cookie di sessione</strong><br>\
I cookie di sessione vengono archiviati temporaneamente nella memoria del computer durante l’esplorazione di un sito, ad esempio, per tenere traccia della lingua scelta. I cookie di sessione rimangono memorizzati nel computer per un breve periodo di tempo. Vengono infatti eliminati non appena l’utente chiude il browser Web.<br>\
<br>\
<strong>3.2. Cookie permanenti o traccianti</strong><br>\
I cookie permanenti salvano un file sul computer per un lungo periodo di tempo. Questo tipo di cookie possiede una data di scadenza. I cookie permanenti consentono ai siti Web di ricordare informazioni e impostazioni alle successive visite degli utenti, rendendo così l’esplorazione più pratica e rapida, poiché, ad esempio, non è più necessario effettuare l’accesso.\
Alla data di scadenza, il cookie viene automaticamente eliminato quando si effettua il primo accesso al sito Web che lo ha creato.<br>\
<br>\
<strong>3.3. Cookie di prime parti</strong><br>\
Questi cookie vengono impostati dai siti Web stessi (con dominio uguale a quello indicato nella barra degli indirizzi del browser) e possono essere letti solo da tali siti. Vengono comunemente utilizzati per archiviare informazioni quali le preferenze, da utilizzare alle successive visite al sito.<br>\
<br>\
<strong>3.4. Cookie di terze parti</strong><br>\
Questi cookie vengono impostati da domini diversi da quello indicato nella barra degli indirizzi del browser, ovvero da organizzazioni che non corrispondono ai proprietari dei siti Web.<br>\
I cookie utilizzati, ad esempio, per raccogliere informazioni a fini pubblicitari e di personalizzazione dei contenuti, oltre che per elaborare statistiche Web, possono essere “cookie di terze parti”.<br>\
I cookie di terze parti consentono di ottenere sondaggi più completi delle abitudini di esplorazione degli utenti e si ritiene che siano più sensibili dal punto di vista dell’integrità. Per questo motivo, la maggior parte dei browser Web permette di modificare le impostazioni in modo che tali cookie non vengano accettati.<br>\
<br>\
<strong>3.5. Cookie di Flash</strong><br>\
I cookie di Flash (Oggetti Locali Condivisi) sono dati che possono essere archiviati nel computer dai siti Web che utilizzano Adobe Flash.<br>\
Questi cookie offrono un nuovo metodo per tenere traccia dei movimenti e archiviare una quantità di informazioni sull’utente decisamente superiore rispetto ai cookie normali. Uno dei principali svantaggi dei cookie di Flash è l’impossibilità di individuarli all’interno del browser. Non risultano infatti presenti nell’elenco che viene visualizzato quando si consultano i cookie attualmente presenti nel browser Web. I normali cookie HTTP non sono in grado di memorizzare più di 4 Kilobyte di dati, mentre i cookie di Flash possono salvare fino a 100 Kilobyte.<br>\
La progettazione tecnologica dei cookie di Flash è simile a quella dei cookie. Quasi tutti i browser Web dispongono di un lettore Flash che viene utilizzato per visualizzare le presentazioni Flash. Un esempio famoso di presentazioni Flash è il lettore video del sito YouTube. (I cookie di Flash non sono associati solo a YouTube, ma sono validi per tutti i siti Web che utilizzano i cookie di Flash).<br>\
Per i cookie di Flash non è previsto alcun limite di tempo. Rimangono quindi archiviati fino a quando si procede a eliminarli.<br>\
<br>\
<strong>3.5.1 Come disattivare i cookie di Flash</strong><br>\
I cookie di Flash non possono essere bloccati o gestiti nel browser, poiché vengono archiviati in un’altra posizione, ovvero nel pannello Impostazioni generali della memorizzazione presente nella risorsa online Gestione impostazioni del sito di Adobe.<br>\
<br>\
<strong>4. Disattivazione/attivazione o eliminazione dei cookie</strong><br>\
I cookie possono essere limitati o bloccati mediante le impostazioni del browser.<br>\
Se preferite che i siti Web non memorizzino alcun cookie nel vostro computer, impostate il browser in modo da ricevere una notifica prima dell’archiviazione di ogni cookie. In alternativa, potete impostare il browser in modo che rifiuti tutti i cookie o solo i cookie di terze parti. Potete anche eliminare tutti i cookie già presenti nel sistema. È importante sottolineare che le impostazioni devono essere modificate separatamente in ogni browser e computer utilizzato.<br>\
Se impostate il blocco della memorizzazione dei cookie, non possiamo più garantire un corretto funzionamento del sito Web. Alcune funzioni del sito potrebbero risultare non disponibili e potrebbe non essere più possibile visualizzare determinati siti Web. Inoltre, il blocco dei cookie non elimina la visualizzazione degli annunci pubblicitari. Semplicemente, questi non saranno più personalizzati in base ai vostri interessi e verranno riproposti con maggiore frequenza.<br>\
In ogni browser le impostazioni vengono modificate seguendo una diversa procedura. Se necessario, per definire impostazioni corrette utilizzate la funzione di Guida del browser.<br>\
Per disattivare i cookie su un telefono cellulare, consultate il relativo manuale per reperire ulteriori informazioni.<br>\
Informazioni più dettagliate relative ai cookie su Internet sono disponibili all’indirizzo <a href='http://www.aboutcookies.org/' target='_blank'>http://www.aboutcookies.org/</a><br>\
<br>\
<strong>5. Altri cookie/cookie imprevisti</strong><br>\
Considerando il funzionamento di Internet e dei siti Web, non sempre siamo in grado di controllare i cookie che vengono memorizzati da terze parti attraverso il nostro sito Web. Questo vale soprattutto nei casi in cui la pagina Web contenga i cosiddetti elementi incorporati: testi, documenti, immagini o brevi filmati che sono archiviati altrove, ma vengono visualizzati nel o attraverso il nostro sito Web.<br>\
Di conseguenza, qualora nel sito Web venisse rilevato un cookie di questo tipo non presente nell’elenco fornito, vi preghiamo di comunicarcelo. In alternativa, potete contattare direttamente le terze parti interessate e chiedere informazioni sui cookie che inviano, a quali scopi, qual è la loro durata e come garantiscono la privacy degli utenti.<br>\
<br>\
<strong>6. Contatti</strong><br>\
A causa di eventuali modifiche al nostro sito Web o alle normative riguardanti i cookie, è possibile che queste informative vengano periodicamente modificate. Siamo pertanto autorizzati a cambiare i contenuti delle informative e i cookie indicati nell’elenco in qualsiasi momento e senza preavviso.<br>\
Per ogni altra informazione riferirsi al titolare del sito " + sito + ": " + nome + " tramite l'indirizzo email: " + email + ".\
<hr>" + chiudiBtn;

    	message = message + "<br></div><div style='height:65px'></div>";

		document.getElementById("CookieLawText").innerHTML=message;
	}
	
}


function chiudi(){
	document.getElementById("CookieLawText").innerHTML = "";
}

function Accetta() {
    setCookie("CookieEu", null, 365);
    location.reload(true);
    //Gestione del Redirect
    /*if(Redirect!=""){
        window.location.href = "" + Redirect;
    }*/
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
