import { TypographyTag } from "@/interfaces/common";
import styles from "./typography.module.css";
import { JSX } from "react";

export interface TypographyProps {
    variant?: "smallTitle" | "normal" | "span";
    color?: "black" | "gray";
    align?: "start" | "center" | "end";
    children: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
}
type NonOptionalVariant = NonNullable<TypographyProps["variant"]>;

const TAGS: { [key in NonOptionalVariant]: TypographyTag } = {
    smallTitle: "h3",
    normal: "p",
    span: "span"
}

export const Typography = ({ variant = "normal", color, align, children }: TypographyProps) => {

    const Tag = TAGS[variant ?? "normal"];

    return (
        <Tag className={`
            ${variant ? styles[variant]: ""} 
            ${color ? styles[color]: ""}
            ${align ? styles[align]: ""}
        `}>{children}</Tag>
    )
}