import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


 html {
        scroll-behavior: smooth;
        scrollbar-width: none;
 }

 body {

width:100%;
margin: 0;
padding: 0;
background-color: #efefef;
font-family: "Montserrat",sans-serif;
color: white;
overflow-x:hidden;
max-height: 100vh;

}

a {
text-decoration: none;
color: white;
}
a:visited {
color: red;
}
li {
list-style: none;
}


        `;
