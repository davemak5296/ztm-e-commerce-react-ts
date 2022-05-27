import { directoryProps } from "../types";
import CategoryItem from "./cat-item.component";

const Directory = (props: directoryProps) => {
  const categories = props.categories;
  return (
    <main className="flex w-full flex-wrap justify-between">
      {categories.map((cat) => (
        <CategoryItem key={cat.id} category={cat} />
      ))}
    </main>
  );
};

export default Directory;
