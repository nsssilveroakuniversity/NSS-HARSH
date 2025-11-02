import ProgramOfficerSidebar from './ProgramOfficerSidebar'

const ProgramOfficerLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ProgramOfficerSidebar />
      <main className="md:ml-64 pt-4 md:pt-8 px-4 md:px-8 pb-8">
        {children}
      </main>
    </div>
  )
}

export default ProgramOfficerLayout

