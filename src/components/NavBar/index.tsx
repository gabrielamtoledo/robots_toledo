import React from "react";
import Cart from "../cart";
interface Props{
    aba: string;
}

const Navbar = ({aba}:Props) => {

 return (

  <nav>

   <ul>

    <li>

     <a href="/">Home</a>

    </li>

    <li>

     <a href="/produtos">{aba}</a>

    </li>

    <li>

     <a href="/fale-conosco">Fale Conosco</a>

    </li>

    <li>
    <Cart />
    </li>

   </ul>

  </nav>

 );

};


export default Navbar;






