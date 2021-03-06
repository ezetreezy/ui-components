import { Flex } from '@rebass/grid/emotion';
import React from 'react';
import { BRAND_PRIMARY_LIGHT } from '../../../common/colors';

/* 
  Container that has two divs behind children[button], depending on direction[range specifier], 
  will render the color on the left or right side visualizing range marker behind the button.
*/

export interface RangeStartEndProps {
  children: React.ReactNode;
  rangeSpecifier: 'start' | 'end';
}

export const RangeStartEnd: React.FC<RangeStartEndProps> = ({
  children,
  rangeSpecifier
}) => {
  return (
    <Flex
      flex='1 1 0%'
      alignItems='stretch'
      justifyContent='stretch'
      style={{
        position: 'relative'
      }}
    >
      <Flex
        flex='1 1 0%'
        style={{
          position: 'absolute',
          zIndex: 2,
          height: '32px',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0
        }}
      >
        {rangeSpecifier === 'start' ? (
          <>
            <Flex flex='1 1 0%' bg='white' />
            <Flex flex='1 1 0%' bg={BRAND_PRIMARY_LIGHT} />
          </>
        ) : (
          <>
            <Flex flex='1 1 0%' bg={BRAND_PRIMARY_LIGHT} />
            <Flex flex='1 1 0%' bg='white' />
          </>
        )}
      </Flex>
      {children}
    </Flex>
  );
};
