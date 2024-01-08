import { PropTypes } from "prop-types";

const Header = ({ headerTitle }) => {
  return (
    <div className="py-4">
      <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
        {headerTitle}
      </h3>
    </div>
  )
};

Header.propTypes = {
    headerTitle: PropTypes.string.isRequired
};

export default Header