/*
   App 应用总容器
*/
import React, { Component } from 'react';

class FirstIndex extends Component {
    render() {
        return <div>{this.props.children}</div>;
    }
}
export default FirstIndex;
