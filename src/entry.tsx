import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from './components/button';
import { Title } from './components/title';
import styled from 'styled-components';

interface ComponentAppProps { 
    className?: any;
}

class ComponentApp extends React.Component<ComponentAppProps, {}> {
    constructor() {
        super();
    }

    render() {
        return(
            <div className={this.props.className}>
                <Title>BUTTON</Title>
                <Button primary>Normal Button</Button>
            </div>
        )
    }
}

const App = styled(ComponentApp)`
    width: 200px;
    border: 1px solid black;
    padding: 10px 30px;
    border-radius: 5px;
    text-align: center;
    margin: 0 auto;
`

ReactDOM.render(
    <App/>,
    document.getElementById("example")
);