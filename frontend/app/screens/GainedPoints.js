import React, { useEffect, useRef } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import LottieView from 'lottie-react-native';

function GainedPoints({route, navigation}) {
    const animation = useRef(null);

    useEffect(() => {
        //animation.current?.play();
    }, []);
    
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate('Events')}>
                <View style={styles.animationContainer}>
                    <LottieView
                        autoPlay
                        ref={animation}
                        style={styles.lottie}
                        source={require('../../assets/GainedPointsAnimation.json')}
                    />
                </View>
            </Pressable>
        </View>
        
    )
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#999999',
    },
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,

    },
    lottie: {
        width: 320,
        height: 320,
        backgroundColor: '#eee',
    },
});

export default GainedPoints;