# Plan de test de performance - BlazeDemo

## 1. Objectif

Mesurer le comportement du parcours de réservation de vol de BlazeDemo sous une charge modérée, avec Apache JMeter, et documenter les résultats.

## 2. Application cible

- Application : BlazeDemo (https://blazedemo.com), site de démonstration d'une agence de voyage fictive
- Usage : site public utilisé comme terrain d'entraînement pour JMeter
- Contrainte : charge volontairement modérée (20 utilisateurs virtuels maximum), pas de test de stress

## 3. Scénario testé

Parcours de réservation d'un vol :

1. Accès à la page d'accueil
2. Recherche de vols (départ et destination)
3. Choix d'un vol
4. Achat (formulaire)
5. Page de confirmation

Les requêtes exactes seront relevées et documentées à l'étape de construction du script.

## 4. Modèle de charge

| Test                      | Utilisateurs virtuels | Montée en charge | Objectif                                            |
| ------------------------- | --------------------- | ---------------- | --------------------------------------------------- |
| Baseline                  | 1                     | -                | Mesurer le temps de réponse sans charge (référence) |
| Charge                    | 10                    | 20 secondes      | Observer le comportement sous charge modérée        |
| Charge maximale du projet | 20                    | 40 secondes      | Limite haute de ce projet                           |

Un temps de réflexion (think time) d'environ 1 seconde sera ajouté entre les étapes pour se rapprocher d'un vrai utilisateur.

## 5. Critères de réussite (provisoires)

| Indicateur                         | Seuil            |
| ---------------------------------- | ---------------- |
| Taux d'erreur                      | 1 % maximum      |
| Temps de réponse moyen             | 1 500 ms maximum |
| 95e percentile du temps de réponse | 3 000 ms maximum |

Ces seuils sont provisoires : ils seront confirmés ou ajustés après la mesure de la baseline.

## 6. Indicateurs mesurés

- Temps de réponse (moyenne, 90e, 95e et 99e percentiles)
- Débit (requêtes par seconde)
- Taux d'erreur
- Nombre d'utilisateurs actifs

## 7. Environnement

- Poste : Windows
- Java : Eclipse Temurin JDK 25
- Outil : Apache JMeter 5.6.3
- Interface graphique : construction et débogage des scripts uniquement
- Mode ligne de commande : exécution des tests de charge et génération du rapport HTML

## 8. Limites

- Site public partagé : les temps mesurés dépendent aussi de l'état du site et de la connexion Internet
- Les résultats reflètent ce poste et ce réseau, ils ne sont pas généralisables
- Charge volontairement faible : ce projet ne cherche pas à trouver la capacité maximale du site
