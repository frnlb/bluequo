import styles from "./cards-wrapper.module.css";
export const CardsWrapper = ({children}: {children: React.ReactNode | React.ReactNode[]}) => {
  return (
    <div className={styles.cardWrapper}>{children}</div>
  )
}