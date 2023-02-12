import React from "react";
import { uid } from "uid";
import { connect } from "react-redux";
import { Card, Tab, Row, Col } from "react-bootstrap";

import ChartMonth from "./ChartMonth";
import ChartYear from "./ChartYear";
import Title from "./Title";
import SwitchUnit from "./SwitchUnit";
import Pagination from "./Pagination";
import SwitchTab from "./SwitchTab";

function Index(props) {
  const { activeTab } = props;
  return (
    <Tab.Container
      id={uid()}
      activeKey={activeTab}
      transition={false}
      unmountOnExit
    >
      <Card className="r-chart">
        <Card.Header>
          <Row noGutters>
            <Col md={3}>
              <SwitchUnit />
            </Col>
            <Col>
              <div className="float-right">
                <SwitchTab />
                <Pagination />
              </div>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Tab.Content>
            <Tab.Pane eventKey="month">
              <ChartMonth />
            </Tab.Pane>
            <Tab.Pane eventKey="year">
              <ChartYear />
            </Tab.Pane>
          </Tab.Content>
        </Card.Body>
        <Card.Footer>
          <Title />
        </Card.Footer>
      </Card>
    </Tab.Container>
  );
}

const mapStateToProps = (state) => {
  const { activeTab } = state.salesTeamChart;
  return { activeTab };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
