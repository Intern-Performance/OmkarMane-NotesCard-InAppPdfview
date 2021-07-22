import React from 'react';
import {View , Text} from 'react-native'

const fontcheck = () => {
    return (
        <View style = {{backgroundColor : 'white'}}>
            <Text style = {{fontFamily : 'Theinhart'}}>HEY FONT CHECK</Text>
            <Text style = {{fontFamily : 'OpenSans-Regular'}}>HEY FONT CHECK</Text>
            <Text style = {{fontFamily : 'Poppins-Regular'}}>HEY FONT CHECK</Text>


        </View>
    )
}

export default fontcheck;