import React, { Component } from 'react';
import Mapbox, { MapView } from 'react-native-mapbox-gl';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

const accessToken = 'your-token-here';
Mapbox.setAccessToken(accessToken);

class MapboxExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          styleURL={Mapbox.mapStyles.dark}
          showsUserLocation
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  map: {
    flex: 1,
  },
});

AppRegistry.registerComponent('MapboxExample', () => MapboxExample);
