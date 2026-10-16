# Bilan de performance — BlazeDemo

## 1. Objectif

Évaluer les performances de l'application BlazeDemo à l'aide
d'Apache JMeter et identifier les indicateurs utiles pour
l'analyse des temps de réponse et des erreurs.

## 2. Environnement de test

- Outil : Apache JMeter 5.6.3
- Application : BlazeDemo
- Type de test : test de charge
- Scénario initial : consultation de la page d'accueil
- Protocole : HTTPS

## 3. Campagne de tests

| Test            | Utilisateurs | Boucles | Requêtes prévues | Statut      |
| --------------- | -----------: | ------: | ---------------: | ----------- |
| Charge initiale |           10 |       1 |               10 | Exécuté     |
| Charge étendue  |           10 |      10 |              100 | À confirmer |

## 4. Résultats du test initial

| Indicateur             |              Résultat |
| ---------------------- | --------------------: |
| Requêtes exécutées     |                    10 |
| Temps de réponse moyen |      Environ 1 025 ms |
| Temps minimum          |                735 ms |
| Temps maximum          |              1 940 ms |
| Taux d'erreur          |                   0 % |
| Débit                  | Environ 0,5 requête/s |

## 5. Analyse

Lors du test initial, les dix requêtes vers la page d'accueil
ont été exécutées sans erreur comptabilisée par JMeter.

Le temps de réponse moyen observé était d'environ une seconde.
Cette mesure constitue une première observation sous charge légère.

L'échantillon reste limité et ne permet pas de caractériser
les performances générales de l'application.

## 6. Limites

- Le test initial porte uniquement sur la page d'accueil.
- Le nombre de requêtes initial est limité à dix.
- Le percentile 95 doit être interprété avec prudence sur
  un échantillon aussi réduit.
- Les résultats peuvent varier selon le réseau, le serveur
  distant et les conditions d'exécution.
- Aucune conclusion ne doit être tirée sur la capacité maximale
  de l'application à partir de cette seule exécution.

## 7. Prochaines améliorations

- Analyser le test de 100 requêtes.
- Comparer les temps de réponse entre les exécutions.
- Examiner les percentiles p90, p95 et p99.
- Étudier les erreurs éventuelles.
- Évaluer séparément le parcours complet de réservation.
- Comparer les résultats aux critères du plan de test.

## 8. Conclusion

Le test initial constitue une première base de mesure.
Une campagne plus complète sera nécessaire pour évaluer
la stabilité des temps de réponse et la performance du parcours
utilisateur.
