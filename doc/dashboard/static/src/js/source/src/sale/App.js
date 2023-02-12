import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Style from "./style";
import SaleChart from "./components/SaleChart";
import ProductCategoryChart from "./components/ProductCategoryChart";

function App() {
  return (
    <React.Fragment>
      <Style />
      <Container fluid className="d_content">
        <Row className="epitome">
          <Col>
            <Card>
              <Card.Body>
                <h5>今日销售金额</h5>
                <h1>34,234</h1>
                <p>今日销售毛利：457</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <h5>本月销售金额</h5>
                <h1>34,234</h1>
                <p>本月销售毛利：457</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <h5>当前应收账款</h5>
                <h1>0000</h1>
                <p></p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <h5>当前未发货订单</h5>
                <h1>34,234</h1>
                <p>已发货未开票：3</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <h5>本月退货单数</h5>
                <h1>234</h1>
                <p></p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="specific">
          <Col>
            <Row>
              <Col>
                <SaleChart />
              </Col>
              <Col>
                <ProductCategoryChart />
              </Col>
              <Col>
                <Card>
                  <Card.Body>A</Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card>
                  <Card.Body>A</Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>A</Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
