import { Card } from "flowbite-react"

type Props = {
    title: string,
    description: string,
    image: string
}

function TripCard({
    title,
    description,
    image
}: Props) {
  return (
    <Card className="trip-card m-3" imgSrc={image}>
        
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          {title}
        </p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>
          {description}
        </p>
      </p>
    </Card>
  )
}

export default TripCard