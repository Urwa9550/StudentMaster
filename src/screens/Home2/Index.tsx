import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal, TextInput, Button, Image } from 'react-native';
import { styles } from './styles';
import { Colors } from '../../utils/Colors';
import { Picker } from '@react-native-picker/picker';
import { ScheduleItem } from '../../utils/Types'


const initialSchedule: ScheduleItem = {
  id: "",
  teacherId: "",
  startDate: "",
  day: ""
  session: {
    start: {
      value: "",
      meridian: "AM",
    },
    end: {
      value: "",
      meridian: "AM",
    },
  },
};

const Home2: React.FC<{ navigation: any }> = ({ navigation }) => {
  // ----Teacher----

  const [scheduleData, setScheduleData] = useState<ScheduleItem[]>([
    {
      id: "8b2c0754-a1e8-4e36-8fa7-432b69e7eb93",
      teacherId: "",
      startDate: "Mon Jul 31 2023 19:22:37 GMT+0400 (Gulf Standard Time)",
      day: "Monday",
      session: {
        start: {
          value: "10:00",
          meridian: "AM",
        },
        end: {
          value: "05:00",
          meridian: "PM",
        },
      },
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentSchedule, setCurrentSchedule] = useState<ScheduleItem>(initialSchedule);

  const handleAddSchedule = () => {
    setIsEditing(false);
    setCurrentSchedule(initialSchedule);
    setModalVisible(true);
  };

  const handleEditSchedule = (schedule) => {
    setIsEditing(true);
    setCurrentSchedule(schedule);
    setModalVisible(true);
  };

  const handleSaveSchedule = () => {
    if (isEditing) {
      // Update existing schedule
      setScheduleData((prevData) =>
        prevData.map((item) => (item.id === currentSchedule.id ? currentSchedule : item))
      );
    } else {
      // Add new schedule
      const newSchedule = { ...currentSchedule, id: Math.random().toString() };
      setScheduleData((prevData) => [...prevData, newSchedule]);
    }
    setModalVisible(false);
  };
  // Delete a schedule from list 
  const handleDeleteSchedule = (id) => {
    setScheduleData((prevData) => prevData.filter((item) => item.id !== id));
  };
  // schedule card Item 
  const renderItem = ({ item }) => {
    const sessionTime = `${item.session.start.value} ${item.session.start.meridian} - ${item.session.end.value} ${item.session.end.meridian}`;
    return (
      <View style={styles.scheduleItem}>
        <Text style={styles.date}>{item.day}</Text>
        <Text style={styles.time}>{sessionTime}</Text>
        <Button title="Edit" onPress={() => handleEditSchedule(item)} />
        <Button title="Delete" color="red" onPress={() => handleDeleteSchedule(item.id)} />
      </View>
    );
  };


  const renderContent = () => {

    return (
      <>
        <View style={styles.container}>
          <FlatList
            data={scheduleData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.scheduleContainer}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddSchedule}>
            <Text style={styles.addButtonText}>Add Schedule</Text>
          </TouchableOpacity>

          <Modal visible={modalVisible} animationType="slide">
            <View style={styles.modalContainer}>

              <Picker
                selectedValue={currentSchedule.day}
                onValueChange={(itemValue) => {
                  setCurrentSchedule((prevSchedule) => ({
                    ...prevSchedule,
                    day: itemValue,
                  }))
                }
                }
              >
                <Picker.Item label="Monday" value="Monday" />
                <Picker.Item label="Tuesday" value="Tuesday" />
                <Picker.Item label="Wednesday" value="Wednesday" />
                <Picker.Item label="Thursday" value="Thursday" />
                <Picker.Item label="Friday" value="Friday" />
                <Picker.Item label="Saturday" value="Saturday" />
                <Picker.Item label="Sunday" value="Sunday" />
              </Picker>


              <TextInput
                style={styles.input}
                placeholder="Start Time"
                value={currentSchedule.session.start.value}
                onChangeText={(value) =>
                  setCurrentSchedule((prevSchedule) => ({
                    ...prevSchedule,
                    session: { ...prevSchedule.session, start: { ...prevSchedule.session.start, value } },
                  }))
                }
              />
              <TextInput
                style={styles.input}
                placeholder="meridian (Start)"
                value={currentSchedule.session.start.meridian}
                onChangeText={(value) =>
                  setCurrentSchedule((prevSchedule) => ({
                    ...prevSchedule,
                    session: { ...prevSchedule.session, start: { ...prevSchedule.session.start, meridian: value } },
                  }))
                }
              />
              <TextInput
                style={styles.input}
                placeholder="End Time"
                value={currentSchedule?.session?.end?.value}
                onChangeText={(value) =>
                  setCurrentSchedule((prevSchedule) => ({
                    ...prevSchedule,
                    session: { ...prevSchedule.session, end: { ...prevSchedule.session.end, value } },
                  }))
                }
              />

              <TextInput
                style={styles.input}
                placeholder="meridian (End)"
                value={currentSchedule?.session?.end?.meridian}
                onChangeText={(value) =>
                  setCurrentSchedule((prevSchedule) => ({
                    ...prevSchedule,
                    session: { ...prevSchedule.session, end: { ...prevSchedule.session.end, meridian: value } },
                  }))
                }
              />

              <Button title="Save" onPress={handleSaveSchedule} />
              <Button title="Cancel" color="red" onPress={() => setModalVisible(false)} />
            </View>
          </Modal>
        </View>
      </>
    )
  }

  const renderHeader = () => {
    return (
      <View style={styles.containerView}>
        <View style={styles.containerView2}>
          <View>
            <Text style={styles.heading}>Hi, Professor Alan Turing</Text>
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
      </View>
    )
  }

  return (
    <View style={styles.mainContainer}>
      {renderHeader()}
      {renderContent()}

    </View>
  );
};


export default Home2;