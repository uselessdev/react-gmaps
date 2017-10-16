Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gmaps = require('gmaps');

var _gmaps2 = _interopRequireDefault(_gmaps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GMaps = function (_React$Component) {
  _inherits(GMaps, _React$Component);

  function GMaps() {
    _classCallCheck(this, GMaps);

    return _possibleConstructorReturn(this, (GMaps.__proto__ || Object.getPrototypeOf(GMaps)).apply(this, arguments));
  }

  _createClass(GMaps, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        this.createMaps();
      }

      return componentDidMount;
    }()
  }, {
    key: 'createMaps',
    value: function () {
      function createMaps() {
        var _props = this.props,
            options = _props.options,
            addr = _props.addr;


        options = Object.assign({
          div: '#maps',
          lat: -12.043333,
          lng: -77.028333
        }, options);

        var maps = (0, _gmaps2['default'])(options);

        _gmaps2['default'].geocode({
          address: addr,
          callback: this.getLocation(maps)
        });
      }

      return createMaps;
    }()
  }, {
    key: 'getLocation',
    value: function () {
      function getLocation(maps) {
        var _this2 = this;

        var marker = this.props.marker;


        return function (_ref, status) {
          var _ref2 = _slicedToArray(_ref, 1),
              geometry = _ref2[0].geometry;

          if (status !== 'OK') {
            return false;
          }

          if (marker) {
            return _this2.createMarker(maps, geometry.location, marker);
          }

          return _this2.centerMap(maps, geometry.location);
        };
      }

      return getLocation;
    }()
  }, {
    key: 'createMarker',
    value: function () {
      function createMarker(map, _ref3, marker) {
        var lat = _ref3.lat,
            lng = _ref3.lng;

        map.addMarker({
          lat: lat(),
          lng: lng(),
          icon: typeof marker === 'string' ? marker : require('./pin.png')
        });

        this.centerMap(map, { lat: lat, lng: lng });
      }

      return createMarker;
    }()
  }, {
    key: 'centerMap',
    value: function () {
      function centerMap(map, _ref4) {
        var lat = _ref4.lat,
            lng = _ref4.lng;

        map.setCenter(lat(), lng());
      }

      return centerMap;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var style = this.props.style;


        return _react2['default'].createElement('div', { id: 'maps', style: style });
      }

      return render;
    }()
  }]);

  return GMaps;
}(_react2['default'].Component);

GMaps.propTypes = {
  options: _propTypes2['default'].object,
  marker: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].string]),
  style: _propTypes2['default'].object,
  addr: _propTypes2['default'].string.isRequired
};

GMaps.defaultProps = {
  style: {
    width: '100%',
    height: '400px',
    backgroundColor: 'slateblue'
  },

  options: {
    div: '#maps',
    zoom: 15
  }
};

exports['default'] = GMaps;