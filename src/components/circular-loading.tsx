import {
  Box,
  BoxProps,
  CircularProgress,
  circularProgressClasses,
} from '@mui/material';

/**
 * Renders a circular progress component according to the app theme
 * 
 * @param {BoxProps} props the props of the Box parent component of the loading circle 
 * 
 * @returns {JSX Component} 
 */
export const CircularLoading = (props: BoxProps) => {
  return (
    <Box {...props}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: 'secondary.main',
        }}
        size={40}
        thickness={4}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: 'primary.main',
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        size={40}
        thickness={4}
      />
    </Box>
  );
};
