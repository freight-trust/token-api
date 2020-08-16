import { Address } from "../../entities/Address";
import { IClientStatsTokensupplyRequest } from "../../interfaces/Stats";
import { ClientBase } from "../ClientBase";

/**
 * Client for the account balance
 */
export class ClientStatsTokencirculatingsupply extends ClientBase
  implements IClientStatsTokensupplyRequest {
  /**
   * module of the api to request
   */
  static module: string = "stats";
  /**
   * action of the api to request
   */
  static action: string = "tokencirculatingsupply";
  /**
   * Address of the contract
   */
  contractaddress: string;

  constructor(contractaddress: string) {
    super();
    this.contractaddress = contractaddress;
  }
  /**
   * generates a josn representation
   */
  toJson(): any {
    return {
      action: ClientStatsTokencirculatingsupply.action,
      contractaddress: this.contractaddress,
      module: ClientStatsTokencirculatingsupply.module,
    };
  }
}
