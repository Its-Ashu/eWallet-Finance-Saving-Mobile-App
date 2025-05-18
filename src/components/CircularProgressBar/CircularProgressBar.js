import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import Theme from '../../theme/Theme';
import styles from './styles';

const {width} = Dimensions.get('window');
const size = width * 0.75;
const strokeWidth = Theme.responsiveSize.size48;
const radius = (size - strokeWidth) / 2;

const polarToCartesian = (cx, cy, r, angleInDegrees) => {
  const angleInRadians = (angleInDegrees * Math.PI) / 180.0;
  return {
    x: cx + r * Math.cos(angleInRadians),
    y: cy + r * Math.sin(angleInRadians),
  };
};

const describeArc = (x, y, r, startAngle, endAngle) => {
  const start = polarToCartesian(x, y, r, endAngle);
  const end = polarToCartesian(x, y, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  return [
    'M',
    start.x,
    start.y,
    'A',
    r,
    r,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(' ');
};

const CircularProgressBar = () => {
  return (
    <View style={styles.card}>
      <View style={styles.svgContainer}>
        <Svg width={size} height={size / 1.6}>
          {/* Background arcs */}
          <Path
            d={describeArc(size / 2, size / 2, radius, 180, 0)}
            stroke={Theme.colors.bgColor22}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
          />
          <Path
            d={describeArc(size / 2, size / 2, radius, 180, 340)}
            stroke={Theme.colors.bgColor21}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
          />
          <Path
            d={describeArc(size / 2, size / 2, radius, 180, 290)}
            stroke={Theme.colors.bgColor4}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
          />
        </Svg>
      </View>

      {/* Stats Section */}
      <View style={styles.stats}>
        <View style={styles.row}>
          <Text style={styles.label}>Earned</Text>
          <View style={styles.valueWithTag}>
            <Text style={styles.value}>$140</Text>
            <Text style={styles.tag}>+3%</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.label}>Monthly deposit</Text>
          <Text style={styles.value}>$200</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.label}>Manual top-up</Text>
          <Text style={styles.value}>$5060</Text>
        </View>
      </View>
    </View>
  );
};

export default CircularProgressBar;
