import styles from "./triangle.module.css";
export interface TriangleProps {
  children: React.ReactNode;
}
export const Triangle = ({children}: TriangleProps) => {
  return (
    <div className={styles.wrapper}>{children}</div>
  )
}