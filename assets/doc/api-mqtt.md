<link rel="stylesheet" type="text/css" href="../css/doc-iframe.css">
<base target="_blank">

<!-- Side navigation -->
<div class="sidebar">
  <h1>Sommaire</h1>
  <ul>
    <li><a target="_self" href="#servermqttidmessage">ServerMqttIdMessage</a></li>
    <li><a target="_self" href="#botscannerdetectionmessage">BotScannerDetectionMessage</a></li>
  </ul>
</div>

<!-- Page content -->
<div class="main">

# MQTT

Voici les messages reçus par le client sur la file de messages MQTT. MQTT est seulement utilisé pour recevoir des messages de ce que le bot a dans son champs de vision.

## ServerMqttIdMessage

Identifiant envoyé au client pour valider le fonctionnement de la connexion à MQTT. Cet identifiant est à renvoyer au serveur via l'API Rest.

  * Queue: **BATTLEBOT/BOT/{bot_id}**
  * Producer: **server**
  * Consumer: **client**
  * Payload:

```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "required": [
        "msg_type",
        "source",
        "data"
    ],
    "properties": {
        "msg_type": {
            "description": "Type of information",
            "const": "mqtt_id"
        },
        "source": {
            "description": "Where does the information comes from",
            "const": "server"
        },
        "data": {
            "type": "object",
            "required": [
                "value"
            ],
            "properties": {
                "value": {
                    "description": "The mqtt id to return using Rest",
                    "type": "str"
                }
            }
        }
    },
    "examples": [{
        "msg_type": "mqtt_id",
        "source": "server",
        "data": {
            "value": "4242a3a5-3f4b-4e1f-bb4b-18d33f261d56"
        }
    }]
}
```

## BotScannerDetectionMessage

Informations sur les objets détectés par le bot (type d'objet, distance, angle auquel ils se trouvent).

  * Queue: **BATTLEBOT/BOT/{bot_id}**
  * Producer: **server**
  * Consumer: **client**
  * Payload:

```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "type": "object",
    "required": [
        "source",
        "msg_type",
        "data"
    ],
    "properties": {
        "msg_type": {
            "description": "Type of information",
            "const": "object_detection"
        },
        "source": {
            "description": "Where does the information comes from",
            "const": "scanner"
        },
        "data": {
            "type": "array",
            "items": {
                "description": "Detected object(s)",
                "type": "object",
                "required": [
                    "from",
                    "to",
                    "object_type",
                    "name",
                    "distance"
                ],
                "properties": {
                    "from": {
                        "description": "Angle from which the object starts to be seen by the bot",
                        "type": "float"
                    },
                    "to": {
                        "description": "Angle from which the object is not visible anymore by the bot",
                        "type": "float"
                    },
                    "object_type": {
                        "description": "Type of the detected object",
                        "type": "string"
                    },
                    "name": {
                        "description": "Name of the detected object",
                        "type": "string"
                    },
                    "distance": {
                        "description": "Distance from the bot to the object",
                        "type": "float"
                    }
                }
            }
        }
    },
    "examples": [
        {
            "msg_type": "object_detection",
            "source": "scanner",
            "data": [
                {
                    "from": 26.5,
                    "to": 31,
                    "object_type": "tree",
                    "name": "Tree",
                    "distance": 6.844473640068633
                },
                {
                    "from": 34,
                    "to": 39.5,
                    "object_type": "bot",
                    "name": "MyBot01",
                    "distance": 5.777348380771669
                }
            ]
        }
    ]
}
```

---

</div>
