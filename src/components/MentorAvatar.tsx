import { Avatar } from '@mui/material'

import { avatarColor, getInitials } from '@/util'

interface MentorAvatarProps {
  name: string
  size?: number
}

export const MentorAvatar = ({ name, size = 56 }: MentorAvatarProps) => (
  <Avatar sx={{ width: size, height: size, bgcolor: avatarColor(name), fontSize: size * 0.38, fontWeight: 700 }}>
    {getInitials(name)}
  </Avatar>
)
