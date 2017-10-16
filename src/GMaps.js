import React from 'react'
import PropTypes from 'prop-types'
import Maps from 'gmaps'

class GMaps extends React.Component {
  componentDidMount () {
    this.createMaps()
  }

  createMaps () {
    let { options, addr } = this.props

    options = {
      div: '#maps',
      lat: -12.043333,
      lng: -77.028333,
      ...options
    }

    const maps = Maps(options)

    Maps.geocode({
      address: addr,
      callback: this.getLocation(maps)
    })
  }

  getLocation (maps) {
    const { marker } = this.props

    return ([{geometry}], status) => {
      if (status !== 'OK') {
        return false
      }

      if (marker) {
        return this.createMarker(maps, geometry.location, marker)
      }

      return this.centerMap(maps, geometry.location)
    }
  }

  createMarker (map, {lat, lng}, marker) {
    map.addMarker({
      lat: lat(),
      lng: lng(),
      icon: (typeof marker === 'string') ? marker : require('./pin.png')
    })

    this.centerMap(map, {lat, lng})
  }

  centerMap (map, {lat, lng}) {
    map.setCenter(lat(), lng())
  }

  render () {
    const { style } = this.props

    return (
      <div id="maps" style={style} />
    )
  }
}

GMaps.propTypes = {
  options: PropTypes.object,
  marker: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  style: PropTypes.object,
  addr: PropTypes.string.isRequired
}

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
}

export default GMaps
