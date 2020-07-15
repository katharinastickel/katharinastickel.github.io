var APP_DATA = {
  "scenes": [
    {
      "id": "0-klassenraum",
      "name": "Klassenraum",
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
          "title": "Lerndorf als digitaler Layer",
          "text": "wird an die Wand projiziert und kann interaktiv bedient und betreten werden"
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
          "text": "Du befindest dich jetzt auf virtueller Ebene im Sprachforscherhaus.Wenn du eine VR-Brille aufhast, siehst du um dich herum Informationen zu Texten, Schriften, der Entstehung unserer Sprache usw."
        },
        {
          "yaw": -2.850803302041614,
          "pitch": -0.1332062628446078,
          "title": "Perspektive von Rampe aus",
          "text": "<img src= images/Rampe.jpg>"
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
        "yaw": 0.025242301885999296,
        "pitch": 0.10135134927466716,
        "fov": 1.4688052696788005
      },
      "linkHotspots": [
        {
          "yaw": 0.1311818003552876,
          "pitch": -0.07376516991537407,
          "rotation": 0,
          "target": "0-klassenraum"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.963022083409574,
          "pitch": 0.42301288175085006,
          "title": "praktisches Arbeiten",
          "text": "Hier können HandsOn und Workshops stattfinden. Teilt man den Raum ab, eignet er sich für Musikkreise, Kunstunterricht usw."
        },
        {
          "yaw": -1.1401941189683633,
          "pitch": -0.08067077921193899,
          "title": "Lernnischen",
          "text": "<img src= images/Sitznischen.jpg></br>Wenn du alleine konzentriert arbeiten möchtest, kannst du dich in die Lernnischen zurückziehen."
        },
        {
          "yaw": 1.0196362728267694,
          "pitch": 0.04661753088000431,
          "title": "Fragen und Erklären",
          "text": "Hier hast du eine Anlaufstelle bei Fragen. Dein Lehrer kann dir alleine oder einer kleinen Gruppe nochmal individuelle Fragen beantworten.&nbsp;&nbsp;"
        },
        {
          "yaw": -1.248438983931253,
          "pitch": 0.32846288727053796,
          "title": "Kommunikationszone",
          "text": "Die Zwischenbereiche sind eine Kommunikationszone und eignen sich für Gruppenarbeit."
        },
        {
          "yaw": -1.8211015099432935,
          "pitch": 0.08892354470560093,
          "title": "Faltwand",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">Mit der Faltwand kann der Raum für praktisches Arbeiten</span><span style=\"background-color: rgba(103, 115, 131, 0.8); font-size: 16px;\">&nbsp;geschlossen werden.</span>"
        },
        {
          "yaw": 0.5467453315111044,
          "pitch": -0.1606596622148544,
          "title": "Screen",
          "text": "Hier kann dein Lehrer zur Eklärung bei Fragen den interaktiven Screen nutzen."
        },
        {
          "yaw": -0.5582571924260034,
          "pitch": -0.10086181804904015,
          "title": "offene Lernlandschaft",
          "text": "Nachdem du im Klassenraum neues Wissen von deinem Lehrer vermittelt bekommen hast und selbst auf interaktiver Enteckungstour warst, kannst du die Themen nun in der offenen Lernlandschaft vertiefen."
        },
        {
          "yaw": 2.6892805415760366,
          "pitch": -0.09782725390774516,
          "title": "Perspektive praktisches Arbeiten",
          "text": "<img src= images/PraktischesArbeiten.jpg>"
        },
        {
          "yaw": 1.116555740466831,
          "pitch": -0.18079035539401644,
          "title": "Perspektive Fragen und Erklären",
          "text": "<img src= images/fragenunderklären.jpg>"
        }
      ]
    }
  ],
  "name": "Lerndorf",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
