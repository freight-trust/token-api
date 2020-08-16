import test from 'ava'
import { ClientAccountGetminedblocks } from '../../../../src/client/account/Getminedblocks'
import { Address } from '../../../../src/entities/Address'
import { Network } from '../../../../src/entities/Network'
import { performRequest } from '../../../../src/util/performRequest'
import { requestUrlBuilder } from '../../../../src/requestUrlBuilder'

const resultFixture = require('etherscan-api-test-fixtures/account/getminedblocks/address-blocktype.json')

const fetch = require('isomorphic-fetch')
const nock = require('nock')
import { parse } from 'url'

const address = '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae'
const tag = 'latest'

test('default', async t => {
	const c = new ClientAccountGetminedblocks(new Address(address), tag)
	const json = c.toJson()
	const network = new Network()
	const url = requestUrlBuilder(network, 'account', 'getminedblocks', json)
	const parsedUrl = parse(url)

	const scope = nock(`${parsedUrl.protocol}//${parsedUrl.host}`)
		.get(parsedUrl.path)
		.reply(200, resultFixture)	

	await performRequest(network, 'account', 'getminedblocks', json)
	scope.done()
	t.truthy(url)
})
