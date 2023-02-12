import React, { useEffect } from "react";
import { connect } from "react-redux";
const d3 = window.d3;
function Secondary(props) {
  return <p> </p>;
}

const mapStateToProps = (state) => {
  const {} = state.unshippedOrderQuantity;
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Secondary);
