import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const metrics = {
  padding: 15,
  lessPadding: 10,
  extraPadding: 20,
  radius: 8,
  screenWidth: width,
  screenHeight: height,
  coverWidth: 126,
  coverHeight: 168,
  coverWidthSmall: 66,
  coverHeightSmall: 108,
  headerHeightHalf: 84 / 2,
  headerHeight: 50,
  headerHeightX2: 84 * 2,
  headerHeightX3: 84 * 3,
  tabbarHeight: 49,
};

const colors = {
  primary: '#1c86f4',
  primaryDark: '#1e5bef',
  primaryLight: '#1ba1f7',
  accent: '#3497FD',
  lightGrey:'#d9d9d9',
  text: '#000000',
  linkBlue:'#4d79ff',
  textSecondary: '#8D8D92',
  divider: '#BDBDBD',
  white: '#ffffff',
  lightOpacity: 'rgba(255,255,255,0.8)',
  darkOpacity: 'rgba(0, 0, 0, 0.1)',
  black: '#000000',
  background: '#f1f1f1',
  star: '#fe8302',
  transparent: 'transparent',
};

export {metrics, colors};
