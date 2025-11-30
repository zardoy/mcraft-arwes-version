declare global {
    interface Window {
        mcraft: {
            ui: {
                registerReactWrapper: (name: string, section: string, component: React.ComponentType<any>) => void
            }
            classNames(...args: string[]): string
            framerMotion: {
                motion: typeof import('framer-motion').motion
            }
            valtio: {
                useSnapshot: <T>(snapshot: T) => T
            }
        }
        playSound: (sound: string) => void
        miscUiState: {
            hadConnected: boolean
        }
        builtinComponents: {
            Button: React.ComponentType<any>
        }
    }
}

export {}
