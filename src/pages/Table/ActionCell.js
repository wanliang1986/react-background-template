import React, { Component } from 'react';
import {EditFilled} from '@ant-design/icons'

class ActionCell extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    Edit=()=>{
        console.log(this.props.data)
    }

    render() { 
        return ( 
            <><EditFilled style={{width:'20px'}} onClick={()=>{this.Edit()}}/></>
         );
    }
}
 
export default ActionCell;