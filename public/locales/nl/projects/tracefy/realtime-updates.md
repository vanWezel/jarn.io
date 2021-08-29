Tracefy groeide hard, waardoor de realtime updates niet meer mogelijk waren op oudere apparaten. De dataset wat te groot geworden.

Ik heb hier een nieuwe service in Node.js ontworpen en ontwikkeld. Deze zorgt ervoor dat alleen de update van bijvoorbeeld een locatie werd verstuurd naar de verschillende front end applicaties. Toen hij in voor het eerst in productie ging hadden we te maken met 2000+ locaties op de kaart. Hij draait nu nog steeds zonder problemen.

Later is hier nog een update voor gekomen, het waren zoveel locaties dat het meer dan 10 seconde duurde om deze te laden. Hier heb ik 2 nieuwe services voor ontworpen en ontwikkeld.

Een van deze services sloeg de laatst bekende locaties op in een Redis database. De andere sloeg alleen de benodigde info van een fiets op in een DynamoDB tabel. Dit zorgde dat we van 10 naar nog geen 1,5 seconde gingen voor 4100+ locaties.
