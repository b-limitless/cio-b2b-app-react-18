export enum selectionProcess {
  febrics = 'febrics',
  styles = 'styles',
  accents = 'accents',
}

export type SelectionTypes = `${selectionProcess}`;

export enum OrderProcess {
  measurement = 'measurement',
  shipping = 'shipping',
  payment_options = 'payment_options',
  review='review',
  order_completed = 'order_completed',
  order_canceled='order_canceled'
}

export type OrderProcessType = `${OrderProcess}`;


export type combinedTypes = OrderProcessType | SelectionTypes;