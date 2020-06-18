import * as React from 'react';
import { ITbTableInstance } from 'tubular-react-common';
import { TbRowProps } from '../BareBones/TbRow';
import DetailComponent from '../DataGridInterfaces/DetailComponent';
interface GridBodyProps {
    detailComponent?: React.ReactElement<DetailComponent>;
    tbTableInstance: ITbTableInstance;
    rowComponent: React.FunctionComponent<TbRowProps>;
    onRowClick?(row: any): void;
}
export declare const GridBody: React.FunctionComponent<GridBodyProps>;
export {};
