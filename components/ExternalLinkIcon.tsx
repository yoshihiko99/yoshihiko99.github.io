import React from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

type Props = {
  color?: string
  size?: string
}

const ExternalLinkIcon: React.FC<Props> = ({
  color = '#000000',
  size = '24px'
}) => {
  return <OpenInNewIcon style={{ color: color, width: size, height: size }} />
}

export default ExternalLinkIcon
