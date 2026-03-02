import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import Header_stories from "@/components/header_stories";
import Content from "@/components/content";
import Footer from "@/components/footer";


export default function Stories() {

  return (

   
    <View style={styles.container}>
    <Header_stories />
    <Content />
    <Footer />
    </View>

    
  );
};





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },

});
