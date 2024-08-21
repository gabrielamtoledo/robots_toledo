import React from "react";
interface Props{
    title: string;
}

const Card = ({ title }:Props) => {
    return <div>
        <h1>{title}</h1>
        <h3>Inclui 3 cursos</h3>
        <li>
            <ul>html</ul>
            <ul>css</ul>
            <ul>react</ul>
        </li>

        <h5>R$ 100,00</h5>
        <button>Ver curso</button>
    </div>;
};

export default Card;