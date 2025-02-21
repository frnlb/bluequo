import styles from "./image.module.css";
export interface ImageProps {
    alt: string;
    src: string;
    variant?: "default" | "logo";
}
export const Image = ({alt, src, variant}: ImageProps) => {
  return (
    <img 
      alt={alt} 
      src={src}       
      className={`${styles.wrapper} ${variant === "logo" ? styles.logo : ""}`}
    />
  )
}