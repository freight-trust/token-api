import { PositiveNumber } from '../../entities/PositiveNumber'
import { IClientStakingGetstakingrewardRequest } from '../../interfaces/Block'
import { ClientBase } from '../ClientBase'
/**
 * Client for the transaction getstatus
 */
export class ClientStakingGetstakingreward extends ClientBase implements IClientStakingGetstakingrewardRequest {

    /**
     * module to call
     */
    static module: string = 'block'
    /**
     * Action
     */
    static action: string = 'getblockreward'

    /**
     * Hash of the transaction on the ethereum network
     */
    blockno: PositiveNumber

    constructor(blockno: PositiveNumber) {
        super()
        this.blockno = blockno
    }

    /**
     * Generates JSON for url generation
     */
    toJson(): any {
        return  {
            action: ClientStakingGetstakingreward.action,
            blockno: this.blockno.toString(),
            module: ClientStakingGetstakingreward.module,
        }
    }
}
