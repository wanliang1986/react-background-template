import React, { Component } from 'react';
import {connect} from 'react-redux'

class Authorized extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {children,authority,noMatch,at} = this.props
        if(authority.indexOf(at)>-1){
            return children
        }else{
            return noMatch
        }
        
    }
}

const mapStoreStateToProps = (state)=>{
    const authority = state.authority.authority
    return {authority}
}
 
export default connect(mapStoreStateToProps)(Authorized);