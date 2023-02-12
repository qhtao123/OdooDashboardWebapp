import React from "react";
import { connect } from "react-redux";
import { ButtonGroup, Button } from "react-bootstrap";
import { switchUnit } from "../actions";

function SwitchUnit(props) {
  const { unit, handleSwitchUnit } = props;
  return (
    <ButtonGroup size="sm">
      <Button
        variant={unit === "amount" ? "primary" : "light"}
        onClick={() => handleSwitchUnit("amount")}
      >
        金额
      </Button>
      <Button
        variant={unit === "quantity" ? "primary" : "light"}
        onClick={() => handleSwitchUnit("quantity")}
      >
        数量
      </Button>
    </ButtonGroup>
  );
}
const mapStateToProps = (state) => {
  const { unit } = state.salesProductCategoryChart;
  return { unit };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSwitchUnit: (unit) => {
      dispatch(switchUnit(unit));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SwitchUnit);
