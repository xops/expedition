# Expedition

<!-- project logo w/ quick links -->
<p align="center">
  <img src="https://github.com/etclabscore/jade-media-assets/blob/master/j-explorer/j-explorer(PNG)/128x128.png?raw=true" />
</p>
<center>
  <h3 align="center">Expedition</h3>

  <p align="center">
    A block explorer for the Ethereum Stack.
    <br />
    <a href="https://expedition.dev">View Demo</a>
    ·
    <a href="https://github.com/etclabscore/expedition/issues/new?assignees=&labels=&template=bug_report.md&title=">Report Bug</a>
    ·
    <a href="https://github.com/etclabscore/expedition/issues/new?assignees=&labels=&template=feature_request.md&title=">Request Feature</a>
  </p>
</center>

![expedition_gif](https://user-images.githubusercontent.com/364566/94349388-d17fb000-fff8-11ea-92ae-71c002474a65.gif)

<!-- table of contents -->
## Table of Contents
  - [About The Project](#about-the-project)
  - [Getting Started](#getting-started)
      - [Prerequisites](#prerequisites)
      - [Installation](#installation)
- [Usage](#usage)
  - [Run Service](#run-service)
  - [Start explorer](#start-the-explorer)
  - [Configurations](#configurations)
- [Contributing](#contributing)
- [Resources](#resources)

<!-- about the project -->
## About The Project

[Expedition](https://expedition.dev) is a minimal block explorer for Ethereum Stack and utilizes [Jade Service Runner](https://github.com/etclabscore/jade-service-runner) for managing background services (Multi-Geth), OpenRPC for underlying functionality, and Pristine. It does not use a database, and can be configured to point at any remote RPC node for any EVM-based network. The goal of Jade Explorer is to provide a resource for network information and block exploration.

Explorer Features:
- Display chain id
- Syncing status
- Runtime configuration for endpoints
- Search by Block, Transaction, Address
- Charts for hash, transaction count, gas used, uncles
- Preview latest blocks with pagination
- Multi-language support

<!-- getting started with the project -->
## Getting Started
### Prerequisites
- node `v10.15.3` or later
- npm `v6.4.1` or later

### Installation
Clone/ download the project, and install dependencies.
```bash
git clone https://github.com/xops/expedition.git && cd expedition && npm install
```

<!-- example usage, screen shots, demos -->
## Usage
### Run service
If you don't have a [service-runner](https://github.com/etclabscore/jade-service-runner) running, then you can use the one in the package.json via: (or see the configuration section below to provide your own ethereum rpc URL):
```bash
npm run service-runner
```
*Jade Service Runner will run at http://localhost:8002/.*

#### Core-Geth & Service Runner

By default, core-geth service will run ETC mainnet. Jade Service runner conveniently contains the service in the `/.services/` directory of project.

```bash
# ./services/
.
└── core-geth
    └── 1.11.2
        └── core-geth
            └── 1.11.2
                └── classic
                    ├── geth
                    │   ├── chaindata
                    │   ├── ethash
                    │   └── nodes
                    └── keystore
```

### Start the explorer
```bash
npm start
```
*The explorer will run at http://localhost:3000/.*

### Configurations

#### Set rpc via url

`?rpcUrl=` Set custom rpc url.

Example: https://expedition.dev/?rpcUrl=https://services.jade.builders/core-geth/kotti/1.11.2

#### Configure default urls via environment variables

Override eth url

```
REACT_APP_ETH_RPC_URL=https://services.jade.builders/core-geth/mainnet/1.11.2 npm start
```

**OR**

Override service runner url

```
REACT_APP_SERVICE_RUNNER_URL=https://services.jade.builders/ npm start
```

<!-- template just leave alone  -->
## Roadmap
See the [open issues](https://github.com/etclabscore/expedition/issues) for a list of proposed features (and known issues).

<!-- template just leave alone  -->
## Contributing
How to contribute, build and release are outlined in [CONTRIBUTING.md](CONTRIBUTING.md), [BUILDING.md](BUILDING.md) and [RELEASING.md](RELEASING.md) respectively. Commits in this repository follow the [CONVENTIONAL_COMMITS.md](CONVENTIONAL_COMMITS.md) specification.

## License
Apache License 2.0

<!-- references and additional resources  -->
## Resources
- [Ethereum JSON RPC Specification](https://github.com/etclabscore/ethereum-json-rpc-specification)
- [Jade Service Runner](https://github.com/etclabscore/jade-service-runner)
- [OpenRPC](https://open-rpc.org)
- [Pristine](https://github.com/etclabscore/pristine)

---
*This repo originally forked from [ETCDEVTeam/emerald-explorer](https://github.com/ETCDEVTeam/emerald-explorer).*
