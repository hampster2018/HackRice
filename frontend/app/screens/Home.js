import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { Button } from 'svelte-materialify';
// import { BarChart } from 'react-native-chart-kit';
import { BarChart } from 'react-native-gifted-charts';
import React, {useState, useEffect} from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import { Image } from 'expo-image';

export default function App() {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');

  useEffect(() => {
    setHeight(Dimensions.get('window').height);
    setWidth(Dimensions.get('window').width);
  }, []);

  const [shouldShow, setShouldShow] = useState(false);
    
  const barData = [
    {value: 230,label: 'Sun.',frontColor: '#4ABFF4',topLabelComponent: () => (<Text style={{color: '#4ABFF4', fontWeight: 'bold', fontSize: 18, marginBottom: 6}}>230</Text>),},
    {value: 180,label: 'Mon.',frontColor: '#79C3DB',topLabelComponent: () => (<Text style={{color: '#79C3DB', fontWeight: 'bold', fontSize: 18, marginBottom: 6}}>180</Text>),},
    {value: 195,label: 'Tue.',frontColor: '#28B2B3',topLabelComponent: () => (<Text style={{color: '#28B2B3', fontWeight: 'bold', fontSize: 18, marginBottom: 6}}>195</Text>),},
    {value: 250,label: 'Wed.',frontColor: '#4ADDBA',topLabelComponent: () => (<Text style={{color: '#4ADDBA', fontWeight: 'bold', fontSize: 18, marginBottom: 6}}>250</Text>),},
    {value: 200,label: 'Thu.',frontColor: '#91E3E3',topLabelComponent: () => (<Text style={{color: '#91E3E3', fontWeight: 'bold', fontSize: 18, marginBottom: 6}}>200</Text>),},
    {value: 95,label: 'Fri.',frontColor: '#91e3ae',topLabelComponent: () => (<Text style={{color: '#91e3ae', fontWeight: 'bold', fontSize: 18, marginBottom: 6}}>95</Text>),},
    {value: 320,label: 'Sat.',frontColor: '#6dc9a7',topLabelComponent: () => (<Text style={{color: '#6dc9a7', fontWeight: 'bold', fontSize: 18, marginBottom: 6}}>320</Text>),},
    ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} translucent={true} backgroundColor='red'/>
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
    <View>
      <View style={styles.welMsgCon}>
        <MaskedView
          style={{ height: '50%'}}
          maskElement={<Text style={styles.welMsgTxt}>Welcome back,</Text>}
        >
          <LinearGradient
            colors={['#00D4B0', '#146CF6']}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0.33 }}
            style={{ flex: 1 }}
          />
        </MaskedView>

        <MaskedView
          style={{ height: '50%'}}
          maskElement={<Text style={styles.welMsgTxt2}>John Doe!</Text>}
        >
          <LinearGradient
            colors={['#00D4B0', '#146CF6']}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0.33 }}
            style={{ flex: 1 }}
          />
        </MaskedView>
      </View>

      <View style={styles.buttonCont}>
      <TouchableOpacity style={styles.buttonCont, {marginTop: 25}} onPress={() => setShouldShow(!shouldShow)}>
        <View style={styles.button}>
          <Text style={styles.butText}>Generate Schedule</Text>
        </View>
        </TouchableOpacity>
      </View>

      {/* <View>
        <Text style={styles.welSum}>You're currently on track!</Text>
      </View> */}

      <View style={styles.container2}>
        <Text style={styles.subheadTxt}>Upcoming Task (3)</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.container3}>
        <TouchableOpacity style={styles.buttonCont} onPress={() => setShouldShow(!shouldShow)}>
          <LinearGradient
            style={styles.card}
            colors={['white', 'white']}
            start={[0.0, 0.0]}
            end={[1.0, 1.0]}>
              <Text style={styles.cardTitle}>Laundry</Text> 
              <Text style={styles.cardPoints}>+95 pts</Text>
              <Image
                source={{
                  uri:
                    'https://cdn-icons-png.flaticon.com/512/2933/2933502.png',
                }}
                style={{ width: 100, height: 100 }}
              />
              <Text style={styles.cardDate}>Today in 1 hr</Text>
              
          </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCont} onPress={() => setShouldShow(!shouldShow)}>
          <LinearGradient
            style={styles.card}
            colors={['white', 'white']}
            start={[0.0, 0.0]}
            end={[1.0, 1.0]}>
              <Text style={styles.cardTitle}>Vacuum</Text> 
              <Text style={styles.cardPoints}>+45 pts</Text>
              <Image
                source={{
                  uri:
                    'https://cdn-icons-png.flaticon.com/512/638/638949.png',
                }}
                style={{ width: 100, height: 100 }}
              />
              <Text style={styles.cardDate}>Today in 1 hr 30 mins</Text>
          </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCont} onPress={() => setShouldShow(!shouldShow)}>
          <LinearGradient
            style={styles.card}
            colors={['white', 'white']}
            start={[0.0, 0.0]}
            end={[1.0, 1.0]}>
              <Text style={styles.cardTitle}>Run Dishwasher</Text> 
              <Text style={styles.cardPoints}>+110 pts</Text>
              <Image
                source={{
                  uri:
                    'https://cdn-icons-png.flaticon.com/512/1581/1581375.png',
                }}
                style={{ width: 100, height: 100 }}
              />
              <Text style={styles.cardDate2}>Today in 2 hrs</Text>
          </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCont} onPress={() => setShouldShow(!shouldShow)}>
          <LinearGradient
            style={styles.card2}
            colors={['#2D728F', '#2D728F']}>
              <Text style={styles.cardTitlePlus}>+</Text>
          </LinearGradient>
          </TouchableOpacity>
          </View>
          </ScrollView>
      </View>

      <View style={styles.buttonCont}>
      <TouchableOpacity style={styles.buttonCont, {marginTop: 10, marginBottom: 70}} onPress={() => setShouldShow(!shouldShow)}>
        <View style={styles.button}>
          <Text style={styles.butText}>Add Task</Text>
        </View>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.quickTxt}>You're doing <Text style={{color:'#146CF6'}}>amazing</Text>, John! With each task you complete, you're contributing to <Text style={{color:'#00D4B0'}}>a clean world!</Text></Text>
      </View>

      <View style={styles.curPtsCont}>
        <Text style={{fontSize: '40%', textAlign: 'center', fontWeight: '600'}}>You have</Text>
        <MaskedView
          style={{ height: 90}}
          maskElement={<Text style={{fontSize: 100, fontWeight: 'bold', textAlign: 'center'}}>10,050</Text>}
        >
          <LinearGradient
            colors={['#00D4B0', '#146CF6']}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0.33 }}
            style={{ flex: 1 }}
          />
        </MaskedView>
        <MaskedView
          style={{ height: 90}}
          maskElement={<Text style={{fontSize: 100, fontWeight: 'bold', textAlign: 'center'}}>points</Text>}
        >
          <LinearGradient
            colors={['#00D4B0', '#146CF6']}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0.33 }}
            style={{ flex: 1 }}
          />
        </MaskedView>
        <Text style={{fontWeight: '400', textAlign: 'center', fontSize: 27, marginTop: 25, marginBottom: 30}}>Keep up the <Text style={{color: '#00D4B0', fontWeight: 'bold'}}>green</Text> work!</Text>
      </View>

      <View>
        <Text style={styles.currSum}>Let's see your current trends...</Text>
      </View>
      
      <View style={styles.pointCont}>
        <MaskedView
          style={{ height: 90}}
          maskElement={<Text style={{fontSize: 100, fontWeight: 'bold', textAlign: 'center'}}>1,470</Text>}
        >
          <LinearGradient
            colors={['#146CF6', '#00D4B0']}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0.33 }}
            style={{ flex: 1 }}
          />
        </MaskedView>

        <MaskedView
          style={{ height: 90}}
          maskElement={<Text style={{fontSize: 65, fontWeight: 'bold', textAlign: 'center'}}>points</Text>}
        >
          <LinearGradient
            colors={['#146CF6', '#00D4B0']}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0.33 }}
            style={{ flex: 1 }}
          />
        </MaskedView>

        <Text style={styles.subheadTxt3}>Earned in the past week!</Text>

        <BarChart
          noOfSections={4}
          data={barData}
          isAnimated={true}
          hideYAxisText
          yAxisThickness={0}
          xAxisThickness={0}
          width={width-50}
          disableScroll
          barWidth={(width/13)}
          // barWidth={width/12}
          // renderTooltip={(item, index) => {
          //   return (
          //     <View
          //       style={{
          //         marginTop: 20,
          //         marginLeft: -6,
          //         backgroundColor: '#ffcefe',
          //         paddingHorizontal: 6,
          //         paddingVertical: 4,
          //         borderRadius: 4
          //       }}>
          //       <Text>{item.value}</Text>
          //     </View>
          //   );
          // }}
        />
      </View>

      <View style={styles.contGrap}>
        {/* <Text style={styles.subheadTxt2}>You've earned</Text> */}
        <MaskedView
          style={{ height: 90}}
          maskElement={<Text style={{fontSize: 100, fontWeight: 'bold', textAlign: 'center'}}>32,340</Text>}
        >
          <LinearGradient
            colors={['#00D4B0', '#146CF6']}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0.33 }}
            style={{ flex: 1 }}
          />
        </MaskedView>
        <MaskedView
          style={{ height: 90}}
          maskElement={<Text style={{fontSize: 65, fontWeight: 'bold', textAlign: 'center'}}>points</Text>}
        >
          <LinearGradient
            colors={['#00D4B0', '#146CF6']}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0.33 }}
            style={{ flex: 1 }}
          />
        </MaskedView>
        <Text style={styles.grapTxt2}>Earned in the Last 6 Months!</Text>
        {/* <Text style={styles.grapTxt2}></Text> */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            <View style={styles.contRowMon}>
              <Text style={styles.monTxt}>Apr</Text>
              <Text style={styles.monTxt}>May</Text>
              <Text style={styles.monTxt}>Jun</Text>
              <Text style={styles.monTxt}>Jul</Text>
              <Text style={styles.monTxt}>Aug</Text>
              <Text style={styles.monTxt}>Sep</Text>
            </View>
            <View style={styles.twoSide}>
              <View style={styles.daysCon}>
                <Text style={styles.dayText}>Mon</Text>
                <Text style={styles.dayText2}>Wed</Text>
                <Text style={styles.dayText2}>Fri</Text>
              </View>
              
              <View style={styles.rowCon}>
                <View style={styles.contRow}>
                  <View style={styles.conCell1}></View>
                  <View style={styles.conCell2}></View>
                  <View style={styles.conCell1}></View>
                  <View style={styles.conCell3}></View>
                  <View style={styles.conCell4}></View>
                  <View style={styles.conCell5}></View>
                  <View style={styles.conCell3}></View>
                  <View style={styles.conCell2}></View>
                  <View style={styles.conCell2}></View>
                  <View style={styles.conCell3}></View>
                  <View style={styles.conCell4}></View>
                  <View style={styles.conCell4}></View>
                  <View style={styles.conCell5}></View>
                  <View style={styles.conCell4}></View>
                  <View style={styles.conCell5}></View>
                  <View style={styles.conCell1}></View>
                  <View style={styles.conCell2}></View>
                  <View style={styles.conCell3}></View>
                  <View style={styles.conCell4}></View>
                  <View style={styles.conCell4}></View>
                  <View style={styles.conCell5}></View>
                  <View style={styles.conCell2}></View>
                  <View style={styles.conCell4}></View>
                  <View style={styles.conCell3}></View>
                  <View style={styles.conCell2}></View>
                  <View style={styles.conCell1}></View>
                  <View style={styles.conCell4}></View>
                  <View style={styles.conCell2}></View>
                  <View style={styles.conCell3}></View>
                  <View style={styles.conCell2}></View>
                  <View style={styles.conCell2}></View>
                  <View style={styles.conCell2}></View>
                  <View style={styles.conCell3}></View>
                  <View style={styles.conCell4}></View>
                  <View style={styles.conCell2}></View>
                  <View style={styles.conCell5}></View>
                </View>

                <View style={styles.contRow}>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell1}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell1}></View>
                    <View style={styles.conCell1}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell3}></View>
                </View>

                <View style={styles.contRow}>
                    <View style={styles.conCell1}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell1}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell1}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell1}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell1}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell1}></View>
                    <View style={styles.conCell1}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell1}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell1}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell1}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell5}></View>
                </View>

                <View style={styles.contRow}>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell1}></View>
                    <View style={styles.conCell1}></View>
                    <View style={styles.conCell1}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell1}></View>
                    <View style={styles.conCell1}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell1}></View>
                    <View style={styles.conCell1}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell3}></View>
                </View>

                <View style={styles.contRow}>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell1}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell3}></View>
                </View>

                <View style={styles.contRow}>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell1}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell1}></View>
                    <View style={styles.conCell1}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell2}></View>
                    <View style={styles.conCell4}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCell3}></View>
                    <View style={styles.conCell5}></View>
                    <View style={styles.conCelle}></View>
                    <View style={styles.conCelle}></View>
                    <View style={styles.conCelle}></View>
                    <View style={styles.conCelle}></View>
                    <View style={styles.conCelle}></View>
                    <View style={styles.conCelle}></View>
                    <View style={styles.conCelle}></View>
                </View>
                
              </View>
            </View>
            
          </View>
        </ScrollView>

        <View style={styles.leg}>
          <Text style={styles.legTxtL}>Success: Less</Text>
          <View style={styles.conCell1s}></View>
          <View style={styles.conCell2s}></View>
          <View style={styles.conCell3s}></View>
          <View style={styles.conCell4s}></View>
          <View style={styles.conCell5s}></View>
          <Text style={styles.legTxtR}>More</Text>
        </View>
      </View>

      <View style={styles.conCont}>
          <Text style={styles.learnTxt} onPress={() => setShouldShow(!shouldShow)}>Learn how we count success</Text>
          {shouldShow ? 
        (
          <View style={styles.infoCon}>
            <Text style={styles.infoTitle}>How we count success:</Text>
            <Text style={styles.infoTxt}>We count success on a <Text style={{fontWeight: 'bold', color: '#008958'}}>daily level</Text> using both your <Text style={{fontWeight: 'bold', color: '#008958'}}>compelted tasks and your smart home efficiency</Text> (if smart home is set up).</Text>
            
            <Text style={styles.infoTxt2}>The more tasks you accomplish each day and the more environmentally friendly your smart home settings are, <Text style={{fontWeight: 'bold', color: '#008958'}}>the higher your daily score!</Text></Text>
          </View>
        ) 
      : null}
      </View>

      
      <StatusBar style="auto" />
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'center',
  },
  buttonCont: {
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container2: {
    flex: 1,
    // backgroundColor: 'red',
    width: '100%',
    // paddingLeft: '5%',
    paddingTop: '10%',
    // borderWidth: 1
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  welMsgCon: {
    // backgroundColor: '#000022',
    width: '100%',
    borderStyle: 'solid',
    borderColor: 'black',
    // borderWidth: 1,
    borderRadius: 5,
    paddingTop: '12%',
    paddingLeft: '5%',
    height: 250
    // backgroundColor: 'red'
  },

  welSum: {
    // borderWidth: 1,
    marginLeft: '2%',
    marginRight: '2%',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: '5%',
    paddingBottom: '5%',
    margin: '2%'
  },

  welMsgTxt: {
    color: '#000022',
    fontSize: '65%',
    fontWeight: 'bold',
  },

  welMsgTxt2: {
    color: '#000022',
    fontSize: '80%',
    fontWeight: 'bold'
  },

  subheadTxt: {
    fontWeight: 'bold',
    fontSize: '30%',
    paddingLeft: '5%'
  },

  currSum: {
    // borderWidth: 1,
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 20
  },

  leg: {
    // borderWidth: 1,
    flexDirection: 'row',
    paddingTop: 15,
    alignItems: 'center',
    // paddingLeft: '40%',
    justifyContent: 'center',
    // width: 400
    // height: 30
  },

  daysCon: {
    // backgroundColor: 'red',
    width: 45,
    paddingLeft: 15
    // textAlign: 'right'
  },

  subheadTxt2: {
    fontWeight: 'bold',
    fontSize: '30%',
    paddingLeft: '5%',
    // paddingBottom: '5%',
    // textAlign: 'center',
    // borderWidth: 1
  },

  subheadTxt3: {
    fontWeight: '600',
    fontSize: '30%',
    paddingLeft: '5%',
    textAlign: 'center',
    marginBottom: 20
    // paddingBottom: '5%',
    // textAlign: 'center',
    // borderWidth: 1
  },

  legTxtL: {
    paddingRight: 10,
    fontWeight: 'bold'
  },

  legTxtR: {
    paddingLeft: 10,
    fontWeight: 'bold'
  },

  conCont: {
    // borderWidth: 1,
    height: 300
  },

  contGrap: {
    // borderWidth: 1,
    marginTop: '30%',

  },

  conCell: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderWidth: 1,
    margin: 1
  },

  onCelle: {
    width: 30,
    height: 30,
    borderRadius: 10,
    margin: 1,
    backgroundColor: 'white'
  },

  conCell5s: {
    width: 15,
    height: 15,
    borderRadius: 5,
    borderWidth: 0,
    margin: 1,
    backgroundColor: '#002b33'
  },

  conCell5: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderWidth: 0,
    margin: 1,
    backgroundColor: '#002b33'
  },

  conCell4: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderWidth: 0,
    margin: 1,
    backgroundColor: '#008958'
  },

  conCell4s: {
    width: 15,
    height: 15,
    borderRadius: 5,
    borderWidth: 0,
    margin: 1,
    backgroundColor: '#008958'
  },

  conCell3: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderWidth: 0,
    margin: 1,
    backgroundColor: '#43C08A'
  },

  conCell3s: {
    width: 15,
    height: 15,
    borderRadius: 5,
    borderWidth: 0,
    margin: 1,
    backgroundColor: '#43C08A'
  },

  conCell2: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderWidth: 0,
    margin: 1,
    backgroundColor: '#80F9C0'
  },

  conCell2s: {
    width: 15,
    height: 15,
    borderRadius: 5,
    borderWidth: 0,
    margin: 1,
    backgroundColor: '#80F9C0'
  },

  conCell1s: {
    width: 15,
    height: 15,
    borderRadius: 5,
    borderWidth: 0,
    margin: 1,
    backgroundColor: '#ADDFFF'
  },

  conCell1: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderWidth: 0,
    margin: 1,
    backgroundColor: '#ADDFFF'
  },

  conCellNo: {
    width: 30,
    height: 30,
    borderRadius: 100,
    borderWidth: 0,
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  conCellNo_In:{
    backgroundColor: '#ADDFFF',
    height: 15,
    width: 15,
    borderRadius: 100,
    // marginLeft: '50%'
  },

  contRow: {
    flexDirection: 'row'
  },

  twoSide: {
    flexDirection: 'row'
  },

  dayText:{
    // borderWidth: 1,
    paddingTop: 40,
    fontWeight: 'bold',
    fontSize: 16
  },

  dayText2:{
    // borderWidth: 1,
    paddingTop: 47,
    fontWeight: 'bold',
    fontSize: 16
  },

  contRowMon: {
    flexDirection: 'row'
  },

  learnTxt: {
    fontSize: '15%',
    fontWeight: '600',
    // paddingLeft: '5%',
    paddingTop: '2%',
    textAlign: 'center',
  },

  monTxt: {
    // borderWidth: 1,
    // width: '50%'
    paddingLeft: 66,
    paddingRight: 50,
    fontWeight: 'bold',
    fontSize: 18,
    width: 190,
  },

  grapTxt: {
    fontSize: '25%',
    // borderWidth: 1,
    paddingLeft: '5%'
  },

  // grapTxt: {
  //   fontWeight: 'bold',
  //   fontSize: '75%',
  //   marginTop: '5%',
  //   // borderWidth: 1,
  //   textAlign: 'center'
  //   // paddingLeft: '5%'
  // },

  infoCon:{
    // borderWidth: 2,
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '5%',
    borderRadius: 10,
    padding: '5%',
    backgroundColor: 'white',
    shadowColor: '#000022',
    shadowOffset: { width: 0, height: '10%' },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },

  infoTitle: {
    fontSize: '30%',
    fontWeight: 'bold',
    marginBottom: '2%',
    color: '#002b33',
    textDecorationLine: 'underline'
  },

  infoTxt: {
    fontSize: 20,
    fontWeight: '400',
    color: '#002b33',
  },

  infoTxt2: {
    fontSize: 20,
    fontWeight: '400',
    color: '#002b33',
    paddingTop: 7
  },

  grapTxt2:{
    fontWeight: 'bold',
    textAlign: 'center',
    // borderWidth: 1,
    // paddingLeft: '5%',
    fontSize: 25,
    marginBottom: '5%'
  },

  grapTxt3:{
    fontWeight: 'bold',
    textAlign: 'center',
    // borderWidth: 1,
    // paddingLeft: '5%',
    fontSize: '25%',
    marginBottom: '2%'
  },

  ptsTxt: {
    fontWeight: 'bold',
    fontSize: '85%',
    // borderWidth: 1,
    // alignContent: 'center',
    textAlign: 'center',
    color: 'blue'
  },

  quickTxt:{
    fontWeight: '600',
    fontSize: 25,
    marginLeft: '5%',
    marginRight: '5%',
    paddingTop: 120,
    textAlign: 'center',
  },

  ptsTxt2: {
    fontWeight: 'bold',
    fontSize: '30%',
    // borderWidth: 1,
    textAlign: 'center'
  },

  ptsTxt3: {
    // fontWeight: 'bold',
    fontSize: '20%',
    // borderWidth: 1,
    textAlign: 'center'
  },

  img:{
    height: 150,
    width: 150
  },

  card:{
    // borderWidth: 1,
    borderColor: '#2d728f',
    borderStyle: 'solid',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 400,
    padding: '2%',
    margin: '2%',
    shadowColor: '#000022',
    shadowOffset: { width: 50, height: 50},
    shadowOpacity: 0.9,
    shadowRadius: 10,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 4 },
    // shadowOpacity: 0.8,
    // shadowRadius: 40,
  },

  addBut: {
    borderWidth: 1,
    borderRadius: 100,
    width: 125,
    height: 250,
    textAlign: 'center',
    alignItems : 'center',
    justifyContent: 'center',
  },

  addButTxt: {
    textAlign: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
    fontSize: '95%',
    borderWidth: 1,
    height: 100,
    width: 100,
    borderRadius: 50,
    // backgroundColor: '#ADDFFF',
    backgroundRadius: 50
  },

  container3: {
    // borderWidth: 1,
    flexDirection: 'row',
    width: 1100,
    alignItems: 'center',
    shadowColor: '#2D728F',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    // borderWidth: 1,

  },

  curPtsCont:{
    // borderWidth: 1,
    textAlign: 'center',
    height: 600,
    paddingTop: 250,
    marginBottom: 150
  },

  butText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: '35%'
  },

  button: {
    backgroundColor: '#09a5d0',
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    // height: '30%',
    // borderWidth: 1,
    marginTop: 15,
    borderRadius: 15,
    shadowColor: '#000022',
    shadowOffset: { width: 0, height: '5%' },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },

  pointCont: {
    marginTop: '5%',
    // borderWidth: 1,
  },

  card2:{
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: '#FF00FF',
    alignItems: 'center',
    justifyContent: 'center'
  },

  cardTitlePlus: {
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: '75%',
    // fontSize: 120,
  },

  cardPoints: {
    color: '#09a5d0',
    fontSize: '35%',
    fontWeight: '600',
    paddingBottom: 20
    // textShadowColor: 'rgba(0, 0, 0, 0.9)',
    // textShadowOffset: {width: 0, height: 0},
    // textShadowRadius: 1.2
  },

  cardDate:{
    color: '#00d4b0',
    fontSize: '25%',
    fontWeight: 'bold',
    // borderWidth: 1,
    paddingTop: 65,
    
    // marginBottom: 25
  },

  cardDate2:{
    color: '#384750',
    fontSize: '25%',
    fontWeight: 'bold',
    // borderWidth: 1,
    paddingTop: 20
  },

  schedSum: {
    borderWidth: 1,
  },
  
  cardTitle: {
    color: '#146CF6',
    fontWeight:'bold',
    fontSize: '35%',
    fontWeight: 'bold',
    textAlign: 'center'
    // textShadowColor: 'rgba(255, 255, 255, 0.5)',
    // textShadowOffset: {width: 0, height: 0},
    // textShadowRadius: 5
  },
});
