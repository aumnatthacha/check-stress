import {Text, Badge, Button} from '@rneui/base';
import {TabView} from '@rneui/themed';
import React from 'react';
import {Image, View} from 'react-native';
import {RootStackParamList} from '../../App';

export function sectionInfo(navigate: {
  <RouteName extends keyof RootStackParamList>(
    ...args: RouteName extends unknown
      ? undefined extends RootStackParamList[RouteName]
        ?
            | [screen: RouteName]
            | [screen: RouteName, params: RootStackParamList[RouteName]]
        : [screen: RouteName, params: RootStackParamList[RouteName]]
      : never
  ): void;
  <RouteName extends keyof RootStackParamList>(
    options: RouteName extends unknown
      ?
          | {
              key: string;
              params?: RootStackParamList[RouteName] | undefined;
              merge?: boolean | undefined;
            }
          | {
              name: RouteName;
              key?: string | undefined;
              params: RootStackParamList[RouteName];
              merge?: boolean | undefined;
            }
      : never,
  ): void;
}) {
  return (
    <TabView.Item style={{marginTop: 50, width: '100%'}}>
      <>
        <View style={{flex: 1}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 32,
              fontFamily: 'Prompt-Bold',
            }}>
            ความเครียด
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              fontFamily: 'Prompt-Light',
              paddingHorizontal: 10,
            }}>
            ความเครียดในประเทศไทยมีระดับสูง
            และความเครียดที่เกิดขึ้นในสถานที่ทำงานส่งผลต่อประสิทธิภาพการทำงานและสุขภาพของประชาชน
            การรับรู้และการจัดการกับความเครียดในที่ทำงาน
            น่าจะเป็นสิ่งสำคัญที่ควรให้ความสำคัญเพื่อส่งเสริม
            สุขภาพและความเป็นอยู่ที่ดีของคนไทยทั้งหมด
          </Text>
          <View>
            <Image
              source={require('../../assets/info2.png')}
              style={{width: '100%'}}
            />
          </View>
        </View>
        <Button
          title={'เริ่มทำการประเมิน'}
          containerStyle={{paddingHorizontal: 50, marginBottom: 20}}
          buttonStyle={{
            borderRadius: 25,
            height: 52,
            backgroundColor: '#F1EB24',
          }}
          titleStyle={{color: 'black', fontFamily: 'Prompt-Light'}}
          onPress={() => {
            navigate('Assessment');
          }}
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
            <Badge badgeStyle={{backgroundColor: '#D9D9D9'}} />
            <Badge
              badgeStyle={{paddingHorizontal: 20, backgroundColor: 'black'}}
            />
          </View>
        </View>
      </>
    </TabView.Item>
  );
}
