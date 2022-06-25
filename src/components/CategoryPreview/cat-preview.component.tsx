import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { catPreviewPropType } from '../../types';
import PdtCard from '../ProductCard/pdt-card.component';

const CatPreview = (props: catPreviewPropType) => {
  const { cat, products } = props;

  return (
    <Fragment>
      <h2 className="my-6 text-3xl">
        <Link to={cat.toLowerCase()}>{cat.toUpperCase()}</Link>
      </h2>
      <section className="grid w-full grid-cols-4 gap-x-[10px] gap-y-[50px]">
        {products.map((product, i) => (
          <Fragment key={i}>
            {i < 4 ? <PdtCard key={product.id} product={product} /> : null}
          </Fragment>
        ))}
      </section>
    </Fragment>
  );
};

export default CatPreview;
