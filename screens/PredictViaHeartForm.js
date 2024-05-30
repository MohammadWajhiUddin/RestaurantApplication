import * as React from "react";
import { StatusBar } from "expo-status-bar";

import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  EnvelopeOpenIcon,
  LockClosedIcon,
  UserIcon,
  PhoneIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
export default function PredictViaHeartForm() {
  const navigation = useNavigation();

  

  return (
    <SafeAreaView className="bg-white flex-1">
      <StatusBar barStyle="dark-content" />


      <View style={{ flex: 1 }}>
      
      </View>
    </SafeAreaView>
  );
}
