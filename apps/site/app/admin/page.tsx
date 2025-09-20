import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Panel de Administración | MetaBlog',
  description: 'Panel de administración para gestionar el blog'
}

const AdminPage = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Panel de Administración</h1>
            <p className="text-xl text-base-content/70">Bienvenida, Natalia Sikora</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Crear nuevo post */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Nuevo Post
                </h2>
                <p>Crear una nueva entrada de blog</p>
                <div className="card-actions justify-end">
                  <Link href="/admin/new-post" className="btn btn-primary">
                    Crear Post
                  </Link>
                </div>
              </div>
            </div>

            {/* Ver blog */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Ver Blog
                </h2>
                <p>Navegar al sitio web público</p>
                <div className="card-actions justify-end">
                  <Link href="/" className="btn btn-secondary">
                    Ver Sitio
                  </Link>
                </div>
              </div>
            </div>

            {/* Configuración */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Configuración
                </h2>
                <p>Gestionar configuraciones del blog</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-accent" disabled>
                    Próximamente
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Estadísticas rápidas */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Estadísticas Rápidas</h2>
            <div className="stats shadow w-full">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="stat-title">Posts Totales</div>
                <div className="stat-value">---</div>
                <div className="stat-desc">En la base de datos</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div className="stat-title">Views Totales</div>
                <div className="stat-value">---</div>
                <div className="stat-desc">Todas las entradas</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-accent">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <div className="stat-title">Categorías</div>
                <div className="stat-value">5</div>
                <div className="stat-desc">Activas</div>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="mt-8 text-center">
            <div className="breadcrumbs">
              <ul>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li>Admin</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPage