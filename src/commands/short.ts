import {Command, flags} from '@oclif/command'

export default class Short extends Command {
  static description = 'get a short link from curtos.pt for the given target'

  static flags = {
    target: flags.string({char: 't', description: 'target url'}),
    expiresAfter: flags.integer({char: 'e', description: 'time to expire in days'})
  }


  async run() {
    const {flags} = this.parse(Short)

    const target = flags.target ?? null;
    if(!target) {
      this.error('Target is required');
      this.exit;
    }
    
    const isValid = target.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&=]*)/g);
    if(isValid == null) {
      this.error('Target is invalide');
      this.exit;
    }
    
    const expiresAfter = flags.expiresAfter ?? null;

    this.log(` 
┌─┐┬ ┬┬─┐┌┬┐┌─┐┌─┐   ┌─┐┬  ┬
│  │ │├┬┘ │ │ │└─┐───│  │  │
└─┘└─┘┴└─ ┴ └─┘└─┘   └─┘┴─┘┴
`);
    this.log(`Target: ${target}`);
    this.log(`Expires After: ${expiresAfter}\n`);

  }
}
