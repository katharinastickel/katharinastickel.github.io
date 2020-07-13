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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6061038169545991,
          "pitch": 0.024358362084740293,
          "rotation": 1.5707963267948966,
          "target": "1-digitalewelt"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.352024373153787,
          "pitch": 0.1483372992300076,
          "title": "Rampe",
          "text": "Text"
        },
        {
          "yaw": -0.7372198424098109,
          "pitch": -0.027259927103692405,
          "title": "Grundriss",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-digitalewelt",
      "name": "DigitaleWelt",
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
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Lerndorf",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
