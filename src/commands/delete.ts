import {Command, flags} from '@oclif/command';
const axios = require('axios');
const chalk = require('chalk');

export default class Delete extends Command {
  static description = 'delete short link with a given code'

  static flags = {
    code: flags.string({char: 'c', description: 'link\'s code'}),
  }

  async run() {
    this.log(chalk.bold.rgb(63, 183, 235)` 
┌─┐┬ ┬┬─┐┌┬┐┌─┐┌─┐   ┌─┐┬  ┬
│  │ │├┬┘ │ │ │└─┐───│  │  │
└─┘└─┘┴└─ ┴ └─┘└─┘   └─┘┴─┘┴
`);

    const {flags} = this.parse(Delete)

    const code = flags.code ?? null;
    if(!code) {
      this.error(chalk.red('Link\'s code is required'));
    }

    let res = await axios.delete('https://curtos.pt/api/v1/delete', { data: {'code': code} });
    const data = res.data;

    if(data.status == 'OK') {
      this.log(chalk.greenBright(`${data.message}\n`));
      this.exit;
    } else {
      this.error(chalk.red(`${data.message}`)); 
    }
  }
}