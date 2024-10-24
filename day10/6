import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const DestinationCard = ({ destination }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={destination.image}
        alt={destination.name}
      />
      <CardContent>
        <Typography variant="h6">{destination.name}</Typography>
        <Typography variant="body2">{destination.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
