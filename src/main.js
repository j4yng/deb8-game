import TitleScene from './scenes/TitleScene.js';
import RosterScene from './scenes/RosterScene.js';
import DebateScene from './scenes/DebateScene.js';

const config = {
  type: Phaser.AUTO,
  width: 960,
  height: 540,
  backgroundColor: '#0f0a1e',
  scene: [TitleScene, RosterScene, DebateScene],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
};

new Phaser.Game(config);