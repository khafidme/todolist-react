import PropTypes from "prop-types";

const Card = ({ title, taskCount }) => {
  return (
    <div className="w-56 p-6 bg-white rounded-xl shadow-sm">
      <span className="font-medium text-gray-400">{taskCount} tasks</span>
      <h4 className="mb-5 text-2xl font-semibold">{title}</h4>
      <hr className="border-[3px] border-blue-500" />
    </div>
  );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    taskCount: PropTypes.string.isRequired,
};

export default Card;
