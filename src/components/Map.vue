<template lang="html">
  <div id="map"></div>
</template>

<script>
  import mapboxgl from "mapbox-gl";
  import config from "../config/config";
  import layer from "../config/layer";

  const defaultLatLng = {
    lat: 39.92,
    lng: 116.46
  };
  const defaultOptions = {
    container: 'map',
    style: layer,
    center: [defaultLatLng.lng, defaultLatLng.lat],
    zoom: 15,
    // pitch: 45,
    attributionControl: false
  };
  mapboxgl.accessToken = config.mapboxToken;
  export default {
    name: 'v2x-map',
    data() {
      return {
        route: [],
        lat: defaultLatLng.lat,
        lng: defaultLatLng.lng,
        mapType: 'default'
      }
    },
    mounted() {
      console.log('ddddd');
      this.loadData();
    },
    methods: {
      loadData () {
        let map;
        let vm = this;
        map = new mapboxgl.Map(defaultOptions);
        vm.map = map;
        let nav = new mapboxgl.NavigationControl({position: 'bottom-right'})
        // map.on('load', function () {
        //   map.addSource("mineData", config.source.mineData);
        //   map.addLayer({
        //     "id": "mineData-join",
        //     "type": "fill",
        //     "source": "mineData",
        //     "source-layer": "Worldcountries",
        //     "paint": {
        //       "fill-color": 'red'
        //     }
        //   }, 'waterway-label');
        // });
        // vm.$http.get('http://api.open-notify.org/iss-now.json')
        //   .then((res) => {
        //     let issPosition = res.body.iss_position;
        //     let issLat = parseFloat(issPosition.latitude, 10);
        //     let issLng = parseFloat(issPosition.longitude, 10);
        //     vm.lat = issLat;
        //     vm.lng = issLng;
        //     vm.route.push([issLng, issLat]);
        //     defaultOptions.center = [issLng, issLat];
        //     defaultOptions.zoom = 4;
        //     map = new mapboxgl.Map(defaultOptions);
        //     vm.map = map;
        //     let nav = new mapboxgl.NavigationControl({position: 'bottom-right'})
        //     map.addControl(nav)
        //     // map.addControl(Draw())
        //     map.on('load', () => {
        //       // the 'building' layer in the mapbox-streets vector source contains building-height
        //       // data from OpenStreetMap.
        //       // map.addLayer({
        //       //   'id': '3d-buildings',
        //       //   'source': 'composite',
        //       //   'source-layer': 'building',
        //       //   'filter': ['==', 'extrude', 'true'],
        //       //   'type': 'fill',
        //       //   'minzoom': 15,
        //       //   'paint': {
        //       //     'fill-color': '#aaa',
        //       //     'fill-extrude-height': {
        //       //       'type': 'identity',
        //       //       'property': 'height'
        //       //     },
        //       //     'fill-extrude-base': {
        //       //       'type': 'identity',
        //       //       'property': 'min_height'
        //       //     },
        //       //     'fill-opacity': .6
        //       //   }
        //       // });
        //       map.addSource('points', {
        //         'type': 'geojson',
        //         'data': {
        //           'type': 'FeatureCollection',
        //           'features': [{
        //             'type': 'Feature',
        //             'geometry': {
        //               'type': 'Point',
        //               'coordinates': [issLng, issLat]
        //             },
        //             'properties': {
        //               'title': 'ISS',
        //               'icon': 'rocket'
        //             }
        //           }]
        //         }
        //       });
        //       map.addLayer({
        //         'id': 'points',
        //         'type': 'symbol',
        //         'source': 'points',
        //         'layout': {
        //           'icon-image': '{icon}-15',
        //           'text-field': '{title}',
        //           'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        //           'text-offset': [0, 0.6],
        //           'text-anchor': 'top'
        //         }
        //       });
        //     });
        //     map.on('mousemove', (e) => {
        //       vm.lat = e.lngLat.lat.toFixed(7);
        //       vm.lng = e.lngLat.lng.toFixed(7);
        //     });
        //   });
        // setTimeout(function () {
        //   vm.updateMap();
        // }, 5000);
      },
      updateMap () {
        let vm = this;
        vm.$http.get('http://api.open-notify.org/iss-now.json')
          .then((res) => {
            let issPosition = res.body.iss_position;
            let issLat = parseFloat(issPosition.latitude, 10);
            let issLng = parseFloat(issPosition.longitude, 10);
            vm.route.push([issLng, issLat]);
            vm.lat = issLat;
            vm.lng = issLng;
            vm.map.flyTo({
              center: [
                issLng,
                issLat
              ]
            });
            // if (!vm.map.getSource('route')) {
            //   vm.map.addSource("route", {
            //     "type": "geojson",
            //     "data": {
            //       "type": "Feature",
            //       "properties": {},
            //       "geometry": {
            //         "type": "LineString",
            //         "coordinates": vm.route
            //       }
            //     }
            //   });
            //
            //   vm.map.addLayer({
            //     "id": "route",
            //     "type": "line",
            //     "source": "route",
            //     "layout": {
            //       "line-join": "round",
            //       "line-cap": "round"
            //     },
            //     "paint": {
            //       "line-color": "#888",
            //       "line-width": 8
            //     }
            //   });
            // } else {
            //   vm.map.getSource('points').setData({
            //     "type": "geojson",
            //     "data": {
            //       "type": "Feature",
            //       "properties": {},
            //       "geometry": {
            //         "type": "LineString",
            //         "coordinates": vm.route
            //       }
            //     }
            //   });
            // }
            requestAnimationFrame(() => {
              vm.map.getSource('points').setData({
                "type": "FeatureCollection",
                "features": [{
                  "type": "Feature",
                  "properties": {
                    'title': 'ISS',
                    'icon': 'rocket'
                  },
                  "geometry": {
                    'type': 'Point',
                    'coordinates': [issLng, issLat]
                  }
                }]
              })
            });
            setTimeout(function () {
              vm.updateMap();
            }, 5000);
          });
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
