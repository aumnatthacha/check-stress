/* eslint-disable react-native/no-inline-styles */
import {Text} from '@rneui/base';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {mindStress} from './mindStress';
import {moderateStress} from './moderateStress';
import {highStress} from './highStress';
import {severeStress} from './severeStress';

type Props = NativeStackScreenProps<RootStackParamList, 'AssessmentResult'>;

const AssessmentResultsScreen = ({route, navigation}: Props) => {
  const score = route.params?.score;
  if (score === undefined || score === null) {
    <View>
      <Text>Error</Text>
    </View>;
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        {score === undefined ? (
          <Text>error</Text>
        ) : (
          (score >= 0 && score <= 23 && mindStress(navigation)) ||
          (score >= 24 && score <= 41 && moderateStress(navigation)) ||
          (score >= 42 && score <= 61 && highStress(navigation)) ||
          (score >= 62 && severeStress(navigation))
        )}
      </View>
    </ScrollView>
  );
};

export default AssessmentResultsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    gap: 10,
    padding: 10,
  },
});
