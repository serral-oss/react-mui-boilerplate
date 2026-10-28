import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'

interface ConfirmDialogProps {
  open: boolean
  title: string
  message: string
  confirmLabel?: string
  onConfirm: () => void
  onClose: () => void
}

export const ConfirmDialog = ({
  open,
  title,
  message,
  confirmLabel = 'Confirm',
  onConfirm,
  onClose
}: ConfirmDialogProps) => (
  <Dialog open={open} onClose={onClose} fullWidth maxWidth='xs'>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <Typography color='text.secondary'>{message}</Typography>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Keep it</Button>
      <Button color='error' variant='contained' onClick={onConfirm}>
        {confirmLabel}
      </Button>
    </DialogActions>
  </Dialog>
)
