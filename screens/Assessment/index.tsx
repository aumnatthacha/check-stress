/* eslint-disable react-native/no-inline-styles */
import {Button, Text} from '@rneui/base';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {CardCheckStress} from './CardCheckStress';
export interface CardDataPrors {
  bgColor: string;
  id: number;
  title: string;
}
// type Props = {}

//     "#F5F5F5",  # White Smoke
//     "#FAF0E6",  # Linen
//     "#E6E6E6",  # Light Grey
//     "#F5F5DC",  # Beige
//     "#F0F8C6",  # Light Goldenrod
//     "#FFF5EE",  # Seashell

const AssessmentScreen = () => {
  const [selectValues, setSelectValues] = useState<{[key: number]: number}>({
    '1': 0,
  });
  const cartNumbersAndData: CardDataPrors[] = [
    {
      id: 1,
      bgColor: '#FADBD8',
      title: 'เรื่องไม่สบายใจเล็กน้อยทำให้ฉันว้าวุ่นใจนั่งไม่ติด',
    },
    {
      id: 2,
      bgColor: '#FDEDEC',
      title: 'ฉันไม่ใส่ใจคนที่หัวเราะเยาะฉัน',
    },
    {
      id: 3,
      bgColor: '#FFF5EE',
      title: 'เมื่อฉันทำผิดพลาดหรือเสียหาย ฉันยอมรับผิดหรือผลที่ตามมา',
    },
    {
      id: 4,
      bgColor: '#F0E68C',
      title: 'ฉันเคยยอมทนลำบากเพื่ออนาคตที่ดีขึ้น',
    },
    {
      id: 5,
      bgColor: '#FDFD96',
      title: 'เวลาทุกข์ใจมากๆ ฉันเจ็บป่วยไม่สบาย',
    },
    {
      id: 6,
      bgColor: '#F0FFF0',
      title: 'ฉันสอนและเตือนตัวเอง',
    },
    {
      id: 7,
      bgColor: '#E6E6FA',
      title: 'ความยากลำบากทำให้ฉันแกร่งขึ้น',
    },
    {
      id: 8,
      bgColor: '#FFDAB9',
      title: 'ฉันไม่จดจำเรื่องเลวร้ายในอดีต',
    },
    {
      id: 9,
      bgColor: '#E1F5C4',
      title: 'ถึงแม้ปัญหาจะหนักหนาเพียงใดชีวิตฉันก็ไม่เลวร้ายไปหมด',
    },
    {
      id: 10,
      bgColor: '#FFFACD',
      title: 'เมื่อมีเรื่องหนักใจ ฉันมีคนปรับทุกข์ด้วย',
    },
    {
      id: 11,
      bgColor: '#E0FFFF',
      title:
        'จากประสบการณ์ที่ผ่านมาทำให้ฉันมั่นใจว่าจะแก้ปัญหาต่างๆ ที่ผ่านเข้ามาในชีวิตได้',
    },
    {
      id: 12,
      bgColor: '#F0F8FF',
      title: 'ฉันมีครอบครัวและคนใกล้ชิดเป็นกำลังใจ',
    },
    {
      id: 13,
      bgColor: '#FFF0F5',
      title: 'ฉันมีแผนการที่จะทำให้ชีวิตก้าวไปข้างหน้า',
    },
    {
      id: 14,
      bgColor: '#F5F5F5',
      title: 'เมื่อมีปัญหาวิกฤตเกิดขึ้น ฉันรู้สึกว่าตัวเองไร้ความสามารถ',
    },
    {
      id: 15,
      bgColor: '#FAF0E6',
      title:
        'เป็นเรื่องยากสำหรับฉันที่จะทำให้ชีวิตดีขึ้น ด้านการจัดการกับปัญหา',
    },
    {
      id: 16,
      bgColor: '#F5F5DC',
      title: 'ฉันอยากหนีไปให้พ้น หากมีปัญหาหนักหนาต้องรับผิดชอบ',
    },
    {
      id: 17,
      bgColor: '#F0F8C6',
      title: 'การแก้ไขปัญหาทำให้ฉันมีประสบการณ์มากขึ้น',
    },
    {
      id: 18,
      bgColor: '#FFF5EE',
      title: 'ในการพูดคุย ฉันหาเหตุผลที่ทุกคนยอมรับหรือเห็นด้วยกับฉันได้',
    },
    {
      id: 19,
      bgColor: '#FDEDEC',
      title: 'ฉันเตรียมหาทางออกไว้ หากปัญหาร้ายแรงกว่าที่คิด',
    },
    {
      id: 20,
      bgColor: '#F0E68C',
      title: 'ฉันชอบฟังความคิดเห็นที่แตกต่างจากฉัน',
    },
  ];
  const handleRadioChange = (cardNumber: number, value: number) => {
    setSelectValues(prev => ({
      ...prev,
      [cardNumber]: value,
    }));
  };
  const isCardFullySelected = Object.values(selectValues).every(
    value => value !== 0,
  );
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
          แบบประเมิน
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
            // navigate('Assessment');
            // if (selectValues) {
            //   return;
            // }
            console.log('Pressed', selectValues);
          }}
          disabled={!isCardFullySelected}
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
