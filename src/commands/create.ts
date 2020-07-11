import {Command, flags} from '@oclif/command';
const axios = require('axios');
const chalk = require('chalk');

export default class Create extends Command {
  static description = 'get a short link from curtos.pt for the given target'

  static flags = {
    target: flags.string({char: 't', description: 'target url'}),
    expiresAfter: flags.integer({char: 'e', description: 'time to expire in days'})
  }

  async run() {
    this.log(chalk.bold.rgb(63, 183, 235)` 
┌─┐┬ ┬┬─┐┌┬┐┌─┐┌─┐   ┌─┐┬  ┬
│  │ │├┬┘ │ │ │└─┐───│  │  │
└─┘└─┘┴└─ ┴ └─┘└─┘   └─┘┴─┘┴
`);

    const {flags} = this.parse(Create)

    const target = flags.target ?? null;
    if(!target) {
      this.error(chalk.red('Target is required'));
    }
    
    const isValid = target.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&=]*)/g);
    if(isValid == null) {
      this.error(chalk.red('Target is invalide'));
    }
    
    const expiresAfter = flags.expiresAfter ?? null;

    let res = await axios.post('https://curtos.pt/api/v1/create', {'target': target, 'expires_after': expiresAfter});
    const data = res.data;

    if(data.status == 'OK') {
      this.log(chalk.greenBright(`Short Link: ${data.data.short}`));
      this.log(chalk.whiteBright(`Target: ${data.data.target}`));
      this.log(chalk.whiteBright(`Expires After: ${data.data.expires_after}\n`)); 
      this.exit;
    } else {
      this.error(chalk.red(`${data.message}`)); 
    }
  }
}