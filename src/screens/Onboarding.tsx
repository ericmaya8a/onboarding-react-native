import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import OnboardingSwiper from 'react-native-onboarding-swiper';
import { RootStackParamList } from '../App';
import heroAnimation from '../assets/animations/higher_goals.json';
import meditateAnimation from '../assets/animations/meditate.json';
import trainAnimation from '../assets/animations/train.json';
import { DoneButton } from '../components/DoneButton';
import { LottieAnimation } from '../components/LottieAnimation';
import { storeItem } from '../utils/asyncStorage';

export default function Onboarding() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleDone = async () => {
    await storeItem('onboard', 'ok');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <OnboardingSwiper
        onDone={handleDone}
        onSkip={handleDone}
        DoneButtonComponent={DoneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: '#a7f3d0',
            image: <LottieAnimation source={meditateAnimation} />,
            title: 'Meditate',
            subtitle: 'Relax and focus your mind',
          },
          {
            backgroundColor: '#fef3c7',
            image: <LottieAnimation source={trainAnimation} />,
            title: 'Train',
            subtitle: 'In order to achieve your goals. Train hard!',
          },
          {
            backgroundColor: '#a78bfa',
            image: <LottieAnimation source={heroAnimation} />,
            title: 'Super Hero',
            subtitle: 'And become a Super Hero',
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
