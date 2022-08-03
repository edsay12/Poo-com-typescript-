type Option = {
  optionName: string;
  votation: number;
};

class Votação {
  private _options: Option[] = [];
  constructor(public question: string) {}

  setOpition(option: Option) {
    this._options.push(option);
  }

  vote(index: number) {
    if (!this._options[index]) return;
    this._options[index].votation += 1;
  }
  getOption() {
    return this._options;
  }
}

class votaçãoApp {
  public votação: Votação[] = [];
  setVotação(votaçaõ: Votação) {
    this.votação.push(votaçaõ);
  }

  showVotação() {
    for (const option of this.votação) {
      console.log(option.question);
      for (const option2 of option.getOption()) {
        console.log(option2);
      }
    }
  }
}

const votação1 = new Votação('Qual o maior pais do mundo?');
votação1.setOpition({ optionName: 'Brasil', votation: 0 });
votação1.setOpition({ optionName: 'Chile', votation: 0 });
votação1.setOpition({ optionName: 'Equador', votation: 0 });
votação1.setOpition({ optionName: 'Argentina', votation: 0 });

votação1.vote(0);
const votaçaoApp = new votaçãoApp();
votaçaoApp.setVotação(votação1);
votaçaoApp.showVotação();
