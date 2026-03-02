import { View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
{/*imports above*/}

export default function Camera() {
  return (
    <View style={styles.container}>
      
      <View style={styles.fakeCamera} />

      <View style={styles.topLeft}>
        <Ionicons name="person-circle-outline" size={34} color="gray" />
        <Ionicons name="search" size={28} color="white" />
      </View>

      <View style={styles.topRight}>
        <Ionicons name="person-add-outline" size={26} color="white" />
        <Ionicons name="repeat" size={26} color="white" />
        <Ionicons name="flash-off" size={26} color="white" />
        <Ionicons name="musical-notes-outline" size={26} color="white" />
        <Ionicons name="moon-outline" size={26} color="white" />
      </View>

      <View style={styles.bottomControls}>
        <Ionicons name="images-outline" size={34} color="white" />

        <View style={styles.captureButton}>
          <View style={styles.captureInner} />
        </View>

        <MaterialCommunityIcons
          name="emoticon-happy-outline"
          size={34}
          color="white"
        />
      </View>

      {/* footer stuffs*/}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Ionicons name="location-outline" size={26} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="chatbubble-outline" size={26} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome name="smile-o" size={26} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="people-outline" size={26} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="play-outline" size={26} color="white" />
        </TouchableOpacity>
      </View>

    </View>
  );
}

/* my styles */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  fakeCamera: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#222",
  },

  topLeft: {
    position: "absolute",
    top: 60,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  topRight: {
    position: "absolute",
    top: 60,
    right: 20,
    alignItems: "center",
    gap: 22,
  },

  bottomControls: {
    position: "absolute",
    bottom: 120,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  captureInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
  },

  footer: {
    position: "absolute",
    bottom: 0,
    height: 80,
    width: "100%",
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});