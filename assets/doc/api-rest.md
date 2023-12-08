<link rel="stylesheet" type="text/css" href="../css/doc-iframe.css">
<base target="_blank">

<!-- Side navigation -->
<div class="sidebar">
  <h1>Sommaire</h1>
  <ul>
    <li><a target="_self" href="#client">Client</a>
      <ul>
        <li><a target="_self" href="#patch-displayclientsactionready">PATCH /display/clients/action/ready</a></li>
        <li><a target="_self" href="#post-botsactionregister">POST /bots/action/register</a></li>
        <li><a target="_self" href="#get-botsbot_idactionrequest_connection">GET /bots/{bot_id}/action/request_connection</a></li>
        <li><a target="_self" href="#patch-botsbot_idactioncheck_connection">PATCH /bots/{bot_id}/action/check_connection</a></li>
        <li><a target="_self" href="#patch-botsbot_idactionshoot">PATCH /bots/{bot_id}/action/shoot</a></li>
        <li><a target="_self" href="#patch-botsbot_idactionturn">PATCH /bots/{bot_id}/action/turn</a></li>
        <li><a target="_self" href="#patch-botsbot_idactionmove">PATCH /bots/{bot_id}/action/move</a></li>
      </ul>
    </li>
      <li><a target="_self" href="#admin">Admin</a>
      <ul>
        <li><a target="_self" href="#patch-gameactionstart">PATCH /game/action/start</a></li>
        <li><a target="_self" href="#patch-gameactionselect_map">PATCH /game/action/select_map</a></li>
        <li><a target="_self" href="#get-displayclientsactionlist">GET /display/clients/action/list</a></li>
        <li><a target="_self" href="#get-displayclientsactionget_by_id">GET /display/clients/action/get_by_id</a></li>
        <li><a target="_self" href="#get-displayclientsactionget_by_token">GET /display/clients/action/get_by_token</a></li>
        <li><a target="_self" href="#patch-botsactionadd">PATCH /bots/action/add</a></li>
        <li><a target="_self" href="#patch-botsbot_idactionkill">PATCH /bots/{bot_id}/action/kill</a></li>
      </ul>
    </li>
  </ul>
</div>

<!-- Page content -->
<div class="main">

# REST

L'API Rest permet de contrôler l'IA lorsque la partie est en cours.

Vous trouverez ici les endpoints disponibles via l'API Rest. Une documentation automatique est également disponible sous deux formats :
- Swagger : [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
- ReDoc : [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)


## Client

### `PATCH /display/clients/action/ready`
Définir le client d'affichage comme prêt si les jetons correspondent.

**Payload**
```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Données d'identification de connexion",
    "type": "object",
    "required": [
        "login_id"
    ],
    "properties": {
        "login_id": {
            "type": "string",
            "description": "L'identifiant de connexion du client."
        }
    },
    "examples": [{
        "login_id": "551ef811-d241-40f8-8de4-3600ce73aee9"
    }]
}
```

**Return**
```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Réponse de validation de jeton",
    "type": "object",
    "required": [
        "status",
        "message"
    ],
    "properties": {
        "status": {
            "type": "string",
            "description": "L'état de l'opération de validation du jeton.",
            "const": "ok"
        },
        "message": {
            "type": "string",
            "description": "Un message qui décrit le résultat de l'opération de validation du jeton.",
            "const": "Tokens are matching"
        }
    },
    "examples": [{
        "status": "ok",
        "message": "Tokens are matching"
    }]
}
```


### `POST /bots/action/register`
Crée un nouvel objet bot et l'ajoute à l'équipe spécifiée.

**Payload**
```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Données d'enregistrement du bot",
    "type": "object",
    "required": [
        "team_id",
        "bot_name"
    ],
    "properties": {
        "team_id": {
            "type": "string",
            "description": "L'ID de l'équipe à laquelle le bot doit être ajouté."
        },
        "bot_name": {
            "type": "string",
            "description": "Le nom du bot."
        }
    },
    "examples": [{
        "team_id": "given-team-id",
        "bot_name": "MyBot"
    }]
}
```

**Return**
```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Réponse d'enregistrement du bot",
    "type": "object",
    "required": [
        "status",
        "message",
        "bot_id"
    ],
    "properties": {
        "status": {
            "type": "string",
            "description": "Le statut de l'opération d'enregistrement du bot.",
            "const": "ok"
        },
        "message": {
            "type": "string",
            "description": "Un message qui décrit le résultat de l'opération d'enregistrement du bot.",
            "const": "The bot has been successfully registered"
        },
        "bot_id": {
            "type": "string",
            "description": "L'ID du bot enregistré."
        }
    },
    "examples": [{
        "status": "ok",
        "message": "The bot has been successfully registered",
        "bot_id": "ed758294-5d3e-4f4b-bad3-ab95839eb9de"
    }]
}
```


### `GET /bots/{bot_id}/action/request_connection`
Demande des IDs de connexion pour valider la connexion à tous les services. Envoie 3 IDs au client en utilisant REST, STOMP et MQTT. Le client doit renvoyer ces IDs sur l'endpoint `/bots/{bot_id}/action/check_connection` pour valider la connexion.

**Path parameters**
| Nom | Description |
| --- | ----------- |
| bot_id | L'ID du bot qui demande une connexion |

**Return**
```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Réponse de validation de connexion",
    "type": "object",
    "required": [
        "status",
        "message",
        "request_id"
    ],
    "properties": {
        "status": {
            "type": "string",
            "description": "Statut de la validation de connexion",
            "const": "ok"
        },
        "message": {
            "type": "string",
            "description": "Un message qui indique que les ID MQTT et STOMP ont été dispatchés.",
            "const": "Messages sent from STOMP and MQTT"
        },
        "request_id": {
            "type": "string",
            "description": "ID Rest pour la validation de la connexion"
        }
    },
    "examples": [{
        "status": "ok",
        "message": "Messages sent from STOMP and MQTT",
        "request_id": "0b5b9041-8bf0-45f2-a824-9d34e6a1c327"
    }]
}
```


### `PATCH /bots/{bot_id}/action/check_connection`
Vérifie si les IDs trouvés par le client sont ceux attendus pour valider la connexion du client à tous les services.

**Path parameters**
| Nom | Description |
| --- | ----------- |
| bot_id | L'ID du robot à connecter |

**Payload**
```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Données de connexion",
    "type": "object",
    "required": [
        "rest_id",
        "stomp_id",
        "mqtt_id"
    ],
    "properties": {
        "rest_id": {
            "type": "string",
            "description": "L'ID REST fourni par le client."
        },
        "stomp_id": {
            "type": "string",
            "description": "L'ID STOMP fourni par le client."
        },
        "mqtt_id": {
            "type": "string",
            "description": "L'ID MQTT fourni par le client."
        }
    },
    "examples": [
        {
            "rest_id": "0b5b9041-8bf0-45f2-a824-9d34e6a1c327",
            "stomp_id": "3ac537f1-88f5-4c97-bfb8-2cfdf2f89e92",
            "mqtt_id": "4242a3a5-3f4b-4e1f-bb4b-18d33f261d56"
        }
    ]
}
```

**Return**
```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Réponse à la connexion du bot",
    "type": "object",
    "required": [
        "status",
        "message"
    ],
    "properties": {
        "status": {
            "type": "string",
            "description": "Le statut de l'opération de connexion du bot.",
            "const": "ok"
        },
        "message": {
            "type": "string",
            "description": "Un message qui décrit le résultat de l'opération de connexion du bot.",
            "const": "Your bot is successfully connected"
        }
    },
    "examples": [{
        "status": "ok",
        "message": "Your bot is successfully connected"
    }]
}
```


### `PATCH /bots/{bot_id}/action/shoot`
Fait tirer le robot à l'angle relatif désiré.

**Path parameters**
| Nom | Description |
| ---- | ----------- |
| bot_id | L'ID du robot qui doit tirer |

**Payload**
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Données de tir du bot",
  "type": "object",
  "required": [
    "angle"
  ],
  "properties": {
    "angle": {
      "type": "float",
      "description": "L'angle auquel le robot doit tirer, en degrés."
    }
  },
  "examples": [
    {
      "angle": 42.0
    }
  ]
}
```

**Return**
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Réponse de tir du bot",
  "type": "object",
  "required": [
    "status",
    "message"
  ],
  "properties": {
    "status": {
      "type": "string",
      "description": "Le statut de l'opération de tir du robot.",
      "const": "ok"
    },
    "message": {
      "type": "string",
      "description": "Un message qui décrit l'angle auquel le robot a tiré.",
      "const": "Fired at {angle}°"
    }
  },
  "examples": [
    {
      "status": "ok",
      "message": "Fired at 42.0°"
    }
  ]
}
```


### `PATCH /bots/{bot_id}/action/turn`
Commence à faire tourner le robot spécifié vers la gauche ou la droite.

**Path parameters**
| Nom | Description |
| ---- | ----------- |
| bot_id | L'ID du robot à faire tourner |

**Payload**
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Données de rotation du bot",
  "type": "object",
  "required": [
    "direction"
  ],
  "properties": {
    "direction": {
      "type": "string",
      "description": "La direction dans laquelle faire tourner le robot. Les valeurs valides sont 'left', 'right' et 'stop'"
    }
  },
  "examples": [
    {
      "direction": "left"
    }
  ]
}
```

**Return**
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Réponse de rotation du bot",
  "type": "object",
  "required": [
    "status",
    "message"
  ],
  "properties": {
    "status": {
      "type": "string",
      "description": "Le statut de l'opération de rotation du robot.",
      "const": "ok"
    },
    "message": {
      "type": "string",
      "description": "Un message qui décrit la rotation demandée.",
      "const": "^Bot is starting to turn (left|right|stop)$"
    }
  },
  "examples": [
    {
      "status": "ok",
      "message": "Bot is starting to turn left"
    }
  ]
}
```


### `PATCH /bots/{bot_id}/action/move`
Commence à déplacer le robot spécifié vers l'avant.

**Path parameters**
| Nom | Description |
| ---- | ----------- |
| bot_id | L'ID du robot à faire bouger |

**Payload**
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Données de déplacement du bot",
  "type": "object",
  "required": [
    "action"
  ],
  "properties": {
    "action": {
      "type": "string",
      "description": "Ordre de déplacement du robot. Les valeurs valides sont 'start' et 'stop'"
    }
  },
  "examples": [
    {
      "action": "start"
    }
  ]
}
```

**Return**
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Réponse de déplacement du bot",
  "type": "object",
  "required": [
    "status",
    "message"
  ],
  "properties": {
    "status": {
      "type": "string",
      "description": "Le statut de l'opération de déplacement du robot.",
      "const": "ok"
    },
    "message": {
      "type": "string",
      "description": "Un message qui décrit le déplacement demandé."
    }
  },
  "examples": [
    {
      "status": "ok",
      "message": "Bot is starting to move"
    },
    {
      "status": "ok",
      "message": "Bot has stopped moving"
    }
  ]
}
```

## Admin

### `PATCH /game/action/start`
Démarrer la partie en cours.

**Payload**
```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Données d'identification admin",
    "type": "object",
    "required": [
        "api_password"
    ],
    "properties": {
        "api_password": {
            "type": "string",
            "description": "Mot de passe admin Rest"
        }
    },
    "examples": [{
        "api_password": "password"
    }]
}
```

**Return**
```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Réponse au démarrage de la partie",
    "type": "object",
    "required": [
        "status",
        "message"
    ],
    "properties": {
        "status": {
            "type": "string",
            "description": "Statut du traitement de la demande",
            "const": "ok"
        },
        "message": {
            "type": "string",
            "description": "Etat de la partie",
            "const": "Game is started"
        }
    },
    "examples": [{
        "status": "ok",
        "message": "Game is started"
    }]
}
```


### `PATCH /game/action/select_map`
Sélectionner la carte.

**Payload**
```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Données de changement de map",
    "type": "object",
    "required": [
        "api_password",
        "map_name"
    ],
    "properties": {
        "api_password": {
            "type": "string",
            "description": "Mot de passe admin Rest"
        },
        "map_name": {
            "type": "string",
            "description": "Nom de la map à charger"
        }
    },
    "examples": [{
        "api_password": "password",
        "map_name": "test_map_16_16"
    }]
}
```

**Return**
```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Réponse au changement de map",
    "type": "object",
    "required": [
        "status",
        "message"
    ],
    "properties": {
        "status": {
            "type": "string",
            "description": "Statut du traitement de la demande",
            "const": "ok"
        },
        "message": {
            "type": "string",
            "description": "Etat du chargement de la map",
            "const": "Map is loaded."
        }
    },
    "examples": [{
        "status": "ok",
        "message": "Map is loaded."
    }]
}
```


### `GET /display/clients/action/list`
Retourne des informations sur les clients d'affichage présents et passés.

**Payload**
```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Données de recherche des clients web",
    "type": "object",
    "required": [
        "api_password",
        "connected_only"
    ],
    "properties": {
        "api_password": {
            "type": "string",
            "description": "Mot de passe admin Rest"
        },
        "connected_only": {
            "type": "bool",
            "description": "Ne rechercher que les client connectés actuellement"
        }
    },
    "examples": [{
        "api_password": "password",
        "connected_only": true
    }]
}
```

**Return**
```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Réponse à la récupération des clients web",
    "type": "object",
    "required": [
        "status",
        "clients"
    ],
    "properties": {
        "status": {
            "type": "string",
            "description": "Statut du traitement de la demande",
            "const": "ok"
        },
        "clients": {
            "type": "list",
            "description": "Liste des objets clients trouvés"
        }
    },
    "examples": [{
        "status": "ok",
        "clients": [
          {}
        ]
    }]
}
```


### `GET /display/clients/action/get_by_id`
Trouve un client d'affichage par son ID.

**Payload**
```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Données de recherche de client web",
    "type": "object",
    "required": [
        "api_password",
        "client_id"
    ],
    "properties": {
        "api_password": {
            "type": "string",
            "description": "Mot de passe admin Rest"
        },
        "client_id": {
            "type": "integer",
            "description": "ID du client à rechercher"
        }
    },
    "examples": [{
        "api_password": "password",
        "client_id": 1
    }]
}
```

**Return**
```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Réponse à la récupération du client web",
    "type": "object",
    "required": [
        "status",
        "client"
    ],
    "properties": {
        "status": {
            "type": "string",
            "description": "Statut du traitement de la demande",
            "const": "ok"
        },
        "client": {
            "type": "object",
            "description": "Objet client trouvé"
        }
    },
    "examples": [{
        "status": "ok",
        "client": {}
    }]
}
```


### `GET /display/clients/action/get_by_token`

Trouve un client d'affichage par son token.

**Payload**
```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Données de recherche de client web",
    "type": "object",
    "required": [
        "api_password",
        "client_token"
    ],
    "properties": {
        "api_password": {
            "type": "string",
            "description": "Mot de passe admin Rest"
        },
        "client_token": {
            "type": "string",
            "description": "Token du client à rechercher"
        }
    },
    "examples": [{
        "api_password": "password",
        "client_token": "688c14bd-4b0a-414e-b037-ebf35080642b"
    }]
}
```


**Return**
```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Réponse à la récupération du client web",
    "type": "object",
    "required": [
        "status",
        "client"
    ],
    "properties": {
        "status": {
            "type": "string",
            "description": "Statut du traitement de la demande",
            "const": "ok"
        },
        "client": {
            "type": "object",
            "description": "Objet client trouvé"
        }
    },
    "examples": [{
        "status": "ok",
        "client": {}
    }]
}
```


### `PATCH /bots/action/add`
Ajoute un bot sans IA dans le jeu.

**Payload**
```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Données d'identification admin",
    "type": "object",
    "required": [
        "api_password"
    ],
    "properties": {
        "api_password": {
            "type": "string",
            "description": "Mot de passe admin Rest"
        }
    },
    "examples": [{
        "api_password": "password"
    }]
}
```

**Return**
```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Réponse à l'ajout de bot",
    "type": "object",
    "required": [
        "status",
        "message",
        "bot_id"
    ],
    "properties": {
        "status": {
            "type": "string",
            "description": "Statut du traitement de la demande",
            "const": "ok"
        },
        "message": {
            "type": "string",
            "description": "Etat de l'ajout du bot",
            "const": "The bot has been added"
        },
        "bot_id": {
            "type": "string",
            "description": "ID du bot ajouté"
        }
    },
    "examples": [{
        "status": "ok",
        "message": "The bot has been added",
        "bot_id": "a78e716a-315b-435d-b36c-fa4c7410ea26"
    }]
}
```


### `PATCH /bots/{bot_id}/action/kill`
Tue le bot spécifié.

**Path parameters**
| Nom | Description |
| --- | ----------- |
| bot_id | L'ID du bot à tuer |

**Payload**
```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Données d'identification admin",
    "type": "object",
    "required": [
        "api_password"
    ],
    "properties": {
        "api_password": {
            "type": "string",
            "description": "Mot de passe admin Rest"
        }
    },
    "examples": [{
        "api_password": "password"
    }]
}
```

**Return**
```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Réponse au kill de bot",
    "type": "object",
    "required": [
        "status",
        "message",
        "bot_id"
    ],
    "properties": {
        "status": {
            "type": "string",
            "description": "Statut du traitement de la demande",
            "const": "ok"
        },
        "message": {
            "type": "string",
            "description": "Etat de l'opération",
            "const": "The bot has been killed"
        },
        "bot_id": {
            "type": "string",
            "description": "ID du bot tué"
        }
    },
    "examples": [{
        "status": "ok",
        "message": "The bot has been killed",
        "bot_id": "a78e716a-315b-435d-b36c-fa4c7410ea26"
    }]
}
```

---

</div>
