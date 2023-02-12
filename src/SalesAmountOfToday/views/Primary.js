import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPrimaryData } from "../actions";
const d3 = window.d3;
function Primary(props) {
  const { title, data, handleFetchPrimaryData } = props;
  useEffect(() => {
    handleFetchPrimaryData();
  }, []);
  return (
    <>
      <h5>{title}</h5>
      <h1> {d3.format(",.0f")(data)}</h1>
    </>
  );
}

const mapStateToProps = (state) => {
  const { primary } = state.salesAmountOfToday;
  return { title: primary.title, data: primary.data };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFetchPrimaryData: () => {
      dispatch(fetchPrimaryData());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Primary);
