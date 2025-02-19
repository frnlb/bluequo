import { Typography } from "@/components";
import styles from "./header.module.css";

export interface HeaderProps {
  title: string;
  span?: string;
  artist: string;
}

export const Header = ({title, span = "by", artist }: HeaderProps) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.text}>
        <Typography variant="smallTitle" color="black" align="center">{title}</Typography>
        <Typography variant="normal" color="black" align="center">
            <Typography variant="span" color="gray">{span} </Typography>
            {artist}
        </Typography>
        </div>
        <div className={styles.buttonWrapper}>
            <button>hi</button>

        <button>hi</button>
            </div>
    </div>
  )
}
