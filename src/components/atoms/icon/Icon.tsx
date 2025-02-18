import React from 'react';
import HeartIcon from './icons/heart.svg';
import ArrowIcon from './icons/arrow.svg';
import MagnifyingGlassIcon from './icons/magnifying-glass.svg';

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
