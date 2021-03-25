var APP_DATA = {
  "scenes": [
    {
      "id": "0-auenansicht",
      "name": "Außenansicht",
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
        "yaw": 0.041853029824881816,
        "pitch": 0,
        "fov": 1.4008840514963539
      },
      "linkHotspots": [
        {
          "yaw": 0.02733971622613751,
          "pitch": 0.36081623559393705,
          "rotation": 0,
          "target": "1-innenhof"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-innenhof",
      "name": "Innenhof",
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
        "yaw": -0.4225042200774709,
        "pitch": 0,
        "fov": 1.4787975430784706
      },
      "linkHotspots": [
        {
          "yaw": -1.1157125238633228,
          "pitch": 0.03946364470463415,
          "rotation": 0,
          "target": "2-office1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5609738500466506,
          "pitch": -0.02256008649798602,
          "title": "Cafébar",
          "text": "<img src= images/Cafebar.png>"
        }
      ]
    },
    {
      "id": "2-office1",
      "name": "Office1",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4787975430784706
      },
      "linkHotspots": [
        {
          "yaw": -0.09646289943574615,
          "pitch": -0.03850631168658225,
          "rotation": 0,
          "target": "3-office2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6774413669137331,
          "pitch": 0.05166581785256774,
          "title": "Grüne Hülle - französischer Balkon",
          "text": "<img src= images/grueneHuelle.png>"
        }
      ]
    },
    {
      "id": "3-office2",
      "name": "Office2",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4787975430784706
      },
      "linkHotspots": [
        {
          "yaw": -0.10640670295661891,
          "pitch": -0.006522682980017791,
          "rotation": 0,
          "target": "4-dachgarten"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dachgarten",
      "name": "Dachgarten",
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
        "yaw": -2.044763532494642,
        "pitch": 0.0958509397797691,
        "fov": 1.4787975430784706
      },
      "linkHotspots": [
        {
          "yaw": -0.8199416350521993,
          "pitch": 0.05795767985825684,
          "rotation": 0,
          "target": "0-auenansicht"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.7942990302487924,
          "pitch": 0.03218971150351635,
          "title": "Grüne Hülle Hochhaus Galerie oben",
          "text": "<img src= images/oben.png>"
        },
        {
          "yaw": -2.915205163409203,
          "pitch": 0.1671144174704935,
          "title": "Grüne Hülle Hochhaus Galerie unten",
          "text": "<img src= images/unten.png>"
        },
        {
          "yaw": -1.9172571180708733,
          "pitch": -0.4055884540504664,
          "title": "Dachterrasse Hochhaus",
          "text": "<img src= images/Dachterrasse.png>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
