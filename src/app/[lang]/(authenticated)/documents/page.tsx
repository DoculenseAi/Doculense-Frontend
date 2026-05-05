import { getDictionary } from "@/app/[lang]/dictionaries"
import { DocumentTable } from "@/components/documents/document-table"
import { PageHeader } from "@/components/layout/page-header"
import { SearchInput } from "@/components/shared/search-input"
import { getDocuments } from "@/lib/api"

export default async function DocumentsPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  const documents = await getDocuments()

  return (
    <>
      <PageHeader
        title={dictionary["document.title"]}
        description={dictionary["document.subtitle"]}
      />
      <div className="mb-5">
        <SearchInput
          label={dictionary["common.search"]}
          placeholder={dictionary["common.search_placeholder"]}
        />
      </div>
      <DocumentTable dictionary={dictionary} documents={documents} lang={lang} />
    </>
  )
}
