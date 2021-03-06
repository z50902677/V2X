import config from './config';
const simple = {
  "version": 8,
  "name": "Base",
  "sources":
    {
      "LimitCross": {
        "data": {
          type: 'FeatureCollection',
          features: []
        },
        "type": "geojson"
      },
      "RouteRecommendSpeed": {
        "data": {
          type: 'FeatureCollection',
          features: []
        },
        "type": "geojson"
      },
      "Svr": {
        "data": {
          type: 'FeatureCollection',
          features: []
        },
        "type": "geojson"
      },
      "Rsu": {
        "data": {
          type: 'FeatureCollection',
          features: []
        },
        "type": "geojson"
      },
      "Building": {
        "tiles": [`${config.renderServiceUrl}smap-data/data/Building/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716`],
        "type": "vector"
      },
      "Landuse": {
        "tiles": [`${config.renderServiceUrl}smap-data/data/Landuse/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716`],
        "type": "vector"
      },
      "Villtown": {
        "tiles": [`${config.renderServiceUrl}smap-data/data/Villtown/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716`],
        "type": "vector"
      },
      "Greenface": {
        "tiles": [`${config.renderServiceUrl}smap-data/data/Greenface/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716`],
        "type": "vector"
      },
      "Poi": {
        "tiles": [`${config.renderServiceUrl}smap-data/data/Poi/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716`],
        "type": "vector"
      },
      "Waterface": {
        "tiles": [`${config.renderServiceUrl}smap-data/data/Waterface/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716`],
        "type": "vector"
      },
      "Adminbound": {
        "tiles": [`${config.renderServiceUrl}smap-data/data/Adminbound/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716`],
        "type": "vector"
      },
      "Railway": {
        "tiles": [`${config.renderServiceUrl}smap-data/data/Railway/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716`],
        "type": "vector"
      },
      "Adminflag": {
        "tiles": [`${config.renderServiceUrl}smap-data/data/Adminflag/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716`],
        "type": "vector"
      },
      "Annotation": {
        "tiles": [`${config.renderServiceUrl}smap-data/data/Annotation/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716`],
        "type": "vector"
      },
      "Buildingmore": {
        "tiles": [`${config.renderServiceUrl}smap-data/data/Buildingmore/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716`],
        "type": "vector"
      },
      "Road": {
        "tiles": [`${config.renderServiceUrl}smap-data/data/Road/{z}/{x}/{y}?token=25cc55a69ea7422182d00d6b7c0ffa93&solu=716`],
        "type": "vector"
      }
    },
  "sprite": `${window.location.origin + window.location.pathname}static/sprite/sprite`,
  "glyphs": `static/{fontstack}/{range}.pbf`,
  "layers": [
    {
    "id": "2d5182bbb0884cb5adb6f53fc5252a55",
    "maxzoom": 19.5,
    "source": "",
    "layout": { "visibility": "visible" },
    "paint": { "background-color": "#071733" },
    "source-layer": "",
    "minzoom": 3.0,
    "type": "background"
  }, {
    "id": "a79d2af665d24687b3b8384c28c7b957",
    "maxzoom": 19.5,
    "source": "Waterface",
    "layout": { "visibility": "visible" },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 5.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 1]]
  }, {
    "id": "c4100872b16940378d64f178630f8763",
    "maxzoom": 19.5,
    "source": "Landuse",
    "layout": { "visibility": "visible" },
    "source-layer": "Landuse",
    "paint": {
      "fill-outline-color": "#071637",
      "fill-color": "#071637",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 13.0,
    "type": "fill",
    "filter": ["all", ["in", "kind", 31, 38]]
  }, {
    "id": "46ae19eb68ca4e11afc70f6fbe8780e0",
    "maxzoom": 19.5,
    "source": "Landuse",
    "layout": { "visibility": "visible" },
    "paint": {
      "fill-outline-color": "#0e2351",
      "fill-color": "#0e2351",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Landuse",
    "minzoom": 13.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 11]]
  }, {
    "id": "2dc8049a60ae4f78a0254f71fd80a931",
    "maxzoom": 19.5,
    "source": "Landuse",
    "layout": { "visibility": "visible" },
    "paint": {
      "fill-outline-color": "#112b64",
      "fill-color": "#112b64",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Landuse",
    "minzoom": 13.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 12]]
  }, {
    "id": "253d1ee7d90341d899fec7280a68066c",
    "maxzoom": 19.5,
    "source": "Landuse",
    "layout": { "visibility": "visible" },
    "source-layer": "Landuse",
    "paint": {
      "fill-outline-color": "#0b1a3b",
      "fill-color": "#0b1a3b",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 13.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 7]]
  }, {
    "id": "f6f176d9a60f4d93a55e781e5d6be2c4",
    "maxzoom": 19.5,
    "source": "Landuse",
    "layout": { "visibility": "visible" },
    "source-layer": "Landuse",
    "paint": {
      "fill-outline-color": "#061940",
      "fill-color": "#061940",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 13.0,
    "type": "fill",
    "filter": ["all", ["in", "kind", 30, 36, 35, 2]]
  }, {
    "id": "8e3ca0d6df7c437bbaea8eccd50d59f3",
    "maxzoom": 19.5,
    "source": "Landuse",
    "layout": { "visibility": "visible" },
    "paint": {
      "fill-outline-color": "#091b43",
      "fill-color": "#091b43",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Landuse",
    "minzoom": 13.0,
    "type": "fill",
    "filter": ["all", ["in", "kind", 32, 34, 33, 39]]
  }, {
    "id": "1be44b7af68b470c8286bfd6b7609b09",
    "maxzoom": 19.5,
    "source": "Landuse",
    "layout": { "visibility": "visible" },
    "paint": {
      "fill-outline-color": "#223459",
      "fill-color": "#223459",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Landuse",
    "minzoom": 13.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3]]
  }, {
    "id": "2d933f91af4e49119a69809ae32a8964",
    "maxzoom": 19.5,
    "source": "Landuse",
    "layout": { "visibility": "visible" },
    "source-layer": "Landuse",
    "paint": {
      "fill-outline-color": "#07183a",
      "fill-color": "#07183a",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 12.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 1]]
  }, {
    "id": "70da6cd4884049a4ae14b55d8c633de3",
    "maxzoom": 19.5,
    "source": "Landuse",
    "layout": { "visibility": "visible" },
    "source-layer": "Landuse",
    "paint": {
      "fill-outline-color": "#103462",
      "fill-color": "#103462",
      "fill-opacity": 0.25,
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 13.0,
    "type": "fill",
    "filter": ["all", ["in", "kind", 6, 40]]
  }, {
    "id": "981d0dec1a4f4f3dbb7b8374cdc5d832",
    "maxzoom": 19.5,
    "source": "Greenface",
    "layout": { "visibility": "visible" },
    "paint": {
      "fill-outline-color": "#122448",
      "fill-color": "#122448",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Greenface",
    "minzoom": 16.0,
    "type": "fill",
    "filter": ["all", ["in", "kind", "7", "9", "6", "8"]]
  }, {
    "id": "99bfbbb20de445cab1328bfbfe66dfda",
    "maxzoom": 16.0,
    "source": "Greenface",
    "layout": { "visibility": "visible" },
    "source-layer": "Greenface",
    "paint": {
      "fill-outline-color": "#122448",
      "fill-color": "#122448",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 14.0,
    "type": "fill",
    "filter": ["all", ["in", "kind", "7", "9", "6", "8"], [">=", "area_level", 20]]
  }, {
    "id": "8c6062f051b04707b3e8658241ecf0f5",
    "maxzoom": 14.0,
    "source": "Greenface",
    "layout": { "visibility": "visible" },
    "paint": {
      "fill-outline-color": "#122448",
      "fill-color": "#122448",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Greenface",
    "minzoom": 12.0,
    "type": "fill",
    "filter": ["all", ["in", "kind", "7", "9", "6", "8"], [">=", "area_level", 40]]
  }, {
    "id": "50a6ad6ad8f44f1abb04b4faa652871f",
    "maxzoom": 12.0,
    "source": "Greenface",
    "layout": { "visibility": "visible" },
    "source-layer": "Greenface",
    "paint": {
      "fill-outline-color": "#122448",
      "fill-color": "#122448",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 10.0,
    "type": "fill",
    "filter": ["all", ["in", "kind", "7", "9", "6", "8"], [">=", "area_level", 93]]
  }, {
    "id": "ce471b73f43441a0b48587c264d733d4",
    "maxzoom": 10.0,
    "source": "Greenface",
    "layout": { "visibility": "visible" },
    "source-layer": "Greenface",
    "paint": {
      "fill-outline-color": "#122448",
      "fill-color": "#122448",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 8.0,
    "type": "fill",
    "filter": ["all", ["in", "kind", "7", "9", "6", "8"], [">=", "area_level", 98]]
  }, {
    "id": "24e7304c8f764941aba479b3232c3e8b",
    "maxzoom": 19.5,
    "source": "Greenface",
    "layout": { "visibility": "visible" },
    "paint": {
      "fill-outline-color": "#071733",
      "fill-color": "#071733",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Greenface",
    "minzoom": 8.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", "1"]]
  }, {
    "id": "a655fb5fcea64d29968805ceedd59911",
    "maxzoom": 8.0,
    "source": "Greenface",
    "layout": { "visibility": "visible" },
    "source-layer": "Greenface",
    "paint": {
      "fill-outline-color": "#071733",
      "fill-color": "#071733",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 5.0,
    "type": "fill",
    "filter": ["all", [">=", "area_level", 75], ["==", "kind", "1"]]
  }, {
    "id": "e15fb8e9061047e9b5182a3b12b0ef4a",
    "maxzoom": 19.5,
    "source": "Waterface",
    "layout": { "visibility": "visible" },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 3.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 5], ["==", "display_class", 8]]
  }, {
    "id": "37a0e81ad2a64188b976268d011c5a69",
    "maxzoom": 19.5,
    "source": "Waterface",
    "layout": { "visibility": "visible" },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 7.0,
    "type": "fill",
    "filter": ["all", ["==", "display_class", -1]]
  }, {
    "id": "248dce5225b64868bf21a5da51836bc8",
    "maxzoom": 12.0,
    "source": "Waterface",
    "layout": { "visibility": "visible" },
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 7.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3], ["==", "display_class", -2]]
  }, {
    "id": "c25b0daee67c4841a3c68d070383fe23",
    "maxzoom": 4.0,
    "source": "Waterface",
    "layout": { "visibility": "visible" },
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 3.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2], ["==", "display_class", 8]]
  }, {
    "id": "11f89a22ecb04997903fed3ca02c6279",
    "maxzoom": 6.0,
    "source": "Waterface",
    "layout": { "visibility": "visible" },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 4.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2], [">=", "display_class", 7]]
  }, {
    "id": "3fa8a2c6d3134881b5b2e1faa392622a",
    "maxzoom": 8.0,
    "source": "Waterface",
    "layout": { "visibility": "visible" },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 6.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2], ["==", "display_class", 1], [">=", "area_level", 92]]
  }, {
    "id": "b7b32dfe81bb4638932bf89f0dd22999",
    "maxzoom": 8.0,
    "source": "Waterface",
    "layout": { "visibility": "visible" },
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 6.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2], [">", "display_class", 1], [">=", "area_level", 60]]
  }, {
    "id": "a3199b030e4141a183ba4cba17c17c44",
    "maxzoom": 10.0,
    "source": "Waterface",
    "layout": { "visibility": "visible" },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 8.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2], ["==", "display_class", 1], [">=", "area_level", 70]]
  }, {
    "id": "bbcd02813c6046ef8aa06a73d89bb593",
    "maxzoom": 10.0,
    "source": "Waterface",
    "layout": { "visibility": "visible" },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 8.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2], ["!in", "display_class", -2, -1, 1]]
  }, {
    "id": "91514f7feecf41a8aec1a941abb9fb27",
    "maxzoom": 12.0,
    "source": "Waterface",
    "layout": { "visibility": "visible" },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 10.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2], ["==", "display_class", 1], [">=", "area_level", 50]]
  }, {
    "id": "0512545e18654569ba57e5f07a471d8c",
    "maxzoom": 12.0,
    "source": "Waterface",
    "layout": { "visibility": "visible" },
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 10.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2], ["!in", "display_class", -2, -1, 1]]
  }, {
    "id": "95265187babf4499b9b6702173ed6d06",
    "maxzoom": 14.0,
    "source": "Waterface",
    "layout": { "visibility": "visible" },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 12.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2], ["==", "display_class", 1], [">=", "area_level", 30]]
  }, {
    "id": "720d02f8a42e4c7f9e017ad70bd7c1c2",
    "maxzoom": 14.0,
    "source": "Waterface",
    "layout": { "visibility": "visible" },
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 12.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2], ["!in", "display_class", -2, -1, 1]]
  }, {
    "id": "7f8e8ca1d304421fbe4682c27615cf81",
    "maxzoom": 16.0,
    "source": "Waterface",
    "layout": { "visibility": "visible" },
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 14.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2], ["==", "display_class", 1], [">=", "area_level", 10]]
  }, {
    "id": "446e205808f24a1eb341e5c5ad942df1",
    "maxzoom": 16.0,
    "source": "Waterface",
    "layout": { "visibility": "visible" },
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 14.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2], ["!in", "display_class", -2, -1, 1]]
  }, {
    "id": "8fca8b07cb6d44139acc61de68a75bd8",
    "maxzoom": 19.5,
    "source": "Waterface",
    "layout": { "visibility": "visible" },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 16.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 2], ["!in", "display_class", -2, -1]]
  }, {
    "id": "47cb0849d1884380abd764e47ab9ba4a",
    "maxzoom": 6.0,
    "source": "Waterface",
    "layout": { "visibility": "visible" },
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 3,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3]]
  }, {
    "id": "01d702b2b99e4c1898973527e9534433",
    "maxzoom": 8.0,
    "source": "Waterface",
    "layout": { "visibility": "visible" },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 6.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3]]
  }, {
    "id": "edf567454e1949baa925e6e2f1ed1481",
    "maxzoom": 10.0,
    "source": "Waterface",
    "layout": { "visibility": "visible" },
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 8.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3], ["==", "display_class", 1]]
  }, {
    "id": "af8e6ffc1cd549bd8f0b94eed45d85f9",
    "maxzoom": 10.0,
    "source": "Waterface",
    "layout": { "visibility": "visible" },
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 8.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3], ["!in", "display_class", -2, -1, 1]]
  }, {
    "id": "b6887936a7304043ab186778ce122f40",
    "maxzoom": 12.0,
    "source": "Waterface",
    "layout": { "visibility": "visible" },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 10.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3], ["==", "display_class", 1], [">=", "area_level", 73]]
  }, {
    "id": "b7267c9919dd42d4a5e1645375e21a54",
    "maxzoom": 12.0,
    "source": "Waterface",
    "layout": { "visibility": "visible" },
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 10.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3], ["!in", "display_class", -2, -1], [">=", "area_level", 60]]
  }, {
    "id": "f828b09311224f69b465ca7796734e6a",
    "maxzoom": 14.0,
    "source": "Waterface",
    "layout": { "visibility": "visible" },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 12.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3], ["==", "display_class", 1], [">=", "area_level", 15]]
  }, {
    "id": "fefee1651e5e474a98121d2792c16f2b",
    "maxzoom": 14.0,
    "source": "Waterface",
    "layout": { "visibility": "visible" },
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "source-layer": "Waterface",
    "minzoom": 12.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3], ["!in", "display_class", -2, -1, 1]]
  }, {
    "id": "625eaee6467b4b73ba67f8fcfacf0ab8",
    "maxzoom": 16.0,
    "source": "Waterface",
    "layout": { "visibility": "visible" },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 14.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3], ["==", "display_class", 1]]
  }, {
    "id": "6b901db45a5b4f7f83e84e228ea0bc0e",
    "maxzoom": 16.0,
    "source": "Waterface",
    "layout": { "visibility": "visible" },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 14.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3], ["!in", "display_class", -2, -1, 1], [">=", "area_level", 10]]
  }, {
    "id": "af6ee2f294f04e1abb99423413e40b18",
    "maxzoom": 19.5,
    "source": "Waterface",
    "layout": { "visibility": "visible" },
    "source-layer": "Waterface",
    "paint": {
      "fill-outline-color": "#1b4073",
      "fill-color": "#1b4073",
      "fill-antialias": true,
      "fill-translate-anchor": "viewport"
    },
    "minzoom": 16.0,
    "type": "fill",
    "filter": ["all", ["==", "kind", 3], ["!in", "display_class", -2, -1]]
  }, {
    "id": "a44f5507967740de9f5c4856c8ec69b6",
    "maxzoom": 19.5,
    "source": "Railway",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "source-layer": "Railway",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#16305a",
      "line-width": { "stops": [[7, 1.5], [18, 6]], "base": 1.2 }
    },
    "minzoom": 6,
    "type": "line"
  }, {
    "id": "36a5752c2166447f958addc7144532b0",
    "maxzoom": 19.5,
    "source": "Railway",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-dasharray": [9, 9],
      "line-color": "#2568ab",
      "line-width": { "stops": [[7, 1], [18, 3.6]], "base": 1.2 }
    },
    "source-layer": "Railway",
    "minzoom": 6,
    "type": "line"
  }, {
    "id": "8765b9745838404f906d0c50baeeef7a",
    "maxzoom": 8.5,
    "source": "Adminbound",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-dasharray": [6, 3, 3, 4],
      "line-color": "#208bcb",
      "line-width": 1
    },
    "source-layer": "Adminbound",
    "minzoom": 3,
    "type": "line",
    "filter": ["all", ["==", "kind", 6]]
  }, {
    "id": "a4abca699ce54179a33335bbf7caf191",
    "maxzoom": 8.5,
    "source": "Adminbound",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "source-layer": "Adminbound",
    "paint": {
      "line-dasharray": [5, 3],
      "line-translate-anchor": "viewport",
      "line-color": "#0b6598",
      "line-width": 1.0
    },
    "minzoom": 3,
    "type": "line",
    "filter": ["all", ["==", "kind", 5]]
  }, {
    "id": "be61eadc11e3419aab3a1a833463ff3f",
    "maxzoom": 7,
    "source": "Adminbound",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "source-layer": "Adminbound",
    "paint": {
      "line-dasharray": [3, 3, 5, 5],
      "line-translate-anchor": "viewport",
      "line-color": "#2f92ce",
      "line-width": { "stops": [[3, 1], [8, 2]], "base": 1.2 }
    },
    "minzoom": 3,
    "type": "line",
    "filter": ["all", ["==", "kind", 2]]
  }, {
    "id": "037603e6457e4be09923ccbe863742a2",
    "maxzoom": 7.0,
    "source": "Adminbound",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#208bcb",
      "line-width": { "stops": [[3, 1], [8, 2]], "base": 1.2 }
    },
    "source-layer": "Adminbound",
    "minzoom": 3,
    "type": "line",
    "filter": ["all", ["in", "kind", 3, 1]]
  }, {
    "id": "f1c66c86b40c4f79b8fed4effb59505e",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-dasharray": [3, 3],
      "line-color": "#226cc0",
      "line-width": { "stops": [[10, 1], [18, 3]], "base": 1.2 }
    },
    "minzoom": 9.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 13], ["==", "const_st", 1]]
  }, {
    "id": "499ce76c78aa484f9e42a469c8144b0c",
    "maxzoom": 10.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [[5, 0.8], [6, 1], [7, 1.2], [8, 1.4], [9, 1.8], [10, 2], [11, 2], [12, 2], [13, 2.4], [14, 2.8], [15, 5.5], [16, 11], [17, 22], [18, 22], [19, 22]],
        "base": 1.2
      },
      "line-color": "#0d488a",
      "line-width": {
        "stops": [[5, 0], [6, 0], [7, 0.7], [8, 0.5], [9, 0.7], [10, 0.8], [11, 0.8], [12, 1], [13, 1], [14, 1], [15, 1.2], [16, 1.2], [17, 1.4], [18, 1.4], [19, 1.4]],
        "base": 1.2
      }
    },
    "minzoom": 5.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 4], ["!=", "const_st", 3]]
  }, {
    "id": "888dc6a2d6e64148b3e9a6744afc225a",
    "maxzoom": 10.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "paint": {
      "line-gap-width": {
        "stops": [[5, 0.8], [6, 1], [7, 1.2], [8, 1.4], [9, 1.8], [10, 2], [11, 2], [12, 2], [13, 2.4], [14, 2.8], [15, 5.5], [16, 11], [17, 22], [18, 22], [19, 22]],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0d488a",
      "line-width": {
        "stops": [[5, 0], [6, 0], [7, 0.7], [8, 0.5], [9, 0.7], [10, 0.7], [11, 0.8], [12, 1], [13, 1], [14, 1], [15, 1.2], [16, 1.2], [17, 1.4], [18, 1.4], [19, 1.4]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 5.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 3], ["!=", "const_st", 3]]
  }, {
    "id": "8423b880ab754542a52c331eeae537eb",
    "maxzoom": 10.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": { "stops": [[5, 0.7], [6, 0.7], [7, 0.7], [8, 0.7], [9, 0.7], [10, 1.2]], "base": 1.2 }
    },
    "source-layer": "Road",
    "minzoom": 9.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3], ["in", "kind", 7, 6]]
  }, {
    "id": "07028b18fb7343f3849d5e4a011e98af",
    "maxzoom": 10.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": { "stops": [[5, 0.7], [6, 0.7], [7, 0.7], [8, 0.7], [9, 0.7], [10, 1.2]], "base": 1.2 }
    },
    "minzoom": 5.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 6], ["!=", "const_st", 3], [">=", "functionclass", 3]]
  }, {
    "id": "f50679a1c24a4279b7968adf22ad8b5d",
    "maxzoom": 10.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [[5, 0.8], [6, 1], [7, 1.2], [8, 1.4], [9, 1.8], [10, 2], [11, 2], [12, 2], [13, 2.4], [14, 2.8], [15, 5.5], [16, 11], [17, 22], [18, 22], [19, 22]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 5.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 4], ["!=", "const_st", 3]]
  }, {
    "id": "080d97fcd57f44e4a53a7f1949c57132",
    "maxzoom": 10.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [[5, 0.8], [6, 1], [7, 1.2], [8, 1.4], [9, 1.8], [10, 2], [11, 2], [12, 2], [13, 2.4], [14, 2.8], [15, 5.5], [16, 11], [17, 22], [18, 22], [19, 22]],
        "base": 1.2
      }
    },
    "minzoom": 5.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 3], ["!=", "const_st", 3]]
  }, {
    "id": "84f9619d4be745039d892581be8cdc69",
    "maxzoom": 10.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [[5, 1], [6, 1.2], [7, 1.4], [8, 1.6], [9, 2], [10, 1.8], [11, 2], [12, 2], [13, 3], [14, 6], [15, 9], [16, 18], [17, 36], [18, 36], [19, 36]],
        "base": 1.2
      },
      "line-color": "#0d488a",
      "line-width": {
        "stops": [[5, 0], [6, 0], [7, 0.8], [8, 0.8], [9, 0.8], [10, 1], [11, 1], [12, 1], [13, 1.2], [14, 1.2], [15, 1.4], [16, 1.4], [17, 1.4], [18, 1.4], [19, 1.4]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 5,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3], ["==", "kind", 2]]
  }, {
    "id": "1398b454860c4b709f1943df7a6abd6c",
    "maxzoom": 10.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [[5, 1], [6, 1.2], [7, 1.4], [8, 1.6], [9, 2], [10, 1.8], [11, 2], [12, 2], [13, 3], [14, 6], [15, 9], [16, 18], [17, 32], [18, 32], [19, 32]],
        "base": 1.2
      }
    },
    "minzoom": 5,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3], ["==", "kind", 2]]
  }, {
    "id": "c5cac9d2f42546fc93e4c2c15e7e48fc",
    "maxzoom": 10.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [[5, 1], [6, 1.2], [7, 1.4], [8, 1.6], [9, 2], [10, 1.8], [11, 2], [12, 2], [13, 2.5], [14, 5], [15, 7.5], [16, 15], [17, 30], [18, 30], [19, 30]],
        "base": 1.2
      },
      "line-color": "#0d488a",
      "line-width": {
        "stops": [[5, 0], [6, 0], [7, 0.8], [8, 0.8], [9, 0.8], [10, 1], [11, 1], [12, 1], [13, 1.2], [14, 1.2], [15, 1.4], [16, 1.4], [17, 1.4], [18, 1.4], [19, 1.4]],
        "base": 1.2
      }
    },
    "minzoom": 5,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3], ["==", "kind", 1]]
  }, {
    "id": "626a6e429c704903b531646ca9d62b05",
    "maxzoom": 10.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [[5, 1], [6, 1.2], [7, 1.4], [8, 1.6], [9, 2], [10, 1.8], [11, 2], [12, 2], [13, 2.5], [14, 5], [15, 7.5], [16, 15], [17, 30], [18, 30], [19, 30]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 5,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3], ["==", "kind", 1]]
  }, {
    "id": "bd1352b858154c2cb958cc0ecbb016f5",
    "maxzoom": 12.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "paint": {
      "line-gap-width": {
        "stops": [[5, 0.7], [6, 0.7], [7, 0.7], [8, 0.8], [9, 0.8], [10, 1.2], [11, 1.6], [12, 1.8], [13, 2], [14, 2.8], [15, 7.2], [16, 10], [17, 16], [18, 16], [19, 16]],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#071733",
      "line-width": {
        "stops": [[5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0.3], [11, 0.4], [12, 0.7], [13, 0.8], [14, 0.9], [15, 1], [16, 1.2], [17, 1.4], [18, 1.4], [19, 1.4]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 10.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 7], ["!=", "const_st", 3]]
  }, {
    "id": "177490f9dd2d4dcab4847a6a6513b007",
    "maxzoom": 12.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [[5, 0.7], [6, 0.7], [7, 0.7], [8, 0.8], [9, 0.8], [10, 1.2], [11, 2], [12, 3], [13, 4.2], [14, 4.8], [15, 7.2], [16, 10], [17, 24], [18, 24], [19, 24]],
        "base": 1.2
      },
      "line-color": "#071733",
      "line-width": {
        "stops": [[5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0.3], [11, 0.4], [12, 0.6], [13, 0.8], [14, 0.8], [15, 0.8], [16, 1], [17, 1.2], [18, 1.2], [19, 1.2]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 10.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 6], ["!=", "const_st", 3]]
  }, {
    "id": "d2c9d3ba380d45ca9f7f17deed73f6ec",
    "maxzoom": 12.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "paint": {
      "line-gap-width": {
        "stops": [[5, 0.8], [6, 1], [7, 1.2], [8, 1.4], [9, 1.8], [10, 2], [11, 2], [12, 2], [13, 2.4], [14, 2.8], [15, 5.5], [16, 11], [17, 22], [18, 22], [19, 22]],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0d488a",
      "line-width": {
        "stops": [[5, 0], [6, 0], [7, 0.7], [8, 0.5], [9, 0.7], [10, 0.8], [11, 0.8], [12, 1], [13, 1], [14, 1], [15, 1.2], [16, 1.2], [17, 1.4], [18, 1.4], [19, 1.4]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 10.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 4], ["!=", "const_st", 3]]
  }, {
    "id": "ec0ce4d90cb74cc3aaa9fefd4f8ef855",
    "maxzoom": 12.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "paint": {
      "line-gap-width": {
        "stops": [[5, 0.8], [6, 1], [7, 1.2], [8, 1.4], [9, 1.8], [10, 2], [11, 2], [12, 2], [13, 2.4], [14, 2.8], [15, 5.5], [16, 11], [17, 22], [18, 22], [19, 22]],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0d488a",
      "line-width": {
        "stops": [[5, 0], [6, 0], [7, 0.7], [8, 0.5], [9, 0.7], [10, 0.7], [11, 0.8], [12, 1], [13, 1], [14, 1], [15, 1.2], [16, 1.2], [17, 1.4], [18, 1.4], [19, 1.4]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 10.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 3], ["!=", "const_st", 3]]
  }, {
    "id": "ecd3cf8355b148e88b716b5904d22f50",
    "maxzoom": 12.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [[5, 0.7], [6, 0.7], [7, 0.7], [8, 0.8], [9, 0.8], [10, 1.2], [11, 1.6], [12, 1.8], [13, 2], [14, 2.8], [15, 7.2], [16, 10], [17, 16], [18, 16], [19, 16]],
        "base": 1.2
      }
    },
    "minzoom": 10.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 7], ["!=", "const_st", 3]]
  }, {
    "id": "6ebd2b8805d640cc98764a9960f8e6b9",
    "maxzoom": 12.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [[5, 0.7], [6, 0.7], [7, 0.7], [8, 0.8], [9, 0.8], [10, 1.2], [11, 2], [12, 3], [13, 4.2], [14, 4.8], [15, 7.2], [16, 10], [17, 24], [18, 24], [19, 24]],
        "base": 1.2
      }
    },
    "minzoom": 10.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 6], ["!=", "const_st", 3]]
  }, {
    "id": "da49c7eaf7a44606bb984f56e345b3b4",
    "maxzoom": 12.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [[5, 0.8], [6, 1], [7, 1.2], [8, 1.4], [9, 1.8], [10, 2], [11, 2], [12, 2], [13, 2.4], [14, 2.8], [15, 5.5], [16, 11], [17, 22], [18, 22], [19, 22]],
        "base": 1.2
      }
    },
    "minzoom": 10.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 4], ["!=", "const_st", 3]]
  }, {
    "id": "725b2a9323ed44868c80f6cbbe63ec79",
    "maxzoom": 12.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [[5, 0.8], [6, 1], [7, 1.2], [8, 1.4], [9, 1.8], [10, 2], [11, 2], [12, 2], [13, 2.4], [14, 2.8], [15, 5.5], [16, 11], [17, 22], [18, 22], [19, 22]],
        "base": 1.2
      }
    },
    "minzoom": 10.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 3], ["!=", "const_st", 3]]
  }, {
    "id": "fef5c5029b124a3b85637c7ee3d27e88",
    "maxzoom": 12.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [[5, 1], [6, 1.2], [7, 1.4], [8, 1.6], [9, 2], [10, 1.8], [11, 2], [12, 2.4], [13, 3], [14, 6], [15, 9], [16, 18], [17, 32], [18, 32], [19, 32]],
        "base": 1.2
      },
      "line-color": "#0d488a",
      "line-width": {
        "stops": [[5, 0], [6, 0], [7, 0.8], [8, 0.8], [9, 0.8], [10, 1], [11, 1], [12, 1], [13, 1.2], [14, 1.2], [15, 1.4], [16, 1.4], [17, 1.6], [18, 1.6], [19, 1.6]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 10.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3], ["==", "kind", 2]]
  }, {
    "id": "d3260a8371f746f58f3a583612721970",
    "maxzoom": 12.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [[5, 1], [6, 1.2], [7, 1.4], [8, 1.6], [9, 2], [10, 1.8], [11, 2], [12, 2.4], [13, 3], [14, 6], [15, 9], [16, 18], [17, 32], [18, 32], [19, 32]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 10.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3], ["==", "kind", 2]]
  }, {
    "id": "0d469fef8e1f469aa8adebc6dda16ba9",
    "maxzoom": 12.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [[5, 1], [6, 1.2], [7, 1.4], [8, 1.6], [9, 2], [10, 1.8], [11, 2], [12, 2.4], [13, 3], [14, 5], [15, 7.5], [16, 15], [17, 30], [18, 30], [19, 30]],
        "base": 1.2
      },
      "line-color": "#0d488a",
      "line-width": {
        "stops": [[5, 0], [6, 0], [7, 0.8], [8, 0.8], [9, 0.8], [10, 1], [11, 1], [12, 1], [13, 1.2], [14, 1.2], [15, 1.4], [16, 1.4], [17, 1.6], [18, 1.6], [19, 1.6]],
        "base": 1.2
      }
    },
    "minzoom": 10.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3], ["==", "kind", 1]]
  }, {
    "id": "084069bea8a94bf0916361dbbd2a61ce",
    "maxzoom": 12.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [[5, 1], [6, 1.2], [7, 1.4], [8, 1.6], [9, 2], [10, 1.8], [11, 2], [12, 2.4], [13, 3], [14, 5], [15, 7.5], [16, 15], [17, 30], [18, 30], [19, 30]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 10.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3], ["==", "kind", 1]]
  }, {
    "id": "be483c2767374e54ad1c6fbf9f0786d8",
    "maxzoom": 14.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [[9, 0.8], [10, 1], [11, 1], [12, 1], [13, 1], [14, 1.4], [15, 2.8], [16, 6.4], [17, 10], [18, 10], [19, 10]],
        "base": 1.2
      },
      "line-color": "#071733",
      "line-width": {
        "stops": [[9, 0], [10, 0], [11, 0], [12, 0], [13, 0], [14, 0.6], [15, 0.8], [16, 1], [17, 1.2], [18, 1.2], [19, 1.2]],
        "base": 1.2
      }
    },
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 8], ["!=", "const_st", 3]]
  }, {
    "id": "99eb33e8c0d249e7b03bde114deb908f",
    "maxzoom": 14.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [[5, 0.7], [6, 0.7], [7, 0.7], [8, 0.8], [9, 0.8], [10, 1.2], [11, 1.6], [12, 1.8], [13, 2], [14, 2.8], [15, 7.2], [16, 10], [17, 16], [18, 16], [19, 16]],
        "base": 1.2
      },
      "line-color": "#071733",
      "line-width": {
        "stops": [[5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0.3], [11, 0.4], [12, 0.7], [13, 0.8], [14, 0.9], [15, 1], [16, 1.2], [17, 1.4], [18, 1.4], [19, 1.4]],
        "base": 1.2
      }
    },
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 7], ["!=", "const_st", 3]]
  }, {
    "id": "fc7a4ef7e2c04980b165416efde39af8",
    "maxzoom": 14.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [[5, 0.7], [6, 0.7], [7, 0.7], [8, 0.8], [9, 0.8], [10, 1.2], [11, 2], [12, 3], [13, 4.2], [14, 4.8], [15, 7.2], [16, 10], [17, 24], [18, 24], [19, 24]],
        "base": 1.2
      },
      "line-color": "#071733",
      "line-width": {
        "stops": [[5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0.3], [11, 0.4], [12, 0.6], [13, 0.8], [14, 0.8], [15, 0.8], [16, 1], [17, 1.2], [18, 1.2], [19, 1.2]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 6], ["!=", "const_st", 3]]
  }, {
    "id": "73d411c2fc644ae0bd3fa14b08637eb7",
    "maxzoom": 14.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "paint": {
      "line-gap-width": {
        "stops": [[5, 0.8], [6, 1], [7, 1.2], [8, 1.4], [9, 1.8], [10, 2], [11, 2], [12, 2], [13, 2.4], [14, 2.8], [15, 5.5], [16, 11], [17, 22], [18, 22], [19, 22]],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0d488a",
      "line-width": {
        "stops": [[5, 0], [6, 0], [7, 0.7], [8, 0.5], [9, 0.7], [10, 0.8], [11, 0.8], [12, 1], [13, 1], [14, 1], [15, 1.2], [16, 1.2], [17, 1.4], [18, 1.4], [19, 1.4]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 4], ["!=", "const_st", 3]]
  }, {
    "id": "45bd163fefad49279b93edf9d48d27b2",
    "maxzoom": 14.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "paint": {
      "line-gap-width": {
        "stops": [[5, 0.8], [6, 1], [7, 1.2], [8, 1.4], [9, 1.8], [10, 2], [11, 2], [12, 2], [13, 2.4], [14, 2.8], [15, 5.5], [16, 11], [17, 22], [18, 22], [19, 22]],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0d488a",
      "line-width": {
        "stops": [[5, 0], [6, 0], [7, 0.7], [8, 0.5], [9, 0.7], [10, 0.7], [11, 0.8], [12, 1], [13, 1], [14, 1], [15, 1.2], [16, 1.2], [17, 1.4], [18, 1.4], [19, 1.4]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 3], ["!=", "const_st", 3]]
  }, {
    "id": "d4090540f50145568c2382a1ea9714fc",
    "maxzoom": 14.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [[9, 0.8], [10, 1], [11, 1], [12, 1], [13, 1], [14, 1.4], [15, 2.8], [16, 6.4], [17, 10], [18, 10], [19, 10]],
        "base": 1.2
      }
    },
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 8], ["!=", "const_st", 3]]
  }, {
    "id": "f31565445d8e4e34a24874c34535e8e9",
    "maxzoom": 14.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [[5, 0.7], [6, 0.7], [7, 0.7], [8, 0.8], [9, 0.8], [10, 1.2], [11, 1.6], [12, 1.8], [13, 2], [14, 2.8], [15, 7.2], [16, 10], [17, 16], [18, 16], [19, 16]],
        "base": 1.2
      }
    },
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 7], ["!=", "const_st", 3]]
  }, {
    "id": "6dcd9d6cf1bb4eaab57bf4496cc00424",
    "maxzoom": 14.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [[5, 0.7], [6, 0.7], [7, 0.7], [8, 0.8], [9, 0.8], [10, 1.2], [11, 2], [12, 3], [13, 4.2], [14, 4.8], [15, 7.2], [16, 10], [17, 24], [18, 24], [19, 24]],
        "base": 1.2
      }
    },
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 6], ["!=", "const_st", 3]]
  }, {
    "id": "d73cd9d31d97401db40380160ccace72",
    "maxzoom": 14.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [[5, 0.8], [6, 1], [7, 1.2], [8, 1.4], [9, 1.8], [10, 2], [11, 2], [12, 2], [13, 2.4], [14, 2.8], [15, 5.5], [16, 11], [17, 22], [18, 22], [19, 22]],
        "base": 1.2
      }
    },
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 4], ["!=", "const_st", 3]]
  }, {
    "id": "4732d33322e34306bff3ea10e7528de1",
    "maxzoom": 14.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [[5, 0.8], [6, 1], [7, 1.2], [8, 1.4], [9, 1.8], [10, 2], [11, 2], [12, 2], [13, 2.4], [14, 2.8], [15, 5.5], [16, 11], [17, 22], [18, 22], [19, 22]],
        "base": 1.2
      }
    },
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 3], ["!=", "const_st", 3]]
  }, {
    "id": "b6e21a80b0b34f569314f6d49fd1284e",
    "maxzoom": 14.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [[5, 1], [6, 1.2], [7, 1.4], [8, 1.6], [9, 2], [10, 1.8], [11, 2], [12, 2.4], [13, 3], [14, 6], [15, 9], [16, 18], [17, 32], [18, 32], [19, 32]],
        "base": 1.2
      },
      "line-color": "#0d488a",
      "line-width": {
        "stops": [[5, 0], [6, 0], [7, 0.8], [8, 0.8], [9, 0.8], [10, 1], [11, 1], [12, 1], [13, 1.2], [14, 1.2], [15, 1.4], [16, 1.4], [17, 1.6], [18, 1.6], [19, 1.6]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3], ["==", "kind", 2]]
  }, {
    "id": "93fcdc1b01fd4796952617ca1164693e",
    "maxzoom": 14.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [[5, 1], [6, 1.2], [7, 1.4], [8, 1.6], [9, 2], [10, 1.8], [11, 2], [12, 2.4], [13, 3], [14, 6], [15, 9], [16, 18], [17, 32], [18, 32], [19, 32]],
        "base": 1.2
      }
    },
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3], ["==", "kind", 2]]
  }, {
    "id": "15afc85e2f62434b9226cfed57997a44",
    "maxzoom": 14.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "paint": {
      "line-gap-width": {
        "stops": [[5, 1], [6, 1.2], [7, 1.4], [8, 1.6], [9, 2], [10, 1.8], [11, 2], [12, 2.4], [13, 3], [14, 5], [15, 7.5], [16, 15], [17, 30], [18, 30], [19, 30]],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0d488a",
      "line-width": {
        "stops": [[5, 0], [6, 0], [7, 0.8], [8, 0.8], [9, 0.8], [10, 1], [11, 1], [12, 1], [13, 1.2], [14, 1.2], [15, 1.4], [16, 1.4], [17, 1.6], [18, 1.6], [19, 1.6]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3], ["==", "kind", 1]]
  }, {
    "id": "d4de9927e66a4a3e8f173b3551978b6f",
    "maxzoom": 14.0,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [[5, 1], [6, 1.2], [7, 1.4], [8, 1.6], [9, 2], [10, 1.8], [11, 2], [12, 2.4], [13, 3], [14, 5], [15, 7.5], [16, 15], [17, 30], [18, 30], [19, 30]],
        "base": 1.2
      }
    },
    "minzoom": 12.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3], ["==", "kind", 1]]
  }, {
    "id": "283de6d31714440b8717bef76c73b0e7",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": { "stops": [[13, 1], [14, 1], [15, 2], [16, 3], [17, 5], [18, 5], [19, 5]], "base": 1.2 },
      "line-color": "#071733",
      "line-width": { "stops": [[13, 0], [14, 0.4], [15, 0.6], [16, 1], [17, 1.2], [18, 1.2], [19, 1.2]], "base": 1.2 }
    },
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 10], ["!=", "const_st", 3]]
  }, {
    "id": "cff236b11bf4448e957b7cbe8a8a596f",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "paint": {
      "line-gap-width": {
        "stops": [[9, 0.8], [10, 1], [11, 1], [12, 1], [13, 1], [14, 1.4], [15, 2.8], [16, 6.4], [17, 10], [18, 10], [19, 10]],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#071733",
      "line-width": {
        "stops": [[9, 0], [10, 0], [11, 0], [12, 0], [13, 0], [14, 0.6], [15, 0.8], [16, 1], [17, 1.2], [18, 1.2], [19, 1.2]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 8], ["!=", "const_st", 3]]
  }, {
    "id": "9feab7ed20d445269d1d9be282ca575a",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "source-layer": "Road",
    "paint": {
      "line-gap-width": {
        "stops": [[9, 0], [10, 0], [11, 0], [12, 0], [13, 1], [14, 2], [15, 4], [16, 6], [17, 10], [18, 10], [19, 10]],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#071733",
      "line-width": {
        "stops": [[9, 0], [10, 0], [11, 0], [12, 0], [13, 0], [14, 0.3], [15, 0.6], [16, 0.8], [17, 1], [18, 1], [19, 1]],
        "base": 1.2
      }
    },
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 9], ["!=", "const_st", 3]]
  }, {
    "id": "fa0c7024d0ea4c0f97ad91ad3ce3feab",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "paint": {
      "line-gap-width": {
        "stops": [[5, 0.7], [6, 0.7], [7, 0.7], [8, 0.8], [9, 0.8], [10, 1.2], [11, 1.6], [12, 1.8], [13, 2], [14, 2.8], [15, 7.2], [16, 10], [17, 20], [18, 20], [19, 20]],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#071733",
      "line-width": {
        "stops": [[5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0.3], [11, 0.4], [12, 0.7], [13, 0.8], [14, 0.9], [15, 1], [16, 1.2], [17, 1.4], [18, 1.4], [19, 1.4]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 7], ["!=", "const_st", 3]]
  }, {
    "id": "0f35740c7b694c9ea31822c763a19a31",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [[5, 0.7], [6, 0.7], [7, 0.7], [8, 0.8], [9, 0.8], [10, 1.2], [11, 2], [12, 3], [13, 4.2], [14, 4.8], [15, 7.2], [16, 10], [17, 24], [18, 24], [19, 24]],
        "base": 1.2
      },
      "line-color": "#071733",
      "line-width": {
        "stops": [[5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0.3], [11, 0.4], [12, 0.6], [13, 0.8], [14, 0.8], [15, 0.8], [16, 1], [17, 1.2], [18, 1.2], [19, 1.2]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 6], ["!=", "const_st", 3]]
  }, {
    "id": "0e58472d03fd4c85baf5fa5544fcbe9b",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [[5, 0.8], [6, 1], [7, 1.2], [8, 1.4], [9, 1.8], [10, 2], [11, 2], [12, 2], [13, 2.4], [14, 2.8], [15, 5.5], [16, 11], [17, 22], [18, 22], [19, 22]],
        "base": 1.2
      },
      "line-color": "#0d488a",
      "line-width": {
        "stops": [[5, 0], [6, 0], [7, 0.7], [8, 0.5], [9, 0.7], [10, 0.8], [11, 0.8], [12, 1], [13, 1], [14, 1], [15, 1.2], [16, 1.2], [17, 1.4], [18, 1.4], [19, 1.4]],
        "base": 1.2
      }
    },
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 4], ["!=", "const_st", 3]]
  }, {
    "id": "b5463ca41e864eab9e5d6ce9388ea16d",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [[10, 1.8], [11, 2], [12, 2], [13, 2], [14, 2.4], [15, 2.8], [16, 5.5], [17, 11], [18, 11], [19, 11]],
        "base": 1.2
      },
      "line-color": "#0d488a",
      "line-width": {
        "stops": [[5, 0], [6, 0], [7, 0.7], [8, 0.5], [9, 0.7], [10, 0.8], [11, 0.8], [12, 1], [13, 1], [14, 1], [15, 1.2], [16, 1.2], [17, 1.4], [18, 1.4], [19, 1.4]],
        "base": 1.2
      }
    },
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 4], ["!=", "const_st", 3]]
  }, {
    "id": "edd1cb7a351546e0bdee6b4b1396c737",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "paint": {
      "line-gap-width": {
        "stops": [[10, 1.8], [11, 2], [12, 2], [13, 2], [14, 2.4], [15, 2.8], [16, 5.5], [17, 11], [18, 11], [19, 11]],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0d488a",
      "line-width": {
        "stops": [[9, 0.7], [10, 0.7], [11, 0.8], [12, 1], [13, 1], [14, 1], [15, 1.2], [16, 1.2], [17, 1.4], [18, 1.4], [19, 1.4]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 3], ["!=", "const_st", 3]]
  }, {
    "id": "234c5df38b3248c2b74338422eac1ff5",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "paint": {
      "line-gap-width": {
        "stops": [[5, 0.8], [6, 1], [7, 1.2], [8, 1.4], [9, 1.8], [10, 2], [11, 2], [12, 2], [13, 2.4], [14, 2.8], [15, 5.5], [16, 11], [17, 22], [18, 22], [19, 22]],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0d488a",
      "line-width": {
        "stops": [[5, 0], [6, 0], [7, 0.7], [8, 0.5], [9, 0.7], [10, 0.7], [11, 0.8], [12, 1], [13, 1], [14, 1], [15, 1.2], [16, 1.2], [17, 1.4], [18, 1.4], [19, 1.4]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 3], ["!=", "const_st", 3]]
  }, {
    "id": "3719114e11e94a1e8f5820f0ade74b2c",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": { "stops": [[13, 1], [14, 1], [15, 2], [16, 3], [17, 5], [18, 5], [19, 5]], "base": 1.2 }
    },
    "source-layer": "Road",
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 10], ["!=", "const_st", 3]]
  }, {
    "id": "00a34c25827b4e58a0f2991b96f58d19",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [[9, 0.8], [10, 1], [11, 1], [12, 1], [13, 1], [14, 1.4], [15, 2.8], [16, 6.4], [17, 10], [18, 10], [19, 10]],
        "base": 1.2
      }
    },
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 8], ["!=", "const_st", 3]]
  }, {
    "id": "da23a3f43d48447fbed102275288b1cb",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [[9, 0.8], [10, 1], [11, 1], [12, 1], [13, 1], [14, 2], [15, 4], [16, 6], [17, 10], [18, 10], [19, 10]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 9], ["!=", "const_st", 3]]
  }, {
    "id": "9ee33adb51124328a61b83af11b7ef64",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [[5, 0.7], [6, 0.7], [7, 0.7], [8, 0.8], [9, 0.8], [10, 1.2], [11, 1.6], [12, 1.8], [13, 2], [14, 2.8], [15, 7.2], [16, 10], [17, 20], [18, 20], [19, 20]],
        "base": 1.2
      }
    },
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 7], ["!=", "const_st", 3]]
  }, {
    "id": "4ea2f32f8d8240129b0e133656c674bf",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [[5, 0.7], [6, 0.7], [7, 0.7], [8, 0.8], [9, 0.8], [10, 1.2], [11, 2], [12, 3], [13, 4.2], [14, 4.8], [15, 7.2], [16, 10], [17, 24], [18, 24], [19, 24]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 6], ["!=", "const_st", 3]]
  }, {
    "id": "e4c0562e55324b46982bbc841408d8f4",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [[10, 1.8], [11, 2], [12, 2], [13, 2], [14, 2.4], [15, 2.8], [16, 5.5], [17, 11], [18, 11], [19, 11]],
        "base": 1.2
      }
    },
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 4], ["!=", "const_st", 3]]
  }, {
    "id": "4732a77390fb4cadb6b2e64af093e7d2",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [[5, 0.8], [6, 1], [7, 1.2], [8, 1.4], [9, 1.8], [10, 2], [11, 2], [12, 2], [13, 2.4], [14, 2.8], [15, 5.5], [16, 11], [17, 22], [18, 22], [19, 22]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 4], ["!=", "const_st", 3]]
  }, {
    "id": "afb0e846c4f643d5bb5b7ce4b7b1289d",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [[10, 1.8], [11, 2], [12, 2], [13, 2], [14, 2.4], [15, 2.8], [16, 5.5], [17, 11], [18, 11], [19, 11]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 3], ["!=", "const_st", 3]]
  }, {
    "id": "e5330d7cb9844966a63c1d1133aad8c6",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [[5, 0.8], [6, 1], [7, 1.2], [8, 1.4], [9, 1.8], [10, 2], [11, 2], [12, 2], [13, 2.4], [14, 2.8], [15, 5.5], [16, 11], [17, 22], [18, 22], [19, 22]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 3], ["!=", "const_st", 3]]
  }, {
    "id": "c5508c3c991146b59c84b61651cd020d",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [[10, 1.8], [11, 1.8], [12, 2], [13, 2], [14, 3], [15, 6], [16, 9], [17, 18], [18, 18], [19, 18]],
        "base": 1.2
      },
      "line-color": "#0d488a",
      "line-width": {
        "stops": [[10, 1], [11, 1], [12, 1], [13, 1.2], [14, 1.2], [15, 1.4], [16, 1.4], [17, 1.6], [18, 1.6], [19, 1.6]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3], ["==", "kind", 2]]
  }, {
    "id": "728790b889e54d94b11fe65357b53144",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "source-layer": "Road",
    "paint": {
      "line-gap-width": {
        "stops": [[5, 1], [6, 1.2], [7, 1.4], [8, 1.6], [9, 2], [10, 1.8], [11, 2], [12, 2.4], [13, 3], [14, 6], [15, 9], [16, 18], [17, 32], [18, 32], [19, 32]],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0d488a",
      "line-width": {
        "stops": [[5, 0], [6, 0], [7, 0.8], [8, 0.8], [9, 0.8], [10, 1], [11, 1], [12, 1], [13, 1.2], [14, 1.2], [15, 1.4], [16, 1.4], [17, 1.6], [18, 1.6], [19, 1.6]],
        "base": 1.2
      }
    },
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3], ["==", "kind", 2]]
  }, {
    "id": "c3312248c73849cb9693f1709de736b5",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [[10, 1.8], [11, 1.8], [12, 2], [13, 2], [14, 3], [15, 6], [16, 9], [17, 18], [18, 18], [19, 18]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3], ["==", "kind", 2]]
  }, {
    "id": "8da1606a12274e5098439c6629d9cc71",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [[5, 1], [6, 1.2], [7, 1.4], [8, 1.6], [9, 2], [10, 1.8], [11, 2], [12, 2.4], [13, 3], [14, 6], [15, 9], [16, 18], [17, 32], [18, 32], [19, 32]],
        "base": 1.2
      }
    },
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3], ["==", "kind", 2]]
  }, {
    "id": "cd76b781ac994d3a840a298aab54f07a",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [[10, 1.8], [11, 1.8], [12, 2], [13, 2], [14, 3], [15, 5], [16, 7.5], [17, 15], [18, 15], [19, 15]],
        "base": 1.2
      },
      "line-color": "#0d488a",
      "line-width": {
        "stops": [[10, 1], [11, 1], [12, 1], [13, 1.2], [14, 1.2], [15, 1.4], [16, 1.4], [17, 1.6], [18, 1.6], [19, 1.6]],
        "base": 1.2
      }
    },
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3], ["==", "kind", 1]]
  }, {
    "id": "e49ae54ca623477bb3f951c63053a908",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "paint": {
      "line-gap-width": {
        "stops": [[5, 1], [6, 1.2], [7, 1.4], [8, 1.6], [9, 2], [10, 1.8], [11, 2], [12, 2.4], [13, 3], [14, 5], [15, 7.5], [16, 15], [17, 30], [18, 30], [19, 30]],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0d488a",
      "line-width": {
        "stops": [[5, 0], [6, 0], [7, 0.8], [8, 0.8], [9, 0.8], [10, 1], [11, 1], [12, 1], [13, 1.2], [14, 1.2], [15, 1.4], [16, 1.4], [17, 1.6], [18, 1.6], [19, 1.6]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3], ["==", "kind", 1]]
  }, {
    "id": "ce17deb082ba403e8157a7db37d86879",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [[10, 1.8], [11, 1.8], [12, 2], [13, 2.4], [14, 3], [15, 5], [16, 7.5], [17, 15], [18, 15], [19, 15]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3], ["==", "kind", 1]]
  }, {
    "id": "cded377bb22a4c69a3c9a86b8b115b26",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [[5, 1], [6, 1.2], [7, 1.4], [8, 1.6], [9, 1.8], [10, 2], [11, 1.8], [12, 2.4], [13, 3], [14, 5], [15, 7.5], [16, 15], [17, 30], [18, 30], [19, 30]],
        "base": 1.2
      }
    },
    "minzoom": 14.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3], ["==", "kind", 1]]
  }, {
    "id": "590969b7dedd44588ec204262058798d",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "source-layer": "Road",
    "paint": {
      "line-dasharray": [3, 3],
      "line-gap-width": {
        "stops": [[13, 1], [14, 1.4], [15, 2.8], [16, 6.4], [17, 10], [18, 10], [19, 10]],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [[13, 0], [14, 0.6], [15, 0.8], [16, 1.2], [17, 1.6], [18, 1.6], [19, 1.6]],
        "base": 1.2
      }
    },
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 8], ["==", "const_st", 1]]
  }, {
    "id": "b75bc980b5054d9e897ee6592726160e",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "none", "line-cap": "butt" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": { "stops": [[13, 1], [14, 1.4], [15, 2.8], [16, 6.4], [17, 10], [18, 10], [19, 10]], "base": 1.2 }
    },
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 8], ["==", "const_st", 1]]
  }, {
    "id": "c6131ca7c2f347d2872c0b1b87c1ea9c",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "paint": {
      "line-dasharray": [3, 3],
      "line-gap-width": {
        "stops": [[13, 2], [14, 2.8], [15, 7.2], [16, 10], [17, 16], [18, 16], [19, 16]],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [[13, 0.8], [14, 0.9], [15, 1], [16, 1.2], [17, 1.6], [18, 1.6], [19, 1.6]],
        "base": 1.2
      }
    },
    "source-layer": "Road",
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 7], ["!=", "const_st", 3]]
  }, {
    "id": "202a470ce4734aa5898a776a622bffc9",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "none", "line-cap": "butt" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": { "stops": [[13, 2], [14, 2.8], [15, 7.2], [16, 10], [17, 16], [18, 16], [19, 16]], "base": 1.2 }
    },
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 7], ["!=", "const_st", 3]]
  }, {
    "id": "aa458bc29d044d048c343fe06e25fc3c",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "source-layer": "Road",
    "paint": {
      "line-dasharray": [3, 3],
      "line-gap-width": {
        "stops": [[13, 4.2], [14, 4.8], [15, 7.2], [16, 10], [17, 24], [18, 24], [19, 24]],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": {
        "stops": [[13, 0.8], [14, 0.8], [15, 0.8], [16, 1], [17, 1.2], [18, 1.2], [19, 1.2]],
        "base": 1.2
      }
    },
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 6], ["!=", "const_st", 3]]
  }, {
    "id": "eef9647da1bc40189a4d51ab816cda71",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "none", "line-cap": "butt" },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#0f3865",
      "line-width": { "stops": [[13, 4.2], [14, 4.8], [15, 7.2], [16, 10], [17, 24], [18, 24], [19, 24]], "base": 1.2 }
    },
    "source-layer": "Road",
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 6], ["!=", "const_st", 3]]
  }, {
    "id": "3eb671de426b45afab7a6775b2b8e16e",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "paint": {
      "line-dasharray": [3, 3],
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [[13, 2.4], [14, 2.8], [15, 5.5], [16, 11], [17, 22], [18, 22], [19, 22]],
        "base": 1.2
      },
      "line-color": "#1e5aa5",
      "line-width": { "stops": [[13, 1], [14, 1], [15, 1.2], [16, 1.2], [17, 1.4], [18, 1.4], [19, 1.4]], "base": 1.2 }
    },
    "source-layer": "Road",
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 4], ["==", "const_st", 1]]
  }, {
    "id": "b79a33d32b554f98bec7231b0d0dd7ad",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "none", "line-cap": "butt" },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": { "stops": [[13, 2.4], [14, 2.8], [15, 5.5], [16, 11], [17, 22], [18, 22], [19, 22]], "base": 1.2 }
    },
    "source-layer": "Road",
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 4], ["!=", "const_st", 3]]
  }, {
    "id": "e10ce3e7737e4b2dae55775843d61347",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "paint": {
      "line-dasharray": [3, 3],
      "line-translate-anchor": "viewport",
      "line-gap-width": {
        "stops": [[13, 2.4], [14, 2.8], [15, 5.5], [16, 11], [17, 22], [18, 22], [19, 22]],
        "base": 1.2
      },
      "line-color": "#1e5aa5",
      "line-width": { "stops": [[13, 1], [14, 1], [15, 1.2], [16, 1.2], [17, 1.4], [18, 1.4], [19, 1.4]], "base": 1.2 }
    },
    "source-layer": "Road",
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 3], ["==", "const_st", 1]]
  }, {
    "id": "3fe08851eb9e441db96af489765dcf9b",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "none", "line-cap": "butt" },
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": { "stops": [[13, 2.4], [14, 2.8], [15, 5.5], [16, 11], [17, 22], [18, 22], [19, 22]], "base": 1.2 }
    },
    "source-layer": "Road",
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["==", "kind", 3], ["!=", "const_st", 3]]
  }, {
    "id": "b8a3e91f01a749c082bf178f55b13886",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "source-layer": "Road",
    "paint": {
      "line-dasharray": [3, 3],
      "line-gap-width": { "stops": [[13, 3], [14, 6], [15, 9], [16, 18], [17, 32], [18, 32], [19, 32]], "base": 1.2 },
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [[13, 1.2], [14, 1.2], [15, 1.4], [16, 1.4], [17, 1.6], [18, 1.6], [19, 1.6]],
        "base": 1.2
      }
    },
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3], ["==", "kind", 2]]
  }, {
    "id": "cd7b14d9464243cc8c64593208d36881",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "none", "line-cap": "butt" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-opacity": 1.0,
      "line-width": { "stops": [[13, 3], [14, 6], [15, 9], [16, 18], [17, 32], [18, 32], [19, 32]], "base": 1.2 }
    },
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3], ["==", "kind", 2]]
  }, {
    "id": "9520d64f8c014be597513c2deb66dbe2",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
    "source-layer": "Road",
    "paint": {
      "line-gap-width": {
        "stops": [[13, 3], [14, 5], [15, 7.5], [16, 15], [17, 30], [18, 30], [19, 30]],
        "base": 1.2
      },
      "line-translate-anchor": "viewport",
      "line-dasharray": [3, 3],
      "line-color": "#1e5aa5",
      "line-width": {
        "stops": [[13, 1.2], [14, 1.2], [15, 1.4], [16, 1.4], [17, 1.6], [18, 1.6], [19, 1.6]],
        "base": 1.2
      }
    },
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3], ["==", "kind", 1]]
  }, {
    "id": "d26c8bd9995d4e488a5cf73a1124bee2",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": { "line-join": "round", "visibility": "none", "line-cap": "butt" },
    "source-layer": "Road",
    "paint": {
      "line-translate-anchor": "viewport",
      "line-color": "#1e5aa5",
      "line-width": { "stops": [[13, 3], [14, 5], [15, 7.5], [16, 15], [17, 30], [18, 30], [19, 30]], "base": 1.2 }
    },
    "minzoom": 13.0,
    "type": "line",
    "filter": ["all", ["!=", "const_st", 3], ["==", "kind", 1]]
  }, {
    "id": "81f372a954534a0d974720c11caff11c",
    "maxzoom": 16,
    "source": "Buildingmore",
    "layout": { "visibility": "visible" },
    "source-layer": "Buildingmore",
    "paint": { "fill-outline-color": "#1f5ba9", "fill-color": "#1f5ba9", "fill-antialias": true },
    "minzoom": 14,
    "type": "fill"
  }, {
    "id": "3e70be2d5cd74f21ba8768c81ea69879",
    "maxzoom": 19.5,
    "source": "Buildingmore",
    "layout": { "visibility": "visible" },
    "paint": {
      "fill-extrusion-color": "#2674dc",
      "fill-extrusion-translate-anchor": "viewport",
      "fill-extrusion-base": 0,
      "fill-extrusion-opacity": 0.75,
      "fill-extrusion-translate": [0, 0],
      "fill-extrusion-height": { "property": "levels", "type": "identity" }
    },
    "source-layer": "Buildingmore",
    "minzoom": 14.0,
    "type": "fill-extrusion"
  }, {
    "id": "f76728d329e945828bda8ea23cf72aad",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": {
      "text-size": {
        "stops": [[10, 11], [11, 11], [12, 11], [13, 11], [14, 11], [15, 11], [16, 12], [17, 12], [18, 12], [19, 12]],
        "base": 1
      },
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 11.0,
      "text-field": "{name_zh}",
      "symbol-placement": "line"
    },
    "source-layer": "Road",
    "paint": {
      "text-halo-color": "#05132e",
      "text-halo-width": 1.0,
      "text-color": "#60a1f0",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 10], ["!=", "const_st", 3]]
  }, {
    "id": "d7a7d7a6acab4395807a84bf48af7acd",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": {
      "text-size": {
        "stops": [[10, 11], [11, 11], [12, 11], [13, 11], [14, 11], [15, 11], [16, 12], [17, 13], [18, 13], [19, 13]],
        "base": 1
      },
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "symbol-placement": "line"
    },
    "paint": {
      "text-halo-color": "#05132e",
      "text-color": "#60a1f0",
      "text-halo-width": 1.0,
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Road",
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 9], ["!=", "const_st", 3]]
  }, {
    "id": "b02926a6933c45a5ac124d4fdbbc0696",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": {
      "text-size": {
        "stops": [[10, 11], [11, 11], [12, 12], [13, 12], [14, 14], [15, 14], [16, 14], [17, 16], [18, 16], [19, 16]],
        "base": 1
      },
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "symbol-placement": "line"
    },
    "paint": {
      "text-halo-color": "#05132e",
      "text-color": "#60a1f0",
      "text-halo-width": 1.0,
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "source-layer": "Road",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 8], ["==", "const_st", 1], ["!=", "form", "12"]]
  }, {
    "id": "d2b4cc81c3ca4e8284f19c6887122c36",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": {
      "text-size": {
        "stops": [[10, 11], [11, 11], [12, 12], [13, 12], [14, 12], [15, 14], [16, 14], [17, 16], [18, 16], [19, 16]],
        "base": 1
      },
      "text-pitch-alignment": "viewport",
      "text-padding": 2.0,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "map",
      "symbol-placement": "line"
    },
    "source-layer": "Road",
    "paint": {
      "text-halo-color": "#05132e",
      "text-color": "#60a1f0",
      "text-halo-width": 1.0,
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 7], ["!=", "const_st", 3]]
  }, {
    "id": "69f12dd434554b9c80ca72b669a26eac",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": {
      "text-size": {
        "stops": [[10, 10], [11, 11], [12, 11], [13, 12], [14, 12], [15, 13], [16, 14], [17, 15], [18, 15], [19, 15]],
        "base": 1
      },
      "visibility": "visible",
      "text-padding": 2.0,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "symbol-placement": "line"
    },
    "paint": {
      "text-halo-color": "#05132e",
      "text-halo-width": 1.0,
      "text-color": "#60a1f0",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Road",
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 6], ["!=", "const_st", 3]]
  }, {
    "id": "2045a54927e54f659e6ed79d38e66259",
    "maxzoom": 19.5,
    "source": "Railway",
    "layout": {
      "text-size": {
        "stops": [[7, 10], [12, 10], [13, 10], [14, 11], [15, 11], [16, 11], [17, 12], [18, 12], [19, 12]],
        "base": 1
      },
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 2.0,
      "text-field": "{name_zh}",
      "symbol-placement": "line"
    },
    "paint": {
      "text-halo-color": "#05132e",
      "text-halo-width": 1.0,
      "text-color": "#38a5f7",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Railway",
    "minzoom": 12.0,
    "type": "symbol"
  }, {
    "id": "ac20054a4ca04a88904402f8df3aaf51",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": {
      "text-size": 11,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "symbol-placement": "line"
    },
    "paint": {
      "text-halo-color": "#05132e",
      "text-color": "#60a1f0",
      "text-halo-width": 1.0,
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "source-layer": "Road",
    "minzoom": 11.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 13], ["!=", "const_st", 3]]
  }, {
    "id": "4e8cdca39b8c4faeb07c7e6312093d6e",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": {
      "text-size": 9.0,
      "icon-image": "county-15-{brief_cnt}",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_brief}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "symbol-placement": "line",
      "icon-size": 0.94
    },
    "paint": {
      "text-color": "#4a4a4a",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, 0]
    },
    "source-layer": "Road",
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["!=", "const_st", 3], ["==", "kind", 6]]
  }, {
    "id": "67374f75b36e4b1cbb9bac594b472ee9",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": {
      "text-size": 9.0,
      "icon-image": "Provincial-15-{brief_cnt}",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_brief}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.94,
      "symbol-placement": "line"
    },
    "source-layer": "Road",
    "paint": {
      "text-color": "#ffffff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, 0]
    },
    "minzoom": 9,
    "type": "symbol",
    "filter": ["all", ["!=", "const_st", 3], ["==", "kind", 4]]
  }, {
    "id": "7bafb845700c41cab11c97ddf12ea33b",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0], ["in", "kindcode", "150101", "150102"]]
  }, {
    "id": "63ed5729bc2e48b5ab3e663116b75998",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "150101"], ["==", "accessflag", 0]]
  }, {
    "id": "ec0b17fd6eb74b2c89f472d77f148522",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "150103", "150104"], ["==", "accessflag", 0]]
  }, {
    "id": "a48757d6716b484ab4b48bef5e6dfbbc",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "230130", "230219", "230220", "230221", "230228", "230229"], ["==", "accessflag", 0]]
  }, {
    "id": "62357f75a04a4ccdb9b47ebbf1dd78aa",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_170100_16",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0], ["==", "kindcode", "210105"]]
  }, {
    "id": "13600185014e40168b96cf296f48b9dc",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "210101", "210102", "210103", "210104", "210201", "210202", "210203", "210204", "210206", "210207", "210209", "210210", "210213", "210214", "210216", "210217", "210218", "210219", "210301", "210302", "210303", "210400"], ["==", "accessflag", 0]]
  }, {
    "id": "a7a3eafe5152480faf2a57d1c6982ccb",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "200200", "200300", "200400", "200404", "200405"], ["==", "accessflag", 0]]
  }, {
    "id": "c9f180d92516401a9fc9b07fe50234ac",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_190200_16",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0], ["==", "kindcode", "190204"]]
  }, {
    "id": "01368abf3385497495d1450881952a1d",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_190100_16",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0], ["in", "kindcode", "190500", "190501"]]
  }, {
    "id": "364d9e58041a42aeb25bbb770b902097",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "190111", "190112", "190113", "190114", "190301", "190502"], ["==", "accessflag", 0]]
  }, {
    "id": "dd6536887a3041d5ace774a17c4a235b",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "180209", "180210", "180211"], ["==", "accessflag", 0]]
  }, {
    "id": "11c4464cc31242d18caef402c9955106",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "180206", "180207", "180208", "180301", "180302", "180303"], ["==", "accessflag", 0]]
  }, {
    "id": "5c0416d17ae449a5b076191f33328322",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_180201_16",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 17,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "180201", "180202", "180203", "180204", "180205"], ["==", "accessflag", 0]]
  }, {
    "id": "6643232cde69458aad5e9d6bcce7c9b0",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0], ["==", "kindcode", "170107"]]
  }, {
    "id": "910ce16d31fc4e2fa0777d798d787d78",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "170106", "170108", "170109", "170110", "170201"], ["==", "accessflag", 0]]
  }, {
    "id": "fc25ab6a1bba4f23a5a5d0a141a36561",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "160201", "160202"], ["==", "accessflag", 0]]
  }, {
    "id": "7937dfb7b1864956a294618ab9ac454d",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "160108", "160110", "160209"], ["==", "accessflag", 0]]
  }, {
    "id": "18b61e0c5bca4141b08bbce4215914dd",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "140202"], ["==", "accessflag", 0]]
  }, {
    "id": "ec84bf97a7b74b8e987a764151686169",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "symbol-placement": "point",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "130101", "130200", "130201", "130202", "130303", "130304", "130501", "130502"], ["==", "accessflag", 0]]
  }, {
    "id": "7cf35495ac5b4cba9c504b65819525ef",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "130104", "130105", "130203", "130204", "130205", "130206", "130207", "130302", "130401", "130403", "130404", "130405", "130406", "130407", "130408", "130409", "130410", "130411", "130800", "130801", "130803", "130804", "130805", "130806", "130807"], ["==", "accessflag", 0]]
  }, {
    "id": "9f135170a5914261855b274af41f9013",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": { "stops": [[11, 12], [18, 20]], "base": 1 },
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-padding": 0.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "center",
      "icon-size": 1,
      "text-offset": [0, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#75b3ff",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, 0]
    },
    "source-layer": "Poi",
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0], ["in", "kindcode", "230201", "230202"]]
  }, {
    "id": "d64bfc4f89834533a7f5a93b8e62fae1",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230207_16",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "center",
      "icon-size": 0.89,
      "text-offset": [0, 0]
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 1.5,
      "text-color": "#000000",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "source-layer": "Poi",
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "230211", "230212", "230214", "230223", "230224", "230225", "230213"], ["==", "accessflag", 0]]
  }, {
    "id": "ce7bb0b354fc48daa3b73b65d2c45538",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_22",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "center",
      "icon-size": 0.89,
      "text-offset": [0, 0]
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 1.5,
      "text-color": "#000000",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "source-layer": "Poi",
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "230203", "230204", "230230"], ["==", "accessflag", 0]]
  }, {
    "id": "25beb17c861445a2a06ab5fa23b5ca18",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "220200"], ["==", "accessflag", 0]]
  }, {
    "id": "e401063617984f02ae080a94ba004df0",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_200103_16",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0], ["==", "kindcode", "200103"]]
  }, {
    "id": "9ed793771fac463ca59bf2dc75711ad4",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180304"], ["==", "accessflag", 0]]
  }, {
    "id": "3dc39621020b48ada64143efa975b98d",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "180100", "180101", "180102", "180103", "180104", "180105", "180106", "180306", "180400"], ["==", "accessflag", 0], ["!=", "name_zh", "澳門總督府"]]
  }, {
    "id": "3629af972c7649b29e105c0a5f694d8d",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "symbol-placement": "line",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0], ["in", "kindcode", "180107", "180110"]]
  }, {
    "id": "d9ec8748a47e4c51a2a166a137b56114",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_170100_16",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "170103", "170104"], ["==", "accessflag", 0]]
  }, {
    "id": "aea7ccacd60c4965b795dc204dd34dba",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0], ["==", "kindcode", "170105"]]
  }, {
    "id": "b991c79f4b47400aa8161d476fec4b9c",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_160102_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0], ["==", "kindcode", "160103"]]
  }, {
    "id": "5f08e31ce9c84d31b6e1b87159fe0a89",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "160100", "160207", "160208"], ["==", "accessflag", 0]]
  }, {
    "id": "e0422a1c12064a428f8d0486b728cbd2",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-max-width": 10.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "160101", "160102", "160104", "160204", "160205", "160206"], ["==", "accessflag", 0]]
  }, {
    "id": "25edcd6e05a2492f92c7147891e40802",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "150200"], ["==", "accessflag", 0]]
  }, {
    "id": "65c57973b4004ed3b026802acf326b3a",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-justify": "center",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "130102", "130106", "130301"], ["==", "accessflag", 0]]
  }, {
    "id": "cb2d1a22b9d44827848cf35255af50e2",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "130402", "130601", "130602", "130603", "130700", "130701", "130702", "130703", "130704", "130705"], ["==", "accessflag", 0]]
  }, {
    "id": "46ebd17c49c047e69e8cfd750cbec444",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0], ["==", "kindcode", "120104"]]
  }, {
    "id": "1ec6fc7ef2e44739827261ca191c078e",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-max-width": 10.0,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.5, 0],
      "text-size": 11.0,
      "text-justify": "center",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "220100", "220400"], ["==", "accessflag", 0]]
  }, {
    "id": "e5444a8f6f5d44a2b2dc97f24cebe381",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "text-padding": 2.0,
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "240100"], ["==", "accessflag", 0]]
  }, {
    "id": "25f44734567b4baaa164651e1a1b5ca5",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "text-font": ["NORMAL"],
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "110101", "110102", "110103", "110200", "110301", "110302", "110303", "110304"], ["==", "accessflag", 0]]
  }, {
    "id": "770a01d7586944588055f35d08fca20a",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "120101", "120102", "120103", "120201"], ["==", "accessflag", 0]]
  }, {
    "id": "35adaf9d3ca7462a9d7644d78fb202c6",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "120201"], ["==", "generation", 2], ["==", "accessflag", 0]]
  }, {
    "id": "c9b85eab052d41c7963cb8a530dba293",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "icon-image": "poi_door_16",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89
    },
    "source-layer": "Poi",
    "paint": { "icon-translate-anchor": "viewport", "icon-color": "#ff0000" },
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["in", "accessflag", 2, 1]]
  }, {
    "id": "f8fa7f52707848fd8f4ad4d4c5565bf1",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0], ["==", "kindcode", "190400"]]
  }, {
    "id": "9a8fb03d607142f3b00d01ae53ce9f87",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "190401", "190402", "190403", "190404"], ["==", "accessflag", 0]]
  }, {
    "id": "287a3e7e462645c5b1c833b0c8285293",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_190200_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "190200", "190201"], ["==", "accessflag", 0]]
  }, {
    "id": "71b7b91055ce4e8ba61fe085f3032633",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180309"], ["==", "accessflag", 0]]
  }, {
    "id": "5d112ce4869b4326bdb9abd35d6a1cb3",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-translate": [0, 0],
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "180307", "180308"], ["==", "accessflag", 0]]
  }, {
    "id": "2103fd66a1c649c39d730bfdf82e807d",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_180304_16",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0], ["==", "kindcode", "180305"]]
  }, {
    "id": "b7cf3a85a9094e9082b9fe35eb7b95ac",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_170100_16",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "170100", "170101", "170102"], ["==", "accessflag", 0]]
  }, {
    "id": "a37a985dc997471a86daf65d8cc57ea5",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_{kindcode}_16",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [1, 0]
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 1.5,
      "text-color": "#000000",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Poi",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "210215"], ["==", "accessflag", 0]]
  }, {
    "id": "f2aa757ebedd40b6b4a013b680f35025",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "200102", "200201"], ["==", "accessflag", 0]]
  }, {
    "id": "a805b657dbec40fc8fd52745e562554e",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "160105", "160203", "160106", "160107"], ["==", "accessflag", 0]]
  }, {
    "id": "89fa8b69c52d46388d18670b0f49add5",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "", "160109"], ["==", "accessflag", 0]]
  }, {
    "id": "edc01570e5204d2e994013b1cbb269c7",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "140101", "140104", "140201", "140301", "140302", "140303", "140304"], ["==", "accessflag", 0]]
  }, {
    "id": "4c4d7bcd0016489197f00be5035a79f0",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "210211", "210304"], ["==", "accessflag", 0]]
  }, {
    "id": "b60e88226c9040adba778d0a73b1d702",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "230125", "230206", "230207"], ["==", "accessflag", 0]]
  }, {
    "id": "1347a47a79bf4b36b0ca405fcbd38570",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "230127", "230128", "230129", ""], ["==", "accessflag", 0]]
  }, {
    "id": "18eb5417c78b45efb77bc3cf97b97d6f",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230126"], ["==", "generation", 2], ["==", "accessflag", 0]]
  }, {
    "id": "57a25c7269be49f195058f1f192457c4",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "220300"], ["==", "accessflag", 0]]
  }, {
    "id": "95d788408ca641d28709e79752d0e94d",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_190100_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "190100", "190101", "190103", "190104", "190105", "190106"], ["==", "accessflag", 0]]
  }, {
    "id": "6143e7813b894923bdf682161285b04d",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_190101_16",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "accessflag", 0], ["==", "kindcode", "190110"]]
  }, {
    "id": "ec7fd712e0b841098a3f883d7494a751",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_190100_16",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190102"], ["==", "accessflag", 0]]
  }, {
    "id": "25f7471512604db2b27c3704052b878c",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180109"], ["==", "accessflag", 0]]
  }, {
    "id": "095551b5f06a46fb9c5b3222ce5af117",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "200105"], ["==", "accessflag", 0]]
  }, {
    "id": "3c3ee448831044dd81799f12983c15c6",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "250100", "250200"], ["==", "accessflag", 0]]
  }, {
    "id": "ffc91e37abf14478aef8ec2cab6d3545",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "120201"], ["==", "accessflag", 0]]
  }, {
    "id": "ed5ef49a6b2f4151a3a3bd455067127e",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "230100", "230108", "230226"], ["==", "accessflag", 0]]
  }, {
    "id": "cee0707c95b744a9ae275eb32cf3635f",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180310"], ["==", "accessflag", 0]]
  }, {
    "id": "e585c656a61b44ee8d65534046b928a3",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_190101_16",
      "text-pitch-alignment": "viewport",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "190107", "190108"], ["==", "accessflag", 0]]
  }, {
    "id": "e22cb18196b4477e9c462f2ad6ca61c1",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_{kindcode}_16",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Poi",
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230126"], ["==", "generation", 1], ["==", "accessflag", 0]]
  }, {
    "id": "239ce74f3dec4299a35755086bd8032a",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "text-size": 11.0,
      "icon-image": "point-11",
      "visibility": "none",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "source-layer": "Poi",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 11.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "260000", "260100"], ["==", "accessflag", 0]]
  }, {
    "id": "c0d72901ea5f47f7b0b18052ba269e0a",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130101_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 10.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130705"]]
  }, {
    "id": "114aaba4001143838047d1afd2cfec64",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130106_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 10.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 12,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130104"]]
  }, {
    "id": "83f85aeda27e422aa099182ef1b97027",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130106_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 10.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 12,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130103"]]
  }, {
    "id": "1904645ee18b4aed8098463b838824a9",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130106_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 10.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "135036"]]
  }, {
    "id": "5aa8f21387df41f4a7247b6cbbd6343a",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 10.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "210217"]]
  }, {
    "id": "6db8c519267a435cae05974f1c391854",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "icon-image": "poi_code_180101_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 0.0,
      "text-field": "{name_zh}",
      "text-max-width": 10.0,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-justify": "center",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180102"]]
  }, {
    "id": "302ef4098ae3448eb4bc91ea9867f36f",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "icon-image": "poi_code_180101_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-padding": 0.0,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 10.0,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-justify": "center",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180101"]]
  }, {
    "id": "f293fa15d9574ce6970f899fac7d4f38",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190403_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 10.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190403"]]
  }, {
    "id": "57ce9024c73548bfa9f2e327632d0fd8",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190402_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 10.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190402"]]
  }, {
    "id": "3f8e2a4a84b543e384b65ff82ed00b09",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190404 _16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 10.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 16,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190404"]]
  }, {
    "id": "c8f4cae9c968498b99463c04078f4668",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160101_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 10.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160101"]]
  }, {
    "id": "be0ee5627ef04283b9d6bf6fdb9d5538",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_170100_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 10.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "170106"]]
  }, {
    "id": "ab42e3e471334e61aedd7122c9852bb4",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 10.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "220400", "165026"]]
  }, {
    "id": "90f3d7c3e1c24e3a9be9869bd3bf8291",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 10.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130702"]]
  }, {
    "id": "ec7328894ad24bdca07f1891e28d202d",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 10.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130101"]]
  }, {
    "id": "92e6e6cd22064b73a2bb965d86edf0f2",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_120201_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 10.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "215201"]]
  }, {
    "id": "fcbddea3ffda4a93a9329a130660e947",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 10.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 16.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "275015"]]
  }, {
    "id": "e18864643af54b18b57ba570f7d1ddfb",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "icon-image": "poi_code_180310_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-justify": "center",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180310"]]
  }, {
    "id": "de89f19f03df4a419b5cddac6c3c02fa",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "icon-image": "poi_code_180100_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 2,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-justify": "center",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185122"], ["<=", "rank", 3]]
  }, {
    "id": "0ed0a35058da4786825f8d4089bdf3be",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160206"]]
  }, {
    "id": "5e04564325344de989f2347514e68253",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160204"]]
  }, {
    "id": "fde5d50cf38e46cd8e8ee59106392c67",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160201_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160201"]]
  }, {
    "id": "57318029f4854599a8f747d2431dbaaf",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160202_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "icon-optional": false,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "165028"]]
  }, {
    "id": "8d7887cd952549d88fc139450ee2df7d",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_170100_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "170102"]]
  }, {
    "id": "71313d4d6a9640d89e6a79cefec7a673",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_170100_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "175115"]]
  }, {
    "id": "b12f33dedb6048d0871cd033b90ed192",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "160100", "220200", "225018", "215033", "215031", "275016", ""]]
  }, {
    "id": "ee3ae0b163434437be795b62b002d485",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "icon-image": "poi_code_160102_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-padding": 0.0,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "160104", ""]]
  }, {
    "id": "2756a727a4b84dd3841dbf0ecdcfe130",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_120102_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "120102"]]
  }, {
    "id": "5dfb3b65dd584632a950ec8fbec9a5e1",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_200103_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "120104"]]
  }, {
    "id": "2daaacde224443938b3641ed2549d878",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "185123", "180301"]]
  }, {
    "id": "ca5e9227952844d1b56fb3e5f31b9ce2",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11.0,
      "icon-image": "poi_code_120103_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180302"]]
  }, {
    "id": "1167acacd80a472fa28b27de335c4eb4",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_200103_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "120103"]]
  }, {
    "id": "d75bfd5828f04fd892396b723f26ef87",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130101_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130704"]]
  }, {
    "id": "ac4bb83b6fab470b9e4af532615e86c2",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130703"]]
  }, {
    "id": "504fdeb43f2e4ddea0fda420638ba289",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130700"]]
  }, {
    "id": "801dafd49c0e4f86ade65c69442d22c5",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130202"]]
  }, {
    "id": "b27e963fa25e4a0994244678c3c6ff03",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "275016"]]
  }, {
    "id": "958d28814b2841a7a6bc7d2d36d76e16",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 17.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "215035", "215204", "215205", "215206", "215207"]]
  }, {
    "id": "cfb4ed30bff54a17a3e05506a72bb54e",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_120103_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "120202"]]
  }, {
    "id": "47219fcdfa5240ac9971c01179d54a70",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180309_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180309"], ["<=", "rank", 3]]
  }, {
    "id": "066b775757e44be88d39c8c7f0a0b06f",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "icon-image": "point-11",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.5, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "symbol-placement": "point"
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "275009"], ["<=", "rank", 3]]
  }, {
    "id": "e999314ec5084c058a93680d39f710a7",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180306"]]
  }, {
    "id": "943811617525428e8d17bf7bed864ebc",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "icon-image": "poi_code_230207_16",
      "visibility": "visible",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89
    },
    "source-layer": "Poi",
    "paint": { "icon-translate-anchor": "viewport", "icon-color": "#ff0000" },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230207"]]
  }, {
    "id": "340a837df80e4051852e47624e2337bd",
    "maxzoom": 19.5,
    "source": "Poi",
    "layout": {
      "icon-image": "poi_code_230209_34",
      "visibility": "visible",
      "icon-rotation-alignment": "viewport",
      "icon-size": 1.0
    },
    "source-layer": "Poi",
    "paint": { "icon-translate-anchor": "viewport", "icon-color": "#ff0000" },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230209"]]
  }, {
    "id": "29a13d6072f74965b65623c14f46503f",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230103_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230103"]]
  }, {
    "id": "ea1d2a6b02044479800ca6d142e2cee2",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230125_16",
      "visibility": "visible",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "text-anchor": "left",
      "icon-size": 0.89
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-color": "#ff0000",
      "text-translate": [10, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "235021", "235022"], ["<", "rank", 3]]
  }, {
    "id": "f816a38446d743c79b0c7b729c205c1e",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190100_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "195130"]]
  }, {
    "id": "f5e11ab49e094ee1957a20557dcb1682",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "icon-image": "poi_code_180104_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-padding": 0.0,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-justify": "center",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180104"]]
  }, {
    "id": "fc78afed08d84cd3997d20181eff2a2b",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130801"]]
  }, {
    "id": "71885091d3f145fa9ce1c8227c6014e7",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180210"], ["<=", "rank", 2]]
  }, {
    "id": "bf5d691c46984e0f9dc98c39a15b4e1a",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 14,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160109"]]
  }, {
    "id": "981b50bc1e9e4a6c84d3dbd74e81a1ce",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160101_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "165027"]]
  }, {
    "id": "082ffb56caf7417894f55a3cda6bbfb1",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160101_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160102"]]
  }, {
    "id": "0f353069fc3e49b99f7a132147872c32",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160102_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160103"], ["<=", "rank", 1]]
  }, {
    "id": "f2748eb231e54327aa8fc95afd0bdaa0",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "icon-image": "poi_code_160105_16",
      "symbol-avoid-edges": true,
      "text-padding": 0,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160105"], ["<", "rank", 2]]
  }, {
    "id": "8ffea6aafce242a18539ebb1a965f2b0",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "icon-image": "poi_code_180209_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-justify": "center",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185121"]]
  }, {
    "id": "b798d66b2ce44158b9ebee448012d354",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180400_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185116"], [">", "rank", 1]]
  }, {
    "id": "2a41f2ac28c1406eadab43f6b3e1802b",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "icon-image": "poi_code_180304_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 2,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185120"], [">=", "name_zh", ""], ["<", "rank", 2]]
  }, {
    "id": "7008c2b5e4014fe4a79dbdca8c3a1fcb",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_150101_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "155030", "155029", "155175", "155176", "155177", "155178", "155179", "155180", "155181", "155182", "155183", "155184", "155185", "155186", "155187", "155188", "155189", "155190", "155191", "155192", "155193", "155194", "155195", "155196", "155197", "155198", "155199", "155200", "155030", "155029"]]
  }, {
    "id": "6a7be717ba164c82ac2a8fee1741af28",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "220300"]]
  }, {
    "id": "863145270f76480bb1898bceaae69c84",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_120201_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "120201"]]
  }, {
    "id": "745d845252954f33a5f7762a7fded3fd",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_200103_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 10.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "125134", "125136", "125137", "125138"]]
  }, {
    "id": "9782af61e21d426882750d12e22b33a1",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230125_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "235021"]]
  }, {
    "id": "46a10037f2d94fc3b0c168ba9607f93e",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190200_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "195133", "190201", "190202", "190203", "190204"]]
  }, {
    "id": "c787e3e15fce4a4d97e09bdb5e68a31d",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_120101_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "215032"]]
  }, {
    "id": "43e17433c1fc49d9ad711b287d7539ae",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190101_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190110"]]
  }, {
    "id": "a7cda1276c1e44a08de28900e2a4d1d8",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190100_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "195129"]]
  }, {
    "id": "5baeeaab5f6642048a62fa044386dad2",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190100_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190105"]]
  }, {
    "id": "846858e58aa24a1b914af94863810097",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190100_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190104"]]
  }, {
    "id": "5df36eedb2bb400fae78ffbdac488829",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190501"]]
  }, {
    "id": "70ddfbeefbeb4953970e9a42e1fe8ace",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190101_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "195128"]]
  }, {
    "id": "589739bf775c4ef9b34817284b6daa8b",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 14.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230206"]]
  }, {
    "id": "83d1eec61e034582b126e11f5dca6c7b",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130701"]]
  }, {
    "id": "a1627c4ec7384ae5a3fac64688a51f69",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_120103_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "200104"]]
  }, {
    "id": "0cd421af93544812bcf927005948fa06",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "200104"]]
  }, {
    "id": "71a1413bfac64f23af5d3501dcfd1e40",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "icon-image": "poi_code_180100_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 0.0,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-justify": "center",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185122"], ["<", "rank", 3]]
  }, {
    "id": "dd9104cd52a24dafadf78eef421fe822",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_1904014_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "195126"], [">=", "rank", 2]]
  }, {
    "id": "34fd1cbb27704ec5b98b44a7d46c109d",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "icon-image": "poi_code_180400_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 2.0,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185116"], ["<=", "rank", 1]]
  }, {
    "id": "acaaed9c3f564ac2bf0c68164258e11d",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160205"], ["<", "rank", 2]]
  }, {
    "id": "3a04bd75738945f1b76ba04138f6d6c9",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180400_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "195132"]]
  }, {
    "id": "f1e1112dd34c4b10b70e8310df85eea8",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "200101"]]
  }, {
    "id": "27c7d9b1ec7f4c56b57957a36c28b190",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_170100_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "170101"]]
  }, {
    "id": "e65375637c1d4cf2bbd7c6c42e5f74cf",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160102_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160103"], [">", "rank", 1]]
  }, {
    "id": "53944be7edcd43858bde4b521ff64180",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_200103_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "125139"]]
  }, {
    "id": "51443717feb143c68b0980d13815adab",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_200103_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "125140"]]
  }, {
    "id": "bb0cbfe58c314619ba90629993596562",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190100_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190102"]]
  }, {
    "id": "09f8c0edf929406cbf96eaed6f3bbe1a",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190101_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190101"]]
  }, {
    "id": "23c2e15dd927401590b98d80cec6aef0",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "icon-image": "poi_code_180106_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 2.0,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-justify": "center",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180106"]]
  }, {
    "id": "f964b6e078f84d43b3da9a3095a15870",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "point-11",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.5, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "275009"], [">=", "rank", 3]]
  }, {
    "id": "2e006a35b47d4078b3b9eb87b374f888",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "icon-image": "poi_code_180304_16",
      "symbol-avoid-edges": true,
      "text-padding": 2,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185120"], ["in", "rank", 2, 3]]
  }, {
    "id": "2be4943b824044238ddedd620684f39b",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180400_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "165024"]]
  }, {
    "id": "a020b3577b8c4487a66a1ce298504efc",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180307_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185119"]]
  }, {
    "id": "f2743d519dec47b5970a5b6103b07ed7",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180210"], [">=", "rank", 2]]
  }, {
    "id": "f9d52524b9a44c34aa399196808acdd3",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160208"]]
  }, {
    "id": "a6acaf3f107a403a90c668295e6c8e8d",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160207"]]
  }, {
    "id": "d695d05cef974b80b4202c1107caa07a",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "icon-image": "poi_code_160105_16",
      "symbol-avoid-edges": true,
      "text-padding": 0.0,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160105"], ["==", "rank", 2]]
  }, {
    "id": "e7661cc306134da2bd697f8abe53aa39",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_130102_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "130102"]]
  }, {
    "id": "96275396339d4640bd4255dabf7f8fd6",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230125_16",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-anchor": "left",
      "icon-size": 0.89
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-color": "#ff0000",
      "text-translate": [10, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "235021", "235022"], [">=", "rank", 3]]
  }, {
    "id": "9e3d93d56bae415babeeff9af17c6c22",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230103_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230107"]]
  }, {
    "id": "a26e4d9574a44076a51d88c98ad55477",
    "maxzoom": 15.0,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230103_16",
      "text-padding": 2,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230103"], [">=", "rank", 1]]
  }, {
    "id": "4df3cf6786c04adca09d52ec074057b4",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190101_16",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 12.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "190109"]]
  }, {
    "id": "be7ab06e8f614bd79d75e0a69cea1cc5",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "icon-image": "poi_code_180105_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-padding": 0.0,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 11.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180105"]]
  }, {
    "id": "110aa6247b1546db9c9c1bc9a2506b6a",
    "maxzoom": 14.0,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_1904014_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 11,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "195126"], [">=", "rank", 2]]
  }, {
    "id": "2f026810d7c8473db7de3784b707e655",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 11.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "200101"], ["in", "rank", 2, 3]]
  }, {
    "id": "03924568890e4adbad74613896832be1",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_160206_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 11.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160205"], [">=", "rank", 2]]
  }, {
    "id": "b21fa80d33c043ed8c771f8442e04c4f",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230126_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 11.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230126"]]
  }, {
    "id": "1445ea2ba6c64f53a92e8f2927b3e35e",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_190101_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 11.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "195125", "190107", "195131"]]
  }, {
    "id": "63441edea90446a19d56bd19eeb47b02",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": { "stops": [[14, 12], [15, 12], [16, 14], [17, 18], [18, 20], [19, 24]], "base": 1 },
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport"
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#75b3ff",
      "text-halo-width": 1.2,
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "minzoom": 15,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230201"], ["<=", "rank", 3]]
  }, {
    "id": "572dfaea11184c6f94c8579fd0bfc64c",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": {
        "stops": [[11, 11], [12, 11], [13, 12], [14, 13], [15, 14], [16, 16], [17, 18], [18, 20], [19, 24]],
        "base": 1
      },
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport"
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.2,
      "text-color": "#75b3ff",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "source-layer": "Annotation",
    "minzoom": 15.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230202"], ["<=", "rank", 4]]
  }, {
    "id": "facf4f144b3a4e2bba4151a396329206",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": { "stops": [[14, 12], [15, 12], [16, 14], [17, 18], [18, 20], [19, 24]], "base": 1 },
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport"
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.2,
      "text-color": "#75b3ff",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Annotation",
    "minzoom": 13.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230201"], [">=", "rank", 3]]
  }, {
    "id": "4e381961e18f4917be7874919930eb64",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": {
      "text-size": 9.0,
      "icon-image": "national-15-{brief_cnt}",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_brief}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.89,
      "symbol-placement": "line"
    },
    "source-layer": "Road",
    "paint": {
      "text-color": "#ffffff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, 0]
    },
    "minzoom": 6.0,
    "type": "symbol",
    "filter": ["all", ["in", "kind", 2, 1], ["!=", "const_st", 3]]
  }, {
    "id": "4ec24769eb1b487dbba0af504fd779f0",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": {
      "text-size": {
        "stops": [[10, 10], [11, 10], [12, 11], [13, 12], [14, 13], [15, 13], [16, 14], [17, 14], [18, 15], [19, 15]],
        "base": 1
      },
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 2.0,
      "text-field": "{name_zh}",
      "symbol-placement": "line"
    },
    "paint": {
      "text-halo-color": "#05132e",
      "text-halo-width": 1.0,
      "text-color": "#75b3ff",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Road",
    "minzoom": 10.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 4], ["==", "const_st", 1]]
  }, {
    "id": "0ccf2d3796694e8292ba2e00ea151d75",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": {
      "text-size": {
        "stops": [[10, 10], [11, 10], [12, 11], [13, 12], [14, 13], [15, 13], [16, 14], [17, 14], [18, 15], [19, 15]],
        "base": 1
      },
      "symbol-spacing": 250.0,
      "visibility": "visible",
      "text-padding": 2.0,
      "symbol-avoid-edges": false,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-ignore-placement": false,
      "text-allow-overlap": false,
      "symbol-placement": "line"
    },
    "source-layer": "Road",
    "paint": {
      "text-halo-color": "#ffffff",
      "text-color": "#423a32",
      "text-halo-width": 1.0,
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "minzoom": 10.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 3], ["!=", "const_st", 3]]
  }, {
    "id": "ce839aea9ab2437cb4955bcf3b848035",
    "maxzoom": 19.5,
    "source": "Villtown",
    "layout": {
      "text-size": {
        "stops": [[11, 12], [12, 12], [13, 12], [14, 12], [15, 12], [16, 13], [17, 13], [18, 13], [19, 13]],
        "base": 1
      },
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-padding": 0.0,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport"
    },
    "source-layer": "Villtown",
    "paint": {
      "text-halo-color": "#141518",
      "text-color": "#348ddc",
      "text-halo-width": 1.2,
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "minzoom": 10.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", "260100"]]
  }, {
    "id": "05d8802932b5471c80cdd6935cafea72",
    "maxzoom": 12.0,
    "source": "Villtown",
    "layout": {
      "text-size": { "stops": [[10, 11], [11, 11], [12, 12], [13, 12]], "base": 1 },
      "symbol-avoid-edges": true,
      "visibility": "none",
      "text-pitch-alignment": "viewport",
      "text-padding": 16.0,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "text-anchor": "center",
      "text-font": ["REGULAR"],
      "symbol-placement": "point"
    },
    "source-layer": "Villtown",
    "paint": {
      "text-halo-color": "#141518",
      "text-halo-width": 1.2,
      "text-color": "#5fa3dd",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-opacity": 1.0
    },
    "minzoom": 10.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", "260000"], ["==", "name_tag", 3]]
  }, {
    "id": "22ea1d08226c488ea78516d637f1dd3a",
    "maxzoom": 13.0,
    "source": "Villtown",
    "layout": {
      "text-size": { "stops": [[10, 11], [11, 11], [12, 12], [13, 12]], "base": 1 },
      "symbol-avoid-edges": false,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-padding": 2.0,
      "text-field": "{name_zh}",
      "text-max-width": 10.0,
      "text-ignore-placement": false,
      "text-rotation-alignment": "viewport",
      "text-anchor": "center",
      "text-allow-overlap": false,
      "text-font": ["REGULAR"],
      "symbol-placement": "point"
    },
    "paint": {
      "text-halo-color": "#141518",
      "text-color": "#5fa3dd",
      "text-halo-width": 1.2,
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-opacity": 1.0
    },
    "source-layer": "Villtown",
    "minzoom": 9.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", "260000"], ["in", "name_tag", 2, 1], ["!=", "special", 1]]
  }, {
    "id": "9eb0727540a44a7b95003d4cfba0a9bd",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": {
        "stops": [[11, 11], [12, 12], [13, 13], [14, 13], [15, 14], [16, 16], [17, 18], [18, 20], [19, 24]],
        "base": 1
      },
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport"
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.2,
      "text-color": "#75b3ff",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "source-layer": "Annotation",
    "minzoom": 11.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230202"], [">=", "rank", 4]]
  }, {
    "id": "7ec3975fcb9d4da092763b40fbf9a406",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180308_16",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 11.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180308"]]
  }, {
    "id": "2a4bc3328d044752b91851abca2fdf7d",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_180309_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "minzoom": 11.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "180309"], [">=", "rank", 3]]
  }, {
    "id": "d6d27be927034841a9629c03ba2a2a59",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "icon-image": "poi_code_160105_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-padding": 2.0,
      "visibility": "visible",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 11.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "160105"], [">=", "rank", 3]]
  }, {
    "id": "605a70ef0a234f3cbcf4638585b3044e",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "icon-image": "poi_code_180400_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-padding": 2.0,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left"
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 11.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "185116"], [">=", "rank", 4]]
  }, {
    "id": "7e1443d9798e40b0a972d4f75b7f267a",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "icon-image": "poi_code_180304_16",
      "symbol-avoid-edges": true,
      "text-padding": 2,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 10,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185120"], [">=", "rank", 4]]
  }, {
    "id": "5d10c933eeb04bb6a06a457114abb405",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": {
      "text-size": 9.0,
      "icon-image": "state-15-{brief_cnt}",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_brief}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.94,
      "symbol-placement": "line"
    },
    "source-layer": "Road",
    "paint": {
      "text-color": "#ffffff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, 0]
    },
    "minzoom": 8.0,
    "type": "symbol",
    "filter": ["all", ["!=", "const_st", 3], ["==", "kind", 3]]
  }, {
    "id": "9c0d2c58f2774a34997b8b515a87821a",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": {
      "text-size": {
        "stops": [[9, 10], [10, 10], [11, 11], [12, 12], [13, 13], [14, 14], [15, 14], [16, 16], [17, 18], [18, 18], [19, 18]],
        "base": 1
      },
      "visibility": "visible",
      "text-padding": 2.0,
      "symbol-avoid-edges": false,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "map",
      "text-ignore-placement": false,
      "text-allow-overlap": false,
      "symbol-placement": "line"
    },
    "source-layer": "Road",
    "paint": {
      "text-halo-color": "#05132e",
      "text-halo-width": 1.0,
      "text-color": "#75b3ff",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "minzoom": 9.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 2], ["!=", "const_st", 3]]
  }, {
    "id": "a87565ceb7924d5ea7b660784f5a72a5",
    "maxzoom": 19.5,
    "source": "Road",
    "layout": {
      "text-size": {
        "stops": [[9, 10], [10, 10], [11, 11], [12, 12], [13, 13], [14, 14], [15, 14], [16, 16], [17, 18], [18, 18], [19, 18]],
        "base": 1
      },
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 2.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "map",
      "symbol-placement": "line"
    },
    "source-layer": "Road",
    "paint": {
      "text-halo-color": "#05132e",
      "text-halo-width": 1.0,
      "text-color": "#75b3ff",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "minzoom": 9.0,
    "type": "symbol",
    "filter": ["all", ["==", "kind", 1], ["!=", "const_st", 3]]
  }, {
    "id": "2995b8b738114bd795504bfed50a9125",
    "maxzoom": 12.0,
    "source": "Annotation",
    "layout": {
      "text-size": 11,
      "icon-image": "poi_code_230103_16",
      "text-padding": 2.0,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.89,
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 10.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230103"], ["!=", "name_zh", ""], [">=", "rank", 2]]
  }, {
    "id": "628b1e33b7314e5486bc86ebc2f515ab",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "icon-image": "poi_code_180100_16",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-padding": 2,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11,
      "text-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport"
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-halo-width": 1.0,
      "text-color": "#5294ff",
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 11.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "185122"], [">=", "rank", 3]]
  }, {
    "id": "04cf65c84280489a815fadaa65fc0c15",
    "maxzoom": 11.0,
    "source": "Annotation",
    "layout": {
      "icon-image": "poi_code_230126_16",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-optional": false,
      "text-field": "{name_zh}",
      "text-max-width": 8.0,
      "text-allow-overlap": false,
      "icon-size": 0.89,
      "text-offset": [0.8, 0],
      "text-size": 11.0,
      "text-rotation-alignment": "viewport",
      "text-ignore-placement": false,
      "text-anchor": "left",
      "icon-rotation-alignment": "viewport",
      "symbol-placement": "point"
    },
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#5294ff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, -2]
    },
    "source-layer": "Annotation",
    "minzoom": 9.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "230126"], [">=", "rank", 4]]
  }, {
    "id": "7a6b3ae98eca4e9f84b5bf667b27261a",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11.0,
      "icon-image": "Tiananmen",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "center",
      "icon-size": 0.89,
      "text-offset": [2.6, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#05132b",
      "text-color": "#badbff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-translate": [0, 0],
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, 0]
    },
    "minzoom": 10.0,
    "type": "symbol",
    "filter": ["all", ["==", "name_zh", "天安门"]]
  }, {
    "id": "4d9152d80f4a4530b0736dc943cc1318",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": 11.0,
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport"
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 1.0,
      "text-color": "#4298f2",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "source-layer": "Annotation",
    "minzoom": 8.0,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "275006", "275007"], ["!in", "name_zh", "（台湾省详细资料暂缺）"]]
  }, {
    "id": "6fb3e3773ef24f3e9018c3dccd1e1801",
    "maxzoom": 8.0,
    "source": "Annotation",
    "layout": {
      "text-size": 10.0,
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "bottom-left",
      "text-offset": [0, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#141518",
      "text-halo-width": 1.0,
      "text-color": "#4298f2",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [6, 4]
    },
    "minzoom": 4.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "275007"], ["==", "name_zh", "赤尾屿"]]
  }, {
    "id": "abd08167b4974ef0969f1decbe4824e7",
    "maxzoom": 8,
    "source": "Annotation",
    "layout": {
      "text-size": 10,
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "top",
      "text-offset": [0, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#141518",
      "text-halo-width": 1,
      "text-color": "#4298f2",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [-12, -19]
    },
    "minzoom": 4,
    "type": "symbol",
    "filter": ["all", ["in", "kindcode", "275007"], ["!in", "name_zh", "黄尾屿", "赤尾屿", "（台湾省详细资料暂缺）"]]
  }, {
    "id": "5aa1c19175e44298a4940a2461154def",
    "maxzoom": 19.5,
    "source": "Annotation",
    "layout": {
      "text-size": {
        "stops": [[6, 11], [7, 14], [8, 14], [9, 14], [10, 15], [11, 15], [12, 16], [13, 16], [14, 17], [15, 17], [16, 18], [17, 18], [18, 19], [19, 20]],
        "base": 1
      },
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-max-width": 11.0,
      "text-rotation-alignment": "viewport",
      "text-font": ["REGULAR"],
      "text-offset": [0, 0]
    },
    "source-layer": "Annotation",
    "paint": {
      "text-halo-color": "#141518",
      "text-halo-width": 1.0,
      "text-color": "#3c9cec",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, 0]
    },
    "minzoom": 6.0,
    "type": "symbol",
    "filter": ["all", ["==", "kindcode", "275007"], ["==", "name_zh", "（台湾省详细资料暂缺）"]]
  }, {
    "id": "26195a4cb8ba4bfb8dc271de1e87ddc0",
    "maxzoom": 6.0,
    "source": "Annotation",
    "layout": {
      "text-size": 10.0,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-max-width": 6.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-font": ["REGULAR"],
      "text-offset": [0, 0]
    },
    "paint": {
      "text-halo-color": "#141518",
      "text-color": "#3c9cec",
      "text-halo-width": 1,
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [-3, 0]
    },
    "source-layer": "Annotation",
    "minzoom": 5.0,
    "type": "symbol",
    "filter": ["all", ["==", "name_zh", "（台湾省详细资料暂缺）"]]
  }, {
    "id": "6f6802538140431e89838929be84b79d",
    "maxzoom": 11.0,
    "source": "Adminflag",
    "layout": {
      "text-size": { "stops": [[9, 11], [10, 11], [11, 12]], "base": 1 },
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-padding": 2.0,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-max-width": 7.0,
      "text-rotation-alignment": "viewport",
      "text-font": ["REGULAR"],
      "symbol-placement": "point",
      "text-offset": [0, 0]
    },
    "paint": {
      "text-halo-color": "#145fb7",
      "text-halo-width": 4.0,
      "text-color": "#ffffff",
      "icon-opacity": 1.0,
      "icon-color": "#4d98dd",
      "text-translate-anchor": "viewport",
      "text-opacity": 1.0,
      "text-translate": [0, 0]
    },
    "source-layer": "Adminflag",
    "minzoom": 9.0,
    "type": "symbol",
    "filter": ["all", ["==", "type", 4], ["!in", "name_zh", "香洲区（由澳门特别行政区实施管辖）", "台湾"]]
  }, {
    "id": "820b0169344b43e19984a5a552a46572",
    "maxzoom": 9.0,
    "source": "Adminflag",
    "layout": {
      "text-size": { "stops": [[7, 11], [8, 12], [9, 12]], "base": 1 },
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "center",
      "text-font": ["REGULAR"],
      "icon-size": 1.0,
      "text-offset": [0, 0]
    },
    "source-layer": "Adminflag",
    "paint": {
      "text-halo-color": "#141518",
      "text-color": "#3c9cec",
      "text-halo-width": 1,
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [3, 0]
    },
    "minzoom": 7.0,
    "type": "symbol",
    "filter": ["all", ["==", "type", 4], ["!in", "name_zh", "台湾", "元宝区", "东港市", "集安市", "临江市", "长白朝鲜族自治县", "图们市", "饶河县", "振兴区", "振安区", "呼玛县", "爱辉区"]]
  }, {
    "id": "83e1804d717448738bbeb5e0192a725e",
    "maxzoom": 10.0,
    "source": "Adminflag",
    "layout": {
      "text-size": 13.0,
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-ignore-placement": false,
      "text-allow-overlap": false,
      "text-anchor": "center",
      "text-font": ["REGULAR"],
      "icon-size": 0.8,
      "text-offset": [0, 0]
    },
    "paint": {
      "text-halo-color": "#141518",
      "text-halo-width": 1.0,
      "text-color": "#3c9cec",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "source-layer": "Adminflag",
    "minzoom": 8.0,
    "type": "symbol",
    "filter": ["all", ["==", "capital", 3], ["in", "name_tag", 1, 3, 2]]
  }, {
    "id": "bd388f4ac9a4400ea7719e5960507216",
    "maxzoom": 8.0,
    "source": "Adminflag",
    "layout": {
      "text-size": { "stops": [[5, 11], [6, 11], [7, 12], [8, 13]], "base": 1 },
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-max-width": 8.0,
      "text-field": "{name_zh}",
      "text-ignore-placement": false,
      "text-rotation-alignment": "viewport",
      "text-allow-overlap": false,
      "text-anchor": "bottom",
      "text-font": ["REGULAR"],
      "icon-size": 0.8,
      "text-offset": [0, -0.3]
    },
    "source-layer": "Adminflag",
    "paint": {
      "text-halo-color": "#141518",
      "text-color": "#3c9cec",
      "text-halo-width": 1.0,
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, 0]
    },
    "minzoom": 5.0,
    "type": "symbol",
    "filter": ["all", ["==", "capital", 3], ["in", "name_tag", 1, 3, 2], ["!in", "name_zh", "延边朝鲜族自治州", "塔城地区", "德宏傣族景颇族自治州", "西双版纳傣族自治州", "怒江傈僳族自治州", "伊犁哈萨克自治州"]]
  }, {
    "id": "0c243ace7c744489b5dca6ab71dcd04a",
    "maxzoom": 11.0,
    "source": "Adminflag",
    "layout": {
      "text-size": 14.0,
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-ignore-placement": false,
      "text-anchor": "center",
      "text-allow-overlap": false,
      "text-font": ["REGULAR"],
      "icon-size": 1.0,
      "text-offset": [0, 0]
    },
    "paint": {
      "text-halo-color": "#141518",
      "text-halo-width": 1.0,
      "text-color": "#3c9cec",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "source-layer": "Adminflag",
    "minzoom": 8.0,
    "type": "symbol",
    "filter": ["all", ["==", "capital", 3], ["!in", "name_tag", 1, 3, 2]]
  }, {
    "id": "89f64706a3334a5b99c395e23c73a96d",
    "maxzoom": 8.0,
    "source": "Adminflag",
    "layout": {
      "icon-image": "circle-brown-11",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "text-field": "{name_zh}",
      "text-allow-overlap": false,
      "icon-size": 0.78,
      "text-offset": [0, -0.5],
      "text-size": { "stops": [[5, 11], [6, 11], [7, 12], [8, 13]], "base": 1 },
      "text-rotation-alignment": "viewport",
      "text-ignore-placement": false,
      "icon-rotation-alignment": "viewport",
      "text-anchor": "bottom",
      "text-font": ["REGULAR"],
      "icon-optional": false
    },
    "source-layer": "Adminflag",
    "paint": {
      "text-halo-color": "#141518",
      "text-color": "#3c9cec",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "icon-translate": [0, 0],
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, 0]
    },
    "minzoom": 5.0,
    "type": "symbol",
    "filter": ["all", ["==", "capital", 3], ["!in", "name_tag", 1, 3, 2], ["!in", "name_zh", "黑河", "丹东"]]
  }, {
    "id": "faa783c556ce41abb57de5e71d37c2a7",
    "maxzoom": 11.0,
    "source": "Adminflag",
    "layout": {
      "text-size": { "stops": [[9, 16], [10, 16], [11, 16]], "base": 1 },
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport"
    },
    "source-layer": "Adminflag",
    "paint": {
      "text-halo-color": "#141518",
      "text-halo-width": 1.0,
      "text-color": "#229aff",
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport"
    },
    "minzoom": 8.0,
    "type": "symbol",
    "filter": ["all", ["==", "capital", 2]]
  }, {
    "id": "0e7b86f3075d4c678a0f4d408f50159c",
    "maxzoom": 10.0,
    "source": "Adminflag",
    "layout": {
      "text-size": 16.0,
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "center",
      "text-font": ["REGULAR"],
      "icon-size": 1.0,
      "text-offset": [0, 0]
    },
    "source-layer": "Adminflag",
    "paint": {
      "icon-halo-color": "#d0021b",
      "text-halo-color": "#141518",
      "text-halo-width": 1.0,
      "text-color": "#229aff",
      "icon-halo-width": 10.0,
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "minzoom": 8.0,
    "type": "symbol",
    "filter": ["all", ["in", "capital", 1]]
  }, {
    "id": "14c6a16b069d4c8489db6ae2753f8f19",
    "maxzoom": 8.0,
    "source": "Adminflag",
    "layout": {
      "text-size": { "stops": [[4, 11], [5, 11], [6, 12], [7, 12], [8, 13]], "base": 1 },
      "icon-image": "circle-red-11",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "right",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.78,
      "text-offset": [-0.5, 0]
    },
    "paint": {
      "text-halo-color": "#141518",
      "text-halo-width": 1.0,
      "text-color": "#229aff",
      "icon-translate-anchor": "viewport",
      "icon-translate": [0, 2],
      "icon-color": "#ff0000",
      "text-translate-anchor": "viewport",
      "text-translate": [0, 0]
    },
    "source-layer": "Adminflag",
    "minzoom": 4.0,
    "type": "symbol",
    "filter": ["all", ["==", "name_zh", "澳門"]]
  }, {
    "id": "79a3bc68deaa4c33ac9ec875d7da5a2b",
    "maxzoom": 8.0,
    "source": "Adminflag",
    "layout": {
      "text-size": { "stops": [[4, 11], [5, 11], [6, 12], [7, 12], [8, 13]], "base": 1 },
      "icon-image": "circle-red-11",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "left",
      "icon-size": 0.78,
      "text-offset": [0.5, 0]
    },
    "paint": {
      "text-halo-color": "#141518",
      "text-halo-width": 1.0,
      "text-color": "#229aff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, -2]
    },
    "source-layer": "Adminflag",
    "minzoom": 4.0,
    "type": "symbol",
    "filter": ["all", ["==", "name_zh", "香港"]]
  }, {
    "id": "fea5d7cb55aa4b9ea36dde01aac28858",
    "maxzoom": 8,
    "source": "Adminflag",
    "layout": {
      "text-size": { "stops": [[4, 11], [5, 11], [6, 12], [7, 12], [8, 13]], "base": 1 },
      "icon-image": "circle-red-11",
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "top",
      "icon-rotation-alignment": "viewport",
      "icon-size": 0.78,
      "text-offset": [0, 0.5]
    },
    "source-layer": "Adminflag",
    "paint": {
      "text-halo-color": "#141518",
      "text-halo-width": 1,
      "text-color": "#229aff",
      "icon-translate-anchor": "viewport",
      "icon-translate": [0, 2],
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, 0]
    },
    "minzoom": 4,
    "type": "symbol",
    "filter": ["all", ["==", "capital", 2], ["==", "name_zh", "天津"]]
  }, {
    "id": "267b76c059fa4f589fe0cd246253542a",
    "maxzoom": 8.0,
    "source": "Adminflag",
    "layout": {
      "text-size": { "stops": [[4, 11], [5, 11], [6, 12], [7, 12], [8, 13]], "base": 1 },
      "icon-image": "circle-red-11",
      "visibility": "visible",
      "text-pitch-alignment": "viewport",
      "symbol-avoid-edges": true,
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport",
      "text-anchor": "bottom",
      "icon-size": 0.78,
      "text-offset": [0, -0.5]
    },
    "paint": {
      "text-halo-color": "#141518",
      "text-color": "#229aff",
      "text-halo-width": 1.0,
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000",
      "text-translate": [0, 0]
    },
    "source-layer": "Adminflag",
    "minzoom": 4.0,
    "type": "symbol",
    "filter": ["all", ["==", "capital", 2], ["!in", "name_zh", "香港", "澳門", "天津"]]
  }, {
    "id": "8e3d6c222e194165ad2852ea050735cb",
    "maxzoom": 8.0,
    "source": "Adminflag",
    "layout": {
      "text-size": 16.0,
      "icon-image": "star-11",
      "symbol-avoid-edges": true,
      "text-pitch-alignment": "viewport",
      "visibility": "visible",
      "text-field": "{name_zh}",
      "text-rotation-alignment": "viewport",
      "text-anchor": "bottom",
      "icon-rotation-alignment": "viewport",
      "text-offset": [0, -0.5]
    },
    "paint": {
      "text-halo-color": "#141518",
      "text-halo-width": 1.0,
      "text-color": "#229aff",
      "icon-translate-anchor": "viewport",
      "text-translate-anchor": "viewport",
      "icon-color": "#ff0000"
    },
    "source-layer": "Adminflag",
    "minzoom": 3,
    "type": "symbol",
    "filter": ["all", ["==", "capital", 1]]
  }, {
      "id": "09b62a9294d544b9943s01cc8ed5d1cd3387",
      "maxzoom": 19.5,
      "source": "Svr",
      "layout": {
        "icon-size": 0.6,
        "icon-image": ["case",
          ["==", ["get", "lightsStatus"], 'caution_Conflicting_Traffic'], "trafficYellowLight",
          ["==", ["get", "lightsStatus"], 'intersection_clearance'], "trafficYellowLight",
          ["==", ["get", "lightsStatus"], 'pre_Movement'], "trafficYellowLight",
          ["==", ["get", "lightsStatus"], 'permissive_Movement_Allowed'], "trafficGreenLight",
          ["==", ["get", "lightsStatus"], 'protected_Movement_Allowed'], "trafficGreenLight",
          ["==", ["get", "lightsStatus"], 'stop_Then_Proceed'], "trafficRedLight",
          ["==", ["get", "lightsStatus"], 'stop_And_Remain'], "trafficRedLight",
          ["==", ["get", "lightsStatus"], 'dark'], "trafficDisable",
          ["==", ["get", "lightsStatus"], 'Unavailable'], "trafficDisable",
          "icon_reddot"],
        "symbol-avoid-edges": false,
        "visibility": "visible",
        "text-size": 14.0,
        "text-field": ['to-string', ["/", ['to-number', ['get', 'likelyEndTime']], 10]],
        "text-anchor": "top",
        "text-offset": [0, -2.4],
        "icon-allow-overlap": true,
        "icon-ignore-placement": true,
        "text-allow-overlap": true,
        "text-ignore-placement": true
      },
      "paint": {
        "text-color": "#ffffff"
      },
      "minzoom": 6.0,
      "type": "symbol",
    }, {
      "id": "09b62a9294d544b9943s01cc8ed5d1cd3387dd",
      "maxzoom": 19.5,
      "source": "Rsu",
      "layout": {
        "icon-size": 0.6,
        "icon-image": "icon_reddot",
        "symbol-avoid-edges": false,
        "visibility": "visible",
        "text-size": 14.0,
        "text-field": '{rsuId}',
        "text-anchor": "top",
        "text-offset": [0, -1],
        "icon-allow-overlap": true,
        "icon-ignore-placement": true
      },
      "paint": {
        "text-color": "#fbb03b"
      },
      "minzoom": 6.0,
      "type": "symbol"
    }, {
      "id": "09b62a9294d544b9943s01cc8ed5d1cdfdsa",
      "maxzoom": 19.5,
      "source": "LimitCross",
      "layout": {
        "icon-size": 0.6,
        "icon-image": "icon_reddot",
        "symbol-avoid-edges": false,
        "visibility": "visible",
        "text-size": 14.0,
        "text-field": '{desc}',
        "text-anchor": "center",
        "icon-allow-overlap": true,
        "icon-ignore-placement": true,
        "text-allow-overlap": true,
        "text-ignore-placement": true
      },
      "paint": {
        "text-color": "#ffffff"
      },
      "minzoom": 6.0,
      "type": "symbol",
    }, {
      "id": "09b62a9294d544b9943s01cc8ed5detii",
      "maxzoom": 19.5,
      "source": "RouteRecommendSpeed",
      "layout": {
        "icon-size": 0.6,
        "icon-image": "icon_reddot",
        "symbol-avoid-edges": false,
        "visibility": "visible",
        "text-size": 14.0,
        "text-field": '{rcmSpeed}',
        "text-anchor": "center",
        "icon-allow-overlap": true,
        "icon-ignore-placement": true,
        "text-allow-overlap": true,
        "text-ignore-placement": true
      },
      "paint": {
        "text-color": "#ffffff"
      },
      "minzoom": 6.0,
      "type": "symbol",
    }
    // {
    //   "id": "09b62a9294d544b9943s01cc8ed5d1cd3387dd",
    //   "maxzoom": 19.5,
    //   "source": "Rsu",
    //   'paint': {
    //     // make circles larger as the user zooms from z12 to z22
    //     'circle-radius': {
    //       'base': 1.75,
    //       'stops': [[12, 5], [22, 10]]
    //     },
    //     'circle-color': '#fbb03b'
    //   },
    //   "minzoom": 6.0,
    //   "type": "circle",
    // }
    ]
};

export default simple;
