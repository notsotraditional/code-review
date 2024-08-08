import { Spinner } from 'flowbite-react'
type LoadingProps = {
  text?: string
}
//IMPORTANT: In a more complex scenario, extract this loading component to a separate file
const Loading: React.FC<LoadingProps> = ({ text }): React.ReactElement => {
  return (
    <div className='my-auto flex min-h-80 w-full flex-col items-center justify-center'>
      <Spinner size='xl' color='general' className='mb-4' />
      {text && <p>{text}</p>}
    </div>
  )
}

export default Loading
