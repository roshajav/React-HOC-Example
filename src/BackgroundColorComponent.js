import React from "react";

const BackgroundColorComponent = (WrappedComponent, color) => {
  return class extends React.Component {
    render() {
      return (
        <div style={{ backgroundColor: color }}>
          <WrappedComponent {...this.props} />;
        </div>
      );
    }
  };
};

export default BackgroundColorComponent;
