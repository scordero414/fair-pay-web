import { Box, Modal, Typography } from '@mui/material';
import { CircularLoading } from './circular-loading';

interface ILoadingModalProps {
  isLoading: boolean;
  description: string;
}

/**
 * Modal with a circular progress animation to represent something is loading,
 *
 * @param isLoading value that determines if the modal should be in screen and showing progress
 * @param description message to describe the loading process
 *
 * @return {Component JSX}
 */
const LoadingModal = ({
  isLoading,
  description,
}: ILoadingModalProps) => {
  return (
    <Modal open={isLoading} disableAutoFocus disableEnforceFocus>
      <Box
        sx={{
          position: 'absolute' as const,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 200,
          height: 200,
          backgroundColor: 'secondary.100',
          borderRadius: 1.5,
          boxShadow: 24,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <CircularLoading sx={{ position: 'relative' }} />
        <Typography variant='subtitle1' color='secondary' fontWeight={900}>
          {description}
        </Typography>
      </Box>
    </Modal>
  );
};

export default LoadingModal;
