import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';

export default function Cards(props) {
  const character = props.character;

  return (
    <Card
      orientation="horizontal"
      variant="outlined"
      sx={{
        minWidth: 180,
        bgcolor: '#404040',
        border: 'none',
        padding: 0,
        '&:hover': {
          background: '#1A7D36',
        },
      }}
    >
      <div className="w-full flex flex-row items-center justify-between">
        <CardOverflow sx={{ width: '30%' }}>
          <img
            className="w-16 h-auto rounded-full"
            src={character.img}
            loading="lazy"
            // alt={props.name}
          />
        </CardOverflow>
        <span className="p-2"></span>
        <CardContent>
          <Typography fontWeight="md" mb={0.5}>
            <span className="text-white text-sm">{character.name}</span>
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
