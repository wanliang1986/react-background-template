import React, { Component } from 'react';
import {withTranslation} from 'react-i18next'

class Page1 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dialog:false
         }
    }
    render() { 
        const {t} = this.props
        return ( 
            <div>
                {t('Page1')}
            </div>
         );
    }
}
 
export default withTranslation(['translation'])(Page1);