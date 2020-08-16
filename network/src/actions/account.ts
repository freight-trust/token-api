import { mapFromArray } from "../util/mapFromArray";
const actionNames = [
  "balance",
  "balancemulti",
  "txlist",
  "txlistinternal",
  "tokentx",
  "tokenbalance",
  "getstakingblocks",
];
export const account = mapFromArray(actionNames);
