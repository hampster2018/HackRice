import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';

const width_proportion = '80%';
const pixel_height = 100;

function Events({route, navigation}) {

    let dateObject = new Date();
    let monthDays = ['31','28','31','30','31','30','31','31','30','31','30','31'];

    const [date, setDate] = useState(dateObject.getMonth() + '-' + dateObject.getDate() + '-' + dateObject.getFullYear());

    events = [
        {
            "event": "laundry",
            "pts": 10,
        },
        {
            "event": "laundry",
            "pts": 10,
        }
    ];

    function changeDateForward() {
        let dateList = date.split('-');
        if (dateList[1] == monthDays[dateList[0]]) {
            if (dateList[0] == 12) {
                dateList[0] = 1;
                dateList[2] = parseInt(dateList[2]) + 1;
            }
            dateList[0] = parseInt(dateList[0]) + 1;
            dateList[1] = parseInt(dateList[1]) + 1;
        }
        else {
            dateList[1] = parseInt(dateList[1]) + 1;
        }
        setDate(dateList[0] + '-' + dateList[1] + '-' + dateList[2]);
    }
    function changeDateBackward() {
        let dateList = date.split('-');
        if (dateList[1] == 1) {
            if (dateList[0] == 1) {
                dateList[0] = 12;
                dateList[2] = parseInt(dateList[2]) - 1;
            }
            dateList[0] = parseInt(dateList[0]) - 1;
            dateList[1] = monthDays[dateList[0]];
        }
        else {
            dateList[1] = parseInt(dateList[1]) - 1;
        }
        setDate(dateList[0] + '-' + dateList[1] + '-' + dateList[2]);
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.title}>
                <Text style={styles.date}>{date}</Text>
                <View style={styles.arrowContainer}>
                    <Pressable onPress={() => changeDateBackward()} style={styles.arrow}>
                        <AntDesign name="leftsquareo" size={30} color="black" />
                    </Pressable>
                    <Pressable onPress={() => changeDateForward()} style={styles.arrow}>
                        <AntDesign name="rightsquareo" size={30} color="black" />
                    </Pressable>
                </View>
            </View>
            
            {events.map((event) => {
                return (
                    <View style={styles.container}>
                        <Pressable onPress={() => navigation.navigate('Event', { 
                                event: "Laundry", 
                                pts: 10,
                                hour: 11,
                                minute: 11,
                                date: "11/11/11",
                                eventDescription: "hello"
                            })}>
                            <View style={styles.eventBox}>
                                <Text style={styles.eventText}>{event.event}</Text>
                                <Text>{event.pts}</Text>
                            </View>
                        </Pressable>
                    </View>
                );
            })}              
        </ScrollView>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    width: '80%',
    fontSize: 25,
  },
  arrowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  arrow: {
    fontSize: 20,
  },
  scrollContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  }, 
  eventBox: {
    display: 'flex',
    flexDirection: 'row',
    width: width_proportion,
    height: pixel_height,
  },
  eventText: {
    width: width_proportion
  }
});

export default Events;