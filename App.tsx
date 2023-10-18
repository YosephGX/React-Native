import React from 'react'
import { Text, View } from 'react-native'

export const App = () => {
  return (
    <View style={{flex:1, backgroundColor:'black'}}>
      <View>
        <Text style={{color:'white', fontSize:30, fontWeight:'bold'}}>FrikiZone</Text>
      </View>
      <View>
        <Text style={{color:'white', fontSize:20, fontWeight:'500'}}>Aplicacion En Contruccion</Text>
      </View>
    </View>
  )
}

export default App;