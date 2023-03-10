import {
  Box,
  Drawer,
  IconButton,
  Typography,
  Stack,
  styled,
  useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import { useTheme } from '@mui/system';
import { Close, Menu as MenuIcon } from '@mui/icons-material';
import { routesConstants } from '../../constants/routes-constants';
import Link from 'next/link';

const StyledLink = styled(Typography)(({ theme }) => ({
  underline: 'hover',
  color: theme.palette.secondary.main,
  fontSize: 20,
  alignItems: 'center',
  cursor: 'pointer',
}));

interface INavbarProps {
  window?: () => Window;
}

export const Navbar = ({ window }: INavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.only('xs'));

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        backgroundColor: (theme) => theme.palette.primary.main,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        height: '100%',
      }}
    >
      <IconButton
        sx={{
          position: 'absolute',
          top: '10px',
          left: '10px',
        }}
      >
        <Close fontSize='large' color='secondary' />
      </IconButton>

      <Stack spacing={2} alignItems='center'>
        <Link href={routesConstants.CHECKS}>
          <StyledLink>{'Checks'}</StyledLink>
        </Link>
        <Link href={routesConstants.CREATE_ORDER}>
          <StyledLink>{'Create order'}</StyledLink>
        </Link>
      </Stack>
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          py: 2.5,
          pb: { xs: 1, md: 2.5 },
          position: 'sticky',
          top: 0,
          zIndex: 999,
        }}
      >
        <Link href={routesConstants.CHECKS}>
          <Typography
            sx={{ underline: 'none' }}
            color='secondary'
            variant='h4'
            fontWeight={600}
            ml={5}
          >
            FairPay
          </Typography>
        </Link>
        <Stack
          direction='row'
          spacing={10}
          alignItems='center'
          justifyContent='center'
          sx={{ display: { xs: 'none', md: 'flex' } }}
        >
          <Link href={routesConstants.CHECKS}>
            <StyledLink>{'Checks'}</StyledLink>
          </Link>
          <Link href={routesConstants.CREATE_ORDER}>
            <StyledLink>{'Create order'}</StyledLink>
          </Link>
        </Stack>
        <IconButton
          onClick={() => {
            isXs && handleDrawerToggle();
          }}
        >
          <MenuIcon fontSize='large' color='secondary' />
        </IconButton>
      </Box>
      <Box>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '100%',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};
