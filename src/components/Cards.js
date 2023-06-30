import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';

export default function Cards(props) {
  return (
    <Card
      orientation="horizontal"
      variant="outlined"
      sx={{ width: 260, bgcolor: 'background.body' }}
    >
      <CardOverflow>
        <AspectRatio ratio="1" sx={{ width: 90, borderRadius: '50%' }}>
          <img
            src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
            srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
          {props.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
