import PropTypes from "prop-types";
import List from "./List";

const Task = ({ data, headerTitle }) => {
  return (
    <div>
      <div className="py-4">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
          {headerTitle}
        </h3>
      </div>
      <div className="my-2 text-gray-700">
        <List data={data} />
      </div>
    </div>
  );
};

Task.propTypes = {
  data: PropTypes.array.isRequired,
  headerTitle: PropTypes.string.isRequired,
};

export default Task;
