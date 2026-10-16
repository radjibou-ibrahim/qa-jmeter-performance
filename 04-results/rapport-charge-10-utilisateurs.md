Rapport de test de charge — BlazeDemo

1. Objectif

Évaluer le temps de réponse de la page d'accueil de BlazeDemo avec 10 utilisateurs virtuels démarrant progressivement sur une période de 20 secondes.

2. Configuration

- Outil : Apache JMeter 5.6.3
- Scénario : accès à la page d'accueil ("GET /")
- Nombre d'utilisateurs virtuels : 10
- Période de montée en charge : 20 secondes
- Nombre de boucles : 1
- Durée observée : environ 19 secondes

3. Résultats

Indicateur| Résultat
Échantillons exécutés| 10
Temps de réponse moyen| 1 025 ms
Temps minimum| 735 ms
Temps maximum| 1 940 ms
Erreurs comptabilisées par JMeter| 0 (0 %)
Débit affiché par JMeter| 0,5 requête/s

4. Analyse

La page d'accueil a répondu aux 10 requêtes sans erreur comptabilisée par JMeter. Le temps de réponse moyen observé est de 1 025 ms, avec un maximum de 1 940 ms.

Le débit est resté proche de 0,5 requête par seconde pendant cette exécution. Cette valeur dépend de la durée totale du test et du comportement du serveur ; elle ne représente pas nécessairement la capacité maximale du site.

5. Limites

- Le test porte uniquement sur la page d'accueil.
- Une seule exécution a été réalisée.
- Le percentile 95 (p95) n'a pas encore été calculé.
- Ces résultats ne permettent pas de conclure sur les performances du parcours complet de réservation ni sur la capacité maximale du site.

6. Conclusion

Lors de cette exécution, la page d'accueil a traité 10 requêtes sans erreur comptabilisée par JMeter. Ces mesures constituent une première observation sous charge légère.

Des essais complémentaires seront nécessaires pour évaluer la stabilité des temps de réponse et les performances des autres étapes du parcours.
