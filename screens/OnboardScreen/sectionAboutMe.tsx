import {Text, Badge, Button} from '@rneui/base';
import {TabView} from '@rneui/themed';
import React from 'react';
import {Image, View} from 'react-native';

export function sectionAboutMe(
  setIndex: React.Dispatch<React.SetStateAction<number>>,
) {
  return (
    <TabView.Item style={{width: '100%', marginTop: 50}}>
      <>
        <View style={{flex: 1}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 32,
              fontFamily: 'Prompt-Bold',
            }}>
            แอพพลิเคชั่นของเรา
          </Text>
          <View>
            <Image source={require('../../assets/info1.png')} />
          </View>
          <View style={{paddingHorizontal: 10, marginTop: 10}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 24,
                fontFamily: 'Prompt-Bold',
              }}>
              เช็คความเครียด
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                fontFamily: 'Prompt-Light',
              }}>
              คุณสามารถศึกเรื่องสุขภาพจิต จาก APP StressCheck
              และประเมินสภาวะทางจิตใจและทราบผลลัพธ์ได้ทันทีหลังจากประเมินเสร็จเรียบร้อบ
            </Text>
          </View>
        </View>
        <Button
          title={'ถัดไป'}
          containerStyle={{paddingHorizontal: 50, marginBottom: 20}}
          buttonStyle={{
            borderRadius: 25,
            height: 52,
            backgroundColor: 'black',
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
          onPress={() => setIndex(prev => (prev += 1))}
        />
        <View>
          <View
            style={{
              flexDirection: 'row',

              justifyContent: 'center',
              marginVertical: 10,
              gap: 5,
            }}>
            <Badge badgeStyle={{backgroundColor: '#D9D9D9'}} />
            <Badge
              badgeStyle={{paddingHorizontal: 20, backgroundColor: 'black'}}
            />
            <Badge badgeStyle={{backgroundColor: '#D9D9D9'}} />
          </View>
        </View>
      </>
    </TabView.Item>
  );
}
