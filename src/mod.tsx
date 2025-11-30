import './arwes-ui'

// unused
export const worldReady = () => { }

console.log('Arwes UI mod loaded')

// patch playSound
const originalPlaySound = window.playSound
window.playSound = (...args: any[]) => {
  if (args[0] === 'button_click.mp3') {
    args[0] = 'https://next.arwes.dev/assets/sounds/click.webm'
  }
  originalPlaySound(...args as Parameters<typeof originalPlaySound>)
}
