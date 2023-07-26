import {Button, Image, Text} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';
import {RootStackParamList} from '../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export function severeStress(
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
        Severe Stress
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
        ความเครียดระดับรุนแรง
      </Text>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Image
          style={{width: 216, height: 234}}
          source={require('../../assets/Severe.png')}
        />
      </View>
      <Text
        style={{
          fontSize: 14,
          fontFamily: 'Prompt-LightItalic',
          paddingHorizontal: 10,
          marginVertical: 10,
        }}>
        " เป็นความเครียดระดับสูงและเรื้อรังต่อเนื่องจนทําาให้คนคนนั้น
        มีความล้มเหลวในการปรับตัวและก่อให้เกิดความผิดปกติและ
        เกิดโรคต่างๆที่รุนแรงขึ้นมาได้ เช่น อารมณ์แปรปรวน มีอาการทางจิต
        มีความบกพร่องในการดําาเนินชีวิตประจําาวัน ซึ่งอาจมีอาการนานเป็นสัปดาห์
        เดือน หรือปี ควรเข้ารับการปรึกษาจากแพทย์ "
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
        ปรับเปลี่ยนความคิด หากเราจมอยู่กับความวิตกกังวลมาก ๆ
        ก็กลายเป็นความเครียดสะสมความเครียดที่เกิดขึ้นนั้นก็จะกลาย
        เป็นสาเหตุของความทุกข์ใจหากเกิดกรณีนี้ให้เอาตัวเองออกจาก
        ความเครียดด้วยการลองปรับมุมมองปัญหาต่าง ๆ
        เอาตัวเองออกมายืนเป็นคนนอกดูบ้างอาจทำให้เราเห็นสาเหตุ
        ของปัญหาและวิธีแก้ไขได้ง่ายกว่าการเอาตัวเองไปจมอยู่กับตรงนั้น
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
