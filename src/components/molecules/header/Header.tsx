import { Typography } from "@/components";
import styles from "./header.module.css";
export const Header = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.text}>
        <Typography variant="smallTitle" color="black" align="center">COLLECTION</Typography>
        <Typography variant="normal" color="black" align="center">
            <Typography variant="span" color="gray">by </Typography>
            undergroung
        </Typography>
        </div>
        <div className={styles.buttonWrapper}>
            <button>hi</button>

        <button>hi</button>
            </div>
    </div>
  )
}
