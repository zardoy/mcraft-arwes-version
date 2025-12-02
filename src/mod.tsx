import './arwes-ui'

console.log('Arwes UI mod loaded')

window.loadSound('https://next.arwes.dev/assets/sounds/click.webm')

// patch playSound
const originalPlaySound = window.playSound
window.playSound = (...args: any[]) => {
  if (args[0] === 'button_click.mp3') {
    args[0] = 'https://next.arwes.dev/assets/sounds/click.webm'
  }
  originalPlaySound(...args as Parameters<typeof originalPlaySound>)
}

const oldDispatchEvent = window.dispatchEvent
//@ts-ignore
window.dispatchEvent = (event: Event) => {
  if (event.type === 'connect') {
    window.setLoadingScreenStatus('CONNECTING TO SERVER...')
    setTimeout(() => {
      oldDispatchEvent(event)
    }, 1000)
    return
  }
  oldDispatchEvent(event)
}

window.serverMetadataConnect??={}
window.serverMetadataConnect.isArwes = true
