import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { RootStackParamList } from '../App';
import confettiAnimation from '../assets/animations/confetti.json';
import { LottieAnimation } from '../components/LottieAnimation';
import { removeItem } from '../utils/asyncStorage';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation }: HomeProps) {
  const { width } = useWindowDimensions();

  const handlePress = async () => {
    await removeItem('onboard');
    navigation.navigate('Onboarding');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LottieAnimation source={confettiAnimation} />
      <Text style={[styles.title, { fontSize: width * 0.09 }]}>Home Page</Text>
      <TouchableOpacity style={styles.resetButton} onPress={handlePress}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor: '#4bbc93',
    padding: 10,
    borderRadius: 10,
  },
});
