Voor PSA Antwerpen heb ik samen met twee software architecten een data platform gerealiseerd. Dit platform zorgt er bijvoorbeeld voor dat de klant een beter inzicht krijgt in hoeveel handelingen er op een containerterminal zijn of hoe lang een kraan stil staat. 

De data wordt a.d.h.v. data contracten ingeladen in het Unified Data Model (UDM) via een dynamische Azure Data Factory Pipeline. Tijdens dit project heb ik in nauwe samenwerking met de klant verschillende ondersteunende modules ontworpen en gerealiseerd. Hieronder een aantal voorbeelden:

## Data Assets
In het portal Data Assets worden alle wijzigingen van de structuur van een Cube (SSAS Tabular Model) bijgehouden. Binnen React heb ik dit aan de hand van een PowerBI document nagebouwd. De query's van het PowerBI document heb ik overgenomen in een nieuwe API. De API haalt de structuur van de Cube op en slaat dit vervolgens op in de lokale SQL database.

## Testing Portal
Testing Portal is een ondersteunde applicatie om te testen of de data assets voorzien zijn van de juiste data en of alle KPI’s naar behoren functioneren. Voor de gebruikers is er mogelijkheid gecreëerd om in het portal zelf de tests uit te kunnen voeren. Hiervoor heb ik een wizard ontwikkeld. Deze wizard begeleidt de gebruiker door een aantal eenvoudige stappen, aan het einde is het ook mogelijk om ondersteunende documenten en afbeeldingen te uploaden. Om dit mogelijk te maken heb ik een koppeling gecreëerd met een Azure Blob Storage.

## Autorisatie
Tijdens de bootcamp fase was ik verantwoordelijk voor de autorisatie en permissies. Binnen het Serenity Framework kon dit alleen per gebruiker ingesteld worden, maar de wens van de klant was dat de teams niet elkaars data konden inzien. Ik heb dit opgelost door een module te ontwikkelen waarbij de permissies per team ingesteld kunnen worden. Zo waren ook de applicaties zelf gelijk afgeschermd en niet zichtbaar zonder toegang. Later is dit door een collega overgenomen in het nieuw portal.