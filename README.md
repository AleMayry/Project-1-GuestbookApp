1	Yleistä tietoa projektista	3
2	Käytettyjä tekniikoita ja erikoisuuksia	3
3	Sivuston / ohjelmiston design ja rakenne	3
4	Oma arvio työstä ja oman osaamisen kehittymisestä	3
5	Palaute opettajalle kurssista sekä itse opetuksesta tähän saakka	3
6	Linkit	3
6.1	Verkkosivuni osoite -	3
6.2	Linkki GitHub repositorioon	3
6.3	Linkki projektin videoesitykseen	3
7	Lähteet	4


 
1	Yleistä tietoa projektista
Lyhyesti selitettynä Projektissa oli tarkoitus kehittää selaimessa toimiva vieraskir-ja sovellus (Guestbook App), jossa käyttäjät voivat jättää viestejä. Viestit tallen-netaan lomakkeenkäsittelijällä tiedostoon JSON-muodossa ja viestit lopulta näky-vät käyttäjälle HTML-muodossa taulukkona. Projektissa on hyödynnetty Express ja Node.JS ohjelmistokehitystä.

2	Käytettyjä tekniikoita ja erikoisuuksia
Projektissa on käytetty Node.JS ja sen päällä JavaScriptiä, sekä näiden lisäksi Ex-press funktioita. Bootstrap:iä on hyödynnetty käyttöliittymän kehittämisessä apu-na. Niin sanotusti erikoisuuksia ei tästä projektista löydy, vaikka jo itse Express tuntui itselleni erikoisuudelta itsessään. 
3	Sivuston / ohjelmiston design ja rakenne
Halusin, että verkkosivuni olisi yksinkertainen sekä helposti ymmärrettävä ja käy-tettävä. Aiemmin mainittua bootstrap-kirjastoa hyödynsin projektissa pääasiassa sivuston käyttöliittymään, jotta jokainen sivu olisi tunnistettavasti yhteneväisiä ja esimerkiksi navigaatio helppokäyttöistä. 
Verkkosovelluksessa on neljä polkua, jotka näkyvät käyttäjälle:
”/” -polku toimii html-muotoisena ”etusivuna”, joka toivottaa käyttäjän tervetul-leeksi sivustolle.
”/guestbook” – Hakee datan JSON-tiedostosta ja lähettää sen guestbook.ejs poh-jaan käyttäjälle näkyväksi ymmärrettävään muotoon.
/newmessage – Backend noutaa newmessage.html sivun tiedot ja käyttäjälle tulee näkyviin form/lomake. Lomakkeen tiedot lähetetään käsiteltäväksi. Backend tar-kistaa onko kaikki kentät täytetty formin täytön yhteydessä. Jos kaikki kentät ovat täytetty, tiedot tallentuvat messages.json -tiedostoon. Mikäli jokin kentistä on täyttämättä, sivusto ilmoittaa käyttäjälle virheestä.
/ajaxmessage – Muuten samankaltainen polku kuin aikaisempi, mutta sivu näyttää lomakkeen alle aikaisemmin lähetetyt viestit AJAX-kutsulla. Tiedot myös lähete-tään AJAX-kutsulla backendiin, joka tarkistaa lähetetyt tiedot, jotka selaimessa myös tarkistetaan. 


6	Linkit
6.1	Verkkosivuni osoite – 
https://alesguestbookapp.onrender.com 
6.2	Linkki GitHub repositorioon
Linkki GitHub Repositorioon
6.3	Linkki projektin videoesitykseen
Videoesitys