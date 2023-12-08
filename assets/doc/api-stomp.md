<link rel="stylesheet" type="text/css" href="../css/doc-iframe.css">
<base target="_blank">

<!-- Side navigation -->
<div class="sidebar">
  <h1>Sommaire</h1>
  <ul>
    <li><a target="_self" href="#serverstompidmessage">ServerStompIdMessage</a></li>
    <li><a target="_self" href="#gamestatusmessage">GameStatusMessage</a></li>
    <li><a target="_self" href="#bothealthstatusmessage">BotHealthStatusMessage</a></li>
    <li><a target="_self" href="#botmovingspeedstatusmessage">BotMovingSpeedStatusMessage</a></li>
    <li><a target="_self" href="#botturningspeedstatusmessage">BotTurningSpeedStatusMessage</a></li>
    <li><a target="_self" href="#botstunningstatusmessage">BotStunningStatusMessage</a></li>
    <li><a target="_self" href="#botmovingstatusmessage">BotMovingStatusMessage</a></li>
    <li><a target="_self" href="#botturningstatusmessage">BotTurningStatusMessage</a></li>
    <li><a target="_self" href="#botweaponstatusmessage">BotWeaponStatusMessage</a></li>
    <li><a target="_self" href="#botweaponcooldownmessage">BotWeaponCooldownMessage</a></li>
  </ul>
</div>

<!-- Page content -->
<div class="main">

# STOMP

Voici les messages reçus par le client sur la file de messages STOMP. STOMP est utilisé pour recevoir les messages du jeu ou sur ce qui arrive au bot (perte de PV, arrêt, etc.).

## ServerStompIdMessage

Identifiant envoyé au client pour valider le fonctionnement de la connexion à STOMP. Cet identifiant est à renvoyer au serveur via l'API Rest.

  * Queue: **BATTLEBOT.BOT.{bot_id}**
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
            "const": "stomp_id"
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
                    "description": "The stomp id to return using Rest",
                    "type": "str"
                }
            }
        }
    },
    "examples": [{
        "msg_type": "stomp_id",
        "source": "server",
        "data": {
            "value": "3ac537f1-88f5-4c97-bfb8-2cfdf2f89e92"
        }
    }]
}
```

## GameStatusMessage

Informe le client du démarrage et de l'arrêt de la partie.

  * Queue: **BATTLEBOT.BOT.{bot_id}**
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
            "const": "game_status"
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
                    "description": "Wether the game is started or not",
                    "type": "boolean",
                    "default": false
                }
            }
        }
    },
    "examples": [{
        "msg_type": "game_status",
        "source": "server",
        "data": {
            "value": false
        }
    }]
}
```

## BotHealthStatusMessage

Donne le nombre de PV du bot.

  * Queue: **BATTLEBOT.BOT.{bot_id}**
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
            "const": "health_status",
        },
        "source": {
            "description": "Where does the information comes from",
            "const": "bot"
        },
        "data": {
            "type": "object",
            "required": [
                "value"
            ],
            "properties": {
                "value": {
                    "description": "Bot HP",
                    "type": "int"
                }
            }
        }
    },
    "examples": [{
        "msg_type": "health_status",
        "source": "bot",
        "data": {
            "value": 95
        }
    }]
}
```

## BotMovingSpeedStatusMessage

Donne la vitesse de déplacement max actuelle du bot.

  * Queue: **BATTLEBOT.BOT.{bot_id}**
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
            "const": "moving_speed_status",
        },
        "source": {
            "description": "Where does the information comes from",
            "const": "bot"
        },
        "data": {
            "type": "object",
            "required": [
                "value"
            ],
            "properties": {
                "value": {
                    "description": "Bot max moving speed in unit per second",
                    "type": "float"
                }
            }
        }
    },
    "examples": [{
        "msg_type": "moving_speed_status",
        "source": "bot",
        "data": {
            "value": 1.0
        }
    }]
}
```

## BotTurningSpeedStatusMessage

Donne la vitesse de rotation max actuelle du bot.

  * Queue: **BATTLEBOT.BOT.{bot_id}**
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
            "const": "turning_speed_status",
        },
        "source": {
            "description": "Where does the information comes from",
            "const": "bot"
        },
        "data": {
            "type": "object",
            "required": [
                "value"
            ],
            "properties": {
                "value": {
                    "description": "Bot max turning speed in radians per second",
                    "type": "float"
                }
            }
        }
    },
    "examples": [{
        "msg_type": "turning_speed_status",
        "source": "bot",
        "data": {
            "value": 0.52359877559829887307710723054658
        }
    }]
}
```

## BotStunningStatusMessage

État d'étourdissement du bot.

  * Queue: **BATTLEBOT.BOT.{bot_id}**
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
            "const": "stunning_status",
        },
        "source": {
            "description": "Where does the information comes from",
            "const": "bot"
        },
        "data": {
            "type": "object",
            "required": [
                "value"
            ],
            "properties": {
                "value": {
                    "description": "Is the bot stunned?",
                    "type": "bool"
                }
            }
        }
    },
    "examples": [{
        "msg_type": "stunning_status",
        "source": "bot",
        "data": {
            "value": true
        }
    }]
}
```

## BotMovingStatusMessage

État de déplacement du bot.

  * Queue: **BATTLEBOT.BOT.{bot_id}**
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
            "const": "moving_status",
        },
        "source": {
            "description": "Where does the information comes from",
            "const": "bot"
        },
        "data": {
            "type": "object",
            "required": [
                "value"
            ],
            "properties": {
                "value": {
                    "description": "Is the bot moving?",
                    "type": "bool"
                }
            }
        }
    },
    "examples": [{
        "msg_type": "moving_status",
        "source": "bot",
        "data": {
            "value": true
        }
    }]
}
```

## BotTurningStatusMessage

État de rotation du bot.

  * Queue: **BATTLEBOT.BOT.{bot_id}**
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
            "const": "turning_status",
        },
        "source": {
            "description": "Where does the information comes from",
            "const": "bot"
        },
        "data": {
            "type": "object",
            "required": [
                "value"
            ],
            "properties": {
                "value": {
                    "description": "Direction of the rotation",
                    "type": "str"
                }
            }
        }
    },
    "examples": [{
        "msg_type": "turning_status",
        "source": "bot",
        "data": {
            "value": "left"
        }
    },
    {
        "msg_type": "turning_status",
        "source": "bot",
        "data": {
            "value": "right"
        }
    },
    {
        "msg_type": "turning_status",
        "source": "bot",
        "data": {
            "value": "stop"
        }
    }]
}
```

## BotWeaponStatusMessage

État de l'arme du bot.

  * Queue: **BATTLEBOT.BOT.{bot_id}**
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
            "const": "weapon_can_shoot",
        },
        "source": {
            "description": "Where does the information comes from",
            "const": "bot"
        },
        "data": {
            "type": "object",
            "required": [
                "value"
            ],
            "properties": {
                "value": {
                    "description": "Can the weapon shoot?",
                    "type": "bool"
                }
            }
        }
    },
    "examples": [{
        "msg_type": "weapon_can_shoot",
        "source": "bot",
        "data": {
            "value": true
        }
    }]
}
```

## BotWeaponCooldownMessage

Temps de recharge de l'arme entre chaque tir.

  * Queue: **BATTLEBOT.BOT.{bot_id}**
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
            "const": "weapon_cooldown_ms",
        },
        "source": {
            "description": "Where does the information comes from",
            "const": "bot"
        },
        "data": {
            "type": "object",
            "required": [
                "value"
            ],
            "properties": {
                "value": {
                    "description": "Time between shots in milliseconds",
                    "type": "int"
                }
            }
        }
    },
    "examples": [{
        "msg_type": "weapon_cooldown_ms",
        "source": "bot",
        "data": {
            "value": 1000
        }
    }]
}
```

---

</div>
