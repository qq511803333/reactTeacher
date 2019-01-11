import { Card }from 'antd';
import React from 'react';
import jquery from 'jquery';


const gridStyle = {
    width: '25%',
    textAlign: 'center',
};

class studentManageList extends React.Component{
    render() {
        let windowHeight = jquery(window).height();
        let windowWidth =   jquery(window).width() - jquery('#studentSider').width();
        return(
            <div style={{height: windowHeight+'px', width: windowHeight + 'px'}}>
                <Card title="Card Title">
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                </Card>
            </div>
        )
    }
}

export default studentManageList;