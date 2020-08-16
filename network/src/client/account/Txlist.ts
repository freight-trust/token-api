import { Address } from '../../entities/Address'
import { Paging } from '../../entities/Paging'
import { Sort } from '../../entities/Sort'
import { IClientAccountTxlistRequest } from '../../interfaces/Account'
import { ClientPagingBase } from '../ClientPagingBase'
/**
 * Client for the account balance
 */
export class ClientAccountTxlist extends ClientPagingBase implements IClientAccountTxlistRequest {
  /**
   * module of the etherscan api to request
   */
  static module: string = 'account'
  /**
   * action of the etherscan api to request
   */
  static action: string  = 'txlist'
  /**
   * Address to lookup the account balance
   */
  address: Address
  /**
   * Block to start reading data
   */
  startblock: string
  /**
   * Read data to
   */
  endblock: string
  /**
   * Sort
   */
  sort: Sort

  /**
   * Paging
   */
  paging?: Paging

  constructor(
      address: Address,
      startblock: string,
      endblock: string,
      sort: Sort = new Sort('desc'),
      paging?: Paging,
    ) {
    super()
    this.address = address
    this.startblock = startblock
    this.endblock = endblock
    this.paging = paging
    this.sort = sort
  }

  /**
   * generates a json represenatation of the
   */
  toJson(): any {
    const json =  {
      action: ClientAccountTxlist.action,
      address: this.address.toString(),
      endblock: this.endblock.toString(),
      module: ClientAccountTxlist.module,
      sort: this.sort.toString(),
      startblock: this.startblock.toString(),
    }
    return this.addPagingToJson(json)
  }
}
