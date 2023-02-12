import React from "react";
import { connect } from "react-redux";
import { ButtonGroup, Button } from "react-bootstrap";
import { lastMonth, nextMonth, lastYear, nextYear } from "../actions";

function Pagination(props) {
  const {
    activeTab,
    startTime,
    handleLastMonth,
    handleNextMonth,
    handleLastYear,
    handleNextYear,
  } = props;
  return (
    <>
      {activeTab === "month" && (
        <ButtonGroup size="sm">
          <Button variant="light" onClick={() => handleLastMonth(startTime)}>
            上一月
          </Button>
          <Button variant="light" onClick={() => handleNextMonth(startTime)}>
            下一月
          </Button>
        </ButtonGroup>
      )}
      {activeTab === "year" && (
        <ButtonGroup size="sm">
          <Button variant="light" onClick={() => handleLastYear(startTime)}>
            上一年
          </Button>
          <Button variant="light" onClick={() => handleNextYear(startTime)}>
            下一年
          </Button>
        </ButtonGroup>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  const { activeTab, startTime } = state.salesProductCategoryChart;
  return { activeTab, startTime };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLastMonth: (date) => {
      dispatch(lastMonth(date));
    },
    handleNextMonth: (date) => {
      dispatch(nextMonth(date));
    },
    handleLastYear: (date) => {
      dispatch(lastYear(date));
    },
    handleNextYear: (date) => {
      dispatch(nextYear(date));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
