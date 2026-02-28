import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const IconButton = ({ children, bg }) => (
  <Pressable style={[headerStyles.iconBtn, { backgroundColor: bg }]}>
    {children}
  </Pressable>
);

const Header = () => {
  const options = ["All", "Unread", "Topic", "My AI", "Groups"];

  return (
    <View style={headerStyles.top}>
      <View style={headerStyles.topRow}>
        <View style={headerStyles.side}>
          <IconButton bg="#eee">
            <Ionicons name="person-circle-outline" size={34} color="gray" />
          </IconButton>

          <IconButton bg="#eee">
            <EvilIcons name="search" size={28} color="gray" />
          </IconButton>
        </View>

        <Text style={headerStyles.headerText}>Chat</Text>

        <View style={[headerStyles.side, { justifyContent: "flex-end" }]}>
          <IconButton bg="#FFFC00">
            <Ionicons name="person-add-outline" size={22} color="black" />
          </IconButton>

          <IconButton bg="#eee">
            <AntDesign name="menu" size={22} color="gray" />
          </IconButton>
        </View>
      </View>

      <View style={headerStyles.options}>
        {options.map((option) => (
          <View key={option} style={headerStyles.optionButton}>
            <Text style={headerStyles.optionText}>{option}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default function Index() {
  const router = useRouter();

  const showAlert = () => {
    Alert.alert("YOU PUSHED THE BUTTON", "Alert Button pressed");
  };

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
      text: "Delivered · 2h · 4🔥",
    },
    {
      name: "AJ",
      pic: require("../assets/images/pic3.jpg"),
      icon: require("../assets/images/delivered.png"),
      text: "Delivered · 6h · 7🔥⌛",
    },
    {
      name: "Kevin",
      pic: require("../assets/images/pic4.jpg"),
      icon: require("../assets/images/delivered but not read.png"),
      text: "Opened · 6h · 215🔥",
    },
    {
      name: "Serina",
      pic: require("../assets/images/pic5.jpg"),
      icon: require("../assets/images/delivered.png"),
      text: "Delivered · 6h · 200🔥",
    },
    {
      name: "Tylor",
      pic: require("../assets/images/pic6.jpg"),
      icon: require("../assets/images/newfriend.png"),
      text: "You are now friends 🎉",
      snap: true,
    },
  ];

  const footerIcons = [
    require("../assets/images/footer_icon_1.png"),
    require("../assets/images/footer_icon_2.png"),
    require("../assets/images/footer_icon_3.png"),
    require("../assets/images/footer_icon_4.png"),
    require("../assets/images/footer_icon_5.png"),
  ];

  return (
    <View style={styles.container}>
      <Header />

      {/* Chat List */}
      <ScrollView style={styles.chatList}>
        {chats.map((c, i) => (
          <View key={i} style={styles.chatItem}>
            <View style={styles.chatLeft}>
              <Image source={c.pic} style={styles.avatar} />

              <View style={styles.chatInfo}>
                <Text style={styles.chatName}>{c.name}</Text>

                <View style={styles.chatPreviewContainer}>
                  <Image source={c.icon} style={styles.previewIcon} />
                  <Text style={styles.chatPreview}>{c.text}</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity>
              <Image
                source={
                  c.snap
                    ? require("../assets/images/snap.png")
                    : require("../assets/images/camera.png")
                }
                style={c.snap ? styles.snapIcon : styles.cameraIcon}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* footer */}
      <View style={styles.footer}>
        {footerIcons.map((icon, i) => (
          <TouchableOpacity
            key={i}
            style={styles.footerSlot}
            onPress={() => {
              if (i === 2) {
                router.push("/camera");
              }
            }}
          >
            <Image source={icon} style={styles.footerIcon} />
          </TouchableOpacity>
        ))}
      </View>

      {/* le alert button */}
      <TouchableOpacity style={styles.alertButton} onPress={showAlert}>
        <Text style={styles.alertText}>Alert</Text>
      </TouchableOpacity>
    </View>
  );
}

/* The style sheeeeet */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  chatList: { flex: 1 },

  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    height: 70,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
  },

  chatLeft: { flexDirection: "row", alignItems: "center", flex: 1 },

  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 12 },

  chatInfo: { flex: 1 },

  chatName: { fontSize: 18, fontWeight: "500", marginBottom: 4 },

  chatPreviewContainer: { flexDirection: "row", alignItems: "center" },

  previewIcon: { width: 16, height: 16, marginRight: 4 },

  chatPreview: { fontSize: 14, color: "#666" },

  cameraIcon: { width: 24, height: 24 },

  snapIcon: { width: 60, height: 30 },

  footer: {
    height: 60,
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#E5E5E5",
  },

  footerSlot: { flex: 1, justifyContent: "center", alignItems: "center" },

  footerIcon: { width: 28, height: 28 },

  alertButton: {
    backgroundColor: "#FFFC00",
    paddingVertical: 14,
    alignItems: "center",
  },

  alertText: { fontSize: 16, fontWeight: "bold" },
});

/* header styling */

const headerStyles = StyleSheet.create({
  top: {
    paddingTop: 50,
    paddingBottom: 12,
    backgroundColor: "#fff",
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },

  side: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },

  headerText: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
  },

  iconBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
  },

  /* centering */
  options: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 12,
  },

  optionButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 18,
    backgroundColor: "#f0f0f0",
  },

  optionText: {
    fontSize: 16,
    color: "#555",
  },
});