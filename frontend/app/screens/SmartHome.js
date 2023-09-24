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
import {AnimatedCircularProgress} from 'react-native-circular-progress';

export default function App() {

    const smartApps =
    [
        {
            name: 'lights',
            location: 'living room',
            uri: 'https://cdn0.iconfinder.com/data/icons/wireless-8/64/LIGHT_BULB-bulb-wifi-smart-technology-512.png',
            status: 'on',
            attribute: 'brightness',
            attributeLvl: '50%',
            greenLvls: 35
        },
        {
            name: 'air conditioner',
            location: 'house',
            uri: 'https://cdn-icons-png.flaticon.com/512/114/114735.png',
            status: 'on',
            attribute: 'temperature',
            attributeLvl: '70 degrees',
            greenLvls: 50
        },
        {
            name: 'robot vacuum',
            location: 'bedroom',
            uri: 'https://cdn-icons-png.flaticon.com/512/2633/2633162.png',
            status: 'off',
            attribute: 'charging status',
            attributeLvl: '100%',
            greenLvls: 90
        },
        {
            name: 'dryer',
            location: 'laundry room',
            uri: 'https://cdn-icons-png.flaticon.com/512/417/417506.png',
            status: 'on',
            attribute: 'time remaining',
            attributeLvl: '30 minutes',
            greenLvls: 15
        }
    ]

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} translucent={true} backgroundColor='red'/>
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>

        <MaskedView
          style={{ height: 150}}
          maskElement={<Text style={styles.shTxt}>Smart Home</Text>}
        >
          <LinearGradient
            colors={['#00D4B0', '#146CF6']}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0.33 }}
            style={{ flex: 1 }}
          />
        </MaskedView>


        <Text style={{fontSize: 25, fontWeight: 'bold', margin: 10}}>Camera: Living Room</Text>

        <Image
            source={
                uri = 'https://www.thespruce.com/thmb/eTjEURSHcrDEW51dUVwOW4t9jZs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/morsa-images-getty-header-cb5d4e106c994631853c0a2d151c1a00.jpg'
            }
            style={{ height: 200 }}
        />

        <Text style={{fontSize: 25, fontWeight: 'bold', margin: 10, marginTop: 55}}>Your Devices</Text>

            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Text style={styles.cardT}>{smartApps[0].name}</Text>
                    <Image
                        source={{
                        uri:
                            smartApps[0].uri,
                        }}
                        style={{ width: 100, height: 100 }}
                    />
                    <Text style={styles.cardL}>{smartApps[0].location}</Text>
                    <Text style={styles.cardS}>status: <Text style={{color: '#00D4B0', fontWeight: 'bold'}}>{smartApps[0].status}</Text></Text>
                    <Text style={styles.cardA}>{smartApps[0].attribute}: <Text>{smartApps[0].attributeLvl}</Text></Text>
                    <Text style={styles.cardA}>Score:</Text>
                    <AnimatedCircularProgress
                        size={80}
                        width={8}
                        fill={smartApps[0].greenLvls}
                        tintColor="#00D4B0"
                        backgroundColor="#3d5875"
                        rotation={0}
                        lineCap="round"
                    >
                        {
                            () => (<Text style={{fontSize: 18, fontWeight: 'bold', color: '#60a160'}}>{smartApps[0].greenLvls}%</Text>)
                        }
                    </AnimatedCircularProgress>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardT}>{smartApps[1].name}</Text>
                    <Image
                        source={{
                        uri:
                            smartApps[1].uri,
                        }}
                        style={{ width: 100, height: 100 }}
                    />
                    <Text style={styles.cardL}>{smartApps[1].location}</Text>
                    <Text style={styles.cardS}>status: <Text style={{color: '#00D4B0', fontWeight: 'bold'}}>{smartApps[1].status}</Text></Text>
                    <Text style={styles.cardA}>{smartApps[1].attribute}: <Text>{smartApps[1].attributeLvl}</Text></Text>
                    <Text style={styles.cardA}>Score:</Text>
                    <AnimatedCircularProgress
                        size={80}
                        width={8}
                        fill={smartApps[1].greenLvls}
                        tintColor="#00D4B0"
                        backgroundColor="#3d5875"
                        rotation={0}
                        lineCap="round"
                    >
                        {
                            () => (<Text style={{fontSize: 18, fontWeight: 'bold', color: '#60a160'}}>{smartApps[1].greenLvls}%</Text>)
                        }
                    </AnimatedCircularProgress>
                </View>

            </View>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Text style={styles.cardT}>{smartApps[2].name}</Text>
                    <Image
                        source={{
                        uri:
                            smartApps[2].uri,
                        }}
                        style={{ width: 100, height: 100 }}
                    />
                    <Text style={styles.cardL}>{smartApps[2].location}</Text>
                    <Text style={styles.cardS}>status: <Text style={{color: 'orange', fontWeight: 'bold'}}>{smartApps[2].status}</Text></Text>
                    <Text style={styles.cardA}>{smartApps[2].attribute}: <Text>{smartApps[2].attributeLvl}</Text></Text>
                    <Text style={styles.cardA}>Score:</Text>
                    <AnimatedCircularProgress
                        size={80}
                        width={8}
                        fill={smartApps[2].greenLvls}
                        tintColor="#00D4B0"
                        backgroundColor="#3d5875"
                        rotation={0}
                        lineCap="round"
                    >
                        {
                            () => (<Text style={{fontSize: 18, fontWeight: 'bold', color: '#5fd460'}}>{smartApps[2].greenLvls}%</Text>)
                        }
                    </AnimatedCircularProgress>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardT}>{smartApps[3].name}</Text>
                    <Image

                        source={{
                        uri:
                            smartApps[3].uri,
                        }}
                        style={{ width: 100, height: 100 }}
                    />
                    <Text style={styles.cardL}>{smartApps[3].location}</Text>
                    <Text style={styles.cardS}>status: <Text style={{color: '#00D4B0', fontWeight: 'bold'}}>{smartApps[3].status}</Text></Text>
                    <Text style={styles.cardA}>{smartApps[3].attribute}: <Text>{smartApps[3].attributeLvl}</Text></Text>
                    <Text style={styles.cardA}>Score:</Text>
                    <AnimatedCircularProgress
                        size={80}
                        width={8}
                        fill={smartApps[3].greenLvls}
                        tintColor="#00D4B0"
                        backgroundColor="#3d5875"
                        rotation={0}
                        lineCap="round"
                    >
                        {
                            () => (<Text style={{fontSize: 18, fontWeight: 'bold', color: '#d46400'}}>{smartApps[3].greenLvls}%</Text>)
                        }
                    </AnimatedCircularProgress>
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
        // borderWidth: 1,
        borderRadius: 10,
        // height: '450%',
        width: '45%',
        // backgroundColor: 'red',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    cardContainer:
    {
        flexDirection: 'row',
        // borderWidth: 3,
        height: 500,
        shadowColor: '#000022',
        shadowOffset: { width: -1, height: 0 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
    },
    shTxt:{
        fontSize: 65,
        fontWeight: 'bold',
        textAlign: 'center',
        // borderWidth: 1,
        height: 200,
        paddingTop: 50,
    },
    cardT:{
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
    },
    cardL:{
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
    },
    cardS: {
        fontWeight: '600',
        margin: 10,
        textAlign: 'center',
        fontSize: 20,
    },
    cardA: {
        margin: 10,
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 20,
    }
});
