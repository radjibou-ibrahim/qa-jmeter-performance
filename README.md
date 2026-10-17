# Tests de performance avec Apache JMeter — BlazeDemo

## Présentation du projet

Ce projet présente une démarche pratique de test de performance sur l'application de démonstration [BlazeDemo](https://blazedemo.com/), à l'aide d'Apache JMeter 5.6.3.

L'objectif est de mesurer les temps de réponse, d'observer le comportement de l'application sous charge et de documenter les résultats avec une approche QA structurée.

## Objectifs

- Concevoir un plan de test de performance.
- Identifier les principales requêtes HTTP du parcours utilisateur.
- Créer des scripts JMeter réutilisables.
- Externaliser les données de test dans un fichier CSV.
- Exécuter des tests en mode non graphique.
- Générer et analyser des rapports HTML.
- Documenter les résultats, les limites et les pistes d'amélioration.

## Technologies et outils

| Outil               | Utilisation                              |
| ------------------- | ---------------------------------------- |
| Apache JMeter 5.6.3 | Création et exécution des tests          |
| HTTP/HTTPS          | Requêtes vers l'application testée       |
| CSV Data Set Config | Gestion des données de test              |
| PowerShell          | Exécution des tests en ligne de commande |
| Git et GitHub       | Versionnement et publication du projet   |

## Structure du dépôt

```text
qa-jmeter-performance/
├── 01-test-plan/
│   ├── performance-test-plan.md
│   └── requetes-observees.md
├── 02-scripts/
│   ├── 01-blazedemo-accueil.jmx
│   └── 02-blazedemo-parcours.jmx
├── 03-data/
│   └── vols.csv
├── 04-results/
│   ├── bilan-performance.md
│   └── resume-executif.md
├── 05-screenshots/
├── .gitignore
└── README.md
```

## Résultats de référence

Le test de référence porte sur la page d'accueil, avec 10 utilisateurs virtuels, 10 boucles par utilisateur et 100 échantillons.

| Indicateur            |        Résultat |
| --------------------- | --------------: |
| Échantillons exécutés |             100 |
| Taux d'erreur JMeter  |             0 % |
| Temps moyen           |       660,48 ms |
| Médiane               |          459 ms |
| 90e percentile (p90)  |       917,70 ms |
| 95e percentile (p95)  |     2 401,80 ms |
| 99e percentile (p99)  |     3 960,76 ms |
| Temps maximal         |        3 961 ms |
| Débit                 | 3,97 requêtes/s |

Ces chiffres correspondent à une seule exécution. Ils ne représentent pas une garantie de performance générale de l'application.

## Scripts de test

### 1. Page d'accueil

Fichier : `02-scripts/01-blazedemo-accueil.jmx`

Ce script permet de mesurer le temps de réponse de la page d'accueil sous charge contrôlée.

### 2. Parcours de réservation

Fichier : `02-scripts/02-blazedemo-parcours.jmx`

Ce script couvre les principales étapes observées du parcours de réservation : recherche de vols, sélection, achat et confirmation.

Les résultats de performance présentés dans ce README concernent uniquement le test de référence de la page d'accueil.

## Exécution en ligne de commande

Exemple de lancement du test de la page d'accueil sous Windows :

```powershell
& "C:\jmeter\apache-jmeter-5.6.3\bin\jmeter.bat" -n -t "02-scripts\01-blazedemo-accueil.jmx" -l "04-results\resultats.jtl"
```

Pour générer un rapport HTML à partir d'un fichier JTL :

```powershell
& "C:\jmeter\apache-jmeter-5.6.3\bin\jmeter.bat" -g "04-results\resultats.jtl" -o "04-results\rapport-html"
```

Le dossier de sortie du rapport doit être nouveau ou vide. Les chemins et les noms de fichiers peuvent être adaptés à l'environnement local.

## Limites et améliorations possibles

- Répéter les mesures pour évaluer leur variabilité.
- Analyser les performances du parcours complet de réservation.
- Étudier les percentiles et les éventuelles réponses lentes.
- Évaluer progressivement des niveaux de charge supplémentaires.
- Comparer les résultats aux critères définis dans le plan de test.

## Livrables

- Plan de test de performance.
- Scripts JMeter au format `.jmx`.
- Données de test CSV.
- Bilan de performance.
- Résumé exécutif.

## Auteur

Projet personnel de portfolio QA — tests de performance avec Apache JMeter.
