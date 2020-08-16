import { PositiveNumber } from '../entities/PositiveNumber'

/**
 * Interface to the Account/Balance api
 */
export interface IClientStakingGetstakingrewardRequest  {
  /**
   * Blocknumber, this is to check against the epochs
   */
  blockno: PositiveNumber
}
