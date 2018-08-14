<template lang="html">
  <div id="map"></div>
</template>

<script>
  import mapboxgl from "mapbox-gl";
  import config from "../config/config";
  import layer from "../config/layer";
  import { getSvrData } from "../dataService/api";

  const defaultLatLng = {
    lat: 31.48557,
    lng: 120.31794
  };
  const defaultOptions = {
    container: 'map',
    style: layer,
    center: [defaultLatLng.lng, defaultLatLng.lat],
    zoom: 15,
    maxZoom: 17,
    // pitch: 45,
    attributionControl: false
  };
  mapboxgl.accessToken = config.mapboxToken;
  export default {
    name: 'v2x-map',
    data() {
      return {
        map: null
      }
    },
    mounted() {
      this.loadData();
    },
    methods: {
      loadData () {
        this.map = new mapboxgl.Map(defaultOptions);
        this.map.on('load', () => {
          this.timedRefreshLayer();
        });
      },
      timedRefreshLayer() {
        const svrSource = this.map.getSource('Svr');
        getSvrData().then(result => {
          const svrData = {
            type: 'FeatureCollection',
            features: result.data
          };
          svrSource.setData(svrData);
        });
        // const timer = setInterval(() => {
        //
        // }, 1000);
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
