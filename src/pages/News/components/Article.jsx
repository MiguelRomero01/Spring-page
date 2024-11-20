import * as React from 'react';
import article_styles from './Article.module.css'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function MediaCard({ image, title, text, link}) {
  return (
    <div className={article_styles['article-container']}>
      <Card sx={{ width: 360, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <CardActionArea onClick={() => window.open(link, '_blank')}>
          <CardMedia
            className={article_styles['card-media']}
            image={image}
            title={title}
            sx={{height: 230}}
          />
          <CardContent className={article_styles['card-content']}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {text}
            </Typography>

          </CardContent>
          </CardActionArea>
      </Card>
    </div>
  );
}
