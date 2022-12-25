import styles from './Search.module.scss';
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg'
import React from "react";
import {Button} from "../Button";

interface SearchProps {
  hasError: boolean,
  onSubmit: (text: string) => void
}

type FormFields = {
  username: HTMLInputElement
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  //показываем, что форма будет содержать определенные поля, описанные в FormFields
  const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault()

    //теперь TS знает, что тип inputText -- строка
    const inputText = event.currentTarget.username.value.trim();

    if (inputText) {
      onSubmit(inputText);
      //сброс формы
      event.currentTarget.reset()
    }
  }

  return (
      <form onSubmit={handleSubmit}
            autoComplete='off'>
        <div className={styles.search}>
          <label htmlFor='search' className={styles.label}>
            <SearchIcon />
          </label>
          <input
              type='test'
              className={styles.textField}
              id='search'
              name='username'
              placeholder='Search Github username...'
          />
          {hasError && (
              <div className={styles.error}>
                No result
              </div>
          )}
          <Button>Search</Button>
        </div>
      </form>
  )
};
