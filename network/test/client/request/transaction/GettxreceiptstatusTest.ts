import test from "ava";
import { ClientTransactionGettxreceiptstatus } from "../../../../src/client/transaction/Gettxreceiptstatus";
import { Network } from "../../../../src/entities/Network";
import { performRequest } from "../../../../src/util/performRequest";
import { requestUrlBuilder } from "../../../../src/requestUrlBuilder";

const resultFixture = require("etherscan-api-test-fixtures/transaction/gettxreceiptstatus/default.json");

const fetch = require("isomorphic-fetch");
const nock = require("nock");
import { parse } from "url";

const txhash =
  "0x513c1ba0bebf66436b5fed86ab668452b7805593c05073eb2d51d3a52f480a76";

test("default", async (t) => {
  const c = new ClientTransactionGettxreceiptstatus(txhash);
  const json = c.toJson();
  const network = new Network();
  const url = requestUrlBuilder(
    network,
    "transaction",
    "gettxreceiptstatus",
    json
  );
  const parsedUrl = parse(url);

  const scope = nock(`${parsedUrl.protocol}//${parsedUrl.host}`)
    .get(parsedUrl.path)
    .reply(200, resultFixture);

  await performRequest(network, "transaction", "gettxreceiptstatus", json);
  scope.done();
  t.truthy(url);
});
