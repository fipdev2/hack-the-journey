import {View } from 'react-native';
import React, { Component } from 'react';
import StreetView from 'react-native-streetview';

 function App() {
  return (
    <View style={{flex: 1, height: "250px", width: "80%", marginLeft:"30px"}}>
        <StreetView
        style={{width:"100%", height:"auto"}}
          allGesturesEnabled={true}
                coordinate={{
                'latitude': 48.858093,
                'longitude':  2.294694
                }}
                pov={{
                tilt:0,
                bearing:0,
                zoom:1
          }}
            />
    </View>
    );
}
export default App();