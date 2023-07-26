import {Button, Image, Text} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';
import {RootStackParamList} from '../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export function moderateStress(
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
        Moderate Stress
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
        เครียดระดับปานกลาง
      </Text>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Image
          style={{width: 216, height: 234}}
          source={require('../../assets/istockphoto.png')}
        />
      </View>
      <Text
        style={{
          fontSize: 14,
          fontFamily: 'Prompt-LightItalic',
          paddingHorizontal: 10,
          marginVertical: 10,
        }}>
        " เป็นความเครียดในระดับปกติที่ไม่ก่ออันตราย
        และไม่แสดงออกถึงความเครียดที่ชัดเจน
        ส่วนใหญ่จะสามารถปรับตัวกลับสู่ภาวะปกติได้เอง
        จากการได้ทํากิจกรรมที่ชื่นชอบ ซึ่งช่วยคลายเครียด "
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
        นั่งสมาธิ ฝึกจิต ลดเครียด หากลองสังเกตตัวเองเมื่อไหร่ก็ตามที่
        คุณรู้สึกเครียด จะเหมือนมีก้อนความคิดบางอย่างวิ่งอยู่ในหัวตลอดเวลา
        ซึ่งเมื่อมีความเครียดวิ่งวนอยู่ในหัวตลอดทำให้เราต้องคิดซ้ำไปซ้ำมาในเรื่องเครียดนั้น
        ๆ การจมอยู่กับความเครียดอาจทำให้เราไม่อยากทำอย่างอื่นเลย ดังนั้น
        การแก้ปัญหาง่ายๆ เมื่อรู้สึกวิตกกังวลมากเกินไป ลองหาเวลาทำสมาธิ
        หรือสวดมนต์ไหว้พระ ฝึกลมหายใจ ลองกำหนดลมหายใจเข้า-ออกง่ายๆ
        ทำให้ชีพจรเต้นช้าลง เอาใจไปโฟกัสการกำหนดลมก็ทำให้เราลืมเรื่องเครียดๆ
        ไปได้ประมานหนึ่งเลยล่ะ
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
