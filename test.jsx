/*import React from 'react';
import './App.css';
import { Map, Polygon, TileLayer, VectorLayer, GeoJSON } from 'maptalks';

const geoMocks = require('./data/geo.json')



class App extends React.Component {
  constructor(props) {
    super(props);

    // TODO: remove, get from props
    this.regions = [
      {
        id: '1',
        coords: [
          [-0.131049, 51.498568],
          [-0.107049, 51.498568],
          [-0.107049, 51.493568],
          [-0.131049, 51.493568],
          [-0.131049, 51.498568]
        ]
      }
    ];
  }

  initMap() {
    this.map = new Map('map', {
      center: [98.391178, 65.366837],
      zoom: 3.5,
      minZoom : 3,
      maxZoom : 5,
      baseLayer: new TileLayer('base', {
        urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        subdomains: ['a', 'b', 'c', 'd'],
        attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
      }),
    });
  }

  renderHeatMap() {
    // const { regions } = this.props;
    // const regions = this.regions;
    // const polygons = regions.map(this.getPolygonFromRegion);

    const polygons = GeoJSON.toGeometry(geoMocks[federal_district]);

    new VectorLayer('vector', polygons).addTo(this.map);
  }

  getPolygonFromRegion(region) {
    const polygon = new Polygon([region.coords], {
      visible: true,
      editable: true,
      cursor: 'pointer',
      shadowBlur: 0,
      shadowColor: 'black',
      draggable: false,
      dragShadow: false, // display a shadow during dragging
      drawOnAxis: null,  // force dragging stick on a axis, can be: x, y
      symbol: {
        'lineColor': '#34495e',
        'lineWidth': 2,
        'polygonFill': 'rgb(135,196,240)',
        'polygonOpacity': 0.6
      }
    });

    return polygon;
  }

  componentDidMount() {
    this.initMap();

    // TODO: move to antoher method
    this.renderHeatMap();
  }

  componentDidUpdate(prevProps) {
    // const { regions } = this.props;

    // if (prevProps.regions !== regions) {
    //   this.renderHeatMap();
    // }
  }

  render() {
    return (
      <div>
        <div className="map" id="map"></div>
      </div>
    );
  }
}


export default App;*/
