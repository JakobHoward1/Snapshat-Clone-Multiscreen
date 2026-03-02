import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const chats = [
    {
      name: "Jason🍝",
      pic: require("../assets/images/pic1.jpg"),
      icon: require("../assets/images/newchat.png"),
      text: "3 New Chats · 1h",
    },
    {
      name: "Mickk",
      pic: require("../assets/images/pic2.jpg"),
      icon: require("../assets/images/delivered but not read.png"),
      
    },
    {
      name: "AJ",
      pic: require("../assets/images/pic3.jpg"),
      icon: require("../assets/images/delivered.png"),
      
    },
    {
      name: "Kevin",
      pic: require("../assets/images/pic4.jpg"),
      icon: require("../assets/images/delivered but not read.png"),
     
    },
    {
      name: "Serina",
      pic: require("../assets/images/pic5.jpg"),
      icon: require("../assets/images/delivered.png"),
      
    },
    {
      name: "Tylor",
      pic: require("../assets/images/pic6.jpg"),
      icon: require("../assets/images/newfriend.png"),
      snap: true,
    },
  ];


export default function Content() {
  return (
        <View style={styles.container}>
            <ScrollView>
            
            <View>
                <Text style={styles.contentText}>Friends</Text>
                
                <View style={styles.friendsRow}>
                    {chats.map((chat, index) => (
                        <View key={index} style={styles.friendItem}>
                            <View style={styles.avatarRing}>
                            <Image source={chat.pic} style={styles.avatar} />
                            </View>
                            <Text style={styles.name}>{chat.name}</Text>
                        </View>
                    ))}
                </View>
            </View>
            
                <View>
                    <Text style={styles.contentText}>Following</Text>
                    <View style={styles.friendsRow}>
                        <Image source={require("../assets/images/sending sunshine.png")} style={styles.sunshine} />
                        <Text style={styles.friendName}>Kassie Lovas</Text>

                        <Image source={require("../assets/images/bank.webp")} style={styles.bank} />
                        <Text style={styles.friend_2_name}>Banks Man</Text>

                        <Image source={require("../assets/images/follow_me.png")} style={styles.bank} />
                        <Text style={styles.friend_3_name}>Athena Faris</Text>

                    </View>
                </View>
                
                    
                    
            <Text style={styles.contentText}>Discover</Text>
            
                <View style={styles.discoverRow}>
                    
                    <Image source={require("../assets/images/james.jpg")} style={styles.discoverLayout} />
                        <Text style={styles.thumbnail_title_james}>BEFORE THEY WERE FAMOUS</Text>
                        <Text style={styles.discoverText_james}>He was a 2000s Star</Text>
                        
               

                    <Image source={require("../assets/images/peter.png")} style={styles.discoverLayout} />
                        <Text style={styles.discoverText_peter}>November Challenge</Text>
                        
                
                    <Image source={require("../assets/images/kobe.jpg")} style={styles.discoverLayout} />
                        <Text style={styles.thumbnail_title_kobe}>MVP Title Game</Text>
                        <Text style={styles.discoverText_kobe}>GOAT Players</Text>
                        
                
                    <Image source={require("../assets/images/gta.webp")} style={styles.discoverLayout} />
                        <Text style={styles.thumbnail_title_gta}>Prank Gone Wrong!!!</Text>
                        <Text style={styles.discoverText_gta}>Deadliest Prank Ever</Text>
                        
                </View>
            







        </ScrollView>
        </View>
   

  )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: "column",
        paddingTop: 20,
        // paddingHorizontal: 20,
        marginTop: 20,
        flexBasis: "65%",
    },

    contentText: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 16,
        paddingBottom: 15,
        marginBottom: 5,
        marginTop: 20,
    },

    friendsRow: {
        flexDirection: "row",
        // flexWrap: "wrap",
    },

    friendItem: {
        alignItems: "flex-start",
        width: "9%",
        marginBottom: 5,
        marginLeft: 8,
       
    },

    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },

    name: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 12,
    },

    sunshine: {
        borderRadius: 12,
        marginLeft: 16,
    },

    bank: {
        borderRadius: 12,
        width: 350,
        height: 670,
        marginLeft: 16,
    },

    avatarRing: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: "blue",
        alignItems: "center",
        justifyContent: "center",    
    },


    friendName: {
        position: "absolute",
        bottom: 5,
        left: 20,
        
        fontSize: 28,
        fontWeight: "bold",
        color: "black",
        textShadowColor: "rgba(0, 0, 0, 0.5)",
        
    },

    friend_2_name: {
        position: "absolute",
        bottom: 5,
        left: 420,
       
        fontSize: 28,
        fontWeight: "bold",
        color: "black",
        textShadowColor: "rgba(0, 0, 0, 0.5)",
    },

    friend_3_name: {
        position: "absolute",
        bottom: 5,
        left: 780,
        
        fontSize: 28,
        fontWeight: "bold",
        color: "black",
        textShadowColor: "rgba(0, 0, 0, 0.5)",
    },

    discoverLayout: {
        borderRadius: 12,
        width: 350,
        height: 670,
        marginLeft: 16,
    },

    discoverText_james: {
        position: "absolute",
        bottom: 5,
        left: 16,
        fontSize: 28,
        fontWeight: "bold",
        color: "black",
        marginLeft: 16,
    },

    thumbnail_title_james: {
        position: "absolute",
        top: 30,
        left: 25,
        fontSize: 23,
        fontWeight: "bold",
        marginTop: 20,
        marginLeft: 10,
        color: "gold",
    },

    discoverRow: {
        flexDirection: "row",
    },

  

    discoverText_peter: {
        position: "absolute",
        bottom: 5,
        left: 365,
        fontSize: 28,
        fontWeight: "bold",
        color: "black",
        marginLeft: 16,
    },

    thumbnail_title_kobe: {
       position: "absolute",
        bottom: 5,
        left: 750,
        fontSize: 23,
        fontWeight: "bold",
        color: "white",
        marginLeft: 16,
        
    },

    discoverText_kobe: {
        position: "absolute",
        left: 800,
        top: 30,
        fontSize: 32,
        fontWeight: "bold",
        color: "gold",
        marginLeft: 16,
    },

    thumbnail_title_gta: {
        position: "absolute",
        bottom: 5,
        left: 1130,
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
    },

    discoverText_gta: {
        position: "absolute",
        left: 1180,
        top: 30,
        left: 1140,
        fontSize: 28,
        fontWeight: "bold",
        color: "gold",
    }


   
})