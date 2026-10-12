# Requêtes observées - parcours de réservation BlazeDemo

Relevé effectué avec les outils de développement du navigateur (onglet Network), le parcours étant exécuté manuellement avec des données fictives.

## Requêtes du parcours

| N° | Étape | Méthode | URL | Paramètres envoyés | Code | Texte visible attendu |
|---|---|---|---|---|---|---|
| 1 | Accueil | GET | https://blazedemo.com/ | aucun | 200 | Welcome to the Simple Travel Agency! |
| 2 | Recherche de vols | POST | https://blazedemo.com/reserve.php | fromPort=Paris, toPort=Cairo | 200 | Flights from Paris to Cairo |
| 3 | Choix du vol | POST | https://blazedemo.com/purchase.php | flight=4346, price=233.98, airline=Lufthansa, fromPort=Paris, toPort=Cairo | 200 | has been reserved |
| 4 | Confirmation | POST | https://blazedemo.com/confirmation.php | _token (valeur à relever), inputName=Biyo, address=125 Mari land, city=ruto, state=khrthmk, zipCode=8745, cardType=visa, creditCardNumber (numéro fictif), creditCardMonth=11, creditCardYear=2017, nameOnCard=john Brok | 200 | Thank you for your purchase today! |

## Observations

- Texte affiché à l'étape 3 : « Your flight from TLV to SFO has been reserved. » alors que la route choisie est Paris -> Cairo. À vérifier avec une autre route (texte fixe du site de démonstration ou anomalie). L'assertion porte sur la partie stable « has been reserved ».
- Valeur du champ `_token` (étape 4) : à relever dans la réponse de l'étape 3, et à comparer entre deux exécutions.
- Valeurs `flight`, `price` et `airline` (étape 3) : à comparer entre deux exécutions de l'étape 2.