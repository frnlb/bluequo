import React from 'react';
import HeartIcon from '../../../assets/heart.svg?react';
import ArrowIcon from '../../../assets/right-arrow.svg?react';
import MagnifyingGlassIcon from '../../../assets/magnifying-glass.svg?react';

interface IconProps {
  name: 'heart' | 'arrow' | 'magnifying-glass';
  size?: number;
  color?: string;
}

const iconMap = {
  heart: HeartIcon,
  arrow: ArrowIcon,
  'magnifying-glass': MagnifyingGlassIcon,
};

export const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'currentColor' }) => {
  const SVGIcon = iconMap[name];

  return <SVGIcon width={size} height={size} fill={color} />;
};