import {Header} from "@/components";
import {Image} from "@/components";
import styles from "./card.module.css";
import { ImageProps } from "@/components/atoms/image/Image";
import { HeaderProps } from "../header/Header";
import { Triangle } from "@/components";

export interface CardProps extends ImageProps, HeaderProps {}


export const Card = ({alt, artist, src, title, span, price}: CardProps) => {
  return (
    <div className={styles.wrapper}>
      {price && <Triangle price={price} />}
      <Image src={src} alt={alt}/>
      <Header artist={artist} title={title} span={span}/>
    </div>
  )
}
 