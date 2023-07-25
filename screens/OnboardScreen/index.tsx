/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TabView} from '@rneui/themed';
import React, {useState} from 'react';
import {RootStackParamList} from '../../App';
import {sectionInfo} from './sectionInfo';
import {sectionAboutMe} from './sectionAboutMe';
import {sectionDeveloper} from './sectionDeveloper';

const OnboardScreen = () => {
  const [index, setIndex] = useState(0);
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TabView
      value={index}
      onChange={setIndex}
      animationType="spring"
      containerStyle={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
      }}>
      {sectionDeveloper(setIndex)}
      {sectionAboutMe(setIndex)}
      {sectionInfo(navigate)}
    </TabView>
  );
};

export default OnboardScreen;
