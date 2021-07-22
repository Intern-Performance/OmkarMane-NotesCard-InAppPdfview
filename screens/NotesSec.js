import React, { useState } from 'react';
import { Animated, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button, TouchableOpacity } from 'react-native';
import { Title } from 'react-native-paper';
import { Image } from 'react-native';
import * as OpenAnything from 'react-native-openanything';



const Notes = ({ navigation }) => {

    const note = [

        { name: 'Assignment - IC.pdf', key: '1', typedoc: 'Study Document', University: 'University of Kash..', desc: "ELEC 261 Digital Logic Design Lecture 9. Logic Families and Their Characteristics Logic Families TTL - Transistor-Transistor Logic standard logic family; used for the longest time. ECL - Emitter", book: "Electronics 404" },
        { name: 'Assignment - Screenshot 2019-01-25 at 1.42.44PM.png', key: '2', typedoc: 'Study Document', University: 'Passaic County Tech..', desc: "Please open this document to see more (description for this resource is unavailable)", book: "Digital Electronics" },
        { name: '4.2HD.pdf', key: '3', typedoc: 'Study Document', University: 'Delhi Public School R.K.Puram', desc: "SIT210: EMBEDDED SYSTEM DEVELOPMENT DEVELOPMENT Task4.2HD: Q1: Submit a video that shows the outcome of the task. Include the link here. https:/youtu.be/", book: "Electronics 404" },
        { name: 'Intermediate Accounting  - P4', key: '4', typedoc: 'Study Document', University: 'Mumbai University', desc: "Sample data description of the document in notes section", book: "Law-15" },
        { name: 'Intermediate Accounting  - P5', key: '5', typedoc: 'Study Document', University: 'Mumbai University', desc: "Sample data description of the document in notes section", book: "Law-15" },
        { name: 'Intermediate Accounting  - P6', key: '6', typedoc: 'Study Document', University: 'Mumbai University', desc: "Sample data description of the document in notes section", book: "Law-15" },
        { name: 'Intermediate Accounting  - P7', key: '7', typedoc: 'Study Document', University: 'Mumbai University', desc: "Sample data description of the document in notes section", book: "Law-15" },
        { name: 'Intermediate Accounting  - P8', key: '8', typedoc: 'Study Document', University: 'Mumbai University', desc: "Sample data description of the document in notes section", book: "Law-15" },
        { name: 'Intermediate Accounting  - P9', key: '9', typedoc: 'Study Document', University: 'Mumbai University', desc: "Sample data description of the document in notes section", book: "Law-15" },
        { name: 'Intermediate Accounting  - P10', key: '10', typedoc: 'Study Document', University: 'Mumbai University', desc: "Sample data description of the document in notes section", book: "Law-15" }

    ]
    const styles = StyleSheet.create({

        container: {
            flex: 1,
            // marginTop: StatusBar.currentHeight || 0,
            marginTop: 0,
            backgroundColor: '#F8F3F7'
        },
        item: {
            backgroundColor: '#FFFFFF',
            padding: 15,
            marginVertical: 5,
            marginHorizontal: 0,

        },
        header: {
            paddingHorizontal: 10,
            color: 'grey',
            fontFamily: 'headerfont',
            fontSize: 12,
            
        },
    });

    const renderItem = ({ item }) => (
        <Item data={item} />
    );
    const Item = ({ data }) => (
        <TouchableOpacity style={styles.item} onPress={() =>
            navigation.navigate('pdfView')
          }>
            <View style={{ flexDirection: 'row', fontSize: 5, padding: 0 }}>
                {/* <Text style={{ paddingRight: 10, color: 'grey', fontFamily: 'headerfont', fontSize: 12 }} >{data.typedoc}</Text> */}
                <Text style={{ paddingRight: 10, color: 'grey', fontFamily: 'InterRegular', fontSize: 12 }} >{data.typedoc}</Text>

                {/* <Text style={{ color: 'grey', fontFamily: 'InterRegular' }}>{'\u2022'}</Text> */}
                {/* <Text style={styles.header} >{data.University}</Text> */}
                <Text style={{ color: 'grey', fontFamily: 'InterRegular' }}>{'\u2022'}</Text>
                <Text style={styles.header} >{data.book}</Text>


            </View>
            <View>
                {/* <Text style={{ fontSize: 15, fontWeight: 'bold', paddingVertical: 3, fontFamily: 'PLZ' , lineHeight : 25 }}>{data.name}</Text> */}
                <Text style={{ fontSize: 15, fontWeight: 'bold', paddingVertical: 3, fontFamily: 'InterRegular' , lineHeight : 25 }}>{data.name}</Text>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                {/* <Text style={{ width: 280, lineHeight: 22, fontFamily: 'desc',fontSize : 13 }}>{data.desc}</Text> */}
                <Text style={{ width: 280, lineHeight: 22, fontFamily: 'InterRegular',fontSize : 13 }}>{data.desc}</Text>

                <Image source={require('../assets/testImage.png')} style={{ width: 80, height: 80 }} />
            </View>
        </TouchableOpacity>
    );

    return (
        <View
            style={styles.container}>
            <FlatList

                data={note}
                renderItem={renderItem}
                keyExtractor={item => item.key}

            />
        </View>
    )
}

export default Notes;