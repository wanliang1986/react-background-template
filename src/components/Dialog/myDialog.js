import React, { Component } from 'react';
import { Modal } from 'antd'
import Draggable from 'react-draggable';

class MyDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            bounds: { left: 0, top: 0, bottom: 0, right: 0 },
            confirmLoading:false
        }
    }
    draggleRef = React.createRef();
    handleOk = e => {
        this.setState({
            confirmLoading:true
        },()=>{
            setTimeout(() => {
                this.props.handleOk()
                this.setState({
                    confirmLoading:false
                })
            }, 2000);
        })
        
        // console.log(e);
        // this.setState({
        //     visible: false,
        // });
    };

    handleCancel = e => {
        this.props.handleCancel()
        // this.setState({
        //     visible: false,
        // });
    };

    onStart = (event, uiData) => {
        const { clientWidth, clientHeight } = window?.document?.documentElement;
        const targetRect = this.draggleRef?.current?.getBoundingClientRect();
        this.setState({
            bounds: {
                left: -targetRect?.left + uiData?.x,
                right: clientWidth - (targetRect?.right - uiData?.x),
                top: -targetRect?.top + uiData?.y,
                bottom: clientHeight - (targetRect?.bottom - uiData?.y),
            },
        });
    };
    render() {
        const { bounds, disabled,confirmLoading } = this.state;
        const { visible,children,title,drag,footer,width,cancelText,maskClosable,okText, } = this.props
        //visible ：弹出开启关闭标志
        //children : 弹窗内部组件模板
        //title:弹窗title
        //drag：是否支持拖动 true/false
        //footer:是否直接用弹窗自身的按钮，如果不传，则用弹窗自身的按钮，传null，则用children模板内的自定义按钮
        //width:弹窗宽度
        //cancelText:弹窗自身取消按钮文字，不使用children模板自定义按钮时使用
        //okText：弹窗自身确定按钮文字，不使用children模板自定义按钮时使用
        //maskClosable：是否启用点击浮层关闭弹窗 true/false
        return (
            <Modal
                footer={footer}
                title={
                    <div
                        style={{
                            width: '100%',
                            cursor: 'move',
                        }}
                        onMouseOver={() => {
                            if (disabled) {
                                this.setState({
                                    disabled: false,
                                });
                            }
                        }}
                        onMouseOut={() => {
                            this.setState({
                                disabled: true,
                            });
                        }}
                    >
                       {title}
              </div>
                }
                visible={visible}
                width={width}
                onOk={this.handleOk}
                cancelText={cancelText}
                okText={okText}
                maskClosable={maskClosable}
                confirmLoading={confirmLoading}
                onCancel={this.handleCancel}
                modalRender={modal => (
                    drag===true?
                    <Draggable
                        disabled={disabled}
                        bounds={bounds}
                        onStart={(event, uiData) => this.onStart(event, uiData)}
                    >
                        <div ref={this.draggleRef}>{modal}</div>
                    </Draggable>
                    :<div ref={this.draggleRef}>{modal}</div>
                )}
                >
                {children}
            </Modal>
        );
    }
}

export default MyDialog;