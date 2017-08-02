import React from "react";
import PropTypes from "prop-types";

export default class Firefox extends React.Component {
  render() {
    const { size } = this.props;
    const stackSize = `${size}em`;
    const colors = ["#E66000", "#FFCB00"];
    const clipPaths = [
      null,
      "polygon(70% 0, 100% 0, 100% 100%, 93% 49%, 79% 100%, 90% 100%)"
    ];

    const styles = {
      faStack: {
        width: stackSize,
        height: stackSize,
        lineHeight: stackSize,
        backgroundColor: "#0095DD",
        borderRadius: "50%"
      }
    };

    colors.forEach((hex, i) => {
      styles[`firefox${i}`] = {
        color: hex
      };

      if (clipPaths[i]) {
        styles[`firefox${i}`].clipPath = clipPaths[i];
      }

    });

    return (
      <span className="fa-stack" style={styles.faStack}>
      {colors.map((h, i) =>
        <i key={`ff${i}`} id={`firefox${i}`}
          className={`fa fa-firefox fa-${size}x fa-stack-1x`}
          style={styles[`firefox${i}`]}
        />)}
      </span>
    );

  }
}

Firefox.propTypes = {
  size: PropTypes.number
};
