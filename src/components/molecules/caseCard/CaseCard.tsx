import { useState, useEffect } from 'react';
import {Card, Button, Typography, Icon} from "@/components";
import { CardProps } from "../card/Card";

export interface CaseCardProps extends CardProps {
    like: number;
    visit: number;
    handleLike: () => Promise<number | null>;
    handleVisit: () => void;
    liked: boolean;
}

export const CaseCard = ({
    alt, 
    title, 
    artist, 
    price,
    visit = 0,
    handleLike, 
    handleVisit, 
    src, 
    like = 0,
    liked
  }: CaseCardProps) => {
  const [likeCount, setLikeCount] = useState(like);
  const [isLiked, setIsLiked] = useState(liked);

  useEffect(() => {
    setLikeCount(like);
    setIsLiked(liked);
  }, [like, liked]);

  const onLikeClick = async () => {
    const newLikeCount = await handleLike();
    if (newLikeCount !== null) {
      setLikeCount(newLikeCount);
      setIsLiked(!isLiked);
    }
  };

  return (
    <Card alt={alt} src={src} title={title} artist={artist} price={price}>
      <Button onClick={onLikeClick}>
          <Typography variant="normal" color="inherit">{likeCount ? likeCount.toString() : "0"} {" "}</Typography>
          <Icon name="heart" />
      </Button>
      <Button onClick={handleVisit}>
        <Typography color="inherit" variant="normal">{visit.toString()} {" "}</Typography>
        <Icon name="arrow"/>
      </Button>
    </Card>
  )
}
