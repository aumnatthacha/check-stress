import {Button, Image, Text} from '@rneui/base';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// type Props = {};
type Props = NativeStackScreenProps<RootStackParamList, 'Result'>;
const ResultScreen: React.FC<Props> = ({navigation}) => {
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
          ผลลัพธ์รวม
        </Text>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 238,
              height: 165,
            }}
            source={require('../../assets/imga1.png')}
          />
        </View>
        <View
          style={{
            marginVertical: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontFamily: 'Prompt-Medium',
            }}>
            ระดับคะแนน 0 – 23 คะแนน
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 14,
              fontFamily: 'Prompt-Regular',

              color: '#450909',
            }}>
            ท่านมีความเครียดอยู่ในระดับน้อย และหายไปได้ในระยะเวลาสั้น ๆ
          </Text>
        </View>
        <View
          style={{
            marginVertical: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontFamily: 'Prompt-Medium',
            }}>
            ระดับคะแนน 24 – 41 คะแนน
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 14,
              fontFamily: 'Prompt-Regular',

              color: '#450909',
            }}>
            ท่านมีความเครียดในระดับปานกลาง เกิดขึ้นได้ในชีวิตประจำวัน
            เนื่องจากมีสิ่งคุกคามหรือ เหตุการณ์ที่ ทำให้เครียด
          </Text>
        </View>
        <View
          style={{
            marginVertical: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontFamily: 'Prompt-Medium',
            }}>
            ระดับคะแนน 42 – 61 คะแนน
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 14,
              fontFamily: 'Prompt-Regular',

              color: '#450909',
            }}>
            ท่านมีความเครียดในระดับสูง
            เป็นระดับที่ท่านได้รับความเดือนร้อนจากสิ่งต่าง ๆ หรือเหตุการณ์รอบตัว
            ทำให้วิตกกังวล จะส่งผลต่อการใช้ชีวิตประจำวันและการเจ็บป่วย
          </Text>
        </View>
        <View
          style={{
            marginVertical: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontFamily: 'Prompt-Medium',
            }}>
            ระดับคะแนน 62 คะแนนขึ้นไป
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 14,
              fontFamily: 'Prompt-Regular',

              color: '#450909',
            }}>
            ท่านมีความเครียดในระดับรุนแรง เป็นความเครียดระดับสูงส่งผลทำให้
            เจ็บป่วยทางกายและสุขภาพจิต ชีวิตไม่มีความสุข ความคิดฟุ้งซ่าน
            การตัดสินใจไม่ดี ยับยั้งอารมณ์ ไม่ได้
          </Text>
        </View>
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
      </ScrollView>
    </View>
  );
};

export default ResultScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    gap: 10,
    padding: 10,
  },
});
