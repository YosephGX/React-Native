import React from 'react'
import { Text, View } from 'react-native';

export const App = () => {
  return (
    <View style={{backgroundColor:'black', flex:1, justifyContent:'center', alignContent:'center'}}>
      <View>
        <Text style={{color:'white', fontSize:30, fontWeight:'bold'}}>DOCAR: Version DEMO</Text>
      </View>
      <View>
        <Text style={{color:'white', fontSize:20, fontWeight:'500'}}>Aplicacion En Contruccion, Se Estaran Subiendo Actualizaciones al Tenerla</Text>
      </View>
    </View>
  )
}

export default App;