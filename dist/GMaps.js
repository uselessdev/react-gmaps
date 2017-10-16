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
          icon: typeof marker === 'string' ? marker : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAG7AAABuwE67OPiAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYZQTFRF/////wCA/1VV/0BA/zMz/0lJ4zk55jNN6zs77TdJ7jNE70BA8Dw86TdD6jVA7TdA7TU+7zpC7DlA8DZA7DlC7DhB7TdA7jdA7zhA7zc/7Tc/7jg/7zdB7ThB7ThA7jdA7zc/7zlB7zc/7jlA7jhA7zg/7zlA7TdA7jhB7zhA7Tc/7TlB7jhA7jg/7zhA7jhA7jhA7jk/7zhA7zc/7ThB7jlB7jdB7jhA7jg/7jhA7jhA7jhA7jhA7jc/7jlA7jg/7jhA7jhA7jlA7jdA7zg/7jg/7jhA7jhA7jhA7jg/7jdA7jg/7jhA7jhA7jg/7jhA7jg/7jhA7jhA7jhA7jhA7jlB7jtD7z1F70BH70JJ70RL70VM70ZM8ElP8Vdc8Vld8ltf8lxg8mBk8mJm82dq825w9G9x9HFz9HZ39Xl69YKB9oaF9oqJ946M94+N95aU+JuY+J2Z+J+b+aWh+qyn+7u0/L+3/MK6/Me//crB/c7G/dDH/tPK/trQ/93S/97U/+DV/+HWi9+UUAAAAFR0Uk5TAAIDBAUHCQoNDg8QERcYHB0fKDQ2Nzg8QEFFSU9WV1hdXmFnaG1wc3p8gYKIiYyTl5mcnZ6iprO1tre/wMHCxczO1NjZ4err7O3v8fP09fj5+/z+MxvIQwAAAnBJREFUGBmdwQk7VFEABuBvGFtkJ5LIlpCSNSVbM/bl5ssaTUVly1Ip+5x/nsfT455z7zl3znhfGGU9bO169XZy8u3rrtaHWUhSbm3vLCWzvbW5sJf73KGP8zwXdjKbp6g11ZwJC/ejNIreR0L17xjgXT2ChduYQFsYAVJeMqGXKTB7RgvPYFRLK7UwKHdoxSmHVlqEliJp0HlMr9XN3cPD3c1Vej2GRvYYVZ9/x8W1+O/PVI1lw6+FioW9uLgR31ugogU+GdOUfforFH8/UTadAa8HlK1dCI+LNcoewKuDkvk/wufPPCUd8AhFKfkhNH5QEg1BdY+S2KXQuIxRcg+qOkp+Ca1flNRB1UzXwrnQOl+gqxmqF3R9EQZf6HoBVQ9d34XBd7p6oBqka1sYbNM1CNUburaEwRZdb6DqpOubMPhGVydUTXR9FAYf6WqCqoau96dC6/Q9XTVQlVGyL7T2KSmDqoCSD2dC4+wDJQVQpTiUfBUaXylxUuAxQNlP4fOTsgF4NVC2fCw8jpcpa4DXXYeyxQOhOFikzLkLnx6q1k/EjZN1qnrgV0WPpZ2juLgSP9pZokcV/NIn6LMS29iIrdBnIh0a7bTWDp2iOVqaK4JWFy11Qa9ghlZmCmDwlFaewuTOCC2M3IFRPS3Uwyw8zISGwwhQ7DABpxiBGplAI4KF+hioL4QE8scZYDwfCVUyQCUstNGoDTZSu2nQnQor6f3U6k+HpZwhagzlwFpehD6RPCShcJQeo4VISuk0FdOlSFKFQ4lTgaRVz/HGXDVu4ZHD/5xHuJWKKV6bqsAtlYzwykgJbi3/ydDQk3wE+Qe8yj6NIv6VcwAAAABJRU5ErkJggg=='
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