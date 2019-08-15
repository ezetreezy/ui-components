import styled from '@emotion/styled';
import { DateRange } from '@material-ui/icons';
import React, { useEffect, MutableRefObject } from 'react';
import { animated, config, useSpring } from 'react-spring';

/* 
    Error Animations, Date selection via text input
    isSmall prop shrinks the Date Selector when the window resizes to a threshold
*/

export interface DateTextFieldProps {
  isSmall: boolean;
  isActiveError: boolean;
  onCalendarIconClick: () => void;
}

type CombinedProps = DateTextFieldProps &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;

export const DateTextField: React.FC<CombinedProps> = React.forwardRef(
  ({ isSmall, isActiveError, onCalendarIconClick, ...textInputProps }, ref) => {
    const [{ x }, set] = useSpring(() => ({
      x: 0
    }));

    useEffect(() => {
      if (isActiveError) {
        set({ x: x.getValue() === 1 ? 0 : 1, config: config.wobbly });
      }
    }, [isActiveError, set, x]);

    return (
      <AnimatedTextFieldWrapper
        isSmall={isSmall}
        style={{
          transform: x
            .interpolate({
              range: [0, 0.5, 0.75, 1],
              output: [0, -2, 2, 0]
            })
            .interpolate(x => `translate3d(${x}px, 0, 0)`)
        }}
      >
        <DateRange
          style={{
            paddingLeft: isSmall ? 4 : 0,
            cursor: 'pointer',
            color: isActiveError ? BRAND_RED : BRAND_PRIMARY
          }}
          onClick={onCalendarIconClick}
        />
        <Input type='text' ref={ref} isSmall={isSmall} {...textInputProps} />
      </AnimatedTextFieldWrapper>
    );
  }
);

const BACKGROUND_EMPTY = 'rgb(238,238,238)';
const BRAND_PRIMARY = 'rgb(74,175,227)';
const BRAND_RED = 'rgb(231,54,49)';

const Input = styled.input<{
  isSmall: boolean;
}>`
  display: flex;
  flex: 1 1 0%;
  justify-content: center;
  align-items: center;
  padding: ${props => (props.isSmall ? '4px' : '8px')};
  border-radius: 4px;
  border-width: 0px;
  border-style: none;
  text-align: center;
  font-family: 'Open Sans', sans-serif, monospace;
  text-overflow: ellipsis;
  /* input elements have min width auto by default so it refuses to shrink */
  min-width: 0;
  font-size: 14px;
  background-color: ${BACKGROUND_EMPTY};
`;

const AnimatedTextFieldWrapper = styled(animated.div)<{ isSmall: boolean }>`
  display: flex;
  flex: 1 1 0%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-left: ${props => (props.isSmall ? '0px' : '8px')};
  padding-right: ${props => (props.isSmall ? '0px' : '8px')};
  z-index: 99;
  border-radius: 4px;
  background-color: ${BACKGROUND_EMPTY};

  input {
    outline: none;
  }
`;