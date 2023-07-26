import React, {useState} from "react";
import { View, Image, Text, ScrollView, TouchableOpacity, Dimensions, FlatList } from "react-native";
import { Colors } from "../../utils/Colors";
import { styles } from "./styles";
import fonts from "../../utils/fonts";
import { renderStatusBar } from "../../utils/UIUtils";
import { teacherData } from "../../utils/Constants";

const weekdays = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday',];
const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth / 7; // Divide by 7 for 7 weekdays

const Home = ({ navigation }) => {

  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const handleWeekdayPress = (item, index) => {
    setSelectedItemIndex(index);
    setSelectedDay(item)
  };


  const component = (image) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Home2")}
        style={styles.profile}
      >
        <View style={{ flexDirection: "row", width: "100%" }}>
          <Image source={image} style={styles.listImage} />
          <View style={{ width: "80%" }}>
            <Text style={styles.listinerheading}>
              Exclusive:
              <Text style={{ fontFamily: fonts.bold }}>
                {" "}
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod
              </Text>
            </Text>
            <Text style={styles.listDescription}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

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


  // const renderItem = ({ item }) => {
  //   const formattedDate = new Date(item.startDate).toDateString();
  //   const sessionTime = `${item.session.start.value} ${item.session.start.meridian} - ${item.session.end.value} ${item.session.end.meridian}`;

  //   return (
  //     <View style={styles.scheduleItem}>
  //       <Text style={styles.date}>{formattedDate}</Text>
  //       <Text style={styles.time}>{sessionTime}</Text>
  //     </View>
  //   );
  // };

  const scheduleContent = () =>{

    return(
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

  

const WeekdaysList = () => {
  return (
    <View style={styles.containerWeek}>
      <FlatList
        data={weekdays}
        renderItem={({ item, index }) => (
          // <View style={[styles.weekdayContainer, { width: itemWidth *1.8}]}>
          //   <Text style={styles.weekdayText}>{item}</Text>
          // </View>
          <TouchableOpacity
          onPress={() => handleWeekdayPress(item, index)}
          style={[
            styles.weekdayContainer,
            index === selectedItemIndex && styles.selectedWeekdayContainer,
          ]}
        >
          <Text style={[styles.weekdayText, index === selectedItemIndex && styles.selectedWeekdayText]}>
            {item}
          </Text>
        </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        // contentContainerStyle={{paddingHorizontal: (windowWidth - itemWidth) / 3,}}
      />
    </View>
  );
};


  const renderContent = () => {

    return(
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
    <View style={{flex:1}}>
      {renderStatusBar()}
      {renderContent()}
      
    </View>
  );
};

export default Home;
