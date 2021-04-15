import React, { Component } from 'react';

import { Spin } from 'antd';



class PageLoading extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
              <Spin size="large"/>
            </>
         );
    }
}
 
export default PageLoading;