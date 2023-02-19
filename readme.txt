MY TV
Il progetto nasce con l'intento di creare un autocomplete dinamico che viene popolato grazie ad una chiamata asincrona azionata dall'evento input, l'obiettivo è restituisce risultati coerenti con la stringa inserita dall'utente, vengono filtrati tutti gli oggetti della response e vengono restituiti nell'autocomplete solo quelli coerenti con il titolo cercato.
Successivamente se l'utente clicca su uno risultati proposti nell'autocomplete viene mostrata la locandina e qualche dettaglio in più del film selezionato.
Il progetto utilizza import e export per richiamare i file javascript dunque per lanciarlo è necessario aprire l'intera cartella con l'editor di codice e lanciare in esecuzione il file index.html con tasto destro del mouse e poi selezionare "open with live server".

Ho cercato di organizzare il progetto seguendo l'MVC model, ovvero per quanto riguarda la parte Javascript ho diviso il progetto in due cartelle principali: Control e View.
 Nella prima sono presenti le funzionalità di logica principali come l'ottenimento della response attraverso la chiamata ascincrona, in questo caso restituisce la lista di locandine dei film, mentre nella seconda ci sono metodi che sulla base degli eventi (click, hover) modificano il DOM.
Ho cercato di suddividere il codice in più metodi differenti in modo da sezionare in più parti i compiti dell'applicazione, inoltre dove possibile ho cercato di scrivere metodi riutilizzabili.
Ho commentato molto la parte javascript in modo da spiegare il compito di ogni funzione.

Per realizzare il progetto ho avuto un approccio mobilefirst, ho utilizzato Scss per lo stile e ho inserito alcune transition e modifiche del DOM in Javascript che si azionano sulla base delle azioni dell'utente. Generalmente per animare la pagina utilizzo Jquery che in questo test non potevo utilizzare essendo una libreria esterna.
lo slideshow l'ho integrato da codice che ho trovato sul web e che in questo frangente faceva al caso mio per rendere più gradevole l'estetica.


