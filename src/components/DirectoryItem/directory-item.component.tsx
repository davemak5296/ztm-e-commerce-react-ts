import { Link } from 'react-router-dom';
import { categoryItemProps } from '../../types';

import styles from './directory-item.styles';

const DirectoryItem = (props: categoryItemProps) => {
  const { title, imageUrl } = props.category;
  return (
    <div className={styles.div}>
      <div className={styles.bgImg} style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className={styles.textBox}>
        <Link to={`/shop/${title.toLowerCase()}`}>
          <h2 className="my-0 mx-1.5 text-2xl font-bold text-[#4a4a4a]">{title}</h2>
          <p className="text-base font-light">Shop Now!</p>
        </Link>
      </div>
    </div>
  );
};

export default DirectoryItem;
