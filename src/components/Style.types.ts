
type InputEvent = (event: React.ChangeEvent<HTMLInputElement>) => void

export type InputProps = {
    value: string
    handleChange: InputEvent
}  

// InputEvent can be exported to other components for use. It only need to be exported.