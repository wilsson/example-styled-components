import * as React from "react";
import * as ReactDOM from "react-dom";
import styled, { css } from 'styled-components';

interface IButton {
    primary? : any;
}

const Button = styled.button`
    border-radius: 3px;
    padding: 0.25em 1em;
    margin: 0 1em;
    background: transparent;
    color: palevioletred;
    border: 2px solid palevioletred;
    ${(props: IButton) => props.primary && css`
        background: green;
        color: white;
        border-color: black;
    `}
`;

const Title = styled.section`
    color: black;
    font-weight: bold;
    font-size: 30px;
`;

class Example extends React.Component<undefined, undefined> {
    constructor() {
        super();
    }
    render() {
        return(
            <div>
                <Title>Mi titulo</Title>
                <Button>Normal Button</Button>
                <Button primary>Primary Button</Button>
            </div>
        )
    }
}
ReactDOM.render(
    <Example/>,
    document.getElementById("example")
);