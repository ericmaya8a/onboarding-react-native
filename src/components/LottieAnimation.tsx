import LottieView, { AnimationObject } from 'lottie-react-native';
import { useWindowDimensions, View } from 'react-native';

type LottieAnimationProps = {
  source:
    | string
    | AnimationObject
    | {
        uri: string;
      };
};

export function LottieAnimation({ source }: LottieAnimationProps) {
  const { width } = useWindowDimensions();

  return (
    <View style={{ height: width, width: width * 0.9 }}>
      <LottieView source={source} autoPlay loop />
    </View>
  );
}
