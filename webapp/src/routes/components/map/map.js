import React from 'react'
import _ from 'lodash';
import Control from 'react-leaflet-control';
import { Map, TileLayer, GeoJSON, Marker } from 'react-leaflet'
import { connectProps } from 'store';

// const customMarkerIcon = require('static/icons/compass.svg');
// const shipMarker = markerIcon(customMarkerIcon,customMarkerIcon);
// const customSteadyIcon = require('static/icons/dot.svg');
// const steadyMarker = markerIcon(customSteadyIcon,customSteadyIcon);

class MapBox extends React.Component {
  render() {
    const { route, customControl } = this.props;
    return (
      <Map center={[25.752725, -38.408203]} zoom={3} ref='map'>
        <TileLayer
          url='https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png'
          attribution='<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          maxZoom="20"
        />
        {
          customControl &&
            <Control position={customControl.position}>
              {customControl.element()}
            </Control>
        }
        {route && route.coordinates && <GeoJSON data={route} onEachFeature={(feature, layer) => {
          this.refs.map.leafletElement.fitBounds(layer.getBounds());
        }}
        />}
      </Map>
    );
  }
}

export default connectProps()(MapBox);
