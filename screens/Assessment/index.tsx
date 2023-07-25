/* eslint-disable react-native/no-inline-styles */
import {Badge, Button, CheckBox, Text} from '@rneui/base';
import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

// type Props = {}
// "#FADBD8",  # Light Apricot
//     "#FDEDEC",  # Light Pink
//     "#F8C471",  # Light Goldenrod Yellow
//     "#F0E68C",  # Khaki
//     "#FDFD96",  # Pastel Yellow
//     "#F0FFF0",  # Honeydew
//     "#E6E6FA",  # Lavender
//     "#FFDAB9",  # Peach Puff
//     "#E1F5C4",  # Tea Green
//     "#FFFACD",  # Lemon Chiffon
//     "#FFF8DC",  # Cornsilk
//     "#E0FFFF",  # Light Cyan
//     "#F0F8FF",  # Alice Blue
//     "#FFF0F5",  # Lavender Blush
//     "#F5F5F5",  # White Smoke
//     "#FAF0E6",  # Linen
//     "#E6E6E6",  # Light Grey
//     "#F5F5DC",  # Beige
//     "#F0F8C6",  # Light Goldenrod
//     "#FFF5EE",  # Seashell
const data = [
  {
    id: 1,
    msg: 'เรื่องไม่สบายใจเล็กน้อยทำให้ฉันว้าวุ่นใจนั่งไม่ติด',
    bgColor: '#F0E68C',
  },
  {
    id: 2,
    msg: 'เวลาทุกข์ใจมากๆ ฉันเจ็บป่วยไม่สบาย',
    bgColor: '#FDEDEC',
  },
  {
    id: 3,
    msg: 'เมื่อมีปัญหาวิกฤตเกิด ขึ้นฉันรู้สึกว่าตัวเอง ไร้ความสามารถ',
    bgColor: '#F8C471',
  },
  {
    id: 4,
    msg: 'เมื่อมีปัญหาวิกฤตเกิด ขึ้นฉันรู้สึกว่าตัวเอง ไร้ความสามารถ',
    bgColor: '#F8C471',
  },
];
const AssessmentScreen = () => {
  const [selectedIndex, setIndex] = useState(0);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        ListHeaderComponent={
          <Text
            style={{
              textAlign: 'center',
              fontSize: 32,
              fontFamily: 'Prompt-Bold',
              marginTop: 50,
            }}>
            แบบประเมิน
          </Text>
        }
        ListFooterComponent={
          <Button
            title={'ตกลง'}
            containerStyle={{paddingHorizontal: 50, marginBottom: 20}}
            buttonStyle={{
              borderRadius: 25,
              height: 52,
              backgroundColor: '#F1EB24',
            }}
            titleStyle={{color: 'black', fontFamily: 'Prompt-Light'}}
            onPress={() => {
              // navigate('Assessment');
              console.log('Pressed');
            }}
          />
        }
        renderItem={({item}) => (
          <>
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
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: 'Prompt-Bold',
                    paddingLeft: 10,
                    marginRight: 4,
                    flexWrap: 'wrap',
                    width: '90%',
                    // letterSpacing:2
                  }}>
                  เรื่องไม่สบายใจเล็กน้อยทำให้ฉันว้าวุ่นใจนั่งไม่ติด
                </Text>
                <Badge
                  value="1/30"
                  status="success"
                  // containerStyle={{marginHorizontal: 4}}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <CheckBox
                  checked={selectedIndex === 0}
                  onPress={() => setIndex(0)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={{
                    width: '40%',
                    borderRadius: 25,
                    borderColor: '#D9D9D9',
                    borderWidth: 1,
                  }}
                  title={'ไม่จริง'}
                />
                <CheckBox
                  checked={selectedIndex === 1}
                  onPress={() => setIndex(1)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={{
                    width: '40%',
                    borderRadius: 25,
                    borderColor: '#D9D9D9',
                    borderWidth: 1,
                  }}
                  title={'จริงบางครั้ง'}
                />
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <CheckBox
                  checked={selectedIndex === 2}
                  onPress={() => setIndex(2)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={{
                    width: '40%',
                    borderRadius: 25,
                    borderColor: '#D9D9D9',
                    borderWidth: 1,
                  }}
                  title={'ไม่จริง'}
                />
                <CheckBox
                  checked={selectedIndex === 3}
                  onPress={() => setIndex(3)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  containerStyle={{
                    width: '40%',
                    borderRadius: 25,
                    borderColor: '#D9D9D9',
                    borderWidth: 1,
                  }}
                  title={'จริงบางครั้ง'}
                />
              </View>
            </View>
          </>
        )}
        keyExtractor={item => item.id.toString()}
      />

      {/* <View
        style={{
          // flex: 1,
          flexDirection: 'column',
          backgroundColor: '#EFFFEA',
          marginHorizontal: 15,
          borderRadius: 25,
          padding: 10,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Prompt-Bold',
              paddingLeft: 10,
              marginRight: 4,
              flexWrap: 'wrap',
              width: '90%',
              // letterSpacing:2
            }}>
            เวลาทุกข์ใจมากๆ ฉันเจ็บป่วยไม่สบาย
          </Text>
          <Badge
            value="2/20"
            status="success"
            // containerStyle={{marginHorizontal: 4}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <CheckBox
            checked={selectedIndex === 0}
            onPress={() => setIndex(0)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            containerStyle={{
              width: '40%',
              borderRadius: 25,
              borderColor: '#D9D9D9',
              borderWidth: 1,
            }}
            title={'ไม่จริง'}
          />
          <CheckBox
            checked={selectedIndex === 1}
            onPress={() => setIndex(1)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            containerStyle={{
              width: '40%',
              borderRadius: 25,
              borderColor: '#D9D9D9',
              borderWidth: 1,
            }}
            title={'จริงบางครั้ง'}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <CheckBox
            checked={selectedIndex === 2}
            onPress={() => setIndex(2)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            containerStyle={{
              width: '40%',
              borderRadius: 25,
              borderColor: '#D9D9D9',
              borderWidth: 1,
            }}
            title={'ไม่จริง'}
          />
          <CheckBox
            checked={selectedIndex === 3}
            onPress={() => setIndex(3)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            containerStyle={{
              width: '40%',
              borderRadius: 25,
              borderColor: '#D9D9D9',
              borderWidth: 1,
            }}
            title={'จริงบางครั้ง'}
          />
        </View>
      </View>
      <View
        style={{
          // flex: 1,
          flexDirection: 'column',
          backgroundColor: '#FDFED0',
          marginHorizontal: 15,
          borderRadius: 25,
          padding: 10,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Prompt-Bold',
              paddingLeft: 10,
              marginRight: 4,
              flexWrap: 'wrap',
              width: '90%',
              // letterSpacing:2
            }}>
            เมื่อมีปัญหาวิกฤตเกิด ขึ้นฉันรู้สึกว่าตัวเอง ไร้ความสามารถ
          </Text>
          <Badge
            value="3/20"
            status="success"
            // containerStyle={{width:50}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <CheckBox
            checked={selectedIndex === 0}
            onPress={() => setIndex(0)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            containerStyle={{
              width: '40%',
              borderRadius: 25,
              borderColor: '#D9D9D9',
              borderWidth: 1,
            }}
            title={'ไม่จริง'}
          />
          <CheckBox
            checked={selectedIndex === 1}
            onPress={() => setIndex(1)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            containerStyle={{
              width: '40%',
              borderRadius: 25,
              borderColor: '#D9D9D9',
              borderWidth: 1,
            }}
            title={'จริงบางครั้ง'}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <CheckBox
            checked={selectedIndex === 2}
            onPress={() => setIndex(2)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            containerStyle={{
              width: '40%',
              borderRadius: 25,
              borderColor: '#D9D9D9',
              borderWidth: 1,
            }}
            title={'ไม่จริง'}
          />
          <CheckBox
            checked={selectedIndex === 3}
            onPress={() => setIndex(3)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            containerStyle={{
              width: '40%',
              borderRadius: 25,
              borderColor: '#D9D9D9',
              borderWidth: 1,
            }}
            title={'จริงบางครั้ง'}
          />
        </View>
      </View> */}
    </View>
  );
};

export default AssessmentScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 50,
    // alignContent:'center',
    // justifyContent: 'center',
    // alignContent: 'center',

    backgroundColor: '#FFFF',
    gap: 10,
  },
});
