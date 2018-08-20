<template lang="html">
  <div id="map"></div>
</template>

<script>
  import mapboxgl from "mapbox-gl";
  import config from "../config/config";
  import layer from "../config/newLayer";
  import { getSvrData, getRsuData, getLimitCross, getRouteRecommendSpeed, getGpsData } from "../dataService/api";
  import "mapbox-gl/dist/mapbox-gl.css";

  const defaultLatLng = {
    lat: 31.48557,
    lng: 120.31794
  };
  const defaultOptions = {
    container: 'map',
    style: layer,
    center: [defaultLatLng.lng, defaultLatLng.lat],
    zoom: 15,
    maxZoom: 19,
    // pitch: 60,
    attributionControl: true
  };
  mapboxgl.accessToken = config.mapboxToken;
  export default {
    name: 'v2x-map',
    data() {
      return {
        map: null,
        threeBox: null
      }
    },
    mounted() {
      this.loadData();
    },
    methods: {
      loadData () {
        this.map = new mapboxgl.Map(defaultOptions);
        this.map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
        this.map.on('load', () => {
          this.map.loadImage('./static/icon_disabled.png',(err, image) => {
            this.map.addImage('trafficDisable',image);
          });
          this.map.loadImage('./static/icon_greenlight.png',(err, image) => {
            this.map.addImage('trafficGreenLight',image);
          });
          this.map.loadImage('./static/icon_redlight.png',(err, image) => {
            this.map.addImage('trafficRedLight',image);
          });
          this.map.loadImage('./static/icon_yellowlight.png',(err, image) => {
            this.map.addImage('trafficYellowLight',image);
          });
          // const threebox = require('threebox');
          // this.threeBox = new threebox.Threebox(this.map);
          // this.threeBox.setupDefaultLights();
          // this.threeBox.addSymbolLayer({
          //   id:             "trucks",
          //   source:         "./static/data/city.geojson",
          //   modelName:      "moxing",    // will look for an .obj and .mtl file with this name
          //   modelDirectory: "./static/models/test/",          // in this directory
          //   rotation:       { generator: feature => (new threebox.THREE.Euler(0,0,0, "ZXY")) },
          //   scale:          { property: 'size' },
          //   scaleWithMapProjection: true,
          //   key:            { property: "id" }
          // });
          this.map.on('click', e => {
            const threeLayer = this.threeBox.getDataLayer('trucks');
            console.log(threeLayer);
            // set bbox as 5px reactangle area around clicked point
            const bbox = [[e.point.x - 5, e.point.y - 5], [e.point.x + 5, e.point.y + 5]];
            const features = this.map.queryRenderedFeatures(bbox, { layers: ['09b62a9294d544b9943s01cc8ed5d1cd3387'] });
            console.log(features);
          });
          this.timedRefreshLayer();
          this.timedRefreshEvent();
          // this.getGpsLocation();
        });
      },
      timedRefreshLayer() {
        const svrSource = this.map.getSource('Svr');
        const rsuSource = this.map.getSource('Rsu');
        getRsuData().then(res => {
          const rsuData = {
            type: 'FeatureCollection',
            features: res.data
          };
          rsuSource.setData(rsuData);
        });
        const timer = setInterval(() => {
          getSvrData().then(result => {
            const svrData = {
              type: 'FeatureCollection',
              features: result.data
            };
            svrSource.setData(svrData);
          });
        }, 1000);
      },
      timedRefreshEvent() {
        const limitCrossSource = this.map.getSource('LimitCross');
        const routeRecommendSpeedSource = this.map.getSource('RouteRecommendSpeed');
        const timer = setInterval(() => {
          getLimitCross().then(result => {
            const limitCrossData = {
              type: 'FeatureCollection',
              features: result.data
            };
            limitCrossSource.setData(limitCrossData);
          });
          // getRouteRecommendSpeed().then(result => {
          //   const routeRecommendSpeedData = {
          //     type: 'FeatureCollection',
          //     features: result.data
          //   };
          //   routeRecommendSpeedSource.setData(routeRecommendSpeedData);
          // });
        }, 5000);
      },
      getGpsLocation() {
        const param = {
          deviceId: 'aimei359273070202965'
        };
        const textGeo = [[
            120.31794,
            31.48557
          ], [
            120.31795,
            31.48557
          ], [
            120.31796,
            31.48557
          ], [
            120.31797,
            31.48557
          ], [
          120.31798,
          31.48557
        ], [
          120.31799,
          31.48557
        ], [
          120.31800,
          31.48557
        ], [
          120.31801,
          31.48557
        ]];
        const source = {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {
                id: 'car',
                heading: 0,
                size: 0.1
              },
              geometry: {
                type: 'Point',
                coordinates: [
                  120.31794,
                  31.48557
                ]
              }
            }
          ]
        };
        const threebox = require('threebox');
        this.threeBox = new threebox.Threebox(this.map);
        this.threeBox.setupDefaultLights();
        this.threeBox.addSymbolLayer({
          id:             "gps",
          source:         source,
          modelName:      "car_1",    // will look for an .obj and .mtl file with this name
          modelDirectory: "./static/models/",          // in this directory
          rotation:       { generator: feature => (new threebox.THREE.Euler(0, 0, -Math.PI/2, "ZXY")) },
          scale:          { property: 'size' },
          scaleWithMapProjection: true,
          key:            { property: "id" }
        });
        const self = this;
        let num = 0;
        const threeLayer = this.threeBox.getDataLayer('gps');
        let geo = [];
        const timer = setInterval(() => {
          geo = textGeo[Math.floor(Math.random()*7)];
        }, 1000);
        function animateMarker() {
          if (threeLayer.features.car && threeLayer.features.car.rawObject) {
            self.threeBox.moveToCoordinate(threeLayer.features.car.rawObject, geo, {scaleToLatitude: true, preScale: 0.1});
          console.log(threeLayer);
          }
          num++;
          if (num < 2000) {
            requestAnimationFrame(animateMarker);
          } else {
            cancelAnimationFrame(requestAnimationFrame(animateMarker));
          }
        }
        animateMarker(0);
        // getGpsData(param).then(result => {
        //   console.log(result);
        // });
      },
      addSvrLayer() {
        for (let i = 0; i < this.svrLayer.length; i++) {
          if (!this.map.getLayer(this.svrLayer[i].id)) {
            this.map.addLayer(this.svrLayer[i]);
          }
        }
      },
      removeSvrLayer() {
        for (let i = 0; i < this.svrLayer.length; i++) {
          if (this.map.getLayer(this.svrLayer[i].id)) {
            this.map.removeLayer(this.svrLayer[i].id);
          }
        }
      },
      addLayer(sourceId) {
        const layers = this.getAllLayerBySource(sourceId);
        for (let i = 0; i < layers.length; i++) {
          if (!this.map.getLayer(layers[i].id)) {
            this.map.addLayer(layers[i]);
          }
        }
      },
      removeLayer(sourceId) {
        const layers = this.getAllLayerBySource(sourceId);
        for (let i = 0; i < layers.length; i++) {
          if (this.map.getLayer(layers[i].id)) {
            this.map.removeLayer(layers[i].id);
          }
        }
      },
      getAllLayerBySource(sourceId) {
        const sourceData = this.map.getSource(sourceId);
        const layers = [];
        if (!sourceData) {
          return layers;
        }
        for (let i = 0; i < layer.layers.length; i++) {
          if (layer.layers[i].source === sourceId) {
            layers.push(layer.layers[i]);
          }
        }
        return layers;
      }
    }
  }
</script>

<style scoped>
  #map {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height: 100%;
  }
</style>
