import * as React from 'react';
import { AbstractTooltipProps } from '../tooltip';
import { ButtonType, NativeButtonProps } from '../button/button';
import { RenderFunction } from '../_util/getRenderPropValue';
export interface PopconfirmProps extends AbstractTooltipProps {
    title: React.ReactNode | RenderFunction;
    disabled?: boolean;
    onConfirm?: (e?: React.MouseEvent<HTMLElement>) => void;
    onCancel?: (e?: React.MouseEvent<HTMLElement>) => void;
    okText?: React.ReactNode;
    okType?: ButtonType;
    cancelText?: React.ReactNode;
    okButtonProps?: NativeButtonProps;
    cancelButtonProps?: NativeButtonProps;
    icon?: React.ReactNode;
    onVisibleChange?: (visible: boolean, e?: React.MouseEvent<HTMLElement>) => void;
}
export interface PopconfirmState {
    visible?: boolean;
}
export interface PopconfirmLocale {
    okText: string;
    cancelText: string;
}
declare const Popconfirm: React.ForwardRefExoticComponent<PopconfirmProps & React.RefAttributes<unknown>>;
export default Popconfirm;
