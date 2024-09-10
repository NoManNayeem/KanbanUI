import KanbanBoard from './components/KanbanBoard';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 py-12 px-6 lg:px-24">
      <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-10 drop-shadow-lg">
        Task Management Dashboard
      </h1>
      <p className="text-center text-lg text-gray-600 mb-12">
        Easily manage your tasks and projects with this modern Kanban board.
      </p>
      <div className="max-w-7xl mx-auto">
        <KanbanBoard />
      </div>
    </div>
  );
}
