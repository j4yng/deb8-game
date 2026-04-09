export default class RosterScene extends Phaser.Scene {
  constructor() {
    super('RosterScene');
  }

  create() {
    this.add.text(480, 270, 'ROSTER - Coming Soon', {
      fontSize: '32px',
      color: '#ffffff'
    }).setOrigin(0.5);
  }
}