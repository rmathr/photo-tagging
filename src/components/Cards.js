import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';

export default function Cards(props) {
  const character = props.character;
  // console.log(props);

  return (
    <Card
      orientation="horizontal"
      variant="outlined"
      sx={{ width: 180, bgcolor: '#404040', border: 'none', padding: 0 }}
    >
      <div className="w-full flex flex-row items-center justify-between">
        <CardOverflow sx={{ width: '40%' }}>
          {/* <AspectRatio ratio="1" sx={{ width: 70, borderRadius: '50%' }}> */}
          <img
            className="w-16 h-auto rounded-full"
            // src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
            src={character.img}
            // srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
            loading="lazy"
            // alt={props.name}
          />
          {/* </AspectRatio> */}
        </CardOverflow>
        <CardContent>
          <Typography fontWeight="md" mb={0.5}>
            <span className="text-white">{character.name}</span>
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
