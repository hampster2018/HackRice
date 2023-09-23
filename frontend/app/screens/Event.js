import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { ToggleButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Event = ({ route, navigation }) => {
    //const navigation = useNavigation();
    console.log("Here" + route.params)

    const { event, points, hour, minute, date, eventDescription } = route.params;
    let numHours = new Date().getHours() - hour;
    let numMinutes =  minute - new Date().getMinutes();
    if (numMinutes < 0) {
        numHours += 1;
        numMinutes += 60;
    }
    let timeString = ''
    if (numHours != 0) {
        timeString += numHours + 'h ' 
    }
    if (numMinutes != 0) {
        timeString += numMinutes + 'm'
    }
    if (timeString == '') {
        timeString = '0m'
    }

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <Text style={styles.eventTitle}>
                        {event}
                    </Text>
                    <Text style={styles.eventTimeTillTitle}>
                        Time until event:
                    </Text>
                    <Text style={styles.eventTimeTill}>
                        {timeString}
                    </Text>
                    <Text style={styles.eventDate}>
                        Date: {date}
                    </Text>
                    <Text style={styles.eventDescriptionTitle}>
                        Event Description:
                    </Text>
                    <Text style={styles.eventDescription}>
                        {eventDescription}
                    </Text>
                </View>
                <View style={styles.finishTaskButton}>
                    <Pressable onPress={() => navigation.navigate('GainedPoints')}>
                           <Text>Finished Task</Text> 
                    </Pressable>
                </View>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({

    page: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    container: {
        flex: 1,
        width: '80%',
        height: '80%',
        marginLeft: '10%',
        marginTop: '10%',
        marginBottom: '10%',
        backgroundColor: '#038020'
    },
    infoContainer: {
        height: '90%%',
    },
    eventTitle: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    eventTimeTillTitle: {
        fontSize: 15,
        fontWeight: 'medium',
        marginTop: 50,
    },
    eventTimeTill: {
        fontSize: 30,
        fontWeight: 'semibold'
    },
    eventDate: {
        fontSize: 15,
        fontWeight: 'medium',
        marginTop: 30,
    },
    eventDescriptionTitle: {
        marginTop: '10%',
        fontSize: 15,
        fontWeight: 'thin'
    },
    eventDescription: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    finishTaskButton: {
        alignSelf: 'center',
        width: '50%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    }

});

export default Event;