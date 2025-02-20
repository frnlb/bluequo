import {Header, Typography} from "@/components";
import {Image} from "@/components";
import { ImageProps } from "@/components/atoms/image/Image";
import { HeaderProps } from "../header/Header";
import { Triangle } from "@/components";
import styles from "./card.module.css";

export interface CardProps extends ImageProps, HeaderProps {
  price?: string;
  children?: HeaderProps["children"];
}


export const Card = ({alt, artist, src, title, span, price, children}: CardProps) => {
  return (
    <div className={styles.wrapper}>
      {price && <Triangle><Typography variant="normal" color="black" align="start">{price}</Typography></Triangle>}
      <Image src={src} alt={alt}/>
      <Header artist={artist} title={title} span={span}>{children}</Header>
    </div>
  )
}
 