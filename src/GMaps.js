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
      icon: (typeof marker === 'string') 
        ? marker
        : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAG7AAABuwE67OPiAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYZQTFRF/////wCA/1VV/0BA/zMz/0lJ4zk55jNN6zs77TdJ7jNE70BA8Dw86TdD6jVA7TdA7TU+7zpC7DlA8DZA7DlC7DhB7TdA7jdA7zhA7zc/7Tc/7jg/7zdB7ThB7ThA7jdA7zc/7zlB7zc/7jlA7jhA7zg/7zlA7TdA7jhB7zhA7Tc/7TlB7jhA7jg/7zhA7jhA7jhA7jk/7zhA7zc/7ThB7jlB7jdB7jhA7jg/7jhA7jhA7jhA7jhA7jc/7jlA7jg/7jhA7jhA7jlA7jdA7zg/7jg/7jhA7jhA7jhA7jg/7jdA7jg/7jhA7jhA7jg/7jhA7jg/7jhA7jhA7jhA7jhA7jlB7jtD7z1F70BH70JJ70RL70VM70ZM8ElP8Vdc8Vld8ltf8lxg8mBk8mJm82dq825w9G9x9HFz9HZ39Xl69YKB9oaF9oqJ946M94+N95aU+JuY+J2Z+J+b+aWh+qyn+7u0/L+3/MK6/Me//crB/c7G/dDH/tPK/trQ/93S/97U/+DV/+HWi9+UUAAAAFR0Uk5TAAIDBAUHCQoNDg8QERcYHB0fKDQ2Nzg8QEFFSU9WV1hdXmFnaG1wc3p8gYKIiYyTl5mcnZ6iprO1tre/wMHCxczO1NjZ4err7O3v8fP09fj5+/z+MxvIQwAAAnBJREFUGBmdwQk7VFEABuBvGFtkJ5LIlpCSNSVbM/bl5ssaTUVly1Ip+5x/nsfT455z7zl3znhfGGU9bO169XZy8u3rrtaHWUhSbm3vLCWzvbW5sJf73KGP8zwXdjKbp6g11ZwJC/ejNIreR0L17xjgXT2ChduYQFsYAVJeMqGXKTB7RgvPYFRLK7UwKHdoxSmHVlqEliJp0HlMr9XN3cPD3c1Vej2GRvYYVZ9/x8W1+O/PVI1lw6+FioW9uLgR31ugogU+GdOUfforFH8/UTadAa8HlK1dCI+LNcoewKuDkvk/wufPPCUd8AhFKfkhNH5QEg1BdY+S2KXQuIxRcg+qOkp+Ca1flNRB1UzXwrnQOl+gqxmqF3R9EQZf6HoBVQ9d34XBd7p6oBqka1sYbNM1CNUburaEwRZdb6DqpOubMPhGVydUTXR9FAYf6WqCqoau96dC6/Q9XTVQlVGyL7T2KSmDqoCSD2dC4+wDJQVQpTiUfBUaXylxUuAxQNlP4fOTsgF4NVC2fCw8jpcpa4DXXYeyxQOhOFikzLkLnx6q1k/EjZN1qnrgV0WPpZ2juLgSP9pZokcV/NIn6LMS29iIrdBnIh0a7bTWDp2iOVqaK4JWFy11Qa9ghlZmCmDwlFaewuTOCC2M3IFRPS3Uwyw8zISGwwhQ7DABpxiBGplAI4KF+hioL4QE8scZYDwfCVUyQCUstNGoDTZSu2nQnQor6f3U6k+HpZwhagzlwFpehD6RPCShcJQeo4VISuk0FdOlSFKFQ4lTgaRVz/HGXDVu4ZHD/5xHuJWKKV6bqsAtlYzwykgJbi3/ydDQk3wE+Qe8yj6NIv6VcwAAAABJRU5ErkJggg=='
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
