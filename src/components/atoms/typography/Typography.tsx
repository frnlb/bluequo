import { TypographyTag } from "@/interfaces/common";
import styles from "./typography.module.css";

export interface TypographyProps {
    variant: "smallTitle" | "normal" | "span";
    color: "black" | "gray";
    children: string;
}

const TAGS: { [key in TypographyProps["variant"]]: TypographyTag } = {
    smallTitle: "h3",
    normal: "p",
    span: "span"
}

export const Typography = ({ variant = "normal", color, children }: TypographyProps) => {
    const Tag = TAGS[variant];

    return (
        <Tag className={`${styles[variant]} ${styles[color]}`}>{children}</Tag>
    )
}