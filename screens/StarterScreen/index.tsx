/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button, Image, Text} from '@rneui/base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {RootStackParamList} from '../../App';
// import {useLinkTo} from '@react-navigation/native';
// type Props = {};

const Starter = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 24,
            // fontWeight: '700',
            fontFamily: 'Prompt-Bold',
          }}>
          ยินดีตอนรับ ประเมินความเครียด
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Prompt-Regular',
            fontSize: 16,
          }}>
          โดยสาขา วิศกรรมซอฟต์แวร์
        </Text>
      </View>
      <View>
        <Image
          source={require('../../assets/starter.png')}
          style={{width: 360, height: 360}}
        />
      </View>
      <View style={{height: 80}}>
        <Button
          title={'เริ่มต้นการใช้งาน'}
          containerStyle={{paddingHorizontal: '20%', height: 85}}
          buttonStyle={{
            borderRadius: 25,
            backgroundColor: '#000000',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
          titleStyle={{fontFamily: 'Prompt-Regular'}}
          onPress={() => {
            navigate('OnBoard');
          }}
        />
      </View>
    </View>
  );
};

export default Starter;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    // alignContent:'center',
    justifyContent: 'space-between',
  },
});
