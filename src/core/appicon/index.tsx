import { FC } from 'react'
import { Stack } from '@mui/material'
import {
  CalendarMonth,
  DarkMode,
  Language,
  LightMode,
  Logout,
  Schedule,
  Search,
  Star,
  WorkOutlined
} from '@mui/icons-material'

import Logo from '@/assets/svg/logo.svg?react'

export const ICON_MAP = {
  logo: Logo,
  calendar: CalendarMonth,
  dark: DarkMode,
  language: Language,
  light: LightMode,
  logout: Logout,
  schedule: Schedule,
  search: Search,
  star: Star,
  work: WorkOutlined
}

export type IconName = keyof typeof ICON_MAP

interface AppIconProps {
  name: IconName
  width?: string | number
  height?: string | number
  className?: string
  size?: number
  colors?: string
  borderRadius?: string
}

export const AppIcon: FC<AppIconProps> = ({
  name,
  colors,
  size = 20,
  height,
  width,
  borderRadius,
  className = '',
  ...props
}) => {
  const IconComponent = ICON_MAP[name]

  if (!IconComponent) {
    console.error(`Icon "${name}" not found.`)

    return null
  }

  return (
    <Stack
      className={`app-icon ${className}`}
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 'max-content',

        color: colors,
        '& svg': { width: width || size, height: height || size, borderRadius: borderRadius }
      }}
      {...props}
    >
      <IconComponent />
    </Stack>
  )
}
