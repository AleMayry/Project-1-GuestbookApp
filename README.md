**FullStack Projektiraportti**
 
# Sisällysluettelo


[1	Yleistä tietoa projektista](#yleistä-tietoa-projektista)

[2	Käytettyjä tekniikoita ja erikoisuuksia](#käytettyjä-tekniikoita-ja-erikoisuuksia)

[3	Sivuston / ohjelmiston design ja rakenne](#sivuston-design-ja-rakenne)

[4	Oma arvio työstä ja oman osaamisen kehittymisestä](#oma-arvio-työstä-ja-oman-osaamisen-kehittymisestä)

[5	Linkit](#linkit)

[5.1	Verkkosivuni osoite](#verkkosivuni-osoite)

[5.2	Linkki GitHub repositorioon](#linkki-github-repositorioon)

[5.3	Linkki projektin videoesitykseen](#linkki-projektin-videoesitykseen)

 
# Yleistä tietoa projektista

Lyhyesti selitettynä Projektissa oli tarkoitus kehittää selaimessa toimiva vieraskir-ja sovellus (Guestbook App), jossa käyttäjät voivat jättää viestejä. Viestit tallen-netaan lomakkeenkäsittelijällä tiedostoon JSON-muodossa ja viestit lopulta näky-vät käyttäjälle HTML-muodossa taulukkona. Projektissa on hyödynnetty Express ja Node.JS ohjelmistokehitystä.

# Käytettyjä tekniikoita ja erikoisuuksia

Projektissa on käytetty Node.JS ja sen päällä JavaScriptiä, sekä näiden lisäksi Ex-press funktioita. Bootstrap:iä on hyödynnetty käyttöliittymän kehittämisessä apu-na. Niin sanotusti erikoisuuksia ei tästä projektista löydy, vaikka jo itse Express tuntui itselleni erikoisuudelta itsessään. 

# Sivuston design ja rakenne

Halusin, että verkkosivuni olisi yksinkertainen sekä helposti ymmärrettävä ja käy-tettävä. Aiemmin mainittua bootstrap-kirjastoa hyödynsin projektissa pääasiassa sivuston käyttöliittymään, jotta jokainen sivu olisi tunnistettavasti yhteneväisiä ja esimerkiksi navigaatio helppokäyttöistä. 
Verkkosovelluksessa on neljä polkua, jotka näkyvät käyttäjälle:

**”/”** -polku toimii html-muotoisena ”etusivuna”, joka toivottaa käyttäjän tervetul-leeksi sivustolle.

**/guestbook** – Hakee datan JSON-tiedostosta ja lähettää sen guestbook.ejs poh-jaan käyttäjälle näkyväksi ymmärrettävään muotoon.

**/newmessage** – Backend noutaa newmessage.html sivun tiedot ja käyttäjälle tulee näkyviin form/lomake. Lomakkeen tiedot lähetetään käsiteltäväksi. Backend tar-kistaa onko kaikki kentät täytetty formin täytön yhteydessä. Jos kaikki kentät ovat täytetty, tiedot tallentuvat messages.json -tiedostoon. Mikäli jokin kentistä on täyttämättä, sivusto ilmoittaa käyttäjälle virheestä.

**/ajaxmessage** – Muuten samankaltainen polku kuin aikaisempi, mutta sivu näyttää lomakkeen alle aikaisemmin lähetetyt viestit AJAX-kutsulla. Tiedot myös lähete-tään AJAX-kutsulla backendiin, joka tarkistaa lähetetyt tiedot, jotka selaimessa myös tarkistetaan. 

# Oma arvio työstä ja oman osaamisen kehittymisestä

Mielestäni onnistuin kehittämään sovelluksen ainakin pääasiassa tehtävässä vaadit-tujen toiminnallisuuksien osalta. 

Parantamista olisi itse projektin aikatauluttamisessa, koska aloittaminen jäi liian myöhäiselle ja uskon projektin kärsineen sen vuoksi. Koodia olisi myös voinut jä-sennellä järkevämmin ja kommentoida, jotta se olisi ymmärrettävämpää ja selke-ämpää. Sekä Express, että Node.JS olivat itselleni uutta, vaikka Node.JS on ollut-kin jossain frameworkissä ollut käytössä aikaisemmilla kursseilla. 

Koen, että olen oppinut projektin aikana merkittävästi pakettienhallinnasta, ja-vascriptistä, reitityksestä, middlewaresta ja monesta muustakin asiasta. Lisämai-nintana ihan yleisesti opin jälleen lisää tiedonhausta. 

Antaisin itselleni 7/10 p



# Linkit

# Verkkosivuni osoite

https://alesguestbookapp.onrender.com 

# Linkki GitHub repositorioon

[Linkki GitHub Repositorioon](https://github.com/AleMayry/Project-1-GuestbookApp)

# Linkki projektin videoesitykseen

[Videoesitys](https://video.laurea.fi/media/t/0_2c4mk2kw)



