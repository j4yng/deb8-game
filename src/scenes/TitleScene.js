export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('TitleScene');
  }

  create() {
    const cx = this.scale.width / 2;
    const cy = this.scale.height / 2;

    // Background gradient effect
    this.add.rectangle(cx, cy, 960, 540, 0x0f0a1e);

    // Title
    this.add.text(cx, cy - 120, 'DEB8', {
      fontSize: '96px',
      fontFamily: 'Georgia, serif',
      color: '#ffffff',
      fontStyle: 'bold'
    }).setOrigin(0.5);

    // Subtitle
    this.add.text(cx, cy - 30, 'THE DEBATE RPG', {
      fontSize: '18px',
      fontFamily: 'Arial',
      color: '#c4b5fd',
      letterSpacing: 6
    }).setOrigin(0.5);

    // Tagline
    this.add.text(cx, cy + 20, 'Four friends. Four ideologies. One stage.', {
      fontSize: '14px',
      fontFamily: 'Arial',
      color: '#6b7280'
    }).setOrigin(0.5);

    // Start button
    const btn = this.add.text(cx, cy + 100, '[ PRESS ENTER TO START ]', {
      fontSize: '20px',
      fontFamily: 'Arial',
      color: '#8b5cf6',
      fontStyle: 'bold'
    }).setOrigin(0.5);

    // Blinking animation on button
    this.tweens.add({
      targets: btn,
      alpha: 0,
      duration: 800,
      yoyo: true,
      repeat: -1
    });

    // Keyboard input
    this.input.keyboard.once('keydown-ENTER', () => {
      this.scene.start('RosterScene');
    });
  }
}