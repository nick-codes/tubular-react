import * as React from 'react';
import { ColumnModel } from 'tubular-common';
export interface TbMobileRowProps {
    columns: ColumnModel[];
    onRowClick(row: {}): void;
    row: {};
}
export declare const TbMobileRow: React.FunctionComponent<TbMobileRowProps>;
