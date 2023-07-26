/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {Button, Text} from '@rneui/base';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {CardCheckStress} from './CardCheckStress';
import {RootStackParamList} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
// eslint-disable-next-line @typescript-eslint/no-unused-vars

type Props = NativeStackScreenProps<RootStackParamList, 'Assessment'>;
export interface CardDataPrors {
  bgColor: string;
  id: number;
  title: string;
}
const cartNumbersAndData: CardDataPrors[] = [
  {
    id: 1,
    bgColor: '#FADBD8',
    title: 'กลัวทำงานผิดพลาด',
  },
  {
    id: 2,
    bgColor: '#FDEDEC',
    title: 'ไปไม่ถึงเป้าหมายที่วางไว้',
  },
  {
    id: 3,
    bgColor: '#FFF5EE',
    title: 'ครอบครัวมีความขัดแย้งกันในเรื่องเงินหรือเรื่องงานในบ้าน',
  },
  {
    id: 4,
    bgColor: '#F0E68C',
    title: 'เป็นกังวลกับเรื่องสารพิษหรือมลภาวะในอากาศน้ำ เสียง และดิน',
  },
  {
    id: 5,
    bgColor: '#FDFD96',
    title: 'รู้สึกว่าต้องแข่งขันหรือเปรียบเทียบ',
  },
  {
    id: 6,
    bgColor: '#F0FFF0',
    title: 'เงินไม่พอใช้จ่าย',
  },
  {
    id: 7,
    bgColor: '#E6E6FA',
    title: 'กล้ามเนื้อตึงหรือปวด',
  },
  {
    id: 8,
    bgColor: '#FFDAB9',
    title: 'ปวดหัวจากความตึงเครียด',
  },
  {
    id: 9,
    bgColor: '#E1F5C4',
    title: 'ปวดหลัง',
  },
  {
    id: 10,
    bgColor: '#FFFACD',
    title: 'ความอยากอาหารเปลี่ยนแปลง',
  },
  {
    id: 11,
    bgColor: '#E0FFFF',
    title: 'ปวดศีรษะข้างเดียว',
  },
  {
    id: 12,
    bgColor: '#F0F8FF',
    title: 'รู้สึกวิตกกังวล',
  },
  {
    id: 13,
    bgColor: '#FFF0F5',
    title: 'รู้สึกคับข้องใจ',
  },
  {
    id: 14,
    bgColor: '#F5F5F5',
    title: 'รู้สึกโกรธ หรือหงุดหงิด',
  },
  {
    id: 15,
    bgColor: '#FAF0E6',
    title: 'รู้สึกเศร้า',
  },
  {
    id: 16,
    bgColor: '#F5F5DC',
    title: 'ความจำไม่ดี',
  },
  {
    id: 17,
    bgColor: '#F0F8C6',
    title: 'รู้สึกสับสน',
  },
  {
    id: 18,
    bgColor: '#FFF5EE',
    title: 'ตั้งสมาธิลำบาก',
  },
  {
    id: 19,
    bgColor: '#FDEDEC',
    title: ' รู้สึกเหนื่อยง่าย',
  },
  {
    id: 20,
    bgColor: '#F0E68C',
    title: 'เป็นหวัดบ่อย ๆ',
  },
];
const AssessmentScreen = ({navigation}: Props) => {
  const [selectValues, setSelectValues] = useState<{[key: number]: number}>({
    '1': 0,
  });
  const [isDisbleButton, setDisableButton] = useState(false);

  const handleRadioChange = (cardNumber: number, value: number) => {
    setSelectValues(prev => ({
      ...prev,
      [cardNumber]: value,
    }));
  };
  const isCardFullySelected = Object.values(selectValues).every(
    value => value !== 0,
  );
  useEffect(() => {
    setDisableButton(!isCardFullySelected);
  }, [isCardFullySelected]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 32,
            fontFamily: 'Prompt-Bold',
            marginTop: 50,
          }}>
          แบบประเมินความเครียด
        </Text>
        {cartNumbersAndData.map((item, index) => (
          <CardCheckStress
            key={index}
            item={item}
            selectedvalue={selectValues[item.id] || 0}
            handleRadioChange={value => handleRadioChange(item.id, value)}
          />
        ))}
        {!isCardFullySelected && (
          <Text
            style={{
              color: 'red',
              fontFamily: 'Prompt-Light',
              fontSize: 18,
              marginVertical: 10,
              textAlign: 'center',
            }}>
            โปรดเลือกข้อมูลให้ครบ
          </Text>
        )}
        <Button
          title={'ตกลง'}
          containerStyle={{paddingHorizontal: 50, marginBottom: 20}}
          buttonStyle={{
            borderRadius: 25,
            height: 52,
            backgroundColor: '#F1EB24',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            marginBottom: 5,
          }}
          titleStyle={{color: 'black', fontFamily: 'Prompt-Light'}}
          onPress={() => {
            let score: number = 0;
            Object.values(selectValues).forEach(val => (score += val));
            setSelectValues({'1': 0});
            navigation.navigate('AssessmentResult', {score: score});
          }}
          disabled={isDisbleButton}
        />
      </ScrollView>
    </View>
  );
};

export default AssessmentScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    gap: 10,
  },
});
