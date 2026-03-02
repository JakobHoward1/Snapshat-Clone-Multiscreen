import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from 'react'
import { router, useRouter } from "expo-router";



export default function Footer() {
  // const router = useRouter();
  const routes: Record<number, string> = {
    1: "/",
    2: "/camera",
    3: "/stories",
    4: "/memories"
  };
  
  const footerIcons = [
    require("../assets/images/footer_icon_1.png"),
    require("../assets/images/footer_icon_2.png"),
    require("../assets/images/footer_icon_3.png"),
    require("../assets/images/footer_icon_4.png"),
    require("../assets/images/footer_icon_5.png"),
  ];
  
  
    return (
   <View style={styles.footer}>
           {footerIcons.map((icon, i) => (
             <TouchableOpacity
               key={i}
               style={styles.footerSlot}
               onPress={() => {
                 const route = routes[i];
                 if (route) router.push(route as any);
                 }
               }
             > 
               <Image source={icon} style={styles.footerIcon} />
             </TouchableOpacity>
           ))}
         </View>
  )
}



const styles = StyleSheet.create({
    footer: {
    height: 60,
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#E5E5E5",
  },

  footerSlot: { flex: 1, justifyContent: "center", alignItems: "center" },

  footerIcon: { width: 28, height: 28 },  
})