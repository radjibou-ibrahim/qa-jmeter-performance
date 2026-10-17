# Bilan de performance — BlazeDemo

## 1. Objectif

Évaluer les temps de réponse de la page d'accueil de BlazeDemo avec Apache JMeter, sous une charge légère de 10 utilisateurs virtuels.

## 2. Environnement et configuration

- Outil : Apache JMeter 5.6.3
- Application : BlazeDemo
- Scénario : consultation de la page d'accueil (`GET /`)
- Utilisateurs virtuels : 10
- Montée en charge : 20 secondes
- Boucles par utilisateur : 10
- Échantillons obtenus : 100
- Fichier de résultats : `charge-accueil-reference.jtl`

## 3. Résultats mesurés

| Indicateur            |        Résultat |
| --------------------- | --------------: |
| Échantillons exécutés |             100 |
| Erreurs JMeter        |               0 |
| Taux d'erreur         |             0 % |
| Temps moyen           |       660,48 ms |
| Médiane               |          459 ms |
| Minimum               |          307 ms |
| Maximum               |        3 961 ms |
| p90                   |       917,70 ms |
| p95                   |     2 401,80 ms |
| p99                   |     3 960,76 ms |
| Débit                 | 3,97 requêtes/s |

## 4. Analyse

Les 100 requêtes ont été exécutées sans erreur comptabilisée par JMeter.

La médiane de 459 ms indique qu'au moins la moitié des réponses ont été obtenues en 459 ms ou moins. Le p95 atteint 2 401,80 ms, ce qui révèle que les temps de réponse ne sont pas uniformes.

Le temps maximal de 3 961 ms et le p99 proche de cette valeur signalent des réponses particulièrement lentes qui méritent une surveillance lors de tests ultérieurs.

## 5. Comparaison aux critères provisoires

| Critère       | Seuil provisoire |    Résultat | Évaluation |
| ------------- | ---------------: | ----------: | ---------- |
| Taux d'erreur |            ≤ 1 % |         0 % | Respecté   |
| Temps moyen   |       ≤ 1 500 ms |   660,48 ms | Respecté   |
| p95           |       ≤ 3 000 ms | 2 401,80 ms | Respecté   |

Ces critères sont provisoires. Le respect de ces seuils pendant une seule exécution ne garantit pas la performance générale de l'application.

## 6. Limites

- Le test porte uniquement sur la page d'accueil.
- Une seule exécution de référence a été analysée.
- Les résultats dépendent notamment du réseau, du serveur distant et des conditions d'exécution.
- Le test ne mesure pas encore les performances du parcours complet de réservation.
- Les résultats ne permettent pas de déterminer la capacité maximale du site.

## 7. Prochaines étapes

- Conserver le rapport HTML comme preuve d'analyse.
- Réaliser, si nécessaire, une seconde exécution pour évaluer la variabilité.
- Étudier le parcours complet avec une charge contrôlée.
- Comparer les résultats aux exigences du plan de test.

## 8. Conclusion

Lors de cette exécution, la page d'accueil a traité 100 requêtes avec un taux d'erreur de 0 %. Le temps moyen était de 660,48 ms et le p95 de 2 401,80 ms.

Les critères provisoires définis pour le taux d'erreur, le temps moyen et le p95 sont respectés sur cet échantillon. Des tests complémentaires restent nécessaires pour évaluer la stabilité et les performances du parcours utilisateur complet.
