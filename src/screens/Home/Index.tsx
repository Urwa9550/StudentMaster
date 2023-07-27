import React, { useState } from "react";
import { View, Image, Text, ScrollView, TouchableOpacity, Dimensions, FlatList } from "react-native";
import { Colors } from "../../utils/Colors";
import { styles } from "./styles";
import fonts from "../../utils/fonts";
import { renderStatusBar } from "../../utils/UIUtils";
import { teacherData } from "../../utils/Constants";

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',];
const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth / 7; // Divide by 7 for 7 weekdays

const Home: React.FC<{ navigation: any }> = ({ navigation }) => {

  const [selectedDay, setSelectedDay] = useState<string>('Monday');

  const filteredTeachers = teacherData.filter(teacher => {
    const teacherSchedule = teacher.schedule.find(item => item.day === selectedDay);
    return teacherSchedule;
  });


  const renderItem = ({ item }) => {
    const teacherSchedule = item.schedule.find(schedule => schedule.day === selectedDay);
    const sessionTime = `${teacherSchedule.time.start.value} ${teacherSchedule.time.start.meridian} - ${teacherSchedule.time.end.value} ${teacherSchedule.time.end.meridian}`;

    return (
      <View style={styles.teacherItem}>
        <Text style={styles.teacherName}>{item.name}</Text>
        <Text style={styles.scheduleTime}>{sessionTime}</Text>
      </View>
    );
  };

  const scheduleContent = () => {

    return (
      <View style={styles.containerSc}>
        <View style={styles.daySelectorSc}>
          {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => (
            <TouchableOpacity
              key={day}
              onPress={() => setSelectedDay(day)}
              style={[styles.dayButtonSc, selectedDay === day && styles.selectedDayButtonSc]}
            >
              <Text style={[styles.dayButtonTextSc, selectedDay === day && styles.selectedDayButtonTextSc]}>
                {day}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <FlatList
          data={filteredTeachers}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.scheduleContainerSc}
        />
      </View>
    )

  }


  const renderContent = () => {

    return (
      <View style={styles.containerView}>
        <View style={styles.container}>
          <View>
            <Text style={styles.heading}>hi, Jim diaz</Text>
            <Text style={styles.description}>
              Check Schedule here
            </Text>
          </View>
          <TouchableOpacity
            // onPress={() => navigation.navigate("Profile", { screen: "Profile" })}
            style={styles.user_icon_container}
          >
            <Image
              source={require("../../../assets/Image.png")}
              style={styles.user_icon}
            />
          </TouchableOpacity>
        </View>
        {scheduleContent()}
      </View>

    )
  }

  return (
    <View style={{ flex: 1 }}>
      {renderStatusBar()}
      {renderContent()}

    </View>
  );
};

export default Home;
