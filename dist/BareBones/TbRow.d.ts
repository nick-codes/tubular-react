import * as React from 'react';
import { ColumnModel } from 'tubular-common';
export interface TbRowProps {
    row: any;
    rowIndex: number;
    columns: ColumnModel[];
    onRowClick?(): void;
}
export declare const TbRow: React.FunctionComponent<TbRowProps>;
