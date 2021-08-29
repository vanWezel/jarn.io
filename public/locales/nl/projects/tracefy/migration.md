Voor de migratie naar AWS moesten er meerdere services overgezet worden. Hier heb ik meerdere oplossingen voor mogen ontwerpen en ontwikkelen.

Toen ik bij Tracefy kwam werken werden alle locatie berichten opgeslagen in een MySql tabel. MySql kan prima overweg met minder dan 6 miljoen rijen. Daarom hadden we een script die de oudere berichten overzette naar een andere MySql (als een soort van backup). Deze tabel was echter uitgegroeid tot 300 miljoen rijen.

Om deze snel leeg te krijgen heb ik een zelf monitorende pomp geschreven. Deze haalde zo snel mogelijk de berichten uit de database en uploadde deze vervolgens naar een S3 bucket. Als de schijf vol zat schaalde hij automatisch naar minder download processen en ging hij juist sneller uploaden. Hiervoor heb ik eerst de gehele database moeten optimaliseren voor snel lezen en verwijderen. De pomp zelf was in python geschreven, de downloader was helaas in php omdat we de decoder nodig hadden. Het uploaden gebeurde met de AWS container van Amazon.

Om dit probleem te voorkomen op de nieuwe omgeving kwam ik met het idee om de rit logica om te zetten naar Dynamo. Zo bleef de MySql een stuk kleiner. Alleen de rit logica was geschreven in PHP. Deze heb ik samen met het team volledig om weten te schrijven in Go. Wat zelfs resulteerde dat er 6 fysieke machines uit konden omdat de go container veel efficienter zijn.

Verder hebben we de grote api in zo veel mogelijk losse services opgesplitst. Zo kon een deel van de frontend al kijken in de nieuwe database en een deel nog in de oude. Zo kregen we meer tijd om rustig om te schakelen naar de nieuwe database.

Een voorbeeld van zo’n service was om de ritten op te halen. Deze service kijkt in zowel Dynamo als in Firebase voor het ophalen van de locatie punten bij een rit.