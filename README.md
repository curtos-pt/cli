<img src="https://curtos.pt/img/name.svg" />

A cli for curtos.pt

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/curtos-cli.svg)](https://npmjs.org/package/curtos-cli)
[![Downloads/week](https://img.shields.io/npm/dw/curtos-cli.svg)](https://npmjs.org/package/curtos-cli)
[![License](https://img.shields.io/npm/l/curtos-cli.svg)](https://github.com/lmribeiro/curtos-cli/blob/master/package.json)

<!-- toc -->

<!-- tocstop -->
### Usage

curtos [COMMAND]
<!-- usage -->
```sh-session
$ npm install -g curtos-cli
$ curtos COMMAND
running command...
$ curtos (-v|--version|version)
curtos-cli/1.0.0 darwin-x64 node-v10.20.1
$ curtos --help [COMMAND]
USAGE
  $ curtos COMMAND
...
```
<!-- usagestop -->
### Commands

<!-- commands -->
* [`curtos create`](#curtos-create)
* [`curtos delete`](#curtos-delete)
* [`curtos help [COMMAND]`](#curtos-help-command)

## `curtos create`

get a short link from curtos.pt for the given target

```
USAGE
  $ curtos create

OPTIONS
  -e, --expiresAfter=expiresAfter  time to expire in days
  -t, --target=target              target url
```

_See code: [src/commands/create.ts](https://github.com/curtos-pt/cli/blob/v1.0.0/src/commands/create.ts)_

## `curtos delete`

delete short link with a given code

```
USAGE
  $ curtos delete

OPTIONS
  -c, --code=code  link's code
```

_See code: [src/commands/delete.ts](https://github.com/curtos-pt/cli/blob/v1.0.0/src/commands/delete.ts)_

## `curtos help [COMMAND]`

display help for curtos

```
USAGE
  $ curtos help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_
<!-- commandsstop -->
