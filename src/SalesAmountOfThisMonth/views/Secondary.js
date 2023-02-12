import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSecondaryData } from "../actions";
const d3 = window.d3;
function Secondary(props) {
  const { title, data, handleFetchSecondaryData } = props;
  useEffect(() => {
    handleFetchSecondaryData();
  }, []);
  return (
    <p>
      {title}: {d3.format(",.0f")(data)}
    </p>
  );
}

const mapStateToProps = (state) => {
  const { secondary } = state.salesAmountOfThisMonth;
  return { title: secondary.title, data: secondary.data };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFetchSecondaryData: () => {
      dispatch(fetchSecondaryData());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Secondary);
