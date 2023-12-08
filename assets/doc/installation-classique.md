<link rel="stylesheet" type="text/css" href="../css/doc-iframe.css">
<base target="_blank">

<!-- Side navigation -->
<div class="sidebar">
  <h1>Sommaire</h1>
  <ul>
    <li><a target="_self" href="#installation-par-scripts">Installation par scripts</a></li>
    <li><a target="_self" href="#installation-manuelle">Installation manuelle</a>
      <ul>
        <li><a target="_self" href="#pr%C3%A9requis">Prérequis</a></li>
        <li><a target="_self" href="#environnement-virtuel-python">Environnement virtuel Python</a></li>
        <li><a target="_self" href="#d%C3%A9marrer-le-serveur">Démarrer le serveur</a></li>
      </ul>
    </li>
  </ul>
</div>

<!-- Page content -->
<div class="main">

# Installation du serveur

## Installation par scripts

Vous devez avoir obtenu le fichier `battlebots-server-package.zip` au préalable. Ce fichier contient tout ce qu'il faut pour faire tourner le serveur Battlebots en local.

> ⚠️ L'installation par script n'est actuellement disponible que pour **Windows**.

- Décompressez le fichier `battlebots-server-package.zip` dans un dossier de votre choix
- Lancer le fichier `install-server.bat` qui se trouve dans le dossier décompressé
- Lancer les serveurs Python et ActiveMQ via `start-server.bat` ou `start-server-debug.bat` suivant si vous voulez lancer en mode debug ou non (le mode debug est largement recommandé pour le développement)

Si tout fonctionne, vous devriez avoir 2 invites de commandes Windows de lancés :
- ActiveMQ démarré via Java
- Serveur python Battlebots

A partir de là vous devriez accéder à l'interface web via [http://127.0.0.1:8000](http://127.0.0.1:8000).


## Installation manuelle

Vous devez avoir obtenu le fichier `battlebots-server-package.zip` au préalable. Ce fichier contient tout ce qu'il faut pour faire tourner le serveur Battlebots en local.

Cette méthode d'installation n'est pas recommandée. Elle est principalement présente pour expliquer sur quoi repose le serveur et pour aider si il doit être installé sur un OS différent.

### Prérequis

#### ActiveMQ 5.16.6

ActiveMQ sert les brokers de messages utilisés par le serveur pour envoyer des informations aux IA clientes. Les deux brokers de messages utilisés sont `STOMP` et `MQTT`.

ActiveMQ 5.16.6 est disponible ici (Windows et Linux) :
- [https://activemq.apache.org/components/classic/download/](https://activemq.apache.org/components/classic/download/)

C'est un zip à extraire dans le dossier de votre choix.

#### Java 1.8

Java 1.8 est nécessaire pour faire fonctionner les brokers de messages de ActiveMQ.  

Il peut être téléchargé ici en version installable (Windows, macOS et Linux) :
- Windows [jre-8u361-windows-x64.exe](https://cfdownload.adobe.com/pub/adobe/coldfusion/java/java8/java8u361/jre/jre-8u361-windows-x64.exe)
- Linux [jre-8u361-linux-x64.rpm](https://cfdownload.adobe.com/pub/adobe/coldfusion/java/java8/java8u361/jre/jre-8u361-linux-x64.rpm)
- MacOs [jre-8u361-macosx-x64.dmg](https://cfdownload.adobe.com/pub/adobe/coldfusion/java/java8/java8u361/jre/jre-8u361-macosx-x64.dmg)

Ou en version portable :
- Windows [jre-8u371-windows-x64.tar.gz](https://sourceforge.net/projects/portableapps/files/Java/)
- Linux  [jre-8u361-linux-x64.tar.gz](https://cfdownload.adobe.com/pub/adobe/coldfusion/java/java8/java8u361/jre/jre-8u361-linux-x64.tar.gz)

#### Python 3.10

Il vous faut disposer d'une installation Python complète version **3.10** minimum (les versions "embeddable package" officielles ne sont **pas suffisantes**).

Il peut être téléchargé ici en version installable (Windows et macOS) :
- Multi-plateformes [https://www.python.org/downloads/release/python-31010/](https://www.python.org/downloads/release/python-31010/)

Ou en version portable :
- Windows [https://github.com/winpython/winpython/releases/tag/5.3.20221233](https://github.com/winpython/winpython/releases/tag/5.3.20221233) (la release `Winpython64-3.10.9.0dot` est suffisante)
- MacOs [https://github.com/indygreg/python-build-standalone/releases/tag/20230507](https://github.com/indygreg/python-build-standalone/releases/tag/20230507) (release `cpython-3.10.11+20230507-<architecture>-apple-darwin-install_only.tar.gz`)
- Linux [https://github.com/indygreg/python-build-standalone/releases/tag/20230507](https://github.com/indygreg/python-build-standalone/releases/tag/20230507) (release `cpython-3.10.11+20230507-<architecture>-unknown-linux-gnu-install_only.tar.gz`)

### Environnement virtuel Python

- Décompressez le fichier `battlebots-server-package.zip` dans un dossier de votre choix
- Ouvrez un terminal dans ce dossier (le dossier doit contenir le fichier `main.py`) et créez un nouvel environnement virtuel :
  - Windows :
    - `<chemin vers votre binaire>\python.exe -m venv venv`
  - Linux :
    - `<chemin vers votre binaire>/python -m venv venv`
- Installer les libs nécessaires dans le venv créé :
  - Windows :
    - `venv\Scripts\pip install -r requirements.txt`
  - Linux :
    - `venv/bin/pip install -r requirements.txt`

### Démarrer le serveur

#### ActiveMQ

On commence par démarrer le serveur ActiveMQ.
Toujours dans le dossier principal de Battlebots, ouvrez un nouveau terminal.

- Définir la variable `JAVA_HOME` sur votre installation de Java 1.8 :
  - Windows :
    - `set JAVA_HOME="<chemin absolu vers le dossier du JRE 1.8>"`
  - Linux :
    - `export JAVA_HOME=<chemin absolu vers le dossier du JRE 1.8>`
- Lancer le serveur :
  - Windows :
    - `third-party\activemq\bin\activemq.bat start`
  - Linux :
    - `third-party/activemq/bin/activemq start` (ajoutez le droit d'exécution sur le fichier si nécessaire)

#### Python

Une fois ActiveMQ lancé, on peut démarrer le serveur Python.

- Windows :
  - `venv\Scripts\python.exe -m uvicorn main:app --port 8000 --reload --timeout-keep-alive 30`
- Unix :
  - `venv/bin/python -m uvicorn main:app --port 8000 --reload --timeout-keep-alive 30`

A partir de là vous devriez accéder à l'interface web via [http://127.0.0.1:8000](http://127.0.0.1:8000).

---

</div>
