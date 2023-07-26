import {Button, Image, Text} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';
import {RootStackParamList} from '../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export function highStress(
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'AssessmentResult',
    undefined
  >,
): React.ReactNode {
  return (
    <>
      <Text
        style={{
          color: '#000000',
          fontFamily: 'Prompt-Bold',
          fontSize: 24,
          marginVertical: 10,
          textAlign: 'center',
          opacity: 0.5,
          marginTop: 30,
        }}>
        High Stress
      </Text>
      <Text
        style={{
          color: '#5B9A55',
          fontFamily: 'Prompt-Bold',
          fontSize: 32,
          marginVertical: 10,
          textAlign: 'center',
          opacity: 0.85,
          marginTop: 20,
        }}>
        ความเครียดระดับสูง
      </Text>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Image
          style={{width: 216, height: 234}}
          source={require('../../assets/depression.png')}
        />
      </View>
      <Text
        style={{
          fontSize: 14,
          fontFamily: 'Prompt-LightItalic',
          paddingHorizontal: 10,
          marginVertical: 10,
        }}>
        " เป็นความเครียดที่เกิดจากเหตุการณ์รุนแรงหากปรับตัวไม่ได้ จะทํา
        าให้เกิดความผิดปกติตามมาทางร่างกาย อารมณ์ ความคิด และพฤติกรรม เช่น
        ปวดศีรษะ ปวดท้อง อารมณ์ฉุนเฉียวง่าย หงุดหงิด
        พฤติกรรมการนอนและการรับประทานอาหารเปลี่ยนไป
        จนมีผลต่อการดําาเนินชีวิตจึงควรหาใครสักคนคอยอยู่เป็นเพื่อนรับฟังปัญหาและระบายความรู้สึกรวมถึงมีผู้ใหญ่สักคนแนะนําาให้คําาปรึกษาอย่างใกล้ชิด
        "
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontFamily: 'Prompt-Bold',
          textAlign: 'left',
        }}>
        การจัดการความเครียดด้วยตนเอง มีวิธีง่าย ๆ ดังนี้คือ
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontFamily: 'Prompt-Regular',
          paddingHorizontal: 10,
          marginVertical: 10,
        }}>
        ผ่อนคลายด้วยการดูหนัง ฟังเพลง แม้ว่าเราจะจัดการปัญหาความเครียด
        ต่างๆยังไม่ได้ทันทีแต่การที่เราเอาตัวเองออกมาจากความเครียด
        ได้สักพักหนึ่งก็น่าจะเป็นเรื่องที่ดีได้ทำตามใจตัวเองบ้าง เช่น
        การนอนดูหนังฟังเพลงสบายๆหรือออกไปหากิจกรรมทำที่
        นอกจากการนั่งจมกับความคิดเครียดๆ แน่นอนว่าช่วยให้สมอง ปลอดโปร่งสักพัก
        และอาจทำให้เรากลับมาคิด แก้ไขปัญหาหรือเรื่องเครียดได้ด้วย
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Button
          title={'เริ่มต้นประเมินใหม่'}
          containerStyle={{marginBottom: 20}}
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
            navigation.replace('Assessment');
          }}
        />
        <Button
          title={'ดูหน้าผลลัพธ์รวม'}
          containerStyle={{marginBottom: 5}}
          buttonStyle={{
            borderRadius: 25,
            height: 52,
            backgroundColor: '#000000',
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
          titleStyle={{color: 'white', fontFamily: 'Prompt-Light'}}
          onPress={() => {
            navigation.navigate('Result');
          }}
        />
      </View>
    </>
  );
}
