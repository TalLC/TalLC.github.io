<link rel="stylesheet" type="text/css" href="../css/doc-iframe.css">
<base target="_blank">

<!-- Side navigation -->
<div class="sidebar">
  <h1>Sommaire</h1>
  <ul>
    <li><a target="_self" href="#installation-par-docker">Installation par Docker</a>
      <ul>
        <li><a target="_self" href="#chargement-du-fichier-image">Chargement du fichier image</a></li>
        <li><a target="_self" href="#d%C3%A9marrage-dun-conteneur-en-ligne-de-commande">Démarrage d'un conteneur en ligne de commande</a></li>
        <li><a target="_self" href="#d%C3%A9marrage-dun-conteneur-avec-docker-compose">Démarrage d'un conteneur avec docker compose</a></li>
        <li><a target="_self" href="#debug">Debug</a></li>
      </ul>
    </li>
  </ul>
</div>

<!-- Page content -->
<div class="main">

# Installation du serveur

## Installation par Docker

Vous devez disposer d'une installation Docker permettant de lancer des conteneurs Linux au préalable.

### Chargement du fichier image

Importez l'image Docker à partir du fichier tar en utilisant la commande `docker load` :

```sh
docker load -i battlebots-0.5.2.tar
```

### Démarrage d'un conteneur en ligne de commande

Pour démarrer un conteneur à partir de l'image Docker, utilisez la commande `docker run` :

```sh
docker run -d --rm -p 8000:8000 -p 61613:61613 -p 1883:1883 battlebots:0.5.2
```

Explication des options utilisées :
- -d : Détache le conteneur et le fait s'exécuter en arrière-plan.
- -p 8000:8000 : (serveur web + REST) Mappe le port local 8000 sur le port 8000 du conteneur.
- -p 61613:61613 : (serveur STOMP) Mappe le port local 61613 sur le port 61613 du conteneur.
- -p 1883:1883 : (serveur MQTT) Mappe le port local 1883 sur le port 1883 du conteneur.
- battlebots:0.5.2 : Spécifie le nom et le tag de l'image à utiliser pour démarrer le conteneur.


### Démarrage d'un conteneur avec docker compose

Si vous avez Docker compose et souhaitez l'utiliser :

- Créez un fichier nommé `docker-compose.yml` dans un répertoire de votre choix :

```yml
version: '3'
services:
  battlebots:
    image: battlebots:0.5.2
    ports:
      - 8000:8000
      - 61613:61613
      - 1883:1883
    environment:
      - BATTLEBOTS_DEBUG=false
```

- Placez-vous dans le répertoire où se trouve le fichier `docker-compose.yml`
- Exécutez la commande suivante pour démarrer le conteneur en utilisant Docker Compose :

```sh
docker-compose up -d
```

Explication des options utilisées :
- -d : Détache le conteneur et le fait s'exécuter en arrière-plan.


### Debug

Pour activer le mode débug, passer la variable d'environnement `BATTLEBOTS_DEBUG` à `true`.

En ligne de commande :

```sh
docker run -d --rm -p 8000:8000 -p 61613:61613 -p 1883:1883 -e BATTLEBOTS_DEBUG=true battlebots:0.5.2
```

Dans le fichier `docker-compose.yml`
```yml
    ...
    environment:
      - BATTLEBOTS_DEBUG=true
```

---

</div>
