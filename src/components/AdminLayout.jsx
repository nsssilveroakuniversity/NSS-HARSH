import AdminSidebar from './AdminSidebar'

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar />
      <main className="md:ml-72 pt-4 md:pt-8 px-4 md:px-8 pb-8">
        {children}
      </main>
    </div>
  )
}

export default AdminLayout

