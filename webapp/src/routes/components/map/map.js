import React, { useEffect } from 'react'
import _ from 'lodash';

import 'ol/ol.css';
import { Map, View } from 'ol';
import { Tile, Vector as LayerVector} from 'ol/layer';
import { OSM, Vector as SourceVector} from 'ol/source';

import { connectProps } from 'store';

const MapBox = () => {

  useEffect(() => {
    // const featuresLayer = new LayerVector({
    //   source: new SourceVector({
    //     features:[],
    //   })
    // });
    const map = new Map({
      target: 'map',
      layers: [
		    new Tile({
		      source: new OSM()
		    }),
        // featuresLayer
      ],
      view: new View({
        center: [0, 0], 
        zoom: 5,
      })
    });
    // this.setState({ 
    //   map: map,
    //   featuresLayer: featuresLayer
    // });
  }, []);
  return (
    <div style={{width: '100%'}} id={'map'} />
  );
}

export default connectProps()(MapBox);
