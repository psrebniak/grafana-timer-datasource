import { DataQuery, DataSourceJsonData } from '@grafana/data';

export interface MyQuery extends DataQuery {
  queryType: string;
  locale: string;
}

export const defaultQuery: Partial<MyQuery> = {
  queryType: '',
  locale: 'UTC',
};

/**
 * These are options configured for each DataSource instance
 */
export interface MyDataSourceOptions extends DataSourceJsonData {}
