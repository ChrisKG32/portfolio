export type ProjectCardProps = {
  image: string
  title: string
  description: string
}

export default function ProjectCard(
  props: ProjectCardProps,
) {
  const { image, title, description } = props
  return (
    <div className="space-y-4">
      <img alt="placeholder project" src={image} />
      <div className="space-y-4">
        <h3 className="text-2xl text-zinc-100">{title}</h3>
        <p className="text-zinc-300">{description}</p>
      </div>
    </div>
  )
}
