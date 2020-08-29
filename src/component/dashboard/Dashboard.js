import React, { Component } from 'react'
import Table from '../table/Table';
import {connect} from 'react-redux';

class Dashboard extends Component {
    render() {
        
        const {datas} = this.props;
        return (
            <div className="dashboard container">
                <Table datas={datas} />
            </div>
        )
    }
}
const mapStateToProps =( state )=>{
    return {
        datas: state.data.user
    }
}

export default connect(mapStateToProps)(Dashboard);