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
		></script>	
	
*/

var cookieLaw = document.getElementById('cookieLaw');
var Messaggio = cookieLaw.getAttribute('data-titolo');
var AccettoBtn = cookieLaw.getAttribute('data-bottone');
var maggioriInfoBtn = cookieLaw.getAttribute('data-info');
var Redirect = cookieLaw.getAttribute('data-linkCookie');
var sito = cookieLaw.getAttribute('data-sito');
var nome = cookieLaw.getAttribute('data-nome');
var email = cookieLaw.getAttribute('data-email');

if(Messaggio==null){
	Messaggio = "Questo sito utilizza i cookie per assicurarvi una navigazione ottimale! Continuando la navigazione si accetta l'utilizzo dei cookie!";
}
if(AccettoBtn==null){
	AccettoBtn = "Ok, ho capito";
}
if(maggioriInfoBtn==null){
	maggioriInfoBtn = "Maggiori Informazioni";
}
if(sito==null){
	sito = "";
}
if(nome==null){
	nome = "";
}
if(email==null){
	email = "";
}



function mostraAvviso() {

    var message = "\
    <style>\
    .btncookielaw {\
	  -webkit-border-radius: 6;\
	  -moz-border-radius: 6;\
	  border-radius: 6px;\
	  border-color:none;\
	  color: #ffffff;\
	  font-size: 14px;\
	  background: #3498db;\
	  padding: 3px 8px 3px 8px;\
	  text-decoration: none;\
	}\
	\
	.btncookielaw:hover {\
	  background: #3cb0fd;\
	  text-decoration: none;\
	}\
    </style>\
    \
    <div id='CookieLaw'> <div style='text-align:center; margin:0px; bottom:0; padding:2px; width:100%; background:white; border-top:1px gray solid; color:#444; font-size:16px; position:fixed; z-index:10000000'>";

    message = message + Messaggio + "&nbsp;&nbsp;&nbsp;&nbsp;";

    message = message + "<button type='button' class='btncookielaw' onClick='inviaAccetta();' style='background:green'>" + AccettoBtn + "</button>";

    message = message + "<button type='button' class='btncookielaw' onClick='mostraCookie();' style='background:orange'>" + maggioriInfoBtn + "</button>";

    message = message + "</div></div><div id='CookieLawText'></div>";

    document.writeln(message);

}


function mostraCookie() {
	
	if(Redirect!=null && Redirect!=""){
        window.location.href = Redirect;
	}else{
	
    	var message = "<div style='padding:10px; width:90%; height: 80%; margin-left:3%; margin-right:5%; overflow-y:scroll; overflow-x:auto; background:#efefef; color:#222; top:5%; border:1px solid #333; font-size:17px; position:fixed; z-index:10000001;' ><hr>";
    	
    	var chiudiBtn = "<button type='button' class='btncookielaw' onClick='JavaScript:chiudi();'>Chiudi</button>";

		message = message + chiudiBtn + "<h2>INFORMATIVA ESTESA SUI COOKIE E PRIVACY</h2><br>\
I Cookie sono costituiti da porzioni di codice installate all'interno del browser che assistono il Titolare nell’erogazione del servizio in base alle finalità descritte. Alcune delle finalità di installazione dei Cookie potrebbero, inoltre, necessitare del consenso dell'Utente.<br>\
<h3>Cookie tecnici e di statistica aggregata</h3><br>\
<br>\
		<strong>Attività strettamente necessarie al funzionamento</strong><br>\
Questa Applicazione utilizza Cookie per salvare la sessione dell'Utente e per svolgere altre attività strettamente necessarie al funzionamento dello stesso, ad esempio in relazione alla distribuzione del traffico.<br>\
<br>\
		<strong>Attività di salvataggio delle preferenze, ottimizzazione e statistica</strong><br>\
Questa Applicazione utilizza Cookie per salvare le preferenze di navigazione ed ottimizzare l'esperienza di navigazione dell'Utente. Fra questi Cookie rientrano, ad esempio, quelli per impostare la lingua e la valuta o per la gestione di statistiche da parte del Titolare del sito.<br>\
<br>\
<h3>Altre tipologie di Cookie o strumenti terzi che potrebbero farne utilizzo</h3><br>\
Alcuni dei servizi elencati di seguito raccolgono statistiche in forma aggregata e potrebbero non richiedere il consenso dell'Utente o potrebbero essere gestiti direttamente dal Titolare – a seconda di quanto descritto – senza l'ausilio di terzi.<br>\
Qualora fra gli strumenti indicati in seguito fossero presenti servizi gestiti da terzi, questi potrebbero – in aggiunta a quanto specificato ed anche all’insaputa del Titolare – compiere attività di tracciamento dell’Utente. Per informazioni dettagliate in merito, si consiglia di consultare le privacy policy dei servizi elencati.<br>\
		<strong>Affiliazione commerciale</strong><br>\
Questi servizi consentono a questa Applicazione di esporre annunci di prodotti o servizi offerti da terze parti. Gli annunci possono essere visualizzati sia sotto forma di link pubblicitari che sotto forma di banner in varie forme grafiche.<br>\
Il click sull’icona o sul banner pubblicato su questa Applicazione sono tracciati dai servizi terzi elencati di seguito e vengono condivisi con questa Applicazione.<br>\
Per conoscere quali dati vengano raccolti si prega di far riferimento alle informative privacy di ciascun servizio.<br>\
<strong>Amazon Affiliation (Amazon)</strong><br>\
Amazon Affiliation è un servizio di affiliazione commerciale fornito da Amazon.com Inc.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://www.amazon.com/gp/help/customer/display.html/ref=hp_rel_topic?ie=UTF8&nodeId=468496' target='_blank'>Privacy Policy</a><br>\
<br>\
		<strong>Commento dei contenuti</strong><br>\
I servizi di commento consentono agli Utenti di formulare e rendere pubblici propri commenti riguardanti il contenuto di questa Applicazione.<br>\
Gli Utenti, a seconda delle impostazioni decise dal Titolare, possono lasciare il commento anche in forma anonima. Nel caso tra i Dati Personali rilasciati dall’Utente ci sia l’email, questa potrebbe essere utilizzata per inviare notifiche di commenti riguardanti lo stesso contenuto. Gli Utenti sono responsabili del contenuto dei propri commenti.<br>\
Nel caso in cui sia installato un servizio di commenti fornito da soggetti terzi, è possibile che, anche nel caso in cui gli Utenti non utilizzino il servizio di commento, lo stesso raccolga dati di traffico relativi alle pagine in cui il servizio di commento è installato.<br>\
<strong>Facebook Comments (Facebook, Inc.)</strong><br>\
Facebook Comments è un servizio gestito da Facebook, Inc. che consente all’Utente di lasciare propri commenti e condividerli all’interno della piattaforma Facebook.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://www.facebook.com/privacy/explanation.php' target='_blank'>Privacy Policy</a><br>\
<strong>Sistema di commento gestito in modo diretto (Questa Applicazione)</strong><br>\
Questa Applicazione dispone di un proprio sistema di commento dei contenuti.<br>\
Dati personali raccolti: Cognome, Email e Nome.<br>\
<br>\
		<strong>Gestione dei feed RSS</strong><br>\
Questi servizi permettono la gestione dei feed RSS e la distribuzione dei loro contenuti. A seconda delle caratteristiche del servizio utilizzato, questi servizi possono anche essere utilizzati per inserire annunci pubblicitari all'interno dei contenuti e per raccogliere dati statistici sugli stessi.<br>\
<strong>FeedPress (Beta Et Compagnie Sarl)</strong><br>\
FeedPress è un servizio di gestione dei feed RSS fornito da Beta Et Compagnie Sarl che permette di raccogliere dati statistici sulla consultazione dei contenuti.<br>\
Dati personali raccolti: Dati di utilizzo.<br>\
Luogo del trattamento : Francia – <a href='https://feedpress.it/privacy' target='_blank'>Privacy Policy</a><br>\
<strong>Feedburner (Google Inc.)</strong><br>\
Feedburner è un servizio di gestione dei feed RSS fornito da Google Inc. che permette di raccogliere dati statistici sulla consultazione dei contenuti e di integrare annunci pubblicitari all'interno di essi.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://www.google.com/intl/it/policies/privacy/' target='_blank'>Privacy Policy</a><br>\
<br>\
		<strong>Interazione con social network e piattaforme esterne</strong><br>\
Questi servizi permettono di effettuare interazioni con i social network, o con altre piattaforme esterne, direttamente dalle pagine di questa Applicazione.<br>\
Le interazioni e le informazioni acquisite da questa Applicazione sono in ogni caso soggette alle impostazioni privacy dell’Utente relative ad ogni social network.<br>\
Nel caso in cui sia installato un servizio di interazione con i social network, è possibile che, anche nel caso gli Utenti non utilizzino il servizio, lo stesso raccolga dati di traffico relativi alle pagine in cui è installato.<br>\
<strong>Pulsante +1 e widget sociali di Google+ (Google Inc.)</strong><br>\
Il pulsante +1 e i widget sociali di Google+ sono servizi di interazione con il social network Google+, forniti da Google Inc.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://www.google.com/intl/it/policies/privacy/' target='_blank'>Privacy Policy</a><br>\
<strong>Pulsante e widget sociali di Linkedin (LinkedIn Corporation)</strong><br>\
Il pulsante e i widget sociali di Linkedin sono servizi di interazione con il social network Linkedin, forniti da LinkedIn Corporation.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='https://www.linkedin.com/legal/privacy-policy' target='_blank'>Privacy Policy</a><br>\
<strong>Pulsante Mi Piace e widget sociali di Facebook (Facebook, Inc.)</strong><br>\
Il pulsante “Mi Piace” e i widget sociali di Facebook sono servizi di interazione con il social network Facebook, forniti da Facebook, Inc.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://www.facebook.com/privacy/explanation.php' target='_blank'>Privacy Policy</a><br>\
<strong>Pulsante Tweet e widget sociali di Twitter (Twitter, Inc.)</strong><br>\
Il pulsante Tweet e i widget sociali di Twitter sono servizi di interazione con il social network Twitter, forniti da Twitter, Inc.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://twitter.com/privacy' target='_blank'>Privacy Policy</a><br>\
<strong>ShareThis (Sharethis Inc.)</strong><br>\
ShareThis è un servizio fornito da ShareThis Inc che visualizza un widget che permette l’interazione con social network e piattaforme esterne e la condivisione dei contenuti di questa Applicazione.<br>\
A seconda della configurazione, questo servizio può mostrare widget appartenenti a terze parti, ad esempio i gestori dei social network su cui condividere le interazioni. In questo caso, anche le terze parti che erogano il widget verranno a conoscenza delle interazione effettuata e dei Dati di Utilizzo relativi alle pagine in cui questo servizio è installato.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://sharethis.com/privacy' target='_blank'>Privacy Policy</a><br>\
<strong>Shareaholic (Shareaholic, Inc.)</strong><br>\
Shareaholic è un servizio fornito da Shareaholic, Inc. che visualizza un widget che permette l’interazione con social network e piattaforme esterne e la condivisione dei contenuti di questa Applicazione.<br>\
A seconda della configurazione, questo servizio può mostrare widget appartenenti a terze parti, ad esempio i gestori dei social network su cui condividere le interazioni. In questo caso, anche le terze parti che erogano il widget verranno a conoscenza delle interazione effettuata e dei Dati di Utilizzo relativi alle pagine in cui questo servizio è installato.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='https://shareaholic.com/privacy/' target='_blank'>Privacy Policy</a><br>\
<strong>Pulsante “Pin it” e widget sociali di Pinterest (Pinterest)</strong><br>\
Il pulsante “Pin it” e widget sociali di Pinterest sono servizi di interazione con la piattaforma Pinterest, forniti da Pinterest Inc.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://about.pinterest.com/privacy/' target='_blank'>Privacy Policy</a><br>\
<br>\
		<strong>Protezione dallo SPAM</strong><br>\
Questi servizi analizzano il traffico di questa Applicazione, potenzialmente contenente Dati Personali degli Utenti, al fine di filtrarlo da parti di traffico, messaggi e contenuti riconosciuti come SPAM.<br>\
<strong>Akismet (Automattic Inc.)</strong><br>\
Akismet è un servizio di protezione dallo SPAM fornito da Automattic Inc.<br>\
Dati personali raccolti: Varie tipologie di Dati secondo quanto specificato dalla privacy policy del servizio.<br>\
Luogo del trattamento : USA – <a href='http://automattic.com/privacy/' target='_blank'>Privacy Policy</a><br>\
<strong>Google reCAPTCHA (Google Inc.)</strong><br>\
Google reCAPTCHA è un servizio di protezione dallo SPAM fornito da Google Inc.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='https://www.google.com/intl/policies/privacy/' target='_blank'>Privacy Policy</a><br>\
<strong>VERSCaptcha (Versatility Werks)</strong><br>\
VERSCaptcha è un servizio di protezione dallo SPAM fornito da Versatility Werks.<br>\
Dati personali raccolti: Varie tipologie di Dati secondo quanto specificato dalla privacy policy del servizio.<br>\
Luogo del trattamento : USA – <a href='https://www.iubenda.com/privacy-policy/497669' target='_blank'>Privacy Policy</a><br>\
<strong>WebPurify (WebFurther, LLC.)</strong><br>\
WebPurify è un servizio di protezione dallo SPAM fornito da WebFurther, LLC.<br>\
Dati personali raccolti: Varie tipologie di Dati secondo quanto specificato dalla privacy policy del servizio.<br>\
Luogo del trattamento : USA – <a href='http://webpurify.com/privacy/' target='_blank'>Privacy Policy</a><br>\
<br>\
		<strong>Pubblicità</strong><br>\
Questi servizi consentono di utilizzare i Dati dell’Utente per finalità di comunicazione commerciale in diverse forme pubblicitarie, quali il banner, anche in relazione agli interessi dell’Utente.<br>\
Ciò non significa che tutti i Dati Personali vengano utilizzati per questa finalità. Dati e condizioni di utilizzo sono indicati di seguito.<br>\
Alcuni dei servizi di seguito indicati potrebbero utilizzare Cookie per identificare l’Utente o utilizzare la tecnica del behavioral retargeting, ossia visualizzare annunci pubblicitari personalizzati in base agli interessi e al comportamento dell’Utente, rilevati anche al di fuori di questa Applicazione. Per avere maggiori informazioni in merito, ti suggeriamo di verificare le informative privacy dei rispettivi servizi.<br>\
<strong>Amazon Mobile Ads (Amazon)</strong><br>\
Amazon Mobile Ads è un servizio di advertising fornito da Amazon.com, Inc.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://www.amazon.com/gp/help/customer/display.html/ref=UTF8&nodeId=468496' target='_blank'>Privacy Policy</a><br>\
<strong>Google AdSense (Google Inc.)</strong><br>\
Google AdSense è un servizio di advertising fornito da Google Inc. Questo servizio usa il Cookie “Doubleclick”, che traccia l’utilizzo di questa Applicazione ed il comportamento dell’Utente in relazione agli annunci pubblicitari, ai prodotti e ai servizi offerti.<br>\
L’Utente può decidere in qualsiasi momento di non usare il Cookie Doubleclick provvedendo alla sua disattivazione: <a href='http://google.com/settings/ads/onweb/optout?hl=it' target='_blank'>google.com/settings/ads/onweb/optout?hl=it</a>.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://google.com/privacy/ads/' target='_blank'>Privacy Policy</a><br>\
<br>\
		<strong>Remarketing e Behavioral Targeting</strong><br>\
Questi servizi consentono a questa Applicazione ed ai suoi partner di comunicare, ottimizzare e servire annunci pubblicitari basati sull'utilizzo passato di questa Applicazione da parte dell'Utente.<br>\
Questa attività viene effettuata tramite il tracciamento dei Dati di Utilizzo e l'uso di Cookie, informazioni che vengono trasferite ai partner a cui l'attività di remarketing e behavioral targeting è collegata.<br>\
<strong>Facebook Custom Audience (Facebook, Inc.)</strong><br>\
Facebook Custom Audience è un servizio di Remarketing e Behavioral Targeting fornito da Facebook, Inc. che collega l'attività di questa Applicazione con il network di advertising Facebook.<br>\
Dati personali raccolti: Cookie e Email.<br>\
Luogo del trattamento : USA – <a href='https://www.facebook.com/about/privacy/' target='_blank'>Privacy Policy</a><br>\
<strong>Facebook Remarketing (Facebook, Inc.)</strong><br>\
Facebook Remarketing è un servizio di Remarketing e Behavioral Targeting fornito da Facebook, Inc. che collega l'attività di questa Applicazione con il network di advertising Facebook.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='https://www.facebook.com/about/privacy/' target='_blank'>Privacy Policy</a><br>\
<strong>Remarketing con Google Analytics per la pubblicità display (Google Inc.)</strong><br>\
Google Analytics per la pubblicità display è un servizio di Remarketing e Behavioral Targeting fornito da Google Inc. che collega l'attività di tracciamento effettuata da Google Analytics e dai suoi Cookie con il network di advertising Adwords ed il Cookie Doubleclick.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://www.google.com/intl/it/policies/privacy/' target='_blank'>Privacy Policy</a><br>\
<strong>Twitter Remarketing (Twitter, Inc.)</strong><br>\
Twitter Remarketing è un servizio di Remarketing e Behavioral Targeting fornito da Twitter, Inc. che collega l'attività di questa Applicazione con il network di advertising Twitter.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='https://twitter.com/privacy' target='_blank'>Privacy Policy</a><br>\
<br>\
		<strong>Statistica</strong><br>\
I servizi contenuti nella presente sezione permettono al Titolare del Trattamento di monitorare e analizzare i dati di traffico e servono a tener traccia del comportamento dell’Utente.<br>\
<strong>Google Analytics (Google Inc.)</strong><br>\
Google Analytics è un servizio di analisi web fornito da Google Inc. (“Google”). Google utilizza i Dati Personali raccolti allo scopo di tracciare ed esaminare l’utilizzo di questa Applicazione, compilare report e condividerli con gli altri servizi sviluppati da Google.<br>\
Google potrebbe utilizzare i Dati Personali per contestualizzare e personalizzare gli annunci del proprio network pubblicitario.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://www.google.com/intl/it/policies/privacy/' target='_blank'>Privacy Policy</a><br>\
<br>\
		<strong>Test di performance di contenuti e funzionalità (A/B testing)</strong><br>\
I servizi contenuti in questa sezione permettono al Titolare del Trattamento di tener traccia ed analizzare la risposta da parte dell’Utente, in termini di traffico o di comportamento, in relazione a modifiche della struttura, del testo o di qualunque altro componente di questa Applicazione.<br>\
<strong>Google Website Optimizer (Google Inc.)</strong><br>\
Google Website Optimizer è un servizio di A/B testing fornito da Google Inc. (\"Google\").<br>\
Google potrebbe utilizzare i Dati Personali per contestualizzare e personalizzare gli annunci del suo network pubblicitario.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://www.google.com/intl/en/policies/privacy/' target='_blank'>Privacy Policy</a><br>\
<br>\
		<strong>Visualizzazione di contenuti da piattaforme esterne</strong><br>\
Questi servizi permettono di visualizzare contenuti ospitati su piattaforme esterne direttamente dalle pagine di questa Applicazione e di interagire con essi.<br>\
Nel caso in cui sia installato un servizio di questo tipo, è possibile che, anche nel caso gli Utenti non utilizzino il servizio, lo stesso raccolga dati di traffico relativi alle pagine in cui è installato.<br>\
<strong>Widget Video Youtube (Google Inc.)</strong><br>\
Youtube è un servizio di visualizzazione di contenuti video gestito da Google Inc. che permette a questa Applicazione di integrare tali contenuti all’interno delle proprie pagine.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://www.google.it/intl/it/policies/privacy/' target='_blank'>Privacy Policy</a><br>\
<strong>Widget Instagram (Instagram, Inc.)</strong><br>\
Instagram è un servizio di visualizzazione di immagini gestito da Instagram, Inc. che permette a questa Applicazione di integrare tali contenuti all’interno delle proprie pagine.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://instagram.com/about/legal/privacy/' target='_blank'>Privacy Policy</a><br>\
<strong>Widget Google Maps (Google Inc.)</strong><br>\
Google Maps è un servizio di visualizzazione di mappe gestito da Google Inc. che permette a questa Applicazione di integrare tali contenuti all’interno delle proprie pagine.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://www.google.it/intl/it/policies/privacy/' target='_blank'>Privacy Policy</a><br>\
<strong>Video Vimeo (Vimeo, LLC)</strong><br>\
Vimeo è un servizio di visualizzazione di contenuti video gestito da Vimeo, LLC che permette a questa Applicazione di integrare tali contenuti all’interno delle proprie pagine.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://vimeo.com/privacy' target='_blank'>Privacy Policy</a><br>\
<br>\
<h3>Come posso controllare l'installazione di Cookie?</h3><br>\
In aggiunta a quanto indicato in questo documento, l'Utente può gestire le preferenze relative ai Cookie direttamente all'interno del proprio browser ed impedire – ad esempio – che terze parti possano installarne. Tramite le preferenze del browser è inoltre possibile eliminare i Cookie installati in passato, incluso il Cookie in cui venga eventualmente salvato il consenso all'installazione di Cookie da parte di questo sito. È importante notare che disabilitando tutti i Cookie, il funzionamento di questo sito potrebbe essere compromesso. L'Utente può trovare informazioni su come gestire i Cookie nel suo browser ai seguenti indirizzi: <a href='https://support.google.com/chrome/answer/95647?hl=it&p=cpn_cookies' target='_blank'>Google Chrome</a>,<a href='https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie' target='_blank'>Mozilla Firefox</a>, <a href='https://support.apple.com/kb/PH19214?viewlocale=it_IT&locale=en_US' target='_blank'>Apple Safari</a> e <a href='http://windows.microsoft.com/it-it/windows-vista/block-or-allow-cookies' target='_blank'>Microsoft Windows Explorer</a>.<br>\
In caso di servizi erogati da terze parti, l'Utente può inoltre esercitare il proprio diritto ad opporsi al tracciamento informandosi tramite la privacy policy della terza parte, tramite il link di opt out se esplicitamente fornito o contattando direttamente la stessa.<br>\
Fermo restando quanto precede, il Titolare informa che l’Utente può avvalersi di <a href='http://www.youronlinechoices.com/' target='_blank'>Your Online Choices</a>. Attraverso tale servizio è possibile gestire le preferenze di tracciamento della maggior parte degli strumenti pubblicitari. Il Titolare, pertanto, consiglia agli Utenti di utilizzare tale risorsa in aggiunta alle informazioni fornite dal presente documento.<br>\
<strong>Titolare del Trattamento dei Dati</strong><br>\
"+nome+",<br>\
"+email+"<br>\
<br>\
Dal momento che l'installazione di Cookie e di altri sistemi di tracciamento operata da terze parti tramite i servizi utilizzati all'interno di questa Applicazione non può essere tecnicamente controllata dal Titolare, ogni riferimento specifico a Cookie e sistemi di tracciamento installati da terze parti è da considerarsi indicativo. Per ottenere informazioni complete, consulta la privacy policy degli eventuali servizi terzi elencati in questo documento.<br>\
Vista l'oggettiva complessità legata all'identificazione delle tecnologie basate sui Cookie ed alla loro integrazione molto stretta con il funzionamento del web, l'Utente è invitato a contattare il Titolare qualora volesse ricevere qualunque approfondimento relativo all'utilizzo dei Cookie stessi e ad eventuali utilizzi degli stessi – ad esempio ad opera di terzi – effettuati tramite questo sito.<br>\
<strong>Definizioni e riferimenti legali</strong><br>\
<strong>Dati Personali (o Dati)</strong><br>\
Costituisce dato personale qualunque informazione relativa a persona fisica, identificata o identificabile, anche indirettamente, mediante riferimento a qualsiasi altra informazione, ivi compreso un numero di identificazione personale.<br>\
<strong>Dati di Utilizzo</strong><br>\
Sono le informazioni raccolti in maniera automatica di questa Applicazione (o dalle applicazioni di parti terze che questa Applicazione utilizza), tra i quali: gli indirizzi IP o i nomi a dominio dei computer utilizzati dall’Utente che si connette con questa Applicazione, gli indirizzi in notazione URI (Uniform Resource Identifier), l’orario della richiesta, il metodo utilizzato nel sottoporre la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta dal server (buon fine, errore, ecc.) il Paese di provenienza, le caratteristiche del browser e del sistema operativo utilizzati dal visitatore, le varie connotazioni temporali della visita (ad esempio il tempo di permanenza su ciascuna pagina) e i dettagli relativi all’itinerario seguito all’interno dell’Applicazione, con particolare riferimento alla sequenza delle pagine consultate, ai parametri relativi al sistema operativo e all’ambiente informatico dell’Utente.<br>\
<strong>Utente</strong><br>\
L'individuo che utilizza questa Applicazione, che deve coincidere con l'Interessato o essere da questo autorizzato ed i cui Dati Personali sono oggetto del trattamento.<br>\
<strong>Interessato</strong><br>\
La persona fisica o giuridica cui si riferiscono i Dati Personali.<br>\
<strong>Responsabile del Trattamento (o Responsabile)</strong><br>\
La persona fisica, giuridica, la pubblica amministrazione e qualsiasi altro ente, associazione od organismo preposti dal Titolare al trattamento dei Dati Personali, secondo quanto predisposto dalla presente privacy policy.<br>\
<strong>Titolare del Trattamento (o Titolare)</strong><br>\
La persona fisica, giuridica, la pubblica amministrazione e qualsiasi altro ente, associazione od organismo cui competono, anche unitamente ad altro titolare, le decisioni in ordine alle finalità, alle modalità del trattamento di dati personali ed agli strumenti utilizzati, ivi compreso il profilo della sicurezza, in relazione al funzionamento e alla fruizione di questa Applicazione. Il Titolare del Trattamento, salvo quanto diversamente specificato, è il proprietario di questa Applicazione.<br>\
<strong>Questa Applicazione</strong><br>\
Lo strumento hardware o software mediante il quale sono raccolti i Dati Personali degli Utenti.<br>\
<strong>Cookie</strong><br>\
Piccola porzione di dati conservata all'interno del dispositivo dell'Utente.<br>\
<br>\
<strong>Riferimenti legali</strong><br>\
Avviso agli Utenti europei: la presente informativa privacy è redatta in adempimento degli obblighi previsti dall’Art. 10 della Direttiva n. 95/46/CE, nonché a quanto previsto dalla Direttiva 2002/58/CE, come aggiornata dalla Direttiva 2009/136/CE, in materia di Cookie.<br>\
Questa informativa privacy riguarda esclusivamente questa Applicazione.";








/* ==== PRIVACY ===== */







message = message + "\
<h2>Privacy Policy di "+sito+"</h2>\
Questa Applicazione raccoglie alcuni Dati Personali dei propri Utenti.<br>\
<h3>Titolare del Trattamento dei Dati</h3>\
"+nome+"<br>\
"+email+"<br>\
<br>\
<h3>Tipologie di Dati raccolti</h3>\
Fra i Dati Personali raccolti da questa Applicazione, in modo autonomo o tramite terze parti, ci sono: Cookie, Dati di utilizzo, Email, Nome, Cognome, Città, Numero di Telefono e Posizione geografica.<br>\
Altri Dati Personali raccolti potrebbero essere indicati in altre sezioni di questa privacy policy o mediante testi informativi visualizzati contestualmente alla raccolta dei Dati stessi.<br>\
I Dati Personali possono essere inseriti volontariamente dall’Utente, oppure raccolti in modo automatico durante l'uso di questa Applicazione.<br>\
L’eventuale utilizzo di Cookie - o di altri strumenti di tracciamento - da parte di questa Applicazione o dei titolari dei servizi terzi utilizzati da questa Applicazione, ove non diversamente precisato, ha la finalità di identificare l’Utente e registrare le relative preferenze per finalità strettamente legate all'erogazione del servizio richiesto dall’Utente.<br>\
Il mancato conferimento da parte dell’Utente di alcuni Dati Personali potrebbe impedire a questa Applicazione di erogare i propri servizi.<br>\
L'Utente si assume la responsabilità dei Dati Personali di terzi pubblicati o condivisi mediante questa Applicazione e garantisce di avere il diritto di comunicarli o diffonderli, liberando il Titolare da qualsiasi responsabilità verso terzi.<br>\
<h3>Modalità e luogo del trattamento dei Dati raccolti</h3>\
<strong>Modalità di trattamento</strong><br>\
Il Titolare tratta i Dati Personali degli Utenti adottando le opportune misure di sicurezza volte ad impedire l’accesso, la divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali.<br>\
Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate. Oltre al Titolare, in alcuni casi, potrebbero avere accesso ai Dati categorie di incaricati coinvolti nell’organizzazione del sito (personale amministrativo, commerciale, marketing, legali, amministratori di sistema) ovvero soggetti esterni (come fornitori di servizi tecnici terzi, corrieri postali, hosting provider, società informatiche, agenzie di comunicazione) nominati anche, se necessario, Responsabili del Trattamento da parte del Titolare. L’elenco aggiornato dei Responsabili potrà sempre essere richiesto al Titolare del Trattamento.<br>\
<strong>Luogo</strong><br>\
I Dati sono trattati presso le sedi operative del Titolare ed in ogni altro luogo in cui le parti coinvolte nel trattamento siano localizzate. Per ulteriori informazioni, contatta il Titolare.<br>\
<strong>Tempi</strong><br>\
I Dati sono trattati per il tempo necessario allo svolgimento del servizio richiesto dall’Utente, o richiesto dalle finalità descritte in questo documento, e l’Utente può sempre chiedere l’interruzione del Trattamento o la cancellazione dei Dati.<br>\
<h3>Finalità del Trattamento dei Dati raccolti</h3>\
I Dati dell’Utente sono raccolti per consentire al Titolare di fornire i propri servizi, così come per le seguenti finalità: Commento dei contenuti, Contattare l'Utente, Accesso agli account su servizi terzi, Affiliazione commerciale, Funzionalità sociali, Gestione dei feed RSS, Gestione dei pagamenti, Gestione indirizzi e invio di messaggi email, Interazione con social network e piattaforme esterne, Interazioni basate sulla posizione, Protezione dallo SPAM, Pubblicità, Registrazione ed autenticazione, Remarketing e Behavioral Targeting, Salvataggio e gestione di backup, Statistica, Test di performance di contenuti e funzionalità (A/B testing) e Visualizzazione di contenuti da piattaforme esterne.<br>\
Le tipologie di Dati Personali utilizzati per ciascuna finalità sono indicati nelle sezioni specifiche di questo documento.<br>\
<h3>Permessi Facebook richiesti da questa Applicazione</h3>\
Questa Applicazione può richiedere alcuni permessi Facebook che le consentono di eseguire azioni con l’account Facebook dell’Utente e di raccogliere informazioni, inclusi Dati Personali, da esso.<br>\
Per maggiorni informazioni sui permessi che seguono, fai riferimento alla <a href='https://developers.facebook.com/docs/authentication/permissions/' target='_blank'>documentazione dei permessi Facebook</a> ed alla <a href='https://www.facebook.com/about/privacy/' target='_blank'>privacy policy di Facebook</a>.<br>\
I permessi richiesti sono i seguenti:<br>\
<strong>Informazioni di base</strong><br>\
Le informazioni di base dell’Utente registrato su Facebook che normalmente includono i seguenti Dati: id, nome, immagine, genere e lingua di localizzazione ed, in alcuni casi gli “Amici” di Facebook. Se l'Utente ha reso disponibili pubblicamente Dati ulteriori, gli stessi saranno disponibili.<br>\
<strong>Accesso ai dati privati</strong><br>\
Permette l'accesso ai dati privati dell'utente e degli amici<br>\
<strong>Email</strong><br>\
Fornisce accesso all'indirizzo email primario dell'Utente<br>\
<strong>Email di contatto</strong><br>\
Permette di accedere all'indirizzo email di contatto dell'utente.<br>\
<h3>Dettagli sul trattamento dei Dati Personali</h3><br>\
I Dati Personali sono raccolti per le seguenti finalità ed utilizzando i seguenti servizi:<br>\
		<strong>Accesso agli account su servizi terzi</strong><br>\
Questi servizi permettono a questa Applicazione di prelevare Dati dai tuoi account su servizi terzi ed eseguire azioni con essi.<br>\
Questi servizi non sono attivati automaticamente, ma richiedono l'espressa autorizzazione dell'Utente.<br>\
<strong>Accesso all'account Facebook (Questa Applicazione)</strong><br>\
Questo servizio permette a questa Applicazione di connettersi con l'account dell'Utente sul social network Facebook, fornito da Facebook, Inc.<br>\
Permessi richiesti: Accesso ai dati privati, Email e Email di contatto.<br>\
Luogo del trattamento : USA – <a href='https://www.facebook.com/policy.php' target='_blank'>Privacy Policy</a><br>\
<strong>Accesso all'account Twitter (Twitter, Inc.)</strong><br>\
Questo servizio permette a questa Applicazione di connettersi con l'account dell'Utente sul social network Twitter, fornito da Twitter, Inc.<br>\
Dati personali raccolti: Varie tipologie di Dati secondo quanto specificato dalla privacy policy del servizio.<br>\
Luogo del trattamento : USA – <a href='http://twitter.com/privacy' target='_blank'>Privacy Policy</a><br>\
<br>\
	<strong>Affiliazione commerciale</strong><br>\
Questi servizi consentono a questa Applicazione di esporre annunci di prodotti o servizi offerti da terze parti. Gli annunci possono essere visualizzati sia sotto forma di link pubblicitari che sotto forma di banner in varie forme grafiche.<br>\
Il click sull’icona o sul banner pubblicato su questa Applicazione sono tracciati dai servizi terzi elencati di seguito e vengono condivisi con questa Applicazione.<br>\
Per conoscere quali dati vengano raccolti si prega di far riferimento alle informative privacy di ciascun servizio.<br>\
<strong>Amazon Affiliation (Amazon)</strong><br>\
Amazon Affiliation è un servizio di affiliazione commerciale fornito da Amazon.com Inc.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://www.amazon.com/gp/help/customer/display.html/ref=hp_rel_topic?ie=UTF8&nodeId=468496' target='_blank'>Privacy Policy</a><br>\
<br>\
		<strong>Commento dei contenuti</strong><br>\
I servizi di commento consentono agli Utenti di formulare e rendere pubblici propri commenti riguardanti il contenuto di questa Applicazione.<br>\
Gli Utenti, a seconda delle impostazioni decise dal Titolare, possono lasciare il commento anche in forma anonima. Nel caso tra i Dati Personali rilasciati dall’Utente ci sia l’email, questa potrebbe essere utilizzata per inviare notifiche di commenti riguardanti lo stesso contenuto. Gli Utenti sono responsabili del contenuto dei propri commenti.<br>\
Nel caso in cui sia installato un servizio di commenti fornito da soggetti terzi, è possibile che, anche nel caso in cui gli Utenti non utilizzino il servizio di commento, lo stesso raccolga dati di traffico relativi alle pagine in cui il servizio di commento è installato.<br>\
<strong>Facebook Comments (Facebook, Inc.)</strong><br>\
Facebook Comments è un servizio gestito da Facebook, Inc. che consente all’Utente di lasciare propri commenti e condividerli all’interno della piattaforma Facebook.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://www.facebook.com/privacy/explanation.php' target='_blank'>Privacy Policy</a><br>\
<strong>Sistema di commento gestito in modo diretto (Questa Applicazione)</strong><br>\
Questa Applicazione dispone di un proprio sistema di commento dei contenuti.<br>\
Dati personali raccolti: Cognome, Email e Nome.<br>\
<br>\
		<strong>Contattare l'Utente</strong><br>\
<strong>Mailing List o Newsletter (Questa Applicazione)</strong><br>\
Con la registrazione alla mailing list o alla newsletter, l’indirizzo email dell’Utente viene automaticamente inserito in una lista di contatti a cui potranno essere trasmessi messaggi email contenenti informazioni, anche di natura commerciale e promozionale, relative a questa Applicazione. L'indirizzo email dell'Utente potrebbe anche essere aggiunto a questa lista come risultato della registrazione a questa Applicazione o dopo aver effettuato un acquisto.<br>\
Dati personali raccolti: Città, Cognome, Email e Nome.<br>\
<strong>Modulo di contatto (Questa Applicazione)</strong><br>\
L’Utente, compilando con i propri Dati il modulo di contatto, acconsente al loro utilizzo per rispondere alle richieste di informazioni, di preventivo, o di qualunque altra natura indicata dall’intestazione del modulo.<br>\
Dati personali raccolti: Cognome, Email, Nome e Numero di Telefono.<br>\
<br>\
	<strong>Funzionalità sociali</strong><br>\
<strong>Invitare e suggerire amici (Questa Applicazione)</strong><br>\
Questa Applicazione può utilizzare i Dati Personali forniti per permettere agli Utenti di invitare i loro amici - per esempio attraverso la rubrica, se è stato autorizzato l'accesso - e per suggerire amici o connessioni al suo interno.<br>\
Dati personali raccolti: Varie tipologie di Dati secondo quanto specificato dalla privacy policy del servizio.<br>\
<br>\
	<strong>Gestione dei feed RSS</strong><br>\
Questi servizi permettono la gestione dei feed RSS e la distribuzione dei loro contenuti. A seconda delle caratteristiche del servizio utilizzato, questi servizi possono anche essere utilizzati per inserire annunci pubblicitari all'interno dei contenuti e per raccogliere dati statistici sugli stessi.<br>\
<strong>FeedPress (Beta Et Compagnie Sarl)</strong><br>\
FeedPress è un servizio di gestione dei feed RSS fornito da Beta Et Compagnie Sarl che permette di raccogliere dati statistici sulla consultazione dei contenuti.<br>\
Dati personali raccolti: Dati di utilizzo.<br>\
Luogo del trattamento : Francia – <a href='https://feedpress.it/privacy' target='_blank'>Privacy Policy</a><br>\
<strong>Feedburner (Google Inc.)</strong><br>\
Feedburner è un servizio di gestione dei feed RSS fornito da Google Inc. che permette di raccogliere dati statistici sulla consultazione dei contenuti e di integrare annunci pubblicitari all'interno di essi.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://www.google.com/intl/it/policies/privacy/' target='_blank'>Privacy Policy</a><br>\
<br>\
	<strong>Gestione dei pagamenti</strong><br>\
I servizi di gestione dei pagamenti permettono a questa Applicazione di processare pagamenti tramite carta di credito, bonifico bancario o altri strumenti. I dati utilizzati per il pagamento vengono acquisiti direttamente dal gestore del servizio di pagamento richiesto senza essere in alcun modo trattati da questa Applicazione.<br>\
Alcuni di questi servizi potrebbero inoltre permettere l'invio programmato di messaggi all'Utente, come email contenenti fatture o notifiche riguardanti il pagamento.<br>\
<strong>Amazon Payments (Amazon)</strong><br>\
Amazon Payments è un servizio di pagamento fornito da Amazon.com, Inc., che consente all’Utente di effettuare pagamenti online utilizzando le proprie credenziali Amazon.<br>\
Dati personali raccolti: Varie tipologie di Dati secondo quanto specificato dalla privacy policy del servizio.<br>\
<a href='https://payments.amazon.com/help/Personal-Accounts/Privacy-Security/Privacy-Notice' target='_blank'>Privacy Policy</a><br>\
<strong>PayPal (Paypal)</strong><br>\
PayPal è un servizio di pagamento fornito da PayPal Inc., che consente all’Utente di effettuare pagamenti online utilizzando le proprie credenziali PayPal.<br>\
Dati personali raccolti: Varie tipologie di Dati secondo quanto specificato dalla privacy policy del servizio.<br>\
<a href='https://cms.paypal.com/it/cgi-bin/marketingweb?cmd=_render-content&content_ID=ua/Privacy_full&locale.x=it_IT' target='_blank'>Privacy Policy</a><br>\
<br>\
	<strong>Gestione indirizzi e invio di messaggi email</strong><br>\
Questi servizi consentono di gestire un database di contatti email, contatti telefonici o contatti di qualunque altro tipo, utilizzati per comunicare con l’Utente.<br>\
Questi servizi potrebbero inoltre consentire di raccogliere dati relativi alla data e all’ora di visualizzazione dei messaggi da parte dell’Utente, così come all’interazione dell'Utente con essi, come le informazioni sui click sui collegamenti inseriti nei messaggi.<br>\
<strong>GetResponse (Implix Sp. z o.o.)</strong><br>\
GetResponse è un servizio di gestione indirizzi e invio di messaggi email fornito da Implix Sp. z o.o.<br>\
Dati personali raccolti: Email.<br>\
Luogo del trattamento : Polonia – <a href='http://www.getresponse.com/legal/privacy.html' target='_blank'>Privacy Policy</a><br>\
<br>\
	<strong>Interazione con social network e piattaforme esterne</strong><br>\
Questi servizi permettono di effettuare interazioni con i social network, o con altre piattaforme esterne, direttamente dalle pagine di questa Applicazione.<br>\
Le interazioni e le informazioni acquisite da questa Applicazione sono in ogni caso soggette alle impostazioni privacy dell’Utente relative ad ogni social network.<br>\
Nel caso in cui sia installato un servizio di interazione con i social network, è possibile che, anche nel caso gli Utenti non utilizzino il servizio, lo stesso raccolga dati di traffico relativi alle pagine in cui è installato.<br>\
<strong>Pulsante +1 e widget sociali di Google+ (Google Inc.)</strong><br>\
Il pulsante +1 e i widget sociali di Google+ sono servizi di interazione con il social network Google+, forniti da Google Inc.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://www.google.com/intl/it/policies/privacy/' target='_blank'>Privacy Policy</a><br>\
<strong>Pulsante e widget sociali di Linkedin (LinkedIn Corporation)</strong><br>\
Il pulsante e i widget sociali di Linkedin sono servizi di interazione con il social network Linkedin, forniti da LinkedIn Corporation.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='https://www.linkedin.com/legal/privacy-policy' target='_blank'>Privacy Policy</a><br>\
<strong>Pulsante Mi Piace e widget sociali di Facebook (Facebook, Inc.)</strong><br>\
Il pulsante “Mi Piace” e i widget sociali di Facebook sono servizi di interazione con il social network Facebook, forniti da Facebook, Inc.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://www.facebook.com/privacy/explanation.php' target='_blank'>Privacy Policy</a><br>\
<strong>Pulsante Tweet e widget sociali di Twitter (Twitter, Inc.)</strong><br>\
Il pulsante Tweet e i widget sociali di Twitter sono servizi di interazione con il social network Twitter, forniti da Twitter, Inc.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://twitter.com/privacy' target='_blank'>Privacy Policy</a><br>\
<strong>ShareThis (Sharethis Inc.)</strong><br>\
ShareThis è un servizio fornito da ShareThis Inc che visualizza un widget che permette l’interazione con social network e piattaforme esterne e la condivisione dei contenuti di questa Applicazione.<br>\
A seconda della configurazione, questo servizio può mostrare widget appartenenti a terze parti, ad esempio i gestori dei social network su cui condividere le interazioni. In questo caso, anche le terze parti che erogano il widget verranno a conoscenza delle interazione effettuata e dei Dati di Utilizzo relativi alle pagine in cui questo servizio è installato.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://sharethis.com/privacy' target='_blank'>Privacy Policy</a><br>\
<strong>Shareaholic (Shareaholic, Inc.)</strong><br>\
Shareaholic è un servizio fornito da Shareaholic, Inc. che visualizza un widget che permette l’interazione con social network e piattaforme esterne e la condivisione dei contenuti di questa Applicazione.<br>\
A seconda della configurazione, questo servizio può mostrare widget appartenenti a terze parti, ad esempio i gestori dei social network su cui condividere le interazioni. In questo caso, anche le terze parti che erogano il widget verranno a conoscenza delle interazione effettuata e dei Dati di Utilizzo relativi alle pagine in cui questo servizio è installato.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='https://shareaholic.com/privacy/' target='_blank'>Privacy Policy</a><br>\
<strong>Pulsante “Pin it” e widget sociali di Pinterest (Pinterest)</strong><br>\
Il pulsante “Pin it” e widget sociali di Pinterest sono servizi di interazione con la piattaforma Pinterest, forniti da Pinterest Inc.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://about.pinterest.com/privacy/' target='_blank'>Privacy Policy</a><br>\
<br>\
		<strong>Interazioni basate sulla posizione</strong><br>\
<strong>Geolocalizzazione (Questa Applicazione)</strong><br>\
Questa Applicazione può raccogliere, usare e condividere i Dati relativi alla posizione geografica dell’Utente, al fine di fornire servizi basati sulla posizione stessa.<br>\
La maggior parte dei browser e dei dispositivi fornisce in modo predefinito degli strumenti per negare il tracciamento geografico. Qualora l’Utente abbia espressamente autorizzato tale possibilità, questa Applicazione può ricevere informazioni sulla sua effettiva posizione geografica.<br>\
Dati personali raccolti: Posizione geografica.<br>\
<br>\
		<strong>Protezione dallo SPAM</strong><br>\
Questi servizi analizzano il traffico di questa Applicazione, potenzialmente contenente Dati Personali degli Utenti, al fine di filtrarlo da parti di traffico, messaggi e contenuti riconosciuti come SPAM.<br>\
<strong>Akismet (Automattic Inc.)</strong><br>\
Akismet è un servizio di protezione dallo SPAM fornito da Automattic Inc.<br>\
Dati personali raccolti: Varie tipologie di Dati secondo quanto specificato dalla privacy policy del servizio.<br>\
Luogo del trattamento : USA – <a href='http://automattic.com/privacy/' target='_blank'>Privacy Policy</a><br>\
<strong>Google reCAPTCHA (Google Inc.)</strong><br>\
Google reCAPTCHA è un servizio di protezione dallo SPAM fornito da Google Inc.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='https://www.google.com/intl/policies/privacy/' target='_blank'>Privacy Policy</a><br>\
<strong>VERSCaptcha (Versatility Werks)</strong><br>\
VERSCaptcha è un servizio di protezione dallo SPAM fornito da Versatility Werks.<br>\
Dati personali raccolti: Varie tipologie di Dati secondo quanto specificato dalla privacy policy del servizio.<br>\
Luogo del trattamento : USA – <a href='https://www.iubenda.com/privacy-policy/497669' target='_blank'>Privacy Policy</a><br>\
<strong>WebPurify (WebFurther, LLC.)</strong><br>\
WebPurify è un servizio di protezione dallo SPAM fornito da WebFurther, LLC.<br>\
Dati personali raccolti: Varie tipologie di Dati secondo quanto specificato dalla privacy policy del servizio.<br>\
Luogo del trattamento : USA – <a href='http://webpurify.com/privacy/' target='_blank'>Privacy Policy</a><br>\
<br>\
		<strong>Pubblicità</strong><br>\
Questi servizi consentono di utilizzare i Dati dell’Utente per finalità di comunicazione commerciale in diverse forme pubblicitarie, quali il banner, anche in relazione agli interessi dell’Utente.<br>\
Ciò non significa che tutti i Dati Personali vengano utilizzati per questa finalità. Dati e condizioni di utilizzo sono indicati di seguito.<br>\
Alcuni dei servizi di seguito indicati potrebbero utilizzare Cookie per identificare l’Utente o utilizzare la tecnica del behavioral retargeting, ossia visualizzare annunci pubblicitari personalizzati in base agli interessi e al comportamento dell’Utente, rilevati anche al di fuori di questa Applicazione. Per avere maggiori informazioni in merito, ti suggeriamo di verificare le informative privacy dei rispettivi servizi.<br>\
<strong>Amazon Mobile Ads (Amazon)</strong><br>\
Amazon Mobile Ads è un servizio di advertising fornito da Amazon.com, Inc.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://www.amazon.com/gp/help/customer/display.html/ref=UTF8&nodeId=468496' target='_blank'>Privacy Policy</a><br>\
<strong>Google AdSense (Google Inc.)</strong><br>\
Google AdSense è un servizio di advertising fornito da Google Inc. Questo servizio usa il Cookie “Doubleclick”, che traccia l’utilizzo di questa Applicazione ed il comportamento dell’Utente in relazione agli annunci pubblicitari, ai prodotti e ai servizi offerti.<br>\
L’Utente può decidere in qualsiasi momento di non usare il Cookie Doubleclick provvedendo alla sua disattivazione: google.com/settings/ads/onweb/optout?hl=it.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://google.com/privacy/ads/' target='_blank'>Privacy Policy</a><br>\
<br>\
		<strong>Registrazione ed autenticazione</strong><br>\
Con la registrazione o l’autenticazione l’Utente consente all’Applicazione di indentificarlo e di dargli accesso a servizi dedicati.<br>\
A seconda di quanto indicato di seguito, i servizi di registrazione e di autenticazione potrebbero essere forniti con l’ausilio di terze parti.<br>\
Qualora questo avvenga, questa applicazione potrà accedere ad alcuni Dati conservati dal servizio terzo usato per la registrazione o l’identificazione.<br>\
<strong>Facebook Authentication (Facebook, Inc.)</strong><br>\
Facebook Authentication è un servizio di registrazione ed autenticazione fornito da Facebook, Inc. e collegato al social network Facebook.<br>\
Dati personali raccolti: Varie tipologie di Dati secondo quanto specificato dalla privacy policy del servizio.<br>\
Luogo del trattamento : USA – <a href='http://www.facebook.com/help/?page=229348490415842' target='_blank'>Privacy Policy</a><br>\
<strong>Linkedin OAuth (LinkedIn Corporation)</strong><br>\
Linkedin Oauth è un servizio di registrazione ed autenticazione fornito da Linkedin Corporation e collegato al social network Linkedin.<br>\
Dati personali raccolti: Varie tipologie di Dati secondo quanto specificato dalla privacy policy del servizio.<br>\
Luogo del trattamento : USA – <a href='https://www.linkedin.com/legal/privacy-policy' target='_blank'>Privacy Policy</a><br>\
<strong>Google OAuth (Google Inc.)</strong><br>\
Google OAuth è un servizio di registrazione ed autenticazione fornito da Google Inc. e collegato al network Google.<br>\
Dati personali raccolti: Varie tipologie di Dati secondo quanto specificato dalla privacy policy del servizio.<br>\
Luogo del trattamento : USA – <a href='https://developers.google.com/accounts/docs/OAuth2' target='_blank'>Privacy Policy</a><br>\
<strong>Twitter OAuth (Twitter, Inc.)</strong><br>\
Twitter Oauth è un servizio di registrazione ed autenticazione fornito da Twitter, Inc. e collegato al social network Twitter.<br>\
Dati personali raccolti: Varie tipologie di Dati secondo quanto specificato dalla privacy policy del servizio.<br>\
Luogo del trattamento : USA – <a href='https://dev.twitter.com/terms/api-terms' target='_blank'>Privacy Policy</a><br>\
<strong>Windows Live Connect (Microsoft Corporation)</strong><br>\
Microsoft Live Connect è un servizio di registrazione ed autenticazione fornito da Microsoft Corporation e collegato al network Microsoft.<br>\
Dati personali raccolti: Varie tipologie di Dati secondo quanto specificato dalla privacy policy del servizio.<br>\
Luogo del trattamento : USA – <a href='https://msdn.microsoft.com/en-us/dn529288' target='_blank'>Privacy Policy</a><br>\
<br>\
		<strong>Remarketing e Behavioral Targeting</strong><br>\
Questi servizi consentono a questa Applicazione ed ai suoi partner di comunicare, ottimizzare e servire annunci pubblicitari basati sull'utilizzo passato di questa Applicazione da parte dell'Utente.<br>\
Questa attività viene effettuata tramite il tracciamento dei Dati di Utilizzo e l'uso di Cookie, informazioni che vengono trasferite ai partner a cui l'attività di remarketing e behavioral targeting è collegata.<br>\
<strong>Facebook Custom Audience (Facebook, Inc.)</strong><br>\
Facebook Custom Audience è un servizio di Remarketing e Behavioral Targeting fornito da Facebook, Inc. che collega l'attività di questa Applicazione con il network di advertising Facebook.<br>\
Dati personali raccolti: Cookie e Email.<br>\
Luogo del trattamento : USA – <a href='https://www.facebook.com/about/privacy/' target='_blank'>Privacy Policy</a><br>\
<strong>Facebook Remarketing (Facebook, Inc.)</strong><br>\
Facebook Remarketing è un servizio di Remarketing e Behavioral Targeting fornito da Facebook, Inc. che collega l'attività di questa Applicazione con il network di advertising Facebook.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='https://www.facebook.com/about/privacy/' target='_blank'>Privacy Policy</a><br>\
<strong>Remarketing con Google Analytics per la pubblicità display (Google Inc.)</strong><br>\
Google Analytics per la pubblicità display è un servizio di Remarketing e Behavioral Targeting fornito da Google Inc. che collega l'attività di tracciamento effettuata da Google Analytics e dai suoi Cookie con il network di advertising Adwords ed il Cookie Doubleclick.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://www.google.com/intl/it/policies/privacy/' target='_blank'>Privacy Policy</a><br>\
<strong>Twitter Remarketing (Twitter, Inc.)</strong><br>\
Twitter Remarketing è un servizio di Remarketing e Behavioral Targeting fornito da Twitter, Inc. che collega l'attività di questa Applicazione con il network di advertising Twitter.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='https://twitter.com/privacy' target='_blank'>Privacy Policy</a><br>\
<br>\
		<strong>Salvataggio e gestione di backup</strong><br>\
Questi servizi permettono il salvataggio e la gestione dei backup di questa Applicazione su server esterni gestiti dal fornitore del servizio stesso. Questi backup possono comprendere sia il codice sorgente ed i contenuti della stessa che i dati forniti a questa Applicazione da parte dell'Utente.<br>\
<strong>Backup su Dropbox (Dropbox, Inc.)</strong><br>\
Dropbox è un servizio di salvataggio e gestione di backup fornito da Dropbox Inc.<br>\
Dati personali raccolti: Varie tipologie di Dati secondo quanto specificato dalla privacy policy del servizio.<br>\
Luogo del trattamento : USA – <a href='https://www.dropbox.com/privacy#privacy' target='_blank'>Privacy Policy</a><br>\
<strong>Backup su Google Drive (Google Inc.)</strong><br>\
Google Drive è un servizio di salvataggio e gestione di backup fornito da Google Inc.<br>\
Dati personali raccolti: Varie tipologie di Dati secondo quanto specificato dalla privacy policy del servizio.<br>\
Luogo del trattamento : USA – <a href='https://support.google.com/drive/answer/2450387?hl=en' target='_blank'>Privacy Policy</a><br>\
<br>\
		<strong>Statistica</strong><br>\
I servizi contenuti nella presente sezione permettono al Titolare del Trattamento di monitorare e analizzare i dati di traffico e servono a tener traccia del comportamento dell’Utente.<br>\
<strong>Google Analytics (Google Inc.)</strong><br>\
Google Analytics è un servizio di analisi web fornito da Google Inc. (“Google”). Google utilizza i Dati Personali raccolti allo scopo di tracciare ed esaminare l’utilizzo di questa Applicazione, compilare report e condividerli con gli altri servizi sviluppati da Google.<br>\
Google potrebbe utilizzare i Dati Personali per contestualizzare e personalizzare gli annunci del proprio network pubblicitario.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://www.google.com/intl/it/policies/privacy/' target='_blank'>Privacy Policy</a><br>\
<br>\
		<strong>Test di performance di contenuti e funzionalità (A/B testing)</strong><br>\
I servizi contenuti in questa sezione permettono al Titolare del Trattamento di tener traccia ed analizzare la risposta da parte dell’Utente, in termini di traffico o di comportamento, in relazione a modifiche della struttura, del testo o di qualunque altro componente di questa Applicazione.<br>\
<strong>Google Website Optimizer (Google Inc.)</strong><br>\
Google Website Optimizer è un servizio di A/B testing fornito da Google Inc. (\"Google\").<br>\
Google potrebbe utilizzare i Dati Personali per contestualizzare e personalizzare gli annunci del suo network pubblicitario.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://www.google.com/intl/en/policies/privacy/' target='_blank'>Privacy Policy</a><br>\
<br>\
		<strong>Visualizzazione di contenuti da piattaforme esterne</strong><br>\
Questi servizi permettono di visualizzare contenuti ospitati su piattaforme esterne direttamente dalle pagine di questa Applicazione e di interagire con essi.<br>\
Nel caso in cui sia installato un servizio di questo tipo, è possibile che, anche nel caso gli Utenti non utilizzino il servizio, lo stesso raccolga dati di traffico relativi alle pagine in cui è installato.<br>\
<strong>Widget Video Youtube (Google Inc.)</strong><br>\
Youtube è un servizio di visualizzazione di contenuti video gestito da Google Inc. che permette a questa Applicazione di integrare tali contenuti all’interno delle proprie pagine.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://www.google.it/intl/it/policies/privacy/' target='_blank'>Privacy Policy</a><br>\
<strong>Widget Instagram (Instagram, Inc.)</strong><br>\
Instagram è un servizio di visualizzazione di immagini gestito da Instagram, Inc. che permette a questa Applicazione di integrare tali contenuti all’interno delle proprie pagine.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://instagram.com/about/legal/privacy/' target='_blank'>Privacy Policy</a><br>\
<strong>Widget Google Maps (Google Inc.)</strong><br>\
Google Maps è un servizio di visualizzazione di mappe gestito da Google Inc. che permette a questa Applicazione di integrare tali contenuti all’interno delle proprie pagine.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://www.google.it/intl/it/policies/privacy/' target='_blank'>Privacy Policy</a><br>\
<strong>Video Vimeo (Vimeo, LLC)</strong><br>\
Vimeo è un servizio di visualizzazione di contenuti video gestito da Vimeo, LLC che permette a questa Applicazione di integrare tali contenuti all’interno delle proprie pagine.<br>\
Dati personali raccolti: Cookie e Dati di utilizzo.<br>\
Luogo del trattamento : USA – <a href='http://vimeo.com/privacy' target='_blank'>Privacy Policy</a><br>\
<br>\
<h3>Ulteriori informazioni sui Dati Personali</h3>\
		<strong>Notifiche push</strong><br>\
Questa Applicazione può inviare notifiche push all'Utente.<br>\
<br>\
		<strong>Vendita di beni e servizi online</strong><br>\
I Dati Personali raccolti sono utilizzati per l’erogazione di servizi all’Utente o per la vendita di prodotti, inclusi il pagamento e l’eventuale consegna. I Dati Personali raccolti per perfezionare il pagamento possono essere quelli relativi alla carta di credito, al conto corrente utilizzato per il bonifico o ad altri strumenti di pagamento previsti. I Dati di pagamento raccolti da questa Applicazione dipendono dal sistema di pagamento utilizzato.<br>\
<br>\
<br>\
<strong>Cookie Policy</strong><br>\
Questa Applicazione fa utilizzo di Cookie. Per saperne di più e per un'informativa dettagliata, puoi consultare la Cookie Policy descritta all'inizio di questo testo.<br>\
<h3>Ulteriori informazioni sul trattamento</h3>\
<strong>Difesa in giudizio</strong><br>\
I Dati Personali dell’Utente possono essere utilizzati per la difesa da parte del Titolare in giudizio o nelle fasi propedeutiche alla sua eventuale instaurazione, da abusi nell'utilizzo della stessa o dei servizi connessi da parte dell’Utente.<br>\
L’Utente dichiara di essere consapevole che il Titolare potrebbe essere richiesto di rivelare i Dati su richiesta delle pubbliche autorità.<br>\
<strong>Informative specifiche</strong><br>\
Su richiesta dell’Utente, in aggiunta alle informazioni contenute in questa privacy policy, questa Applicazione potrebbe fornire all'Utente delle informative aggiuntive e contestuali riguardanti servizi specifici, o la raccolta ed il trattamento di Dati Personali.<br>\
<strong>Log di sistema e manutenzione</strong><br>\
Per necessità legate al funzionamento ed alla manutenzione, questa Applicazione e gli eventuali servizi terzi da essa utilizzati potrebbero raccogliere Log di sistema, ossia file che registrano le interazioni e che possono contenere anche Dati Personali, quali l’indirizzo IP Utente.<br>\
<strong>Informazioni non contenute in questa policy</strong><br>\
Maggiori informazioni in relazione al trattamento dei Dati Personali potranno essere richieste in qualsiasi momento al Titolare del Trattamento utilizzando le informazioni di contatto.<br>\
<strong>Esercizio dei diritti da parte degli Utenti</strong><br>\
I soggetti cui si riferiscono i Dati Personali hanno il diritto in qualunque momento di ottenere la conferma dell'esistenza o meno degli stessi presso il Titolare del Trattamento, di conoscerne il contenuto e l'origine, di verificarne l'esattezza o chiederne l’integrazione, la cancellazione, l'aggiornamento, la rettifica, la trasformazione in forma anonima o il blocco dei Dati Personali trattati in violazione di legge, nonché di opporsi in ogni caso, per motivi legittimi, al loro trattamento. Le richieste vanno rivolte al Titolare del Trattamento.<br>\
Questa Applicazione non supporta le richieste “Do Not Track”. Per conoscere se gli eventuali servizi di terze parti utilizzati le supportano, consulta le loro privacy policy.<br>\
<strong>Modifiche a questa privacy policy</strong><br>\
Il Titolare del Trattamento si riserva il diritto di apportare modifiche alla presente privacy policy in qualunque momento dandone pubblicità agli Utenti su questa pagina. Si prega dunque di consultare spesso questa pagina, prendendo come riferimento la data di ultima modifica indicata in fondo. Nel caso di mancata accettazione delle modifiche apportate alla presente privacy policy, l’Utente è tenuto a cessare l’utilizzo di questa Applicazione e può richiedere al Titolare del Trattamento di rimuovere i propri Dati Personali. Salvo quanto diversamente specificato, la precedente privacy policy continuerà ad applicarsi ai Dati Personali sino a quel momento raccolti.<br>\
<strong>Informazioni su questa privacy policy</strong><br>\
Il Titolare del Trattamento dei Dati è responsabile per questa privacy policy, redatta partendo da moduli predisposti da Iubenda e conservati sui suoi server.<br>\
<strong>Definizioni e riferimenti legali</strong><br>\
<strong>Dati Personali (o Dati)</strong><br>\
Costituisce dato personale qualunque informazione relativa a persona fisica, identificata o identificabile, anche indirettamente, mediante riferimento a qualsiasi altra informazione, ivi compreso un numero di identificazione personale.<br>\
<strong>Dati di Utilizzo</strong><br>\
Sono le informazioni raccolti in maniera automatica di questa Applicazione (o dalle applicazioni di parti terze che questa Applicazione utilizza), tra i quali: gli indirizzi IP o i nomi a dominio dei computer utilizzati dall’Utente che si connette con questa Applicazione, gli indirizzi in notazione URI (Uniform Resource Identifier), l’orario della richiesta, il metodo utilizzato nel sottoporre la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta dal server (buon fine, errore, ecc.) il Paese di provenienza, le caratteristiche del browser e del sistema operativo utilizzati dal visitatore, le varie connotazioni temporali della visita (ad esempio il tempo di permanenza su ciascuna pagina) e i dettagli relativi all’itinerario seguito all’interno dell’Applicazione, con particolare riferimento alla sequenza delle pagine consultate, ai parametri relativi al sistema operativo e all’ambiente informatico dell’Utente.<br>\
<strong>Utente</strong><br>\
L'individuo che utilizza questa Applicazione, che deve coincidere con l'Interessato o essere da questo autorizzato ed i cui Dati Personali sono oggetto del trattamento.<br>\
<strong>Interessato</strong><br>\
La persona fisica o giuridica cui si riferiscono i Dati Personali.<br>\
<strong>Responsabile del Trattamento (o Responsabile)</strong><br>\
La persona fisica, giuridica, la pubblica amministrazione e qualsiasi altro ente, associazione od organismo preposti dal Titolare al trattamento dei Dati Personali, secondo quanto predisposto dalla presente privacy policy.<br>\
<strong>Titolare del Trattamento (o Titolare)</strong><br>\
La persona fisica, giuridica, la pubblica amministrazione e qualsiasi altro ente, associazione od organismo cui competono, anche unitamente ad altro titolare, le decisioni in ordine alle finalità, alle modalità del trattamento di dati personali ed agli strumenti utilizzati, ivi compreso il profilo della sicurezza, in relazione al funzionamento e alla fruizione di questa Applicazione. Il Titolare del Trattamento, salvo quanto diversamente specificato, è il proprietario di questa Applicazione.<br>\
<strong>Questa Applicazione</strong><br>\
Lo strumento hardware o software mediante il quale sono raccolti i Dati Personali degli Utenti.<br>\
<strong>Cookie</strong><br>\
Piccola porzione di dati conservata all'interno del dispositivo dell'Utente.<br>\
<br>\
<strong>Riferimenti legali</strong><br>\
Avviso agli Utenti europei: la presente informativa privacy è redatta in adempimento degli obblighi previsti dall’Art. 10 della Direttiva n. 95/46/CE, nonché a quanto previsto dalla Direttiva 2002/58/CE, come aggiornata dalla Direttiva 2009/136/CE, in materia di Cookie.<br>\
Questa informativa privacy riguarda esclusivamente questa Applicazione.\
";



    	message = message + "<hr>" + chiudiBtn + "<br></div>";

		document.getElementById("CookieLawText").innerHTML=message;
	}
	
}


function chiudi(){
	document.getElementById("CookieLawText").innerHTML = "";
}

function inviaAccetta(){
	window.location.href = window.location.href + "#accettaCookie";
	location.reload(true);
}

function Accetta() {
    setCookie("CookieEu", "Confermato", 365);
    /*location.reload(true);*/
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
	
    if(location.hash.substr(1) == "accettaCookie"){
		setCookie("CookieEu", "Confermato", 365);
		window.location.href = window.location.href.split('#')[0]
	}else{
			
	    var nomeCookie = "CookieEu";
	    var cookieverifica = getCookie(nomeCookie);
	
	    if(cookieverifica!="Confermato"){
			document.__defineGetter__("cookie", function() { return '';} );
			document.__defineSetter__("cookie", function() {} );
			mostraAvviso();
		}
	}
}

checkCookie();

