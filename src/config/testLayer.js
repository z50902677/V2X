import config from './config';
const simple = {
  "version": 8,
  "name": "Base",
  "sources":
    {
      "Svr": {
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
  "sprite": `${window.location.origin}/static/sprite/sprite`,
  "glyphs": `static/{fontstack}/{range}.pbf`,
  "layers": [
    {
      "id": "ea0a503778984f86be6dca8cc61977a6",
      "maxzoom": 17.5,
      "source": "",
      "layout": { "visibility": "visible" },
      "source-layer": "",
      "paint": { "background-color": "#071733" },
      "minzoom": 3.0,
      "type": "background"
    }, {
      "id": "3c523a7ad8d24f2484ffe9dc788868d9",
      "maxzoom": 17.5,
      "source": "Waterface",
      "layout": { "visibility": "visible" },
      "paint": {
        "fill-outline-color": "#1b4073",
        "fill-color": "#1b4073",
        "fill-antialias": true,
        "fill-translate-anchor": "viewport"
      },
      "source-layer": "Waterface",
      "minzoom": 5.0,
      "type": "fill",
      "filter": ["all", ["==", "kind", 1]]
    }, {
      "id": "c837beca89dc467cbb7c1b5375fc5a29",
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
      "filter": ["all", ["==", "kind", 2], [">=", "display_class", 4], [">=", "area_level", 50]]
    }, {
      "id": "493dd4721f504821a18e109a731beeb4",
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
      "minzoom": 3.0,
      "type": "fill",
      "filter": ["all", ["==", "kind", 2], [">=", "display_class", 7]]
    }, {
      "id": "590d9507735b4e6da85b90a40cfeb450",
      "maxzoom": 17.5,
      "source": "Landuse",
      "layout": { "visibility": "visible" },
      "paint": {
        "fill-outline-color": "#071637",
        "fill-color": "#071637",
        "fill-antialias": true,
        "fill-translate-anchor": "viewport"
      },
      "source-layer": "Landuse",
      "minzoom": 12,
      "type": "fill",
      "filter": ["all", ["in", "kind", 31, 38]]
    }, {
      "id": "370711e55bc64e2c8139f73e3138d072",
      "maxzoom": 17.5,
      "source": "Landuse",
      "layout": { "visibility": "visible" },
      "paint": {
        "fill-outline-color": "#0e2351",
        "fill-color": "#0e2351",
        "fill-antialias": true,
        "fill-translate-anchor": "viewport"
      },
      "source-layer": "Landuse",
      "minzoom": 12,
      "type": "fill",
      "filter": ["all", ["==", "kind", 11]]
    }, {
      "id": "674a008052bc46a885a7570ed7bb9ddb",
      "maxzoom": 17.5,
      "source": "Landuse",
      "layout": { "visibility": "visible" },
      "paint": {
        "fill-outline-color": "#112b64",
        "fill-color": "#112b64",
        "fill-antialias": true,
        "fill-translate-anchor": "viewport"
      },
      "source-layer": "Landuse",
      "minzoom": 12,
      "type": "fill",
      "filter": ["all", ["==", "kind", 12]]
    }, {
      "id": "2d859317394a41fda3bfd394c91fa102",
      "maxzoom": 17.5,
      "source": "Landuse",
      "layout": { "visibility": "visible" },
      "source-layer": "Landuse",
      "paint": {
        "fill-outline-color": "#0b1a3b",
        "fill-color": "#0b1a3b",
        "fill-antialias": true,
        "fill-translate-anchor": "viewport"
      },
      "minzoom": 12,
      "type": "fill",
      "filter": ["all", ["==", "kind", 7]]
    }, {
      "id": "3069e3aab4fa44a6b43b16f5f7fdc426",
      "maxzoom": 17.5,
      "source": "Landuse",
      "layout": { "visibility": "visible" },
      "paint": {
        "fill-outline-color": "#061940",
        "fill-color": "#061940",
        "fill-antialias": true,
        "fill-translate-anchor": "viewport"
      },
      "source-layer": "Landuse",
      "minzoom": 12,
      "type": "fill",
      "filter": ["all", ["in", "kind", 30, 36, 35, 2]]
    }, {
      "id": "3f669639fe5c49cf9fe5f2088eef986b",
      "maxzoom": 17.5,
      "source": "Landuse",
      "layout": { "visibility": "visible" },
      "paint": {
        "fill-outline-color": "#091b43",
        "fill-color": "#091b43",
        "fill-antialias": true,
        "fill-translate-anchor": "viewport"
      },
      "source-layer": "Landuse",
      "minzoom": 12,
      "type": "fill",
      "filter": ["all", ["in", "kind", 32, 34, 33, 39]]
    }, {
      "id": "f44f1f5898604841bbb913db4e35a034",
      "maxzoom": 17.5,
      "source": "Landuse",
      "layout": { "visibility": "visible" },
      "source-layer": "Landuse",
      "paint": {
        "fill-outline-color": "#223459",
        "fill-color": "#223459",
        "fill-antialias": true,
        "fill-translate-anchor": "viewport"
      },
      "minzoom": 12,
      "type": "fill",
      "filter": ["all", ["==", "kind", 3]]
    }, {
      "id": "9f63829445f8470cadb48acaf2558b22",
      "maxzoom": 17.5,
      "source": "Landuse",
      "layout": { "visibility": "visible" },
      "source-layer": "Landuse",
      "paint": {
        "fill-outline-color": "#07183a",
        "fill-color": "#07183a",
        "fill-antialias": true,
        "fill-translate-anchor": "viewport"
      },
      "minzoom": 12,
      "type": "fill",
      "filter": ["all", ["==", "kind", 1]]
    }, {
      "id": "63ebb36908bf4c80a3b4c107027045c8",
      "maxzoom": 17.5,
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
      "minzoom": 12,
      "type": "fill",
      "filter": ["all", ["in", "kind", 6, 40]]
    }, {
      "id": "03bfe31fc5e04360890aee5e61d8c7ec",
      "maxzoom": 17.5,
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
      "id": "141d1db0daff4d148f270b919f18c1cc",
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
      "id": "9e1eeef3dedf40f69de220caef9e353d",
      "maxzoom": 9.0,
      "source": "Greenface",
      "layout": { "visibility": "visible" },
      "paint": {
        "fill-outline-color": "#122448",
        "fill-color": "#122448",
        "fill-antialias": true,
        "fill-translate-anchor": "viewport"
      },
      "source-layer": "Greenface",
      "minzoom": 8.0,
      "type": "fill",
      "filter": ["all", ["in", "kind", "7", "9", "6", "8"], [">=", "area_level", 98]]
    }, { // 无样式
      "id": "bd37ae8bb47e41f1b4f6fcbabe3ce727",
      "maxzoom": 10.0,
      "source": "Greenface",
      "layout": { "visibility": "visible" },
      "paint": { "fill-outline-color": "#bbf5ae", "fill-color": "#bbf5ae", "fill-antialias": true },
      "source-layer": "Greenface",
      "minzoom": 9.0,
      "type": "fill",
      "filter": ["all", ["in", "kind", "7", "9", "6", "8"], [">=", "area_level", 97]]
    }, { // 无样式
      "id": "eb766efe502d44c1aab9f1c0071bb1b4",
      "maxzoom": 12.0,
      "source": "Greenface",
      "layout": { "visibility": "visible" },
      "source-layer": "Greenface",
      "paint": { "fill-outline-color": "#bbf5ae", "fill-color": "#bbf5ae", "fill-antialias": true },
      "minzoom": 10.0,
      "type": "fill",
      "filter": ["all", ["in", "kind", "7", "9", "6", "8"], [">=", "area_level", 90]]
    }, { // 无样式
      "id": "217b41067d504b7fafb55cfc4f59abcb",
      "maxzoom": 14.0,
      "source": "Greenface",
      "layout": { "visibility": "visible" },
      "paint": { "fill-outline-color": "#bbf5ae", "fill-color": "#bbf5ae", "fill-antialias": true },
      "source-layer": "Greenface",
      "minzoom": 12.0,
      "type": "fill",
      "filter": ["all", ["in", "kind", "7", "9", "6", "8"], [">=", "area_level", 75]]
    }, {
      "id": "638694e65c6c40bf8de3ca027cd0b2e5",
      "maxzoom": 17.5,
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
      "filter": ["all", ["in", "kind", "7", "9", "6", "8"]]
    }, {
      "id": "48e9bdca2b5746d7ad4ac3b7d33b83d6",
      "maxzoom": 17.5,
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
      "id": "25f3282f447745eaa3c669d9cd3f77a7",
      "maxzoom": 7.0,
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
      "filter": ["all", ["==", "kind", 3], ["==", "display_class", 8]]
    }, {
      "id": "1f5de85a86fb45d8b9c7cedf80a47cf6",
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
      "id": "0f804ecb80524c3aae13db088a4e01d7",
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
      "id": "9bd2a9cdfdb84378a2108a0f52a8dc89",
      "maxzoom": 7.0,
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
      "id": "9df8f0a3bbf2433ab790f5479615e34d",
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
      "id": "7a59c5486640458da5941feb97a12f06",
      "maxzoom": 17.5,
      "source": "Waterface",
      "layout": { "visibility": "visible" },
      "source-layer": "Waterface",
      "paint": {
        "fill-outline-color": "#1b4073",
        "fill-color": "#1b4073",
        "fill-antialias": true,
        "fill-translate-anchor": "viewport"
      },
      "minzoom": 13.0,
      "type": "fill",
      "filter": ["all", ["==", "kind", 3]]
    },
    {
      "id": "9cc4d42495f942ec9c15faaf0f417651",
      "maxzoom": 13.0,
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
      "filter": ["all", [">=", "display_class", 1], [">=", "area_level", 72], ["==", "kind", 3]]
    },
    {
      "id": "262183b5d6544dfd81016847d084712c",
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
      "filter": ["all", [">=", "display_class", 2], ["==", "kind", 3]]
    },
    {
      "id": "78214ad0a84040ca9ce4e7addaacbf07",
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
      "filter": ["all", [">=", "display_class", 3], ["==", "kind", 3]]
    }, {
      "id": "f3b5bf9490234527834d5a136fbf4d76",
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
      "minzoom": 9.0,
      "type": "fill",
      "filter": ["all", [">=", "display_class", 5], ["==", "kind", 3]]
    }, {
      "id": "56070c991cab444d94425dfe4230e8fb",
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
      "minzoom": 7.0,
      "type": "fill",
      "filter": ["all", [">=", "display_class", 7], ["==", "kind", 3]]
    }, {
      "id": "6406a045f956488b8851ef7fa1863443",
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
      "minzoom": 7.0,
      "type": "fill",
      "filter": ["all", ["==", "kind", 3], ["==", "display_class", -2]]
    }, {
      "id": "d42985f9fc364360bc226ac11d42dd37",
      "maxzoom": 17.5,
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
      "filter": ["all", ["==", "kind", 2], [">=", "display_class", 1]]
    }, {
      "id": "8b7bd03b43ad48b3bc2fde986265f7ad",
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
      "minzoom": 11.0,
      "type": "fill",
      "filter": ["all", ["==", "kind", 2], [">=", "display_class", 1], [">=", "area_level", 10]]
    }, {
      "id": "0e8e21af358645f29b7418b84615bcc3",
      "maxzoom": 11.0,
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
      "filter": ["all", ["==", "kind", 2], [">=", "display_class", 1], [">=", "area_level", 20]]
    }, {
      "id": "bdef96a8ea7f49f28589e8b53e88e808",
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
      "minzoom": 9.0,
      "type": "fill",
      "filter": ["all", ["==", "kind", 2], [">=", "display_class", 1], [">=", "area_level", 40]]
    }, {
      "id": "d5d722be23bf44d6bc6aa4cbd73eee99",
      "maxzoom": 9.0,
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
      "filter": ["all", ["==", "kind", 2], [">=", "display_class", 1], [">=", "area_level", 85]]
    }, {
      "id": "1d23d00fd394449b9be3879f781115e8",
      "maxzoom": 17.5,
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
      "filter": ["all", ["==", "display_class", -1]]
    }, {
      "id": "17eeebc806a34334be0e69776d065507",
      "maxzoom": 17.5,
      "layout": { "line-join": "round", "visibility": "visible", "line-cap": "round" },
      "source-layer": "Railway",
      "paint": {
        "line-translate-anchor": "viewport",
        "line-color": "#16305a",
        "line-width": { "stops": [[7, 1.5], [18, 6]], "base": 1.2 }
      },
      "source": "Railway",
      "minzoom": 9,
      "type": "line"
    }, {
      "id": "381f7ed444d941d6af50f34093e81bae",
      "maxzoom": 17.5,
      "source": "Railway",
      "layout": { "line-join": "round", "visibility": "visible", "line-cap": "butt" },
      "paint": {
        "line-translate-anchor": "viewport",
        "line-dasharray": [9, 9],
        "line-color": "#2568ab",
        "line-width": { "stops": [[7, 1], [18, 3.6]], "base": 1.2 }
      },
      "source-layer": "Railway",
      "minzoom": 9,
      "type": "line"
    }, { // 无样式
      "id": "361e9ea3ee664e9b9daf5d56c7603bd1",
      "maxzoom": 17.5,
      "source": "Road",
      "layout": {
        "line-join": "round",
        "visibility": "visible",
        "line-cap": "round"
      },
      "paint": {
        "line-gap-width": {
          "stops": [[15, 2], [20, 5]],
          "base": 1.2
        },
        "line-color": "#f9d195",
        "line-width": 0.6
      },
      "source-layer": "Road",
      "minzoom": 15.0,
      "type": "line",
      "filter": ["all", ["in", "functionclass", 5]]
    }, { // 无样式
      "id": "3c90599699254bdfb8797dba00beed24",
      "maxzoom": 17.5,
      "source": "Road",
      "layout": {
        "line-join": "round",
        "visibility": "visible",
        "line-cap": "round"
      },
      "source-layer": "Road",
      "paint": {
        "line-color": "#ffffff",
        "line-width": {
          "stops": [[15, 2], [20, 5]],
          "base": 1.2
        }
      },
      "minzoom": 15,
      "type": "line",
      "filter": ["all", ["in", "functionclass", 5]]
    }, { // 无样式
      "id": "eebcc3f0f90d4bcba8ebc2c9efd34d38",
      "maxzoom": 17.5,
      "source": "Road",
      "layout": {
        "line-join": "round",
        "visibility": "visible",
        "line-cap": "round"
      },
      "paint": {
        "line-color": "#f9ecc1",
        "line-width": {
          "stops": [[5, 0.7], [6, 1], [20, 10]],
          "base": 1.2
        }
      },
      "source-layer": "Road",
      "minzoom": 11.0,
      "type": "line",
      "filter": ["all", ["in", "functionclass", 4]]
    }, { // 无样式
      "id": "4dd8a2998f3e4597b066aa02d0893fea",
      "maxzoom": 17.5,
      "source": "Road",
      "layout": {
        "line-join": "round",
        "visibility": "visible",
        "line-cap": "round"
      },
      "source-layer": "Road",
      "paint": {
        "line-gap-width": {
          "stops": [[9, 1], [20, 6]],
          "base": 1
        },
        "line-color": "#f9ca87",
        "line-width": 0.8
      },
      "minzoom": 10.0,
      "type": "line",
      "filter": ["all", ["in", "functionclass", 3]]
    }, { // 无样式
      "id": "19dc8ace37e64c0b957af9b058b6a9c0",
      "maxzoom": 17.5,
      "source": "Road",
      "layout": {
        "line-join": "round",
        "visibility": "visible",
        "line-cap": "round"
      },
      "source-layer": "Road",
      "paint": {
        "line-color": "#f9ecc1",
        "line-width": {
          "stops": [[9, 1.2], [20, 6]],
          "base": 1
        }
      },
      "minzoom": 8.0,
      "type": "line",
      "filter": ["all", ["in", "functionclass", 3]]
    }, { // 无样式
      "id": "dbe9cde2c2a44bf9832af6fc314b9836",
      "maxzoom": 17.5,
      "source": "Road",
      "layout": {
        "line-join": "round",
        "visibility": "visible",
        "line-cap": "round"
      },
      "paint": {
        "line-gap-width": {
          "stops": [[7, 1.2], [9, 1.2], [20, 6]],
          "base": 1
        },
        "line-color": "#ff7600",
        "line-width": 0.8
      },
      "source-layer": "Road",
      "minzoom": 8.0,
      "type": "line",
      "filter": ["all", ["==", "functionclass", 2]]
    }, { // 无样式
      "id": "3ae236b2cf7645ef86afcd0022223d7a",
      "maxzoom": 17.5,
      "source": "Road",
      "layout": {
        "line-join": "round",
        "visibility": "visible",
        "line-cap": "round"
      },
      "source-layer": "Road",
      "paint": {
        "line-color": "#ffd467",
        "line-width": {
          "stops": [[7, 1.5], [9, 1.6], [20, 8]],
          "base": 1
        }
      },
      "minzoom": 7.0,
      "type": "line",
      "filter": ["all", ["==", "functionclass", 2]]
    }, { // 无样式
      "id": "ed3a8eb5fdf746c1b76ecdcaaf01cad0",
      "maxzoom": 17.5,
      "source": "Road",
      "layout": {
        "line-join": "round",
        "visibility": "visible",
        "line-cap": "round"
      },
      "source-layer": "Road",
      "paint": {
        "line-gap-width": {
          "stops": [[5, 0.7], [6, 0.8], [7, 1.4], [9, 1.4], [20, 8]],
          "base": 1
        },
        "line-color": "#ff6d00",
        "line-width": 0.8
      },
      "minzoom": 8.0,
      "type": "line",
      "filter": ["all", ["==", "functionclass", 1]]
    }, { // 无样式
      "id": "e8f8468a96c3419290e8a1a5bfb90632",
      "maxzoom": 17.5,
      "source": "Road",
      "layout": {
        "line-join": "round",
        "visibility": "visible",
        "line-cap": "round"
      },
      "source-layer": "Road",
      "paint": {
        "line-color": {
          "stops": [[5, "#ffb35b"], [8, "#ffb35b"], [20, "#ffb35b"]],
          "base": 1
        },
        "line-width": {
          "stops": [[5, 0.7], [6, 0.8], [7, 1.6], [9, 1.6], [20, 10]],
          "base": 1
        }
      },
      "minzoom": 5,
      "type": "line",
      "filter": ["all", ["==", "functionclass", 1]]
    }, {
      "id": "975335ae079641a980c7573ea50f74fe",
      "maxzoom": 16.0,
      "source": "Buildingmore",
      "layout": { "visibility": "visible" },
      "source-layer": "Buildingmore",
      "paint": { "fill-outline-color": "#1f5ba9", "fill-color": "#1f5ba9", "fill-antialias": true },
      "minzoom": 14.0,
      "type": "fill"
    }, {
      "id": "9336afc675dd4521b9b2aca67154fd6c",
      "maxzoom": 17.5,
      "source": "Buildingmore",
      "layout": { "visibility": "visible" },
      "source-layer": "Buildingmore",
      "paint": {
        "extrusion-color": "#2674dc",
        "extrusion-translate-anchor": "viewport",
        "extrusion-base": 0,
        "extrusion-opacity": 0.75,
        "extrusion-translate": [0, 0],
        "extrusion-height": { "property": "levels", "type": "identity" }
      },
      "minzoom": 16.0,
      "type": "fill-extrusion"
    }, { // 无样式
      "id": "3701865cf253474180e1210f36fa0b11",
      "maxzoom": 17.5,
      "source": "Road",
      "layout": {
        "text-size": 10,
        "visibility": "visible",
        "text-field": "{name_brief}",
        "symbol-placement": "line"
      },
      "paint": {
        "text-halo-color": "#f98100",
        "text-halo-width": 10,
        "text-color": "#ffffff",
        "icon-halo-width": 1,
        "icon-color": "#3c8724"
      },
      "source-layer": "Road",
      "minzoom": 8,
      "type": "symbol",
      "filter": ["all", ["==", "kind", 4], ["in", "functionclass", 1, 2]]
    }, { // 无样式
      "id": "83b880a892234a4697826a963dd70ea7",
      "maxzoom": 17.5,
      "source": "Road",
      "layout": {
        "text-size": 10,
        "visibility": "visible",
        "text-field": "{name_brief}",
        "text-rotation-alignment": "viewport",
        "symbol-placement": "line"
      },
      "paint": {
        "text-halo-color": "#ff1b00",
        "text-halo-width": 10.0,
        "text-color": "#ffffff",
        "icon-halo-width": 1,
        "icon-color": "#72ff1b"
      },
      "source-layer": "Road",
      "minzoom": 8,
      "type": "symbol",
      "filter": ["all", ["==", "kind", 3], ["in", "functionclass", 1, 2]]
    }, { // 无样式
      "id": "f53414e8f6664e83b5edd0304cb85407",
      "maxzoom": 17.5,
      "source": "Road",
      "layout": {
        "text-size": 10.0,
        "icon-keep-upright": true,
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-pitch-alignment": "map",
        "text-field": "{name_brief}",
        "text-ignore-placement": false,
        "text-rotation-alignment": "viewport",
        "icon-rotation-alignment": "map",
        "text-anchor": "center",
        "text-allow-overlap": false,
        "symbol-placement": "line",
        "text-offset": [0, 0]
      },
      "source-layer": "Road",
      "paint": {
        "text-halo-color": "#008100",
        "text-halo-width": 10.0,
        "text-color": "#ffffff",
        "icon-translate-anchor": "map",
        "icon-halo-width": 1.0,
        "icon-color": "#3c8724"
      },
      "minzoom": 8.0,
      "type": "symbol",
      "filter": ["all", ["==", "kind", 1], ["in", "functionclass", 1, 2]]
    }, { // 无样式
      "id": "8ef993d712e04d77b4c9906529783dc3",
      "maxzoom": 17.5,
      "source": "Road",
      "layout": {
        "text-size": 12.0,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "symbol-placement": "line"
      },
      "paint": {
        "text-halo-color": "#f5eaaf",
        "text-color": "#774512",
        "text-halo-width": 0.8,
        "icon-color": "#ff0000"
      },
      "source-layer": "Road",
      "minzoom": 9.0,
      "type": "symbol",
      "filter": ["all", ["in", "kind", 1, 3], ["in", "functionclass", 1, 2]]
    }, { // 无样式
      "id": "b886859ca16749eea3eeab6ec7da2f2c",
      "maxzoom": 17.5,
      "source": "Road",
      "layout": {
        "text-size": 11.0,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "symbol-placement": "line"
      },
      "paint": {
        "text-halo-color": "#f5eaaf",
        "text-color": "#774512",
        "text-halo-width": 0.8,
        "icon-color": "#ff0000"
      },
      "source-layer": "Road",
      "minzoom": 10.0,
      "type": "symbol",
      "filter": ["all", ["in", "functionclass", 1, 2], ["!in", "kind", 1, 3, 4]]
    }, { // 无样式
      "id": "6a96546830c641909d5af114b656ec69",
      "maxzoom": 17.5,
      "source": "Road",
      "layout": {
        "text-size": 11,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "symbol-placement": "line"
      },
      "paint": {
        "text-halo-color": "#f5eaaf",
        "text-color": "#774512",
        "text-halo-width": 0.8,
        "icon-color": "#ff0000"
      },
      "source-layer": "Road",
      "minzoom": 15.0,
      "type": "symbol",
      "filter": ["all", ["in", "functionclass", 4]]
    }, { // 无样式
      "id": "d36f2f522ffa42f7a07f1a84bd983f67",
      "maxzoom": 17.5,
      "source": "Road",
      "layout": {
        "text-size": 11,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "symbol-placement": "line"
      },
      "paint": {
        "text-halo-color": "#f5eaaf",
        "text-color": "#774512",
        "text-halo-width": 0.8,
        "icon-color": "#ff0000"
      },
      "source-layer": "Road",
      "minzoom": 13.0,
      "type": "symbol",
      "filter": ["all", ["in", "functionclass", 3]]
    },
    { // 无样式
      "id": "113e30c0608e4bd78e7819e644674b31",
      "maxzoom": 17.5,
      "source": "Road",
      "layout": { "text-size": 14.0, "visibility": "visible", "text-field": "{name_zh}", "symbol-placement": "line" },
      "paint": { "text-halo-color": "#ffffff", "text-color": "#333333", "text-halo-width": 1, "icon-color": "#ff0000" },
      "source-layer": "Road",
      "minzoom": 11.0,
      "type": "symbol",
      "filter": ["all", ["in", "functionclass", 1, 4, 2, 3], ["in", "const_st", 3, 4]]
    },
    { // 无样式
      "id": "d8af0efc6ca54e4aa72d376c8ee2690c",
      "maxzoom": 17.5,
      "source": "Road",
      "layout": {
        "text-size": 11.0,
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "symbol-placement": "line"
      },
      "paint": { "text-halo-color": "#ffffff", "text-halo-width": 1, "icon-color": "#ff0000" },
      "source-layer": "Road",
      "minzoom": 10.0,
      "type": "symbol",
      "filter": ["all", ["==", "kind", 13]]
    }, { // 无样式
      "id": "b4f162c369124c52a2aed8f980b8307b",
      "maxzoom": 17.5,
      "source": "Road",
      "layout": {
        "text-size": 11.0,
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "symbol-placement": "line"
      },
      "paint": { "text-halo-color": "#ffffff", "text-halo-width": 1, "icon-color": "#ff0000" },
      "source-layer": "Road",
      "minzoom": 15.0,
      "type": "symbol",
      "filter": ["all", ["==", "kind", 10]]
    }, { // 无样式
      "id": "0c67a674922f4da29e6e15edcc415cd5",
      "maxzoom": 17.5,
      "source": "Road",
      "layout": {
        "text-size": 11.0,
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "symbol-placement": "line"
      },
      "source-layer": "Road",
      "paint": { "text-halo-color": "#ffffff", "text-halo-width": 1, "icon-color": "#ff0000" },
      "minzoom": 15.0,
      "type": "symbol",
      "filter": ["all", ["==", "kind", 9]]
    }, { // 无样式
      "id": "ec169f7bdc524c39a925edafe419ea65",
      "maxzoom": 17.5,
      "source": "Road",
      "layout": {
        "text-size": 11.0,
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "symbol-placement": "line"
      },
      "source-layer": "Road",
      "paint": { "text-halo-color": "#ffffff", "text-halo-width": 1, "icon-color": "#ff0000" },
      "minzoom": 15.0,
      "type": "symbol",
      "filter": ["all", ["==", "kind", 8]]
    }, { // 无样式
      "id": "cdf184512955436787d226af221d7325",
      "maxzoom": 17.5,
      "source": "Road",
      "layout": {
        "text-size": 11.0,
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "symbol-placement": "line"
      },
      "source-layer": "Road",
      "paint": { "text-halo-color": "#ffffff", "text-halo-width": 1, "icon-color": "#ff0000" },
      "minzoom": 14.0,
      "type": "symbol",
      "filter": ["all", ["==", "kind", 7]]
    }, {
      "id": "294f88392e9543ccbf8427705543cffd",
      "maxzoom": 17.5,
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
      "minzoom": 11.0,
      "type": "symbol",
      "filter": ["all", ["==", "kind", 4], ["==", "const_st", 1]]
    }, { // 无样式
      "id": "3cfc68f3d709444caded3f1b990adf1f",
      "maxzoom": 17.5,
      "source": "Road",
      "layout": {
        "text-size": { "stops": [[10, 10], [18, 14]], "base": 1 },
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "symbol-placement": "line"
      },
      "source-layer": "Road",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#6d491f",
        "text-halo-width": 1.0,
        "icon-color": "#ff0000"
      },
      "minzoom": 11.0,
      "type": "symbol",
      "filter": ["all", ["==", "kind", 3], ["==", "const_st", 1]]
    }, { // 无样式
      "id": "ce94d413d21b475da0f696a675c15ba2",
      "maxzoom": 17.5,
      "source": "Road",
      "layout": {
        "text-size": { "stops": [[10, 10], [18, 14]], "base": 1 },
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-field": "{name_zh}",
        "text-ignore-placement": false,
        "symbol-placement": "line"
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.0,
        "text-color": "#805524",
        "icon-color": "#ff0000"
      },
      "source-layer": "Road",
      "minzoom": 11.0,
      "type": "symbol",
      "filter": ["all", ["==", "kind", 1], ["==", "const_st", 1]]
    }, { // 无样式
      "id": "d8f30f526d3f46208edcc909de7afc09",
      "maxzoom": 17.0,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "point-11",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 16.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "225018", "220400"]]
    }, {
      "id": "df6605ae1692464fb8b0745f59f344a2",
      "maxzoom": 16.0,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 14,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "180306"], ["!in", "name_zh", "和平广场", "华盛玫瑰广场"]]
    }, {
      "id": "b74accb2c7d846fdabf280439b7d71b7",
      "maxzoom": 15.0,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_230125_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 12.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "235021", "235022"], [">", "rank", 3]]
    }, {
      "id": "f61e1f9b3f9c4a81a4922ccd1c2b08a3",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 14,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "160207", "160206"], ["==", "rank", 3]]
    }, {
      "id": "ebaac0e42ebb4add852076ba587f1e33",
      "maxzoom": 15,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_230125_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 14.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "235021", "235022"], ["==", "rank", 2]]
    }, {
      "id": "ae7fdb7ffab94ddf9a53cf32c900a331",
      "maxzoom": 16.0,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 14.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "130703"]]
    }, {
      "id": "24dcc63dc9e249cf9f709cb2cd287263",
      "maxzoom": 15,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 13.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "160105"], ["==", "rank", 1]]
    }, {
      "id": "1a316b98f5b140c9b825164a64190c6b",
      "maxzoom": 15.0,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 12.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "160105"], ["==", "rank", 2], ["!in", "name_zh", "辽宁地质工程职业学院"]]
    }, {
      "id": "9b9ff8e3941242fa809863c9abb36b8f",
      "maxzoom": 15,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 11.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "160105"], ["==", "rank", 3]]
    }, {
      "id": "cae240aaf7d14efc89a60c621fda6673",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_170100_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 14.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "175115"]]
    }, {
      "id": "785281b9267a4d59b43c067048cb0a03",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 15.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "120201"], ["==", "rank", 1]]
    }, {
      "id": "51f8563ca69d407284d9b171523d3269",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 14,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "120201"], ["==", "rank", 3]]
    }, {
      "id": "90af452368dd4205aeb3930d8998d924",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_160102_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 14.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "160103"], ["==", "rank", 1]]
    }, {
      "id": "995af7a496e248a381dd2c71c6f3de09",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_160102_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 12.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "160103"], [">=", "rank", 2]]
    }, {
      "id": "5011df029cdd46f2a260d4cc3ab00c85",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": { "text-size": 12.0, "visibility": "visible", "symbol-avoid-edges": true, "text-field": "{name_zh}" },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#444444",
        "text-halo-width": 2.0,
        "icon-color": "#ff0000"
      },
      "minzoom": 14.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "230201"], [">=", "rank", 3]]
    }, {
      "id": "0ccae04f3c4b4e68b088589063e8a4d1",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": { "text-size": 12.0, "symbol-avoid-edges": true, "visibility": "visible", "text-field": "{name_zh}" },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#444444",
        "text-halo-width": 2.0,
        "icon-color": "#ff0000"
      },
      "minzoom": 15.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "230201"], ["<=", "rank", 2]]
    }, {
      "id": "264d9d904a514f128c0ab9eaa9d66864",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": { "stops": [[11, 12], [18, 16]], "base": 1 },
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-field": "{name_zh}"
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.0,
        "text-color": "#444444",
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 14.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "230202"], ["<=", "rank", 2]]
    }, {
      "id": "7ff6e19f4dd44c38914ab84e8ea796c2",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": { "stops": [[11, 12], [18, 16]], "base": 1 },
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}"
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#444444",
        "text-halo-width": 1.0,
        "icon-color": "#ff0000"
      },
      "minzoom": 13.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "230202"], ["==", "rank", 3]]
    }, {
      "id": "cafd0e67d1f84df29f11cc2a06c5fa06",
      "maxzoom": 16.0,
      "source": "Annotation",
      "layout": {
        "text-size": { "stops": [[11, 12], [18, 16]], "base": 1 },
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "center",
        "symbol-placement": "point",
        "text-offset": [0, 0]
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#444444",
        "text-halo-width": 1.0,
        "icon-color": "#ff0000"
      },
      "minzoom": 11.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "230202"], [">=", "rank", 4]]
    }, {
      "id": "f0e9dc27027645c2ae4f1872f78b92c2",
      "maxzoom": 15,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#417505",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 11.0,
      "type": "symbol",
      "filter": ["all", ["==", "rank", 2], ["==", "kindcode", "180309"]]
    }, {
      "id": "5eca7b8fc70b497dba9904430730b644",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_180307_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 11.0,
      "type": "symbol",
      "filter": ["all", ["==", "rank", 2], ["in", "kindcode", "180308", "185119"]]
    }, {
      "id": "37594a5488444b9893e6bdafcb10ba69",
      "maxzoom": 15.0,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#417505",
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 13.0,
      "type": "symbol",
      "filter": ["all", ["==", "rank", 1], ["==", "kindcode", "180309"]]
    }, {
      "id": "1b3610824f2447189049994bfd4b0cdf",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_180307_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 13.0,
      "type": "symbol",
      "filter": ["all", ["==", "rank", 1], ["in", "kindcode", "180308", "185119"], ["!in", "name_zh", "鸭绿江第一漂"]]
    }, {
      "id": "83c0f51124784755af618465cf7dc89d",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_180105_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 15.0,
      "type": "symbol",
      "filter": ["all", ["==", "rank", 1], ["in", "kindcode", "180105", "180106"]]
    }, {
      "id": "d9820e8368aa416c838c0c51bf34afcb",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_180105_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 14.0,
      "type": "symbol",
      "filter": ["all", ["==", "rank", 2], ["in", "kindcode", "180105", "180106"]]
    }, {
      "id": "bc0e2fc7de3a4e92b85f02f03e59f40f",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_180105_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 13.0,
      "type": "symbol",
      "filter": ["all", ["==", "rank", 3], ["in", "kindcode", "180105", "180106"]]
    }, {
      "id": "0e3da35e7cf84fe28d0d64cca99a530d",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_180100_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 15.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "185122"], ["==", "rank", 1]]
    }, {
      "id": "d14df7b6432149d5a8a76b683ca7d6ba",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_180100_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 12.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "185122"], [">=", "rank", 2]]
    }, {
      "id": "884b5b390898405d8276b980b114b683",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_130102_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 14.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "130102", "130103"]]
    }, {
      "id": "b21cbf3ff4494a14ad099c76973cdfc3",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_120101_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 15.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "125134", "125136", "125137", "125138", "125139", "125140"], ["==", "rank", 2]]
    }, {
      "id": "a50d5d7fe3a7457b813b7c8f051209c9",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_120101_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 14.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "125134", "125136", "125137", "125138", "125139", "125140"], ["==", "rank", 3]]
    }, {
      "id": "d8717a7ad12846da818635d9d2bacc8b",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "bottom",
        "text-offset": [1, 0]
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 15,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "200104"]]
    }, {
      "id": "0a255fedfe164148860d7c8ad375f70a",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_200103_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 15.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "215032"], ["==", "rank", 1]]
    }, {
      "id": "b2f7cb7152d84d299ac0586af855a2ca",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_200103_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 13.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "215032"], ["==", "rank", 2]]
    }, {
      "id": "97d47be54b0c4e47b8039d80d451a2f9",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_200103_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 12.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "215032"], ["==", "rank", 3]]
    }, {
      "id": "8ce946fa0f734209b8eaf50aaef9fbe7",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 14.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "200101"], ["<=", "rank", 2]]
    }, {
      "id": "5609d764ab484bdc8c3f383a453c54f2",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 12.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "200101"], [">=", "rank", 3]]
    }, {
      "id": "450b9205df6e4bb3aaa307dcda09cb61",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_180304_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#417505",
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 14.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "185120"], ["==", "rank", 1]]
    }, {
      "id": "ca0f55eaf3c24cf88985279360c15ac1",
      "maxzoom": 16.0,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_180304_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#417505",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 12.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "185120"], [">=", "rank", 2]]
    }, {
      "id": "236e8f5b17b840578f29dfacd63fdc47",
      "maxzoom": 12.0,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_180304_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#417505",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 10.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "185120"], ["==", "rank", 4]]
    }, {
      "id": "e1562d92c6a94b93ae41a7181a7ae792",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 13.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "160205"], ["==", "rank", 1]]
    }, {
      "id": "00085071c8884b438d785abc6299dd3d",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 11.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "160205"], ["==", "rank", 2], ["!in", "name_zh", "抗美援朝纪念馆"]]
    }, {
      "id": "8e3722ee460e47ae9c3c0ce182f52e09",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_180400_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "minzoom": 14.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "185116"], ["==", "rank", 1], ["!=", "name_zh", "天安门"]]
    }, {
      "id": "25e9a77b69154b80b8a13ad39f61bafc",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_180400_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 12.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "185116"], ["==", "rank", 2], ["!in", "name_zh", "洞沟古墓群"]]
    }, {
      "id": "21a659157da943c8a1def469f4215e31",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_180400_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 11.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "185116"], ["==", "rank", 3], ["!in", "name_zh", "火山地质公园南景区", "岳桦双瀑"]]
    }, {
      "id": "998a50b2a24041f98d64921c93e88526",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_180400_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 10,
      "type": "symbol",
      "filter": ["all", [">=", "rank", 4], ["==", "kindcode", "185116"], ["!=", "name_zh", "高山苔原带"]]
    }, {
      "id": "25f44f4000984ddb930ceb7d8bdbe774",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12,
        "icon-image": "poi_code_230103_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 11.0,
      "type": "symbol",
      "filter": ["all", [">=", "rank", 3], ["==", "kindcode", "230107"]]
    }, {
      "id": "998480d9cf5640a3ae5c99ab83ea2a45",
      "maxzoom": 16,
      "source": "Annotation",
      "layout": {
        "text-size": 12,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 12.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "230103", ""], ["==", "name_zh", "临江站"]]
    }, {
      "id": "49b0f1603e9b413284c7fff36dc1d403",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": { "icon-image": "poi_door_16", "symbol-avoid-edges": true, "visibility": "visible" },
      "paint": { "icon-color": "#ff0000" },
      "source-layer": "Poi",
      "minzoom": 16.0,
      "type": "symbol",
      "filter": ["all", ["in", "accessflag", 2, 1]]
    }, {
      "id": "7b0a5235fea34e4c8cad2ea22ed8f2ea",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "point-11",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 11.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "260000", "260100"], ["==", "accessflag", 0]]
    }, {
      "id": "45e7559867354dd1aa942502192e098d",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "point-11",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 14.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "250100", "250200"], ["==", "accessflag", 0]]
    }, {
      "id": "aa3d00d127e24019a789a57584bf67b8",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 16.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "240100"], ["==", "accessflag", 0]]
    }, {
      "id": "ecf25bf6431d4e5294127217bdc2bb0a",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 15.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "230125", "230206", "230207", "230209", ""], ["==", "accessflag", 0]]
    }, {
      "id": "abebe3c40e264068956b31861ea0bdba",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 11,
        "icon-image": "poi_code_{kindcode}_16",
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-anchor": "left",
        "icon-size": 1,
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#000000",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 16,
      "type": "symbol",
      "filter": ["all", ["==", "accessflag", 0], ["in", "kindcode", "230203", "230204"]]
    }, {
      "id": "cf7bd6741c10486ebd455191c889b7fe",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 14.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "230100", "230108", "230226"], ["==", "accessflag", 0]]
    }, {
      "id": "e098d111090c4a5f99ffa609b8cce4b8",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 11,
        "icon-image": "poi_code_230207_16",
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-anchor": "left",
        "icon-size": 1.0,
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#000000",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 16.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "230211", "230212", "230214", "230223", "230224", "230225", "230213"], ["==", "accessflag", 0]]
    }, {
      "id": "afe97d50557d4b29bcd52c5fffcc65bb",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 11.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "230126"], ["==", "generation", 1], ["==", "accessflag", 0]]
    }, {
      "id": "27bdbd87cff245a0bc11a063be97fe05",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": { "stops": [[11, 12], [18, 16]], "base": 1 },
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "icon-size": 1,
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.0,
        "text-color": "#914604",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 16.0,
      "type": "symbol",
      "filter": ["all", ["==", "accessflag", 0], ["in", "kindcode", "230201", "230202"], ["!=", "name_zh", "珍珠桥"]]
    }, {
      "id": "304540fbf2e340348eaa5be97f445bfa",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "point-11",
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 15.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "230127", "230128", "230129", ""], ["==", "accessflag", 0]]
    }, {
      "id": "cf8f1fd153434f69a4c2a3722855e5f3",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 16.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "230103", "230105", "230107", "230215", "230216", "230217", "230218"], ["==", "accessflag", 0]]
    }, {
      "id": "3fba0702108146b2a02023a159feb161",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "point-11",
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 17.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "230130", "230219", "230220", "230221", "230228", "230229"], ["==", "accessflag", 0]]
    }, {
      "id": "e46855d9b2f7492c9ab5ea064d78e9b5",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 12.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "230126"], ["==", "generation", 2], ["==", "accessflag", 0]]
    }, {
      "id": "5a63a959afea4615b657310b41e1846b",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "point-11",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 14.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "220300"], ["==", "accessflag", 0]]
    }, {
      "id": "44957ef182784b42b5b42f9f5647c15d",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "point-11",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 17.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "220100", "220400"], ["==", "accessflag", 0]]
    }, {
      "id": "27fb1c07853e483fa89d708f4d86ce7a",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "point-11",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 17.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "220200"], ["==", "accessflag", 0]]
    }, {
      "id": "1709cb1c53d84f5ca126ee5239c6f1f6",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "point-11",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 15.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "210211", "210304"], ["==", "accessflag", 0]]
    }, {
      "id": "648636e30b0a47078950bff3b1b615d1",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12,
        "icon-image": "poi_code_170100_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 17,
      "type": "symbol",
      "filter": ["all", ["==", "accessflag", 0], ["==", "kindcode", "210105"]]
    }, {
      "id": "d4b00e59844f4a66aba62c9ae22e64e7",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "point-11",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 17.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "210101", "210102", "210103", "210104", "210201", "210202", "210203", "210204", "210206", "210207", "210209", "210210", "210213", "210214", "210216", "210217", "210218", "210219", "210301", "210302", "210303", "210400"], ["==", "accessflag", 0]]
    }, {
      "id": "d01043329fad43459df5b50c3664bb3d",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 11,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#000000",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 16.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "210215"], ["==", "accessflag", 0]]
    }, {
      "id": "74fadeaf7a9b44f1b792c1602cef93a4",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "point-11",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 14.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "200105"], ["==", "accessflag", 0]]
    }, {
      "id": "21b3eb834fb94f06b009910a3d1f8dbb",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "point-11",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 17.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "200200", "200300", "200400", "200404", "200405"], ["==", "accessflag", 0]]
    }, {
      "id": "09b62a9294d544b99a8201cc8ed5d1cd",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "point-11",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 16.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "200101", "200104"], ["==", "accessflag", 0]]
    }, {
      "id": "73a3269b1d37442f86120965b609b91e",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12,
        "icon-image": "poi_code_200103_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 16,
      "type": "symbol",
      "filter": ["all", ["==", "accessflag", 0], ["==", "kindcode", "200103"]]
    }, {
      "id": "287714e7f54e4a6c97ceca42a719a4d8",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "point-11",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 15.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "200102", "200201"], ["==", "accessflag", 0]]
    }, {
      "id": "96eb669d535d46fe933a58f441a7bce7",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_190101_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 13.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "190107", "190108"], ["==", "accessflag", 0]]
    }, {
      "id": "3affe44b652a491fb84d887db1aa0f15",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_190200_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 17.0,
      "type": "symbol",
      "filter": ["all", ["==", "accessflag", 0], ["==", "kindcode", "190204"]]
    }, {
      "id": "255a9ad673454d9589597fe79155ea14",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12,
        "icon-image": "poi_code_190100_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 17,
      "type": "symbol",
      "filter": ["all", ["==", "accessflag", 0], ["in", "kindcode", "190500", "190501"]]
    }, {
      "id": "b38a5f93a2f242389b193d2d2bb319a4",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_190101_16",
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 15.0,
      "type": "symbol",
      "filter": ["all", ["==", "accessflag", 0], ["==", "kindcode", "190110"]]
    },
    {
      "id": "8b1cbdd63c7a4938ab22d3376b470e4e",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "point-11",
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 17.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "190111", "190112", "190113", "190114", "190301", "190502"], ["==", "accessflag", 0]]
    }, {
      "id": "8239039bd1104205b4fc4c68cd794db3",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_190200_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 16.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "190200", "190201"], ["==", "accessflag", 0]]
    }, {
      "id": "1835a20fe5034c6a83a5aac20f37a63c",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#8b572a",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 15,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "190401", "190402", "190403", "190404"], ["==", "accessflag", 0]]
    }, {
      "id": "05e0ff01e482490c800384d7b1b91e11",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "point-11",
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#8b572a",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 15,
      "type": "symbol",
      "filter": ["all", ["==", "accessflag", 0], ["==", "kindcode", "190400"]]
    },
    {
      "id": "33d5bfede197403587f7d69be6da3b09",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 13.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "180310"], ["==", "accessflag", 0]]
    }, {
      "id": "73a93858f0d9426aa83f17738d78e109",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "point-11",
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 14.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "180109"], ["==", "accessflag", 0]]
    }, {
      "id": "c8f254a4366047149a5e28169892092c",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_180304_16",
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 15.0,
      "type": "symbol",
      "filter": ["all", ["==", "accessflag", 0], ["==", "kindcode", "180305"]]
    }, {
      "id": "50dcc8ac59004b2babed7e8991affc68",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 17.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "180209", "180210", "180211"], ["==", "accessflag", 0]]
    }, {
      "id": "0b87d9f8446449f6ae67ce21182da93e",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "point-11",
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 17.0,
      "type": "symbol",
      "filter": ["all", ["==", "accessflag", 0], ["in", "kindcode", "180206", "180207", "180208", "180301", "180302", "180303"]]
    }, {
      "id": "402a75d187a245f5bd6b47cc0cdd1ca6",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12,
        "icon-image": "poi_code_180201_16",
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 17,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "180201", "180202", "180203", "180204", "180205"], ["==", "accessflag", 0]]
    }, {
      "id": "852942172c124a9b841675a537532f5f",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#417505",
        "icon-color": "#ff0000"
      },
      "minzoom": 16.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "180304"], ["==", "accessflag", 0]]
    }, {
      "id": "41a6503cebbf4b809a62f11dc15e8f93",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "minzoom": 16.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "180100", "180101", "180102", "180103", "180104", "180105", "180106", "180306", "180400"], ["==", "accessflag", 0], ["!=", "name_zh", "澳門總督府"]]
    }, {
      "id": "a0269c768c794a95a66907b23d19b69c",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12,
        "icon-image": "point-11",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "minzoom": 16,
      "type": "symbol",
      "filter": ["all", ["==", "accessflag", 0], ["in", "kindcode", "180107", "180110"]]
    }, {
      "id": "ef7d4ed700a2413db3be7ce973c82366",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 15.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "180307", "180308"], ["==", "accessflag", 0]]
    }, {
      "id": "bc63f142720549a2a30a633ef26d258c",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#417505",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 15.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "180309"], ["==", "accessflag", 0]]
    }, {
      "id": "450df95a99f24e30b568460a8b2fb896",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_170100_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 15.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "170100", "170101", "170102"], ["==", "accessflag", 0]]
    }, {
      "id": "48ca2047356b4bbe84660ef8989258ee",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "minzoom": 16.0,
      "type": "symbol",
      "filter": ["all", ["==", "accessflag", 0], ["==", "kindcode", "170105"]]
    }, {
      "id": "137256c403b44659bfe62612f5856827",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_170100_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 16.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "170103", "170104", "170105"], ["==", "accessflag", 0]]
    }, {
      "id": "f804f6ff1a4b4dc5ba0e20e7b66c09da",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 17.0,
      "type": "symbol",
      "filter": ["all", ["==", "accessflag", 0], ["==", "kindcode", "170107"]]
    }, {
      "id": "1b01cac59d63435182292159a7263663",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "point-11",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 17.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "170106", "170108", "170109", "170110", "170201"], ["==", "accessflag", 0]]
    }, {
      "id": "1aeb43c54eb744299d836b240c704788",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 17.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "160201", "160202"], ["==", "accessflag", 0]]
    }, {
      "id": "dd1c8f1ac29642499839dfcecd529033",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 15.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "160105", "160203", "160106", "160107"], ["==", "accessflag", 0]]
    }, {
      "id": "ff49a8dc7e354a71900aabcee2e61ad2",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "point-11",
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 15.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "", "160109"], ["==", "accessflag", 0]]
    }, {
      "id": "2e95090681ed478f8664d20ef19a81ff",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "point-11",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 17.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "160108", "160110", "160209"], ["==", "accessflag", 0]]
    }, {
      "id": "f108ea13998543feadbdc2c19a8958cb",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 16,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "160101", "160102", "", "160104", "160204", "160205", "160206"], ["==", "accessflag", 0]]
    }, {
      "id": "1f09f215e0314d0c8efcda740346f12c",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12,
        "icon-image": "poi_code_160102_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 16,
      "type": "symbol",
      "filter": ["all", ["==", "accessflag", 0], ["==", "kindcode", "160103"]]
    }, {
      "id": "1f46023880a14cd3b758a0dbe77e7086",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "point-11",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 16,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "160100", "160207", "160208"], ["==", "accessflag", 0]]
    }, {
      "id": "2af56aa5f0b04c9999df449e8b4bef1e",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 17.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "150102"], ["==", "accessflag", 0]]
    }, {
      "id": "ea514b9164f247a8b5666558171e3935",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 17,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "150101", "150102"], ["==", "accessflag", 0]]
    }, {
      "id": "f3a93ca6d39e4c68884973d12277c799",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "point-11",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 17,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "150103", "150104"], ["==", "accessflag", 0]]
    }, {
      "id": "deba6c6713b44b5bb81461f6b0ad04a3",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "point-11",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 16.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "150200"], ["==", "accessflag", 0]]
    }, {
      "id": "ebec03547367447da2cb2a51be2ad6e2",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "point-11",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 17.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "140202"], ["==", "accessflag", 0]]
    }, {
      "id": "7c3e8a83150f4593a5776d16e275bf22",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "point-11",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 15.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "140101", "140104", "140201", "140301", "140302", "140303", "140304"], ["==", "accessflag", 0]]
    }, {
      "id": "27d87af7b25443e0bba4df77aa7744d9",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 17.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "130101", "130200", "130201", "130202", "130303", "130304", "130501", "130502"], ["==", "accessflag", 0]]
    }, {
      "id": "fa175da56fc24430af919fd2c1053f96",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "point-11",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 17.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "130104", "130105", "130203", "130204", "130205", "130206", "130207", "130302", "130401", "130403", "130404", "130405", "130406", "130407", "130408", "130409", "130410", "130411", "130800", "130801", "130803", "130804", "130805", "130806", "130807"], ["==", "accessflag", 0]]
    }, {
      "id": "2c7024d2c9c2412e8b23351b034b151b",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 16,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "130102", "130106", "130301"], ["==", "accessflag", 0]]
    }, {
      "id": "4d4ee9f5548c4670be7b73488b2f46b0",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "point-11",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "minzoom": 16,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "130402", "130601", "130602", "130603", "130700", "130701", "130702", "130703", "130704", "130705"], ["==", "accessflag", 0]]
    }, {
      "id": "fde601c027f54c0dbaf49948b18f9c38",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 16.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "120201"], ["==", "accessflag", 0]]
    }, {
      "id": "27408fb911024a4d95509163ed5c7a02",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 16.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "120101", "120102", "120103", "120201"], ["==", "accessflag", 0]]
    }, {
      "id": "79156ee8564841f99ea23976973882bf",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12,
        "icon-image": "point-11",
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "source-layer": "Poi",
      "minzoom": 16,
      "type": "symbol",
      "filter": ["all", ["==", "accessflag", 0], ["==", "kindcode", "120104"]]
    }, {
      "id": "af0bc80c26b042088ee8512fc2b0011b",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 16.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "120201"], ["==", "generation", 2], ["==", "accessflag", 0]]
    }, {
      "id": "73f2703b9fbc429baea6971fbcaeb4c3",
      "maxzoom": 17.5,
      "source": "Poi",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
        "text-offset": [1, 0]
      },
      "source-layer": "Poi",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#c87f01",
        "icon-color": "#ff0000"
      },
      "minzoom": 17.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "110101", "110102", "110103", "110200", "110301", "110302", "110303", "110304"], ["==", "accessflag", 0]]
    }, {
      "id": "8df5963f6e52485c82f78bbf83baf221",
      "maxzoom": 17.5,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "text-pitch-alignment": "viewport",
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-rotation-alignment": "viewport",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
        "text-offset": [-1, -1.3]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#222222",
        "text-halo-width": 0.5,
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 4,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "275007"], ["==", "name_zh", "钓鱼岛"]]
    }, {
      "id": "9a8da4edd5a349ed80cdd469ccc587f4",
      "maxzoom": 17.5,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "text-pitch-alignment": "viewport",
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-rotation-alignment": "viewport",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
        "text-offset": [1, -1]
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 0.5,
        "text-color": "#222222",
        "icon-color": "#ff0000"
      },
      "minzoom": 4,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "275007"], ["==", "name_zh", "东沙群岛"]]
    }, {
      "id": "2b2423d7e99f4ca6868959dbcf7c597d",
      "maxzoom": 17.5,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "text-pitch-alignment": "viewport",
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-rotation-alignment": "viewport",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
        "text-offset": [-1, -1]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#222222",
        "text-halo-width": 0.5,
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 4,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "275007"], ["==", "name_zh", "西沙群岛"]]
    }, {
      "id": "bee80fa331724f20a77a923f7875808a",
      "maxzoom": 17.5,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "text-pitch-alignment": "viewport",
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-rotation-alignment": "viewport",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
        "text-offset": [-1, -1]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#222222",
        "text-halo-width": 0.5,
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 4,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "275007"], ["==", "name_zh", "中沙群岛"]]
    }, {
      "id": "e2ca2727d0354169a81b4ac56a936da6",
      "maxzoom": 17.5,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "text-pitch-alignment": "viewport",
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-rotation-alignment": "viewport",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
        "text-offset": [0, -3]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#222222",
        "text-halo-width": 0.5,
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 4,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "275007"], ["==", "name_zh", "南沙群岛"]]
    }, {
      "id": "f04a09c6a8d84b728bcef9f21e9777ca",
      "maxzoom": 17.5,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "text-pitch-alignment": "viewport",
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-max-width": 8.0,
        "text-rotation-alignment": "viewport",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
        "text-offset": [0, 2]
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 0.5,
        "text-color": "#222222",
        "icon-color": "#ff0000"
      },
      "minzoom": 4,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "275007"], ["==", "name_zh", "黄岩岛（民主礁）"]]
    }, {
      "id": "4dc68e3ddc20452ab8c0f5d2d227ece7",
      "maxzoom": 17.5,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "text-pitch-alignment": "viewport",
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-rotation-alignment": "viewport",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
        "text-offset": [0, -1]
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 0.5,
        "text-color": "#222222",
        "icon-color": "#ff0000"
      },
      "minzoom": 4,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "275007"], ["==", "name_zh", "曾母暗沙"]]
    }, {
      "id": "bca625071e744b2f9179fe773d8552a2",
      "maxzoom": 17.5,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "text-pitch-alignment": "viewport",
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-rotation-alignment": "viewport",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
        "text-offset": [2, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#222222",
        "text-halo-width": 0.5,
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 4,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "275007"], ["==", "name_zh", "赤尾屿"]]
    }, {
      "id": "ef91de9f69654b32b83337114ba1e0f4",
      "maxzoom": 17.5,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "text-pitch-alignment": "viewport",
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-rotation-alignment": "viewport",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
        "text-offset": [2, 0]
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 0.5,
        "text-color": "#222222",
        "icon-color": "#ff0000"
      },
      "minzoom": 7.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "275006"], ["==", "name_zh", "黄尾屿"]]
    }, {
      "id": "d58ac0a2e0cd4d2f90766dd250db93b0",
      "maxzoom": 17.5,
      "source": "Annotation",
      "layout": {
        "text-max-width": 8.0,
        "text-size": 14.0,
        "text-pitch-alignment": "viewport",
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-rotation-alignment": "viewport",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
        "text-offset": [0, 0]
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 0.5,
        "text-color": "#222222",
        "icon-color": "#ff0000"
      },
      "minzoom": 6.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "275007"], ["==", "name_zh", "(台湾省详细资料暂缺)"]]
    }, {
      "id": "b7a6c929125e4725b36a9c8c80f25dd1",
      "maxzoom": 6.0,
      "source": "Annotation",
      "layout": {
        "text-max-width": 8.0,
        "text-size": 10.0,
        "text-pitch-alignment": "viewport",
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-rotation-alignment": "viewport",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
        "text-offset": [0, 0]
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 0.5,
        "text-color": "#222222",
        "icon-color": "#ff0000"
      },
      "minzoom": 5.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "275007"], ["==", "name_zh", "(台湾省详细资料暂缺)"]]
    }, {
      "id": "2xin939396jia9436e9197e3c5a57f3f4a",
      "maxzoom": 13,
      "source": "Villtown",
      "layout": {
        "text-size": 12,
        "text-pitch-alignment": "viewport",
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-rotation-alignment": "viewport",
        "text-anchor": "right",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"]
      },
      "source-layer": "Villtown",
      "paint": { "text-halo-color": "#ffffff", "text-color": "#666666", "text-halo-width": 1, "icon-color": "#ff0000" },
      "minzoom": 7.0,
      "type": "symbol",
      "filter": ["all", ["==", "kind", "260100"]]
    }, {
      "id": "8c9393963aa9436e9197e3c5a57f3f4a",
      "maxzoom": 17.5,
      "source": "Villtown",
      "layout": {
        "text-size": 12,
        "text-pitch-alignment": "viewport",
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-rotation-alignment": "viewport",
        "text-anchor": "right",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"]
      },
      "source-layer": "Villtown",
      "paint": { "text-halo-color": "#ffffff", "text-color": "#666666", "text-halo-width": 1, "icon-color": "#ff0000" },
      "minzoom": 13.0,
      "type": "symbol",
      "filter": ["all", ["==", "kind", "260100"], ["!in", "name_zh", "北代岛", "万代岛", "青阳岛"]]
    }, {
      "id": "6972b5a8a10644dc84cf746f31d8af69",
      "maxzoom": 17.5,
      "source": "Villtown",
      "layout": {
        "text-size": 11.0,
        "text-pitch-alignment": "viewport",
        "visibility": "visible",
        "symbol-avoid-edges": false,
        "text-field": "{name_zh}",
        "text-rotation-alignment": "viewport",
        "text-anchor": "right",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
        "symbol-placement": "point"
      },
      "paint": { "text-halo-color": "#ffffff", "text-color": "#666666", "text-halo-width": 1, "icon-color": "#ff0000" },
      "source-layer": "Villtown",
      "minzoom": 10.0,
      "type": "symbol",
      "filter": ["all", ["==", "kind", "260000"], ["in", "name_tag", 2, 0, 1]]
    }, {
      "id": "76d497882f104a4d98d501e7fe42b9d4",
      "maxzoom": 10.0,
      "source": "Adminflag",
      "layout": {
        "text-size": 12.0,
        "text-pitch-alignment": "viewport",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-rotation-alignment": "viewport",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
        "text-offset": [0, 1]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.0,
        "text-color": "#444444",
        "icon-color": "#ff0000",
        "text-translate-anchor": "map"
      },
      "source-layer": "Adminflag",
      "minzoom": 7.0,
      "type": "symbol",
      "filter": ["all", ["==", "type", 4], ["!in", "name_zh", "台湾", "元宝区", "东港市", "集安市", "临江市", "长白朝鲜族自治县", "图们市", "饶河县", "振兴区", "振安区", "呼玛县"]]
    }, {
      "id": "fee497d05547428494143f295dfc47f3",
      "maxzoom": 10,
      "source": "Adminflag",
      "layout": {
        "text-size": 12,
        "icon-image": "circle-brown-11",
        "text-pitch-alignment": "viewport",
        "symbol-avoid-edges": false,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-rotation-alignment": "viewport",
        "text-ignore-placement": false,
        "text-allow-overlap": false,
        "text-anchor": "bottom",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
        "icon-size": 0.8,
        "text-offset": [0, 1.7]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 0.5,
        "text-color": "#3d3d3b",
        "icon-color": "#ff0000"
      },
      "source-layer": "Adminflag",
      "minzoom": 9.0,
      "type": "symbol",
      "filter": ["all", ["==", "capital", 3], ["==", "name_zh", "黑河"]]
    }, {
      "id": "521141cc419344cdab1679f15134d42c",
      "maxzoom": 10,
      "source": "Adminflag",
      "layout": {
        "icon-text-fit": "none",
        "icon-image": "circle-brown-11",
        "text-pitch-alignment": "viewport",
        "symbol-avoid-edges": false,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-allow-overlap": false,
        "icon-size": 0.8,
        "icon-offset": [0, -8],
        "text-offset": [1, -1.5],
        "text-size": 12,
        "text-justify": "center",
        "text-ignore-placement": false,
        "text-rotation-alignment": "viewport",
        "text-anchor": "right",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 0.5,
        "text-color": "#3d3d3b",
        "icon-color": "#ff0000"
      },
      "source-layer": "Adminflag",
      "minzoom": 5.0,
      "type": "symbol",
      "filter": ["all", ["==", "capital", 3], ["==", "name_zh", "汕头"]]
    }, {
      "id": "636841cc419344cdab1679f15134d42e",
      "maxzoom": 10,
      "source": "Adminflag",
      "layout": {
        "icon-text-fit": "none",
        "icon-image": "circle-brown-11",
        "text-pitch-alignment": "viewport",
        "symbol-avoid-edges": false,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-allow-overlap": false,
        "icon-size": 0.8,
        "icon-offset": [-18, 0],
        "text-offset": [-2, 0],
        "text-size": 12,
        "text-justify": "center",
        "text-ignore-placement": false,
        "text-rotation-alignment": "viewport",
        "text-anchor": "right",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 0.5,
        "text-color": "#3d3d3b",
        "icon-color": "#ff0000"
      },
      "source-layer": "Adminflag",
      "minzoom": 5.0,
      "type": "symbol",
      "filter": ["all", ["==", "capital", 3], ["==", "name_zh", "丹东"]]
    }, {
      "id": "bb4eb88689474800810c4123ea2af708",
      "maxzoom": 10.0,
      "source": "Adminflag",
      "layout": {
        "text-size": 12.0,
        "icon-image": "circle-brown-11",
        "text-pitch-alignment": "viewport",
        "visibility": "visible",
        "symbol-avoid-edges": false,
        "text-field": "{name_zh}",
        "text-ignore-placement": false,
        "text-rotation-alignment": "viewport",
        "text-allow-overlap": false,
        "text-anchor": "bottom",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
        "icon-size": 0.8,
        "text-offset": [0, -0.3]
      },
      "source-layer": "Adminflag",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#3d3d3b",
        "text-halo-width": 0.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 5.0,
      "type": "symbol",
      "filter": ["all", ["==", "capital", 3], ["!in", "name_tag", 1, 3, 2], ["!in", "name_zh", "黑河", "丹东", "汕头"]]
    }, {
      "id": "a86c5a3a9ca34e4581311a72211733cb",
      "maxzoom": 10,
      "source": "Adminflag",
      "layout": {
        "text-size": 12,
        "text-pitch-alignment": "viewport",
        "visibility": "visible",
        "symbol-avoid-edges": false,
        "text-max-width": 16.0,
        "text-field": "{name_zh}",
        "text-ignore-placement": false,
        "text-rotation-alignment": "viewport",
        "text-allow-overlap": false,
        "text-anchor": "bottom",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
        "icon-size": 0.8,
        "text-offset": [0, -0.3]
      },
      "source-layer": "Adminflag",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#3d3d3b",
        "text-halo-width": 0.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 5,
      "type": "symbol",
      "filter": ["all", ["==", "capital", 3], ["in", "name_tag", 1, 3, 2], ["in", "name_zh", "延边朝鲜族自治州", "德宏傣族景颇族自治州", "西双版纳傣族自治州", "伊犁哈萨克自治州"]]
    }, {
      "id": "c236b902443b40848b6a71cc915cb23f",
      "maxzoom": 10,
      "source": "Adminflag",
      "layout": {
        "text-size": 12,
        "text-pitch-alignment": "viewport",
        "visibility": "visible",
        "symbol-avoid-edges": false,
        "text-max-width": 6,
        "text-field": "{name_zh}",
        "text-ignore-placement": false,
        "text-rotation-alignment": "viewport",
        "text-allow-overlap": false,
        "text-anchor": "bottom",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
        "icon-size": 0.8,
        "text-offset": [1.3, 1]
      },
      "source-layer": "Adminflag",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#3d3d3b",
        "text-halo-width": 0.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 5,
      "type": "symbol",
      "filter": ["all", ["==", "capital", 3], ["in", "name_tag", 1, 3, 2], ["==", "name_zh", "怒江傈僳族自治州"]]
    }, {
      "id": "4cf792501b9144b5a8d5a69fc41251e4",
      "maxzoom": 10,
      "source": "Adminflag",
      "layout": {
        "text-size": 12,
        "text-pitch-alignment": "viewport",
        "visibility": "visible",
        "symbol-avoid-edges": false,
        "text-field": "{name_zh}",
        "text-max-width": 6,
        "text-ignore-placement": false,
        "text-rotation-alignment": "viewport",
        "text-allow-overlap": false,
        "text-anchor": "bottom",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
        "icon-size": 0.8,
        "text-offset": [2, 0]
      },
      "source-layer": "Adminflag",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#3d3d3b",
        "text-halo-width": 0.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 5,
      "type": "symbol",
      "filter": ["all", ["==", "capital", 3], ["in", "name_tag", 1, 3, 2], ["in", "name_zh", "塔城地区"]]
    }, {
      "id": "e38c82bddb514995bfbb50f6a09dbab1",
      "maxzoom": 10.0,
      "source": "Adminflag",
      "layout": {
        "text-size": 12.0,
        "text-pitch-alignment": "viewport",
        "visibility": "visible",
        "symbol-avoid-edges": false,
        "text-field": "{name_zh}",
        "text-ignore-placement": false,
        "text-rotation-alignment": "viewport",
        "text-anchor": "bottom",
        "text-allow-overlap": false,
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
        "icon-size": 0.8,
        "text-offset": [0, -0.3]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 0.5,
        "text-color": "#3d3d3b",
        "icon-color": "#ff0000"
      },
      "source-layer": "Adminflag",
      "minzoom": 5.0,
      "type": "symbol",
      "filter": ["all", ["==", "capital", 3], ["in", "name_tag", 1, 3, 2], ["!in", "name_zh", "延边朝鲜族自治州", "塔城地区", "德宏傣族景颇族自治州", "西双版纳傣族自治州", "怒江傈僳族自治州", "伊犁哈萨克自治州"]]
    }, {
      "id": "128701da10cf4c0c99311d24060ef5b1",
      "maxzoom": 10.0,
      "source": "Adminflag",
      "layout": {
        "text-size": 14,
        "icon-image": "circle-red-11",
        "text-pitch-alignment": "viewport",
        "visibility": "visible",
        "symbol-avoid-edges": false,
        "text-field": "{name_zh}",
        "text-ignore-placement": false,
        "text-rotation-alignment": "viewport",
        "text-allow-overlap": false,
        "text-anchor": "right",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
        "icon-size": 0.8,
        "text-offset": [-0.4, 0]
      },
      "source-layer": "Adminflag",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#0c0c0c",
        "text-halo-width": 0.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 4,
      "type": "symbol",
      "filter": ["all", ["==", "name_zh", "澳門"]]
    }, {
      "id": "2088b3843ad74dfc819419d2251159ce",
      "maxzoom": 10.0,
      "source": "Adminflag",
      "layout": {
        "icon-image": "circle-red-11",
        "text-pitch-alignment": "viewport",
        "symbol-avoid-edges": false,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-allow-overlap": false,
        "icon-size": 0.8,
        "text-offset": [0.4, 0],
        "text-size": 14.0,
        "text-justify": "left",
        "text-rotation-alignment": "viewport",
        "text-ignore-placement": false,
        "text-anchor": "left",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 0.5,
        "text-color": "#0c0c0c",
        "icon-color": "#ff0000"
      },
      "source-layer": "Adminflag",
      "minzoom": 4.0,
      "type": "symbol",
      "filter": ["all", ["==", "name_zh", "香港"]]
    }, {
      "id": "81a05adebefa493ca036d10f4a060eed",
      "maxzoom": 10.0,
      "source": "Adminflag",
      "layout": {
        "text-size": 14.0,
        "icon-image": "circle-red-11",
        "text-pitch-alignment": "viewport",
        "symbol-avoid-edges": false,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-rotation-alignment": "viewport",
        "text-ignore-placement": false,
        "text-allow-overlap": false,
        "text-anchor": "bottom",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
        "icon-size": 0.8,
        "text-offset": [0, -0.3]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 0.5,
        "text-color": "#0c0c0c",
        "icon-color": "#ff0000"
      },
      "source-layer": "Adminflag",
      "minzoom": 4.0,
      "type": "symbol",
      "filter": ["all", ["in", "capital", 1, 2], ["!in", "name_zh", "香港", "澳門", "天津", "海口"]]
    }, {
      "id": "b9ae7364f1174c3ebf4d36cd66bf8597",
      "maxzoom": 10.0,
      "source": "Adminflag",
      "layout": {
        "text-size": 14.0,
        "icon-image": "circle-red-11",
        "text-pitch-alignment": "viewport",
        "symbol-avoid-edges": false,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-rotation-alignment": "viewport",
        "text-ignore-placement": false,
        "text-allow-overlap": false,
        "text-anchor": "left",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
        "icon-size": 0.8,
        "text-offset": [-2.5, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 0.5,
        "text-color": "#0c0c0c",
        "icon-color": "#ff0000"
      },
      "source-layer": "Adminflag",
      "minzoom": 4.0,
      "type": "symbol",
      "filter": ["all", ["in", "capital", 1, 2], ["==", "name_zh", "天津"]]
    }, {
      "id": "c9ae7364f1174c3ebf4d36ab65bf8597",
      "maxzoom": 10.0,
      "source": "Adminflag",
      "layout": {
        "text-size": 14.0,
        "icon-image": "circle-red-11",
        "text-pitch-alignment": "viewport",
        "symbol-avoid-edges": false,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-rotation-alignment": "viewport",
        "text-ignore-placement": false,
        "text-allow-overlap": false,
        "text-anchor": "bottom",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
        "icon-size": 0.8,
        "text-offset": [1.5, 1],
        "icon-offset": [0, 8]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 0.5,
        "text-color": "#0c0c0c",
        "icon-color": "#ff0000"
      },
      "source-layer": "Adminflag",
      "minzoom": 4.0,
      "type": "symbol",
      "filter": ["all", ["in", "capital", 1, 2], ["==", "name_zh", "海口"]]
    }, {
      "id": "c9727a2f0a274d09ae5cc0a47771c8f6",
      "maxzoom": 10.0,
      "source": "Adminflag",
      "layout": {
        "text-size": 12.0,
        "text-pitch-alignment": "viewport",
        "visibility": "visible",
        "symbol-avoid-edges": false,
        "text-field": "{name_zh}",
        "text-ignore-placement": false,
        "text-rotation-alignment": "viewport",
        "text-anchor": "bottom",
        "text-allow-overlap": false,
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
        "icon-size": 0.8,
        "text-offset": [0, -0.3]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 0.5,
        "text-color": "#0c0c0c",
        "icon-color": "#ff0000"
      },
      "source-layer": "Adminflag",
      "minzoom": 6.0,
      "type": "symbol",
      "filter": ["all", ["==", "name_zh", "(台湾省详细资料暂缺)"]]
    }, {
      "id": "909987d5918e4262a2feaab2c6eced2d",
      "maxzoom": 4.0,
      "source": "Adminflag",
      "layout": {
        "text-size": 16.0,
        "icon-image": "star-11",
        "text-pitch-alignment": "viewport",
        "symbol-avoid-edges": false,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-rotation-alignment": "viewport",
        "text-anchor": "bottom",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
        "icon-size": 1.0,
        "text-offset": [0, -0.3]
      },
      "source-layer": "Adminflag",
      "paint": {
        "icon-halo-color": "#d0021b",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.0,
        "text-color": "#333333",
        "icon-halo-width": 10.0,
        "icon-color": "#ff0000"
      },
      "minzoom": 3,
      "type": "symbol",
      "filter": ["all", ["in", "capital", 1]]
    }, {
      "id": "c3b80db4376547bfadda19932b5e445d",
      "maxzoom": 11.5,
      "source": "Adminflag",
      "layout": {
        "text-size": 12,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
        "text-offset": [0, 0.15]
      },
      "paint": {
        "text-halo-color": "#7599e9",
        "text-halo-width": 10.0,
        "text-color": "#ffffff",
        "icon-opacity": 0.9,
        "icon-color": "#7bd4f0",
        "text-translate-anchor": "map"
      },
      "source-layer": "Adminflag",
      "minzoom": 10.0,
      "type": "symbol",
      "filter": ["all", ["==", "type", 4], ["!in", "name_zh", "香洲区（由澳门特别行政区实施管辖）", "台湾", "长白朝鲜族自治县", "集安市", "临江市", "振兴区", "元宝区", "振安区", "爱辉区", "抚远市"]]
    }, {
      "id": "4d24d8a9ccfe4032b62b836ef96c4749",
      "maxzoom": 11.0,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "visibility": "visible",
        "symbol-avoid-edges": true,
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-font": ["Open Sans Regular,Arial Unicode MS Regular"],
        "text-offset": [1, 0]
      },
      "source-layer": "Annotation",
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#0053bb",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "minzoom": 9.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "230126"], ["==", "rank", 4], ["!=", "name_zh", "丹东浪头机场"]]
    }, {
      "id": "eeac89b3cceb4278ba7d036fcfbb8d3c",
      "maxzoom": 16.0,
      "source": "Annotation",
      "layout": {
        "text-size": 12.0,
        "icon-image": "poi_code_{kindcode}_16",
        "symbol-avoid-edges": true,
        "visibility": "visible",
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-halo-width": 1.5,
        "text-color": "#544946",
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 10.0,
      "type": "symbol",
      "filter": ["all", ["in", "kindcode", "230103", ""], [">=", "rank", 3], ["!=", "name_zh", "临江站"]]
    }, {
      "id": "f35faef757a94982bdecfcd477efe857",
      "maxzoom": 16.0,
      "source": "Annotation",
      "layout": {
        "text-size": 12,
        "icon-image": "Tiananmen",
        "visibility": "visible",
        "symbol-avoid-edges": false,
        "text-field": "{name_zh}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "paint": {
        "text-halo-color": "#ffffff",
        "text-color": "#544946",
        "text-halo-width": 1.5,
        "icon-color": "#ff0000"
      },
      "source-layer": "Annotation",
      "minzoom": 10.0,
      "type": "symbol",
      "filter": ["all", ["==", "kindcode", "185116"], ["==", "name_zh", "天安门"]]
    }, {
      "id": "09b62a9294d544b9943s01cc8ed5d1cd",
      "maxzoom": 17.5,
      "source": "Svr",
      "layout": {
        "text-size": 20.0,
        "icon-size": 1,
        "icon-image": "icon_reddot",
        "symbol-avoid-edges": false,
        "visibility": "visible",
        "text-field": "{likelyEndTime}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "minzoom": 6.0,
      "type": "symbol",
      "filter": ["all", ["in", "lightsStatus", "Dark", "Unavailable", "stop-Then-Proceed", "stop-And-Remain"]]
    },
    {
      "id": "09b62a9294d544b9943s01cc8ed5d1cd332",
      "maxzoom": 17.5,
      "source": "Svr",
      "layout": {
        "text-size": 20.0,
        "icon-size": 1,
        "icon-image": "icon_orangedot",
        "symbol-avoid-edges": false,
        "visibility": "visible",
        "text-field": "{likelyEndTime}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "minzoom": 6.0,
      "type": "symbol",
      "filter": ["all", ["in", "lightsStatus", "pre-Movement", "premissive-Movement-Allowed", "protected-Movement-Allowed"]]
    },
    {
      "id": "09b62a9294d544b9943s01cc8ed5d1cd3387",
      "maxzoom": 17.5,
      "source": "Svr",
      "layout": {
        "text-size": 20.0,
        "icon-size": 1,
        "icon-image": "icon_yellowdot",
        "symbol-avoid-edges": false,
        "visibility": "visible",
        "text-field": "{likelyEndTime}",
        "text-anchor": "left",
        "text-offset": [1, 0]
      },
      "minzoom": 6.0,
      "type": "symbol",
      "filter": ["all", ["in", "lightsStatus", "intersection-Clearance", "caution-Conflicting-Tra"]]
    }
  ]
};

export default simple;
