import styles from "./image.module.css";
export interface ImageProps {
    alt: string;
    src: string;
}
export const Image = ({alt, src}: ImageProps) => {
  return (
    <img alt={alt} src={src} className={styles.wrapper}/>
  )
}