/* eslint-disable react-native/no-inline-styles */
import {Badge, CheckBox, Text} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';
import {CardDataPrors} from './index';

// interface CardData extends CardDataPrors{

// }
interface RadioCardProps {
  item: CardDataPrors;
  handleRadioChange: (valuse: number) => void;
  selectedvalue: number;
}
interface RadioOption {
  title: string;
  value: number;
}
export const CardCheckStress: React.FC<RadioCardProps> = ({
  selectedvalue,
  handleRadioChange,
  item,
}) => {
  const radioButtons: RadioOption[] = [
    {title: 'ไม่รู้สึกเครียด', value: 1},
    {title: 'รู้สึกเครียดเล็กน้อย', value: 2},
    {title: 'รู้สึกเครียดปานกลาง', value: 3},
    {title: 'รู้สึกเครียดมาก', value: 4},
    {title: 'รู้สึกเครียดมากที่สุด', value: 5},
  ];
  return (
    <View
      id={item.id.toString()}
      style={{
        // flex: 1,
        flexDirection: 'column',
        backgroundColor: item.bgColor,
        marginHorizontal: 15,
        borderRadius: 25,
        padding: 10,
        marginVertical: 5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 20,
        }}>
        <Text
          style={{
            fontSize: 15,
            fontFamily: 'Prompt-Bold',
            paddingLeft: 10,
            marginRight: 4,
            flexWrap: 'wrap',
            width: '85%',
          }}>
          {item.title}
        </Text>
        <Badge
          value={`${item.id}/20`}
          status="success"
          containerStyle={{paddingRight: 20, height: 20}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          flexWrap: 'wrap',
        }}>
        {radioButtons.map((radio, index) => (
          <CheckBox
            key={index}
            checked={selectedvalue === radio.value}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checkedColor="black"
            containerStyle={{
              width: '90%',
              borderRadius: 25,
              borderColor: '#D9D9D9',
              borderWidth: 1,
            }}
            title={
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Prompt-Regular',
                  paddingLeft: 10,
                }}>
                {radio.title}
              </Text>
            }
            onPress={() => {
              if (selectedvalue === radio.value) {
                handleRadioChange(0);
              } else {
                handleRadioChange(radio.value);
              }
            }}
          />
        ))}
      </View>
    </View>
  );
};
