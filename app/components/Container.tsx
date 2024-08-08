type ContainerProps = {
  title?: string
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({
  title,
  children,
}): React.ReactElement => {
  return (
    <div className='container mx-auto px-4 py-16 sm:px-6 lg:px-8'>
      {title && <h2 className='text-3xl text-gray-900'>{title}</h2>}
      {children}
    </div>
  )
}

export default Container
