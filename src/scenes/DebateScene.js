export default class DebateScene extends Phaser.Scene {
  constructor() {
    super('DebateScene');
  }

  create() {
    this.add.text(480, 270, 'DEBATE - Coming Soon', {
      fontSize: '32px',
      color: '#ffffff'
    }).setOrigin(0.5);
  }
}