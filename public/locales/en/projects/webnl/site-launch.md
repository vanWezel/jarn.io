Er moest iets worden verzonnen om de go-live van de nieuwe site wat specialer te maken. De vraag “Kunnen we wat met zo’n grote rode knop?” werd al snel gesteld. Ik kwam met het idee om daar een virtuele racket mee te laten lanceren. Na het lanceren van de raket werd de nieuwe website onthult met achtergrondmuziek om het spectaculairder te maken. 

De raket kreeg zijn eigen website. Om die site in te kunnen stellen heb ik een configuratie paneel gemaakt, zodat ook de niet developers de racket klaar kunnen maken voor vertrek.

Voor de werking van de rode knop heb ik gekozen om dit op basis van een Raspberry Pi te doen. De Raspberry Pi heb ik voorzien van een accu, zodat ie draadloos te gebruiken is. 

Voor de communicatie tussen de knop en de website heb ik gekozen voor socket.io. En voor de knop zelf heb ik een Python script geschreven. Dit script verwerkt het indrukken van de kop en de statuslampjes. 

Omdat ik gebruik wilde maken van Socket.io waren de website en de knop twee losse clients geworden. Er moest dus nog een server komen. Ik heb hiervoor een Node.js applicatie gemaakt, deze kwam uiteindelijk te draaien op de Mac Mini server.