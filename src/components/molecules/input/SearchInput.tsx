import { useRef } from 'react';
import { Button, Icon } from '@/components';
import styles from './search-input.module.css';

interface SearchInputProps {
  handleSearch: (searchTerm: string) => void;
  placeholder?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ handleSearch, placeholder = "You're looking for something?" }) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchInputRef.current) {
      handleSearch(searchInputRef.current.value);
    }
  };

  return (
    <form onSubmit={onSubmit} className={styles.wrapper}>
      <Button type="submit"><Icon name="magnifying-glass" color="inherit"/></Button>
      <input 
        type="search" 
        ref={searchInputRef} 
        placeholder={placeholder} 
        className={styles.searchBar}
      />
    </form>
  );
};
