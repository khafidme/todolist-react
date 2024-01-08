import PropTypes from "prop-types";
import Card from "./Card";

const Category = ({ data }) => {
  return (
    <div>
      <div className="py-4">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
          Categories
        </h3>
      </div>
      <div className="flex gap-5 my-2">
        {data.map((category) => (
          <Card
            key={category.title}
            title={category.title}
            taskCount={category.tasks}
          />
        ))}
      </div>
    </div>
  );
};

Category.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Category;
