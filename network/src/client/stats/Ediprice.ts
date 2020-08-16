import { ClientBase } from "../ClientBase";

/**
 * Client for the account balance
 * TODO: You could modularize this as a generic 'ERC20'
 */
export class ClientStatsEdiprice extends ClientBase {
  /**
   * module of the exchange api to request
   */
  static module: string = "stats";
  /**
   * action of the exchange api to request
   * TODO: this is a generic implementation, exchanges typically don't have it set as 'ediprice'
   * but rather a specific pairing price, e.g. 'EDI-USDT' etc.
   */
  static action: string = "ediprice";

  constructor() {
    super();
  }
  /**
   * generates a josn representation
   */
  toJson(): any {
    return {
      action: ClientStatsEdiprice.action,
      module: ClientStatsEdiprice.module,
    };
  }
}
