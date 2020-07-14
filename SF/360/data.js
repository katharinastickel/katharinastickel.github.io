var APP_DATA = {
  "scenes": [
    {
      "id": "0-klassenzimmer",
      "name": "Klassenzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.26161229403289354,
        "pitch": 0.09407631749132861,
        "fov": 1.4688052696788005
      },
      "linkHotspots": [
        {
          "yaw": 1.5523526168195882,
          "pitch": 0.03933298708919608,
          "rotation": 1.5707963267948966,
          "target": "1-digitales-lerndorf"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.30914578738098264,
          "pitch": -0.2844026120117835,
          "title": "digitales Lerndorf",
          "text": "wird an die Wand projiziert und kann interaktiv bedient werden"
        },
        {
          "yaw": -1.4703784212361573,
          "pitch": 0.12679132845923036,
          "title": "Rampe",
          "text": "ersetzt Stühle und Tische im Klassenzimmer - Kinder können sich setzen und zuhören (ähnlich wie im Hörsaal), genauso dient sie aber auch als Bewegungsfläche"
        },
        {
          "yaw": 1.5177872975857571,
          "pitch": -0.3166765495746766,
          "title": "Sprachforscherhaus",
          "text": "Betritt man beispielsweise das Sprachforscherhaus, gelangt man in die virtuelle Ebene des Lerndorfes. Hier wird Wissen mithilfe der digitalen Tools (VR-Brille, leap-motion-controller oder ähnliches) vermittelt. Die Information befindet sich dann im ganzen Raum."
        }
      ]
    },
    {
      "id": "1-digitales-lerndorf",
      "name": "Digitales Lerndorf",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2581869302989652,
          "pitch": 0.45662535829547757,
          "rotation": 0,
          "target": "2-offene-lernlandschaft"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.647135469913633,
          "pitch": -0.13091487271760727,
          "title": "Digitaler Layer",
          "text": "Die hier angezeigte Information wird erst durch eine VR-Brille oder ähnliches ersichtlich."
        },
        {
          "yaw": 0.028346117110501723,
          "pitch": -0.09594043826556664,
          "title": "Sprachforscherhaus",
          "text": "Du befindest dich jetzt im Sprachforscherhaus."
        }
      ]
    },
    {
      "id": "2-offene-lernlandschaft",
      "name": "offene Lernlandschaft",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.43819831651590846,
        "pitch": 0.06138385894326959,
        "fov": 1.4688052696788005
      },
      "linkHotspots": [
        {
          "yaw": 0.1311818003552876,
          "pitch": -0.07376516991537407,
          "rotation": 0,
          "target": "0-klassenzimmer"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.0523469774817222,
          "pitch": 0.44167816187319353,
          "title": "praktisches Arbeiten",
          "text": "Text"
        },
        {
          "yaw": -0.9239018850517198,
          "pitch": 0.1821616547911944,
          "title": "Nischen für konzentriertes Arbeiten alleine",
          "text": "Text"
        },
        {
          "yaw": 1.1304027388389706,
          "pitch": 0.06396206198034982,
          "title": "Fragen und Erklären",
          "text": "Text"
        },
        {
          "yaw": -1.1173014617568704,
          "pitch": 0.44497409165509616,
          "title": "offene Zone der Kommunikation, für Gruppenarbeit geeignet",
          "text": "Text"
        },
        {
          "yaw": -1.8005913090814367,
          "pitch": 0.09864310439668422,
          "title": "Faltwand, mit welcher der Raum abgeteilt werden kann",
          "text": "Text"
        },
        {
          "yaw": 0.5467453315111044,
          "pitch": -0.1606596622148544,
          "title": "Screens für interaktive Wissensvermittlung",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Lerndorf",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
