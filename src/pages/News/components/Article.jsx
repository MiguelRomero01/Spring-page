import * as React from 'react';
import article_styles from './Article.module.css'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({ image, title, text }) {
  return (
    <div className={article_styles['article-container']}>
      <Card sx={{ width: 360, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <CardMedia
          className={article_styles['card-media']}
          image={image}
          title={title}
          sx={{height: 320}}
        />
        <CardContent className={article_styles['card-content']}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {text}
          </Typography>
        </CardContent>
        <CardActions className={article_styles['card-button']}>
          <Button size="small">Descúbrelo aquí</Button>
        </CardActions>
      </Card>
    </div>
  );
}
