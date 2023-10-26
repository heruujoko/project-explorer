import { Region } from './common';

export interface MonthlySales {
    month: string; // RFC3339 datetime format
    amount: number;
    region: Region;
}
