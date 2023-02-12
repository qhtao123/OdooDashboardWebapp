import React from "react";
import { connect } from "react-redux";
import { ButtonGroup, Button } from "react-bootstrap";

import { switchTab } from "../actions";
function SwitchTab(props) {
  const { activeTab, handleSwitchTab } = props;
  return (
    <ButtonGroup size="sm">
      <Button
        variant={activeTab === "month" ? "primary" : "light"}
        onClick={() => handleSwitchTab("month")}
      >
        月份
      </Button>
      <Button
        variant={activeTab === "year" ? "primary" : "light"}
        onClick={() => handleSwitchTab("year")}
      >
        年份
      </Button>
    </ButtonGroup>
  );
}

const mapStateToProps = (state) => {
  const { activeTab } = state.salesOrderChart;
  return { activeTab };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSwitchTab: (tab) => {
      dispatch(switchTab(tab));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SwitchTab);
