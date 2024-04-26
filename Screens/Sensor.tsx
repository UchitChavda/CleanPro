import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const sensors = [
  {
    name: "UltraSonic Level Sensor",
    value: 80.00,
  },
  {
    name: "PIR Sensor",
    value: "Motion Detected!!!",
  },
  {
    name: "Water Level Sensor",
    value: 100,
  },
  {
    name: "Gas Sensor",
    value: 440,
  },
]

const Sensor = () => {
  return (
    <View style={sytles1.appBody}>
      <View>
        <Text style={sytles1.title}>CleanPro</Text>
      </View>
      <View style={sytles1.mainView}>
        {
          sensors.map((item) => {
            return (
              <View style={sytles1.SenBlock}>
                <Text style={sytles1.senTitle}>{item.name}</Text>
                <Text style={sytles1.senValue}>{item.value}</Text>
              </View>
            );
          })
        }
      </View>
    </View>
  )
}

const sytles1 = StyleSheet.create({
  title: {
    fontSize: 40,
    alignSelf: 'center',
    marginBottom: 30,
    fontWeight: '500',
    fontStyle: 'italic',
  },
  SenBlock: {
    backgroundColor: '#6192fc',
    height: 100,
    width: 150,
    margin: 10,
    textAlign: 'center',
    borderRadius: 15,
  },
  senTitle: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  senValue: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  mainView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  appBody: {
    backgroundColor: 'pink',
    height: 750,
  }
})

export default Sensor;