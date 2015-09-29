var React = require('react/addons');
var leaflet = require('leaflet');
var branch = require('baobab-react/mixins').branch;
require('./map.css');

var _Map = React.createClass({
  mixins: [branch],

  createMap: function(element) {
    var tiles = leaflet.tileLayer('http://otile1.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
      attribution: 'Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency'
    });
    var map = leaflet.map('map');//element);
    tiles.addTo(map);
    return map;
  },

  componentDidMount: function() {
    if (this.props.createMap) {
      this.map = this.props.createMap(this.getDOMNode);
    } else {
      this.map = this.createMap(this.getDOMNode()); 
    }
  }, 

  render: function() {
    return (
      <div id='map' className="map">
      </div>
    );
  },
});
module.exports = _Map;
