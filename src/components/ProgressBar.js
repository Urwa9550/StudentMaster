import React from "react";
import { View, Image } from "react-native";
import Slider from "@react-native-community/slider";
import { Colors } from "../utils/Colors";

const ProgressBar = ({ value, onValueChange }) => {

  return (
    <View>
      <Slider
        maximumValue={100}
        minimumValue={0}
        thumbImage={require('../../assets/Ellipse25.png')}
        minimumTrackTintColor={Colors.pink}
        maximumTrackTintColor={Colors.white}
        step={1}
        value={value}
        onValueChange={onValueChange}
      />
    </View>
  );
};

export default ProgressBar;
