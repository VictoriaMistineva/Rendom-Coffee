import React from 'react';
import { useSelector } from 'react-redux';
import { getErrorInfo } from '../../redux/assistant';
import { getIsLoading } from '../../redux/assistant';
import { Button } from '@salutejs/plasma-ui';
import { RootState } from '../../redux';

const MainPage = () => {
  const errorInfo = useSelector((state : RootState) => getErrorInfo(state));
  return <>
    <h1>MainPage</h1>
    <p>errorInfo: {errorInfo}</p>
    <p>isLoading: {useSelector((state : RootState) => getIsLoading(state)) ? 'true' : 'false'}</p>
  </>;
};

export default MainPage;
