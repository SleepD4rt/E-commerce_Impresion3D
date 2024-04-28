import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
       /* border: 1px solid red; */
}

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

}

a {
text-decoration: none;
color: white;
}
a:visited {
color: white;
}
li {
list-style: none;
}


        `;
