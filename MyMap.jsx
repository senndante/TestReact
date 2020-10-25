import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import {features} from '../data/ruregions.json'



const position = [64.774125, 109.667469];


class MyMap extends Component {


  
regionStyle = {
 fillColor: 'green',
 fillOpacity: .3,
  color: 'black',
  weight: .5,
};

onEachRegion = (region, layer) => {
  const regionName = region.properties.name;
  const dens = region.properties.density;
    layer.bindPopup(regionName);
    
 }

  
componentDidMount(){};

render(){  
return(
    <Map className="map"
      center={position}
      zoom={3}
      style={{height: '90vh', width: "100%"}}
    >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    <GeoJSON
      style={this.regionStyle} 
      data={features}
      onEachFeature={this.onEachRegion}
    />
    </Map> 
    );   
  }
}

export default MyMap;