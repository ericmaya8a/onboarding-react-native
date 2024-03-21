import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { DoneButtonProps } from 'react-native-onboarding-swiper';

export function DoneButton(props: DoneButtonProps) {
  return (
    <TouchableOpacity {...props} style={styles.button}>
      <Text>Done ✅</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
});
