import { Box, styled } from '@mui/material';
import React, { ReactNode } from 'react';
import { Navbar } from '../navbar/navbar';

const MainLayoutRoot = styled('div')(({ theme }) => ({
  maxWidth: '100%',
  backgroundColor: theme.palette.primary.main,
}));

interface IMainLayoutProps {
  children?: ReactNode;
}

const MainLayout = (props: IMainLayoutProps) => {
  const { children } = props;
  return (
    <MainLayoutRoot>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box justifyContent='center' width='90%'>
          {children}
        </Box>
      </Box>
    </MainLayoutRoot>
  );
};

export default MainLayout;
