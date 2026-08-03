export type State = 'OPEN' | 'CLOSED';

export interface Product {
  readonly entryId: string;
  readonly code: string;
  readonly name: string;
  readonly prepared: boolean;
}

export interface OrderData {
  readonly _id: string;
  readonly number: string;
  readonly tableNumber: string;
  readonly openedAt: Date;
  readonly state: State;
  readonly products: Product[];
}

export interface OrderView extends Omit<OrderData, '_id'> {
  readonly number: string;
  readonly tableNumber: string;
  readonly openedAt: Date;
  readonly state: State;
  readonly products: Product[];
}