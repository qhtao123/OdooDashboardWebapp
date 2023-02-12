import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
 .r-dashbord {
     .card{
        margin-top:15px; 
     }
     .card-body{
        background-color: #ffffff !important;
     }
     .card-footer{
        background-color: #ffffff !important;
        border-top:none;
     }
     .card-header{
      background-color: #ffffff !important;
      border-bottom:none;
      .float-right{
         .btn-group {
            margin-left:10px;
         }
      }
     }
     .card-title{
      text-align: center;
     }
     /* 图表样式 */
     .nv-chart,
     .nv-chart > svg {
      height: 340px;
      }
     .r-chart .card-body{
      padding-right: .75rem;
      padding-left: 0rem;
      padding-top: 0rem;
      padding-bottom: 0rem;
     }

     .r-epitome p{
      min-height: 20px;
      margin-bottom: 0rem;
     }
 
  }

`;
export default GlobalStyle;
