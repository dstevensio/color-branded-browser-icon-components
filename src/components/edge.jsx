import React from "react";
import PropTypes from "prop-types";

export default class Edge extends React.Component {
  render() {
    const { size } = this.props;

    const styles = {
      edge: {
        color: "#1976d2"
      }
    };

    return <i style={styles.edge} className={`fa fa-edge fa-${size}x`} />;

  }
}

Edge.propTypes = {
  size: PropTypes.number
};
