import { IconButton, Tooltip } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'

import { AppIcon } from './appicon'

export const ColorModeToggle = () => {
  const { mode, systemMode, setMode } = useColorScheme()
  const current = mode === 'system' ? systemMode : mode

  // mode is undefined until the color scheme is resolved on first render
  if (!current) return null

  const next = current === 'dark' ? 'light' : 'dark'

  return (
    <Tooltip title={`Switch to ${next} mode`}>
      <IconButton onClick={() => setMode(next)} aria-label={`Switch to ${next} mode`}>
        <AppIcon name={current === 'dark' ? 'light' : 'dark'} />
      </IconButton>
    </Tooltip>
  )
}
