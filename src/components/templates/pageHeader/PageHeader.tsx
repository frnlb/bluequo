import { Image, SearchInput} from "@/components";
import logo from "@/public/SAMY.png";
import styles from "./page-header.module.css";

export interface PageHeaderProps {
    handleSearch: (searchTerm: string) => void;
}


export const PageHeader = ({handleSearch}: PageHeaderProps) => {
  return (
    <div className={styles.headerWrapper}>
        <div className={styles.logoWrapper}>
        <Image src={logo} alt="logo" variant="logo" />
        </div>
        <SearchInput handleSearch={handleSearch} />
    </div>
  )
}