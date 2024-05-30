import * as React from "react";
import { StatusBar } from "expo-status-bar";

import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  BackspaceIcon
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
export default function HeartConditionForm() {
  const navigation = useNavigation();

  const [age, onChangeAge] = React.useState("");
  const [Sex, onChangeSex] = React.useState("");
  const [sysBp, onChangeSysBp] = React.useState("");
  const [diaBp, onChangeDiaBp] = React.useState("");
  const [heartRate, onChangeHeartRate] = React.useState("");
  const [Weight, onChangeWeight] = React.useState("");
  const [heightInCm, onChangeHeightinCm] = React.useState("");


  return (
    <SafeAreaView className="bg-white flex-1">
      <StatusBar barStyle="dark-content" />


      <View style={{ flex: 1 }}>
        {/* <View style={{marginTop:2,marginLeft:10}}>
               <BackspaceIcon  color="black" fill="black" size={36}
               onPress={() => navigation.goBack()}/>
        </View> */}
        <View
          style={{
            marginVertical: '5%',
            marginHorizontal: '5%',
            height: "96%",
            width: "90%",
            backgroundColor: "#AA0000",
            borderRadius: 30,
            shadowColor: "red",
            shadowOffset: { width: 30, height: 10 },
            shadowOpacity: 0.9,
            shadowRadius: 4,
            elevation: 10,
          }}
        >
          <View
            style={{
              marginTop: 15,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                textDecorationLine: "underline",
                color: "white",
              }}
            >
               Heart Condition Form
            </Text>
          </View>

          <View style={{ marginTop: '8%', marginHorizontal:'4%'
           }}>
            <View
              style={{
                borderBottomColor: "white",
                borderBottomWidth: 2,
              }}
            >

              <TextInput
                onChangeText={onChangeAge}
                value={age}
                placeholder="Enter User Age"
                placeholderTextColor={"white"}
                style={{
                  paddingLeft: 10,
                  paddingBottom: 10,
                  fontSize: 18,
                  fontWeight: "500",
                  color:'white'
                }}
              />
            </View>

            <View
              style={{
                borderBottomColor: "white",
                borderBottomWidth: 2,
                marginTop:30
              }}
            >
              <TextInput
                onChangeText={onChangeSex}
                value={Sex}
                placeholder="Enter User Sex"
                placeholderTextColor={"white"}
                style={{
                  paddingLeft: 10,
                  paddingBottom: 10,
                  fontSize: 18,
                  fontWeight: "500",
                  color:'white'
                }}
              />
            </View>

            <View
              style={{
                borderBottomColor: "white",
                borderBottomWidth: 2,
                marginTop:30

              }}
            >

              <TextInput
                onChangeText={onChangeSysBp}
                value={sysBp}
                placeholder="Enter User SysBp"
                placeholderTextColor={"white"}
                style={{
                  paddingLeft: 10,
                  paddingBottom: 10,
                  fontSize: 18,
                  fontWeight: "500",
                  color:'white'
                }}
              />
            </View>

            <View
              style={{
                borderBottomColor: "white",
                borderBottomWidth: 2,
                marginTop: 30,
              }}
            >

              <TextInput
                onChangeText={onChangeDiaBp}
                value={diaBp}
                placeholder="Enter Your DiaBp"
                placeholderTextColor={"white"}
                style={{
                  paddingLeft: 10,
                  paddingBottom: 10,
                  fontSize: 18,
                  fontWeight: "500",
                  color:'white'

                }}
              />
            </View>


            <View
              style={{
                borderBottomColor: "white",
                borderBottomWidth: 2,
                marginTop: 30,
              }}
            >

              <TextInput
                onChangeText={onChangeHeartRate}
                value={heartRate}
                placeholder="Enter Your Heart Rate"
                placeholderTextColor={"white"}
                style={{
                  paddingLeft: 10,
                  paddingBottom: 10,
                  fontSize: 18,
                  fontWeight: "500",
                  color:'white'

                }}
              />
            </View>



            <View
              style={{
                borderBottomColor: "white",
                borderBottomWidth: 2,
                marginTop: 30,
              }}
            >

              <TextInput
                onChangeText={onChangeWeight}
                value={Weight}
                placeholder="Enter Your Weight"
                placeholderTextColor={"white"}
                style={{
                  paddingLeft: 10,
                  paddingBottom: 10,
                  fontSize: 18,
                  fontWeight: "500",
                  color:'white'

                }}
              />
            </View>



            <View
              style={{
                borderBottomColor: "white",
                borderBottomWidth: 2,
                marginTop: 30,
              }}
            >

              <TextInput
                onChangeText={onChangeHeightinCm}
                value={heightInCm}
                placeholder="Enter Your Height In Cm"
                placeholderTextColor={"white"}
                style={{
                  paddingLeft: 10,
                  paddingBottom: 10,
                  fontSize: 18,
                  fontWeight: "500",
                  color:'white'

                }}
              />
            </View>




            <TouchableOpacity
              style={{
                marginTop: 50,
                width: "100%",
                height: 50,
                borderWidth: 2,
                borderColor: "white",
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
              onPress={()=>navigation.navigate('PredictViaHeartForm')}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                }}
              >
                Submit Form
              </Text>
            </TouchableOpacity>

      
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
