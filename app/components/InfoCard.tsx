import { Card } from 'flowbite-react'

type InfoCardProps = {
  title: string
  value: string
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  value,
}): React.ReactElement => {
  return (
    <Card>
      <h5 className='font-bold text-primary'>{title}</h5>
      <p className='text-2xl'>{value}</p>
    </Card>
  )
}

export default InfoCard
