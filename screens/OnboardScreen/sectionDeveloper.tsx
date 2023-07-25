import {Text, Badge, Button} from '@rneui/base';
import {TabView} from '@rneui/themed';
import React from 'react';
import {Image, View} from 'react-native';

export function sectionDeveloper(
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
            ผู้พัฒนาแอพพลิเคชั่น
          </Text>
          <View style={{marginTop: 10, paddingHorizontal: 10}}>
            <Image
              source={require('../../assets/undraw_Coffee_Time_7oqh.png')}
              style={{width: 250, height: 187}}
            />
            <View style={{paddingLeft: 30, marginTop: 5}}>
              <Text
                style={{
                  fontFamily: 'Prompt-Regular',
                  fontSize: 16,
                }}>
                นางสาว ณาตหชา มุมแดง{' '}
              </Text>
              <Text
                style={{
                  fontFamily: 'Prompt-Regular',
                  fontSize: 16,
                }}>
                สาขา วิศกรรมซอฟต์แวร์
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-end',
              width: '100%',
              paddingHorizontal: 10,
            }}>
            <Image
              source={require('../../assets/undraw_Drink_coffee_v3au.png')}
              style={{width: 250, height: 187}}
            />
            <View style={{paddingRight: 30, marginTop: 5}}>
              <Text
                style={{
                  fontFamily: 'Prompt-Regular',
                  fontSize: 16,
                }}>
                นาย ศักรินทร์ สิงหอยู่
              </Text>
              <Text
                style={{
                  fontFamily: 'Prompt-Regular',
                  fontSize: 16,
                }}>
                สาขา วิศกรรมซอฟต์แวร์
              </Text>
            </View>
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
            <Badge
              badgeStyle={{paddingHorizontal: 20, backgroundColor: 'black'}}
            />
            <Badge badgeStyle={{backgroundColor: '#D9D9D9'}} />
            <Badge badgeStyle={{backgroundColor: '#D9D9D9'}} />
          </View>
        </View>
      </>
    </TabView.Item>
  );
}
