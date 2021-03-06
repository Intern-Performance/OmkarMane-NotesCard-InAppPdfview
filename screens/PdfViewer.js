import React from 'react';
import { StyleSheet, Dimensions, View, Button, Text, TouchableOpacity } from 'react-native';

import Pdf from 'react-native-pdf';
import { withNavigation } from 'react-navigation';

export default class PDFExample extends React.Component {
    render() {
        // const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
        const source = {uri:'bundle-assets://pdf/userGuide.pdf'}
        // uri:"bundle-assets://path/to/xxx.pdf"
        // const { navigation } = this.props;
        //const source = require('./test.pdf');  // ios only
        //const source = {uri:'bundle-assets://test.pdf'};

        //const source = {uri:'file:///sdcard/test.pdf'};
        //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};

        return (
            <View style={styles.container}>
                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages, filePath) => {
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page, numberOfPages) => {
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error) => {
                        console.log(error);
                    }}
                    onPressLink={(uri) => {
                        console.log(`Link presse: ${uri}`)
                    }}
                    style={styles.pdf}
                />
                <TouchableOpacity style={styles.downloadbtn}  >
                    <Text style={styles.downloadtxt}>
                        Download
                    </Text>
                </TouchableOpacity>

            </View >

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    pdf: {
        flex: 1,
        // width:Dimensions.get('window').width,
        // height:Dimensions.get('window').height,
    },
    downloadtxt: {
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#e00099',
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10
    },
    downloadbtn: {
        position: 'absolute',
        bottom: 12,
        width: '100%'

    }
});
