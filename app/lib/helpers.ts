export const getStatusColor = (
  status: string
): 'gray' | 'failure' | 'success' => {
  switch (status) {
    case 'In Transit':
      return 'gray'
    case 'Requires attention':
      return 'failure'
    case 'Delivered':
      return 'success'
    default:
      return 'gray'
  }
}
