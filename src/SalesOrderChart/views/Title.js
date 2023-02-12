import React from "react";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";

const moment = window.moment;
function Title(props) {
  const { activeTab, title, startTime } = props;
  return (
    <Card.Title>
      {activeTab === "month" && moment(startTime).format("YYYY年MM月")}
      {activeTab === "year" && moment(startTime).format("YYYY年")}
      {title}
    </Card.Title>
  );
}
const mapStateToProps = (state) => {
  const { activeTab, title, startTime } = state.salesOrderChart;
  return { activeTab, title, startTime };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Title);
