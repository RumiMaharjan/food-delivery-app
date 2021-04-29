import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import EditInfo from "../components/EditInfo";

import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";

import ImagePicker from "react-native-image-crop-picker";
import HeaderButton from "../components/HeaderButton";
import { ScrollView } from "react-native-gesture-handler";

const EditProfile = ({ navigation }) => {
  const [image, setImage] = useState(images.avatar_2);

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      console.log(image);
      setImage(image.path);
      bs.current.snapTo(1);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      console.log(image);
      setImage(image.path);
      bs.current.snapTo(1);
    });
  };

  const renderContent = () => (
    <View style={styles.panel}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.panelTitle}>Upload Your Profile Picture</Text>
        <Text style={styles.panelSubtitle}>Choose your Profile Picture</Text>
      </View>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={takePhotoFromCamera}
      >
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={choosePhotoFromLibrary}
      >
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}
      >
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const bs = React.useRef(null);
  const fall = new Animated.Value(1);

  function renderTopHeader() {
    return (
      <View
        style={{
          paddingTop: 25,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <HeaderButton onPress={() => navigation.goBack()} source={icons.back} />

        <View
          style={{
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: SIZES.padding * 3,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray3,
          }}
        >
          <Text style={{ ...FONTS.h3 }}>Edit Profile</Text>
        </View>

        <View>
          <Text style={{ color: "white" }}>hellohihi</Text>
        </View>
      </View>
    );
  }

  function renderProfile() {
    return (
      <View style={styles.container}>
        <BottomSheet
          ref={bs}
          snapPoints={[330, 0]}
          renderContent={renderContent}
          renderHeader={renderHeader}
          initialSnap={1}
          callbackNode={fall}
          enabledGestureInteraction={true}
        />
        <Animated.View
          style={{
            margin: 20,
            opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
          }}
        >
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
              <View
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ImageBackground
                  source={images.avatar_3}
                  style={{ height: 100, width: 100 }}
                  imageStyle={{ borderRadius: 15 }}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={icons.cmera}
                      style={{
                        height: 20,
                        width: 20,
                        opacity: 0.7,
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: "#fff",
                      }}
                    />
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
            <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>
              Rumi Maharjan
            </Text>
          </View>

          {renderChangeData()}
          {renderSubmitButton()}
        </Animated.View>
      </View>
    );
  }

  function renderChangeData() {
    return (
      <ScrollView>
        <View>
          <EditInfo source={icons.user} placeholder=" First Name" />

          <EditInfo source={icons.user} placeholder=" Last Name" />

          <EditInfo
            source={icons.phone}
            placeholder=" Phone "
            KeyboardType="number-pad"
          />

          <EditInfo
            source={icons.email}
            placeholder=" Email "
            keyboardType="email-address"
          />
          <EditInfo source={icons.country} placeholder=" Country " />
          <EditInfo source={icons.city} placeholder=" City " />
        </View>
      </ScrollView>
    );
  }

  function renderSubmitButton() {
    return (
      <View>
        <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {renderTopHeader()}
      {renderProfile()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,

    borderRadius: 20,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
});

export default EditProfile;
