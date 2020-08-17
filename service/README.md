# EDIToken

EDI Token API

## Get Started

Get started developing...

```shell
# install deps
npm install

# run in development mode
npm run dev

# run tests
npm run test
```

## Install Dependencies

Install all package dependencies (one time operation)

```shell
npm install
```

## Usage

> Production should use pm2, etc.

### Run in *development* mode

Runs the application is development mode. Should not be used in production

```shell
npm run dev
```

or debug it

```shell
npm run dev:debug
```

#### Run in *production* mode

Compiles the application and starts it in production production mode.

```shell
npm run compile
npm start
```

## Testing

Run the Mocha unit tests

```shell
npm test
```

or debug them

```shell
npm run test:debug
```

## Local Development

* Open you're browser to [http://localhost:3000](http://localhost:3000)
* Invoke the `/token` endpoint

  ```bash
  curl http://localhost:3000/contract/api/v1/token
  ```

## Troubleshooting

> Email Support@Freight.Zendesk.com

### Server

```bash
npm run dev:debug
```

#### Debug Tests

```bash
npm run test:debug
```

#### Linting

View airbnb linter output

```bash
npm run lint
```

Fix all airbnb linter errors

```bash
npm run lint
```

## License

Apache-2.0
