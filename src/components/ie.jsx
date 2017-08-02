import React from "react";
import PropTypes from "prop-types";

export default class IE extends React.Component {
  render() {
    const { size } = this.props;

    const styles = {
      ie: {
        color: "#1EBBEE"
      }
    };

    return <i style={styles.ie} className={`fa fa-internet-explorer fa-${size}x`} />;

  }
}

IE.propTypes = {
  size: PropTypes.number
};
