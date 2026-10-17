# Résumé exécutif — Tests de performance BlazeDemo

## 1. Présentation

Ce projet démontre la conception et l'exécution de tests de performance avec Apache JMeter 5.6.3 sur l'application de démonstration BlazeDemo.

L'objectif est de mesurer les temps de réponse, d'observer le comportement sous charge et de documenter les résultats de manière reproductible.

## 2. Périmètre réalisé

- Plan de test de performance.
- Observation des requêtes HTTP de l'application.
- Script JMeter pour la page d'accueil.
- Script JMeter pour le parcours de réservation.
- Externalisation des données de recherche de vols dans un fichier CSV.
- Exécution de tests en ligne de commande.
- Génération de rapports HTML JMeter.
- Analyse des indicateurs de performance et documentation des limites.

## 3. Résultats de référence

Le test de référence porte sur la page d'accueil avec 10 utilisateurs virtuels, 10 boucles par utilisateur et 100 échantillons.

| Indicateur           |        Résultat |
| -------------------- | --------------: |
| Échantillons         |             100 |
| Taux d'erreur JMeter |             0 % |
| Temps moyen          |       660,48 ms |
| Médiane              |          459 ms |
| p90                  |       917,70 ms |
| p95                  |     2 401,80 ms |
| p99                  |     3 960,76 ms |
| Temps maximal        |        3 961 ms |
| Débit                | 3,97 requêtes/s |

## 4. Interprétation

Aucune erreur n'a été comptabilisée par JMeter pendant cette exécution. Le temps moyen était inférieur au seuil provisoire de 1 500 ms et le p95 était inférieur au seuil provisoire de 3 000 ms.

Les valeurs du p99 et du temps maximal montrent toutefois que certaines réponses étaient nettement plus lentes que la médiane.

Ces résultats décrivent une seule exécution de la page d'accueil et ne permettent pas de conclure sur la capacité maximale de l'application.

## 5. Outils et compétences démontrés

- Apache JMeter : création et exécution de scripts.
- HTTP/HTTPS : analyse des requêtes et réponses.
- CSV Data Set Config : externalisation des données de test.
- Ligne de commande : exécution non graphique.
- Rapports HTML : analyse des temps de réponse et des erreurs.
- Git et GitHub : versionnement et publication des livrables.

## 6. Limites et prochaines améliorations

Le test de référence couvre uniquement la page d'accueil. Le parcours de réservation a été scripté séparément, mais aucune conclusion de performance sur ce parcours n'est présentée ici.

Les prochaines améliorations pourront inclure des mesures répétées, des tests du parcours complet avec une charge contrôlée et une comparaison documentée des résultats.

## 7. Conclusion

Ce projet constitue une démonstration pratique de la préparation, de l'exécution et de l'analyse de tests de performance avec JMeter. Les résultats sont documentés avec leurs limites afin de distinguer les observations mesurées des conclusions qui nécessiteraient des tests supplémentaires.
