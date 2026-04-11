type Props = {
  visible: boolean
  message: string
}

export function Toast({ visible, message }: Props) {
  return (
    <div className={`fx-toast ${visible ? 'show' : ''}`} id="fx-toast">
      {message}
    </div>
  )
}

