import React, { Component } from 'react';
import {connect} from 'react-redux';


class XucXac extends Component {

    renderXucXac() {
        // Lay props tu reducer ve
        
        return this.props.mangXucXac.map((xucXac,index) => {
            return (
                <img
                    className="mx-1"
                    style={{ width: 70, height: 70 }}
                    src={xucXac.hinhAnh}
                    alt={xucXac.hinhAnh}
                    key={index}
                />
            )
        })
    }

    render() {
        return <div className="mt-2">{this.renderXucXac()}</div>;
    }
}

// Ham lay state tu redux ve thanh props cua component
const mapStateToProps = state => {
    return {
        mangXucXac: state.BaiTapGameXucXacReducer.mangXucXac
    }
}


export default connect(mapStateToProps)(XucXac);