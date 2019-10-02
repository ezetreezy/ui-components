import React, { useCallback, useState } from 'react';
import { DateRangeSelector, DateRangeTuple } from './dateRangeSelector';
import { Flex } from '@rebass/grid/emotion';
import { Button } from '@material-ui/core';

export const DateRangeExample: React.FC = () => {
  const [dateRange, setDateRange] = useState<DateRangeTuple>([null, null]);

  const onChange = useCallback((incomingDateRange: DateRangeTuple) => {
    setDateRange(incomingDateRange);
  }, []);
  return (
    <Flex
      flexDirection='column'
      flex='1 1 0%'
      justifyContent='center'
      alignItems='center'
    >
      <DateRangeSelector onChange={onChange} dateRange={dateRange} />
      <Button>Some Content</Button>
    </Flex>
  );
};
