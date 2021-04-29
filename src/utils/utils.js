import { Modal } from 'antd';

export const MessageAlert = (type,content,callBack)=>{
    switch(type){
        case 'info':
            Modal.info({
                content:content,
                onOk:callBack
            })
            break;
        case 'success':
            Modal.success({
                content:content,
                onOk:callBack
            })
            break;
        case 'error':
            Modal.error({
                content:content,
                onOk:callBack
            })
            break;
        case 'warning':
            Modal.warning({
                content:content,
                onOk:callBack
            })
            break;

    }
}