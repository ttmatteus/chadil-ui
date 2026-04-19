import { Header } from '@shared/components/header'
import { Sidebar } from '../introduction/components/sidebar'

export default function ButtonPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-[#000000] px-16 py-8">
          <div>Button page</div>
        </main>
      </div>
    </div>
  )
}
