import React from "react";
import styles from "./button.module.css";
export interface ButtonProps {
    children: React.ReactNode | React.ReactNode[];
    onClick: () => void;

}

export const Button = ({children, onClick}: ButtonProps) => {
  return (
    <button 
        onClick={onClick}
        className={styles.wrapper}>
        {children}
    </button>
  )
}
