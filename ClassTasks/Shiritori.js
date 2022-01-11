'use strict';

class Shiritory {
  constructor(words, game_over) {
    this.words = [];
    this.game_over = false;
  }

  restart() {
    this.words = [];
    this.game_over = false;
    return 'game restarted';
  }
  get Allwords() {
    return this.words;
  }
  play(word) {
    if (this.words.length === 0) {
      this.words.push(word);
    } else {
      let currentWord = this.words[this.words.length - 1];
      let currentWordLastItem = currentWord[currentWord.length - 1];
      let firstItemWord = word[0];
      this.words.push(word);
      if (
        currentWordLastItem != firstItemWord ||
        this.words.indexOf(word) !== this.words.lastIndexOf(word)
      ) {
        this.game_over = true;
        return 'game over';
      }
    }
    return this.words;
  }
}
let shir = new Shiritory([], false);
console.log(shir.play('word'));
console.log(shir.play('dowry'));
console.log(shir.play('yodel'));
console.log(shir.play('serpent'));
shir.restart();
console.log(shir.play('apple'));
console.log(shir.play('ear'));
console.log(shir.play('corn'));

//["word", "dowry", "yodel", "leader", "righteous", "serpent"];
