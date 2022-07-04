import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export const Box = () => {
    const mytheme = useContext(ThemeContext)
    return <div style={ {backgroundColor: mytheme.primary.main, color: mytheme.primary.text} }>Theme Context</div>
}