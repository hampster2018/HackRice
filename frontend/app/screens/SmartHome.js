/* eslint-disable prettier/prettier */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { Button } from 'svelte-materialify';
// import { BarChart } from 'react-native-chart-kit';
import { BarChart } from 'react-native-gifted-charts';
import React, {useState, useEffect} from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import { Image } from 'expo-image';
import get_points from '../api/get_points';
import get_name from '../api/get_name';

export default function App() {

    const smartApps =
    [
        {
            name: 'lights',
            location: 'living room',
            status: 'on',
            attribute: 'brightness',
            attributeLvl: '50%',
            greenLvls: '35%'
        },
        {
            name: 'air conditioner',
            location: 'house',
            status: 'on',
            attribute: 'temperature',
            attributeLvl: '70 degrees',
            greenLvls: '50%'
        },
        {
            name: 'robot vacuum',
            location: 'bedroom',
            status: 'off',
            attribute: 'charging status',
            attributeLvl: '100%',
            greenLvls: '95%'
        },
        {
            name: 'dryer',
            location: 'laundry room',
            status: 'on',
            attribute: 'time remaining',
            attributeLvl: '30 minutes',
            greenLvls: '15%'
        }
    ]

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} translucent={true} backgroundColor='red'/>
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Text style={styles.cardT}>{smartApps[0].name}</Text>
                    <Text style={styles.cardL}>{smartApps[0].location}</Text>
                    <Text style={styles.cardS}>status: <Text style={{color: '#00D4B0', fontWeight: 'bold'}}>{smartApps[0].status}</Text></Text>
                    <Text style={styles.cardA}>{smartApps[0].attribute}: <Text>{smartApps[0].attributeLvl}</Text></Text>
                    <Text>Score: {smartApps[0].greenLvls}</Text>
                </View>

                <View style={styles.card}>
                    <Text>{smartApps[1].name}</Text>
                    <Text>{smartApps[1].location}</Text>
                    <Text>{smartApps[1].status}</Text>
                    <Text>{smartApps[1].attribute}</Text>
                    <Text>{smartApps[1].attributeLvl}</Text>
                    <Text>{smartApps[1].greenLvls}</Text>
                </View>
            </View>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Text>{smartApps[2].name}</Text>
                    <Text>{smartApps[2].location}</Text>
                    <Text>{smartApps[2].status}</Text>
                    <Text>{smartApps[2].attribute}</Text>
                    <Text>{smartApps[2].attributeLvl}</Text>
                    <Text>{smartApps[2].greenLvls}</Text>
                </View> 

                <View style={styles.card}>
                    <Text>{smartApps[3].name}</Text>
                    <Text>{smartApps[3].location}</Text>
                    <Text>{smartApps[3].status}</Text>
                    <Text>{smartApps[3].attribute}</Text>
                    <Text>{smartApps[3].attributeLvl}</Text>
                    <Text>{smartApps[3].greenLvls}</Text>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderWidth: 1,
        justifyContent: 'center',
    },

    card: 
    {
        borderWidth: 1,
        borderRadius: 10,
        // height: '450%',
        width: '45%',
        // backgroundColor: 'red',
        margin: 10,
    },

    cardContainer:
    {
        flexDirection: 'row',
        borderWidth: 3,
        height: 500,
    },
    cardT:{
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
    },
    cardL:{
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
    },
    cardS: {
        fontWeight: '600',
        fontSize: 20,
    },
    cardA: {
        fontWeight: '600',
        fontSize: 20,
    }
});
