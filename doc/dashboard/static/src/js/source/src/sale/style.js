import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  .d_content{
    margin-top: 15px;
  }

  .row.epitome{
    .card-body{
      background-color: #ffffff !important;
    }

    p {
      margin-bottom: 0px;
      min-height: 1.6rem;
    }
  }


  /* 具体图表 */
  .row.specific{
    .card{
      margin-top: 15px;
    }
    /* 图表菜单 */
    .card-header{
      background-color:  #ffffff !important;
      border-bottom:0px; 

      .float-right > .btn-group{
        margin-right:15px;
      }
    
      .tab-menu{
        display: inline-flex;
        vertical-align: middle;
      }

    }

    /* 图表内容 */
    .card-body{
      background-color: #ffffff !important;
      padding-top: 0rem;
      padding-bottom: 0rem;
      .nv-chart{
          height: 340px;
          svg{
            height: 100%;
            width: 100%;
          }
       }
    }

    /* 图表标题 */
    .card-title{
      background-color: #ffffff !important;
      text-align: center;
      margin-bottom: 0rem;
      padding-bottom: 0.75rem;
    }
}
  

`;
export default GlobalStyle;
