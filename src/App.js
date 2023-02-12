import React from "react";
import { Provider } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import store from "./store";
import GlobalStyle from "./styles";
import { views as SalesAmountOfToday } from "./SalesAmountOfToday";
import { views as SalesAmountOfThisMonth } from "./SalesAmountOfThisMonth";
import { views as UnshippedOrderQuantity } from "./UnshippedOrderQuantity";
import { views as AccountsReceivable } from "./AccountsReceivable";
import { views as ReturnOrderQuantity } from "./ReturnOrderQuantity";
import { views as SalesOrderChart } from "./SalesOrderChart";
import { views as SalesProductCategoryChart } from "./SalesProductCategoryChart";
import { views as SalesProductChart } from "./SalesProductChart";
import { views as SalesCustomerChart } from "./SalesCustomerChart";
import { views as SalesTeamChart } from "./SalesTeamChart";

function App() {
  return (
    <Provider store={store}>
      <Container fluid className="r-dashbord">
        <GlobalStyle />
        <Row>
          <Col>
            <SalesAmountOfToday />
          </Col>
          <Col>
            <SalesAmountOfThisMonth />
          </Col>
          <Col>
            <UnshippedOrderQuantity />
          </Col>
          <Col>
            <AccountsReceivable />
          </Col>
          <Col>
            <ReturnOrderQuantity />
          </Col>
        </Row>
        <Row>
          <Col md={7}>
            <SalesOrderChart />
          </Col>
          <Col>
            <SalesProductCategoryChart />
          </Col>
        </Row>
        <Row>
          <Col>
            <SalesProductChart />
          </Col>
          <Col>
            <SalesCustomerChart />
          </Col>
          <Col>
            <SalesTeamChart />
          </Col>
        </Row>
      </Container>
    </Provider>
  );
}

export default App;
