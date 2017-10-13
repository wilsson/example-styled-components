import * as React from "react";
import * as ReactDOM from "react-dom";
import styled, { css } from 'styled-components';

const Button = styled.button`
	border-radius: 3px;
	padding: 0.25em 1em;
	margin: 0 1em;
	background: transparent;
	color: palevioletred;
	border: 2px solid palevioletred;
	${(props: any) => props.primary && css`
		background: green;
		color: white;
        border-color: black;
	`}
`;

interface ExampleProps {
    primary: string;
}

class Example extends React.Component<{}, {}> {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
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