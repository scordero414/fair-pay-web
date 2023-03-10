import {
  Grid,
  InputAdornment,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

interface ITipProps {
  tip: number;
  onIncludeTip: (tip: number) => void;
  readonly?: boolean;
}

export const Tip = ({ tip, onIncludeTip, readonly = false }: ITipProps) => {
  const [isWithTip, setIsWithTip] = useState<boolean>(Boolean(tip));

  return (
    <Grid
      item
      container
      justifyContent='space-between'
      alignItems='center'
      pt={5}
    >
      <Grid item container xs={10} md={4} alignItems='center'>
        <Grid item xs={5} md={4}>
          <Typography
            variant='subtitle1'
            color='primary'
            textAlign='initial'
            fontWeight={900}
          >
            Include Tip:
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Switch
            disabled={readonly}
            checked={isWithTip}
            onChange={() => {
              setIsWithTip((prev) => !prev);
              onIncludeTip(0);
            }}
          />
        </Grid>
      </Grid>
      {isWithTip ? (
        <Grid item xs={2}>
          <TextField
            disabled={readonly}
            fullWidth
            label='Tip'
            color='primary'
            defaultValue={tip}
            variant='standard'
            type='number'
            onChange={(e) => {
              onIncludeTip(+e.target.value);
            }}
            sx={{
              input: { color: (theme) => theme.palette.primary.main },
            }}
            InputProps={{
              inputProps: { min: 1 },
              startAdornment: (
                <InputAdornment position='start'>$</InputAdornment>
              ),
            }}
          />
        </Grid>
      ) : null}
    </Grid>
  );
};
