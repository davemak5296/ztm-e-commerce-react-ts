import * as React from 'react';
import { Link } from 'react-router-dom';
import { CartItemProps, CategoryItemProps } from '../../types';

import styles from './directory-item.styles';

const DirectoryItem: React.FC<CategoryItemProps> = (props) => {
  const { title, imageUrl } = props.category;
  return (
    <div className={styles.div}>
      <div className={styles.bgImg} style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className={styles.textBox}>
        <Link
          className="flex flex-col items-center justify-center"
          to={`/shop/${title.toLowerCase()}`}
        >
          <h2 className="my-0 mx-1.5 text-2xl font-bold text-[#4a4a4a] group-hover:text-black">
            {title}
          </h2>
          <p className="text-base font-light group-hover:font-medium">Shop Now!</p>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(DirectoryItem);
