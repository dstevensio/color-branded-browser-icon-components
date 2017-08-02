import React from "react";
import PropTypes from "prop-types";

export default class Chrome extends React.Component {
  render() {
    const { size } = this.props;
    const stackSize = `${size}em`;
    const colors = ["#D50F25", "#3369E8", "#EEB211", "#009925"];
    const clipPaths = [
      null,
      "polygon(32% 32%, 70% 32%, 70% 70%, 32% 70%)",
      "polygon(70% 32%, 100% 30%, 100% 100%, 47% 100%, 64% 62%)",
      "polygon(0 25%, 7% 13%, 40% 68%, 58% 69%, 46% 100%, 57% 100%, 0 100%)"
    ];

    const styles = {
      faStack: {
        width: stackSize,
        height: stackSize,
        lineHeight: stackSize
      }
    };

    colors.forEach((hex, i) => {
      styles[`chrome${i}`] = {
        color: hex
      };

      if (clipPaths[i]) {
        styles[`chrome${i}`].clipPath = clipPaths[i];
      }

    });

    return (
      <span className="fa-stack" style={styles.faStack}>
      {colors.map((h, i) =>
        <i key={`chr${i}`}
          id={`chrome${i}`}
          className={`fa fa-chrome fa-${size}x fa-stack-1x`}
          style={styles[`chrome${i}`]}
        />)}
      </span>
    );

  }
}

Chrome.propTypes = {
  size: PropTypes.number
};
