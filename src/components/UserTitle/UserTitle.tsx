import styles from './UserTitle.module.scss';
import {LocalGithubUser} from "../../types";

const localDate = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
});

interface UserTitleProps extends Pick<LocalGithubUser, 'name' | 'login' | 'created' | 'url'> {}

export const UserTitle = ({ name, login, created, url }: UserTitleProps) => {

    const joinedDate = localDate.format(new Date(created));
    return (
        <div className={styles.userTitle} >
            <a target='_blank'
               href={url}
            ><h2>{name || 'link to the user'}</h2></a>
            <h3>{login}</h3>
            <span>{joinedDate}</span>
        </div>
    )
};
