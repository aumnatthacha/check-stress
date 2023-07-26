import {Button, Image, Text} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';
import {RootStackParamList} from '../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export function mindStress(
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
        Mind stress
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
        กลุ่มความเครียดต่ำ
      </Text>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Image
          style={{width: 216, height: 234}}
          source={require('../../assets/Humaaans-Sitting.png')}
        />
      </View>
      <Text
        style={{
          fontSize: 14,
          fontFamily: 'Prompt-LightItalic',
          // fontStyle: 'italic',
          paddingHorizontal: 10,
          marginVertical: 10,
        }}>
        " ท่านมีความเครียดอยู่ในระดับน้อยและหายไปได้ในระยะเวลาสั้น ๆ
        เป็นความเครียดที่เกิดขึ้นได้ในชีวิตประจำวันและ
        สามารถปรับตัวกับสถานการณ์ต่าง ๆ
        ได้อย่างเหมาะสมความเครียดในระดับนี้ถือว่ามีประโยชน์ใน
        การดำเนินชีวิตประจำวันเป็นแรงจูงใจในที่นำไปสู่ความสำเร็จ ในชีวิตได้ "
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
        ออกกำลังกาย คลายเครียด การออกกำลังกายที่ให้ผลทางสุขภาพจิต
        เพียงแค่เดินปกติ สัก 10 นาที หันเหความสนใจไปในทางบวก ก็ได้ผลแล้ว
        แต่ถ้ามีเวลาหลังเลิกงาน ควรจะไปออกกำลังกายอย่างจริงจัง อย่างน้อยวันละ 30
        นาที แค่ 3-5วัน ต่อสัปดาห์ก็เพียงพอให้ฮอร์โมน
        แห่งความสุขทำงานได้อย่างเต็มที่บ้าง
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
            // navigation.navigate('Assessment');
            navigation.navigate('Result');
          }}
        />
      </View>
    </>
  );
}
