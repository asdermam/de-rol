# Dé-Rol Tetőmester Baranya — weboldal

Prémium, reszponzív, magyar nyelvű bemutatkozó és ajánlatkérő weboldal. Keretrendszer és build lépés nélkül fut: az `index.html` közvetlenül megnyitható, vagy a mappa bármely statikus tárhelyre feltölthető.

## Kutatási összefoglaló

2026. július 14-én nyilvános forrásokból ellenőrzött információk:

- Fő szolgáltatások: tetőépítés, tetőfelújítás és tetőjavítás.
- A vállalt munka az apróbb javításoktól a teljes tetőszerkezet kivitelezéséig terjed.
- Elsődleges szolgáltatási terület: Baranya és Tolna vármegye.
- Nyilvánosan megadott tapasztalat: több mint 10 év; csapatban dolgoznak.
- Ingyenes helyszíni felmérést hirdetnek.
- Anyagbeszerzés: megbeszélés szerint.
- Garancia: meghatározott munkákra.
- A nyilvános hirdetés Roland nevet mutat, a telefonszámot azonban maszkolja. Emiatt a weboldal nem tartalmaz kitalált telefonszámot vagy e-mail-címet.

Források:

- [ProVendo — Dé-Rol Tetőmester Baranya](https://provendo.hu/ad/de-rol-tetomester-baranya-504452)
- [Tudjukki.hu — fa előtető szakemberek Pécsen](https://www.tudjukki.hu/fa-elotetok/pecs)

## Ajánlatkérő űrlap

Az ajánlatkérőt a Web3Forms továbbítja e-mailben. A beállított hozzáférési kulcs nyilvános kliensoldali azonosító; a Web3Forms dokumentációja szerint weboldalba ágyazható, és nem titkos kulcs. Az ingyenes csomag jelenleg havi 250 beküldést tartalmaz, a beküldött adatokat pedig a szolgáltató legfeljebb 30 napig tárolhatja. Az éles használat előtt érdemes egy teljes próbaküldést végezni, és ellenőrizni a fogadó postafiók spam mappáját is.

Az `assets/hero-roof.png` egy eredeti, AI-val készített hangulatkép, nem céges referenciamunka. Emiatt a weboldal sehol nem állítja, hogy a fotón látható tetőt a Dé-Rol kivitelezte.

## Fájlok

- `index.html` — tartalom és struktúra
- `styles.css` — vizuális rendszer és reszponzív nézetek
- `script.js` — mobilmenü, animációk, ajánlatkérési folyamat
- `assets/` — hero kép és favicon

## Ellenőrzés

- JavaScript szintaxis ellenőrizve (`node --check`).
- Egyetlen H1, nyolc fő tartalmi szakasz.
- Nincs duplikált HTML ID.
- Nincs hiányzó helyi asset-hivatkozás.
- CSS kapcsos zárójelek száma egyezik.
- Mobil, tablet és asztali töréspontok: 680 px és 980 px.
