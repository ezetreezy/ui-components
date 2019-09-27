import styled from '@emotion/styled';
import { Flex } from '@rebass/grid/emotion';

/* Shared Styled Components between Calender Renderers */

export const Container = styled(Flex)`
  flex: 1 1 0%;
  flex-direction: column;
  justify-content: stretch;
  align-content: stretch;
  position: relative;
`;

/* Contains Month Name Row + Day Names Row */
export const CalendarHeader = styled(Flex)`
  max-height: 96px; /* 2 Rows = 2 * 48 */
  flex-direction: column;
  flex: 1 1 0%;
`;

export const CalendarContents = styled(Flex)`
  flex: 1 1 0%;
  top: 96px; /* 2 Rows = 2 * 48 */
  flex-direction: column;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
`;

export const CalendarRow = styled(Flex)<{ hasText?: boolean }>`
  flex: 1 1 0%;
  flex-direction: row;
  justify-content: ${({ hasText }) => (hasText ? 'center' : 'stretch')};
  align-items: ${({ hasText }) => (hasText ? 'center' : 'stretch')};
  padding: 2px 0;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 0%;
    min-width: 0;
    padding: 0 0;
    margin: 0 2px;
  }
`;

export const DayNameBlocks = styled(Flex)`
  justify-content: center;
  align-items: center;
  flex: 1 1 0%;
  min-width: 0;
  padding: 0 0;
  margin: 0 2px;
  border-radius: 2.5px;
`;

export const BACKGROUND_EMPTY = 'rgb(238,238,238)';
export const BRAND_PRIMARY = 'rgb(74,175,227)';
export const BRAND_PRIMARY_DARK = 'rgb(74,99,227)';
export const BRAND_PRIMARY_LIGHT = 'rgb(140,204,237)';
