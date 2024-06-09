export interface IToltipBase {
    toltipText?: any;
    toltip: boolean;
}

export interface IInputWithTooltip extends  IToltipBase{
    label: string;
    [x: string]: any;
}