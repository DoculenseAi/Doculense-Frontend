import { getDictionary } from "@/app/[lang]/dictionaries"
import { PageHeader } from "@/components/layout/page-header"
import { CreateProjectDialog } from "@/components/projects/create-project-dialog"
import { ProjectCard } from "@/components/projects/project-card"
import { ProjectList } from "@/components/projects/project-list"
import { SearchInput } from "@/components/shared/search-input"
import { getProjects } from "@/lib/api"

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  const projects = await getProjects()

  return (
    <>
      <PageHeader
        title={dictionary["project.title"]}
        description={dictionary["project.subtitle"]}
        actions={<CreateProjectDialog />}
      />
      <div className="mb-5">
        <SearchInput
          label={dictionary["common.search"]}
          placeholder={dictionary["project.search"]}
        />
      </div>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            dictionary={dictionary}
            lang={lang}
            project={project}
          />
        ))}
      </section>
      <section className="mt-8">
        <ProjectList dictionary={dictionary} projects={projects} />
      </section>
    </>
  )
}
