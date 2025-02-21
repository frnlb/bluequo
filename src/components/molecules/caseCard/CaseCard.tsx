import {Card, Button, Typography, Icon} from "@/components";
import { CardProps } from "../card/Card";

export interface CaseCardProps extends CardProps {
    like: number;
    visit: number;
    handleLike: () => void;
    handleVisit: () => void;
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
    like = 0
  }: CaseCardProps) => {
  return (
    <Card alt={alt} src={src} title={title} artist={artist} price={price}>
      <Button onClick={handleLike}>
          <Typography variant="normal" color="inherit">{like.toString()} {" "}</Typography>
          <Icon name="heart" />
      </Button>
      <Button onClick={handleVisit}>
        <Typography color="inherit" variant="normal">{visit.toString()} {" "}</Typography>
        <Icon name="arrow"/>
    </Button>
    </Card>
  )
}
