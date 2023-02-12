import React, { useState, useEffect } from "react";
import { Card, Tab, ButtonGroup, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { uid } from "uid";
import NVD3Chart from "react-nvd3";
const d3 = window.d3;
const moment = window.moment;

const CHART_NAME = "产品分类";

function ProductCategoryChart() {
  const [display, setDisplay] = useState("amount");
  const [view, setView] = useState("month");
  const [date, setDate] = useState(new Date());

  // 切换月份
  const lastMonth = () => {
    const newDate = moment(date)
      .startOf("months")
      .subtract(1, "months")
      .toDate();
    setDate(newDate);
  };
  const nextMonth = () => {
    const newDate = moment(date).startOf("months").add(1, "months").toDate();
    setDate(newDate);
  };

  // 切换年份
  const lastYear = () => {
    const newDate = moment(date).startOf("years").subtract(1, "years").toDate();
    setDate(newDate);
  };
  const nextYear = () => {
    const newDate = moment(date).startOf("years").add(1, "years").toDate();
    setDate(newDate);
  };

  // 切换视图时，重新设置date
  useEffect(() => {
    setDate(new Date());
  }, [view]);

  return (
    <Tab.Container id={uid()} activeKey={view} transition={false}>
      <Card>
        <Card.Header>
          <Container>
            <Row noGutters>
              <Col md={3}>
                <ButtonGroup size="sm">
                  <Button
                    variant={display === "amount" ? "primary" : "light"}
                    onClick={() => setDisplay("amount")}
                  >
                    金额
                  </Button>
                  <Button
                    variant="light"
                    variant={display === "quantity" ? "primary" : "light"}
                    onClick={() => setDisplay("quantity")}
                  >
                    数量
                  </Button>
                </ButtonGroup>
              </Col>

              <Col>
                <div className="float-right">
                  <ButtonGroup size="sm">
                    <Button
                      variant={view === "month" ? "primary" : "light"}
                      onClick={() => setView("month")}
                      eventKey="month"
                    >
                      月份
                    </Button>
                    <Button
                      variant={view === "year" ? "primary" : "light"}
                      eventKey="year"
                      onClick={() => setView("year")}
                    >
                      年份
                    </Button>
                  </ButtonGroup>

                  {/* Tabs 菜单  */}
                  <Tab.Content className="tab-menu">
                    <Tab.Pane eventKey="month" unmountOnExit>
                      <ButtonGroup size="sm">
                        <Button variant={"light"} onClick={lastMonth}>
                          上一月
                        </Button>
                        <Button variant={"light"} onClick={nextMonth}>
                          下一月
                        </Button>
                      </ButtonGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="year" unmountOnExit>
                      <ButtonGroup size="sm">
                        <Button variant={"light"} onClick={lastYear}>
                          上一年
                        </Button>
                        <Button variant={"light"} onClick={nextYear}>
                          下一年
                        </Button>
                      </ButtonGroup>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Col>
            </Row>
          </Container>
        </Card.Header>
        {/* Tabs内容  */}
        <Tab.Content>
          <Card.Body>
            <Tab.Pane eventKey="month" unmountOnExit>
              <NVD3Chart
                type="pieChart"
                showControls={false}
                margin={{ right: 45, left: 45 }}
                labelType="percent"
                donut={true}
                showLegend={false}
                datum={[
                  {
                    label: 1,
                    value: 10400,
                  },
                  {
                    label: 2,
                    value: 1040,
                  },
                  {
                    label: 3,
                    value: 4200,
                  },
                  {
                    label: 4,
                    value: 1420,
                  },
                ]}
                x={(d) => {
                  return d.label + "日";
                }}
                y="value"
              />

              <Card.Title>
                {d3.time.format("%Y年-%m月")(date)} {CHART_NAME}
              </Card.Title>
            </Tab.Pane>
            <Tab.Pane eventKey="year" unmountOnExit>
              <NVD3Chart
                type="multiBarChart"
                margin={{ right: 45, left: 45 }}
                showControls={false}
                showLegend={false}
                reduceXTicks={true}
                showMaxMin={false}
                datum={[
                  {
                    key: "订单数量",
                    color: "#714B67",
                    values: [
                      {
                        label: 1,
                        value: 1000,
                      },
                      {
                        label: 2,
                        value: 32542,
                      },
                      {
                        label: 3,
                        value: 103240,
                      },
                      {
                        label: 4,
                        value: 10340,
                      },
                    ],
                  },
                ]}
                x={(d) => {
                  return d.label + "月";
                }}
                y="value"
              />

              <Card.Title>
                {d3.time.format("%Y年")(date)} {CHART_NAME}{" "}
              </Card.Title>
            </Tab.Pane>
          </Card.Body>
        </Tab.Content>
      </Card>
    </Tab.Container>
  );
}

export default ProductCategoryChart;
