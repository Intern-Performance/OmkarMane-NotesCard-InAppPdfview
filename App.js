import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Notes from './screens/NotesSec.js'
import PdfView from './screens/PdfViewer'
const Stack = createStackNavigator();
import {View ,Text} from 'react-native'
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
       >
        <Stack.Screen
          name="Home"
          component={Notes}
          options={{headerShown : false}}
        />
        <Stack.Screen name ="pdfView"
          component = {PdfView}
          options={{ title: 'Preview',headerStyle: {
              backgroundColor: '#001A95',
            },
            headerTintColor: '#fff', }}
          
        />
        
      </Stack.Navigator>
      
    </NavigationContainer>
    // <View style = {{backgroundColor : 'white' , flex : 1 , justifyContent : 'center' ,alignItems : 'center'}}>
    //   <Text style = {{fontFamily : 'PLZ'}}>Hey there</Text>
    //   <Text style = {{fontFamily : 'headerfont'}}>Hey there</Text>
    //   <Text style = {{ fontFamily : 'desc' }}>Hey there</Text>
    //   <Text>Hey there</Text>

    // </View>
  )
}

export default App