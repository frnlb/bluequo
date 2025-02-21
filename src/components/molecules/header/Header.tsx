import { Typography } from "@/components";
import styles from "./header.module.css";

export interface HeaderProps {
  title: string;
  span?: string;
  artist: string;
  children?: React.ReactNode | React.ReactNode[];
}

export const Header = ({title, span = "by", artist, children }: HeaderProps) => {
  return (
    <div className={styles.cardHeaderWrapper}>
        <div className={styles.textWrapper}>
        <Typography variant="smallTitle" color="black" align="center">{title}</Typography>
        <Typography variant="normal" color="black" align="center">
            <Typography variant="span" color="gray">{span} </Typography>
            {artist}
        </Typography>
        </div>
        <div className={styles.buttonWrapper}>
            {children}
        </div>
    </div>
  )
}
