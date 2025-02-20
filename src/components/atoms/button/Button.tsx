import React from "react";
import styles from "./button.module.css";
export interface ButtonProps {
    children: React.ReactNode | React.ReactNode[];
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

export const Button = ({children, onClick, type="button"}: ButtonProps) => {
  return (
    <button 
        type={type}
        onClick={onClick}
        className={styles.wrapper}>
        {children}
    </button>
  )
}
