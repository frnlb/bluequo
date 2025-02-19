import styles from "./triangle.module.css";
export const Triangle = ({price}: {price:string}) => {
  return (
    <div className={styles.wrapper}>{price}</div>
  )
}