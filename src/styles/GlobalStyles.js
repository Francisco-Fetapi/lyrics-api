import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    #root{
        width:100%;
        max-width:500px;
        margin:0 auto;
    }
    .label-error{
        color:#f44336;
    }
    .Mui-error{
        margin-left:0px;
        .MuiInputAdornment-root{
            color:#f44336;
            svg{
                color:inherit;
            }
        }
    }
`;

export default globalStyles;
