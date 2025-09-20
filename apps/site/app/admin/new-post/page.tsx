'use client'

import React, { useState, useEffect } from 'react'
import { createPost, CreatePostData, getCategories, getAllAuthors } from '@/lib/posts'
import { Category, Author } from '@/lib/supabase'

const NewPostPage = () => {
  const [formData, setFormData] = useState<CreatePostData>({
    title: '',
    excerpt: '',
    content: '',
    image_url: '',
    author_id: 0,
    category_id: 0,
    published: false,
    meta_title: '',
    meta_description: '',
    tags: []
  })

  const [categories, setCategories] = useState<Category[]>([])
  const [authors, setAuthors] = useState<Author[]>([])
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [currentTag, setCurrentTag] = useState('')

  // Cargar categorías y autores al montar el componente
  useEffect(() => {
    const loadData = async () => {
      try {
        const [categoriesData, authorsData] = await Promise.all([
          getCategories(),
          getAllAuthors()
        ])
        setCategories(categoriesData)
        setAuthors(authorsData)
        
        // Auto-seleccionar a Natalia Sikora si existe
        const natalia = authorsData.find(author => 
          author.name.toLowerCase().includes('natalia sikora') || 
          author.email.includes('natalia')
        )
        if (natalia) {
          setFormData(prev => ({ ...prev, author_id: natalia.id }))
        }
      } catch (err) {
        setError('Error cargando datos iniciales')
      }
    }
    loadData()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleAddTag = () => {
    if (currentTag.trim() && !formData.tags?.includes(currentTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...(prev.tags || []), currentTag.trim()]
      }))
      setCurrentTag('')
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags?.filter(tag => tag !== tagToRemove) || []
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      // Validaciones básicas
      if (!formData.title.trim()) {
        throw new Error('El título es obligatorio')
      }
      if (!formData.content.trim()) {
        throw new Error('El contenido es obligatorio')
      }
      if (!formData.excerpt.trim()) {
        throw new Error('El extracto es obligatorio')
      }
      if (!formData.author_id) {
        throw new Error('Debe seleccionar un autor')
      }
      if (!formData.category_id) {
        throw new Error('Debe seleccionar una categoría')
      }

      await createPost(formData)
      setSuccess(true)
      
      // Limpiar formulario
      setFormData({
        title: '',
        excerpt: '',
        content: '',
        image_url: '',
        author_id: formData.author_id, // Mantener el autor seleccionado
        category_id: 0,
        published: false,
        meta_title: '',
        meta_description: '',
        tags: []
      })
    } catch (err: any) {
      setError(err.message || 'Error creando el post')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h1 className="card-title text-3xl mb-6">
                Panel de Administración - Natalia Sikora
              </h1>
              <h2 className="text-xl mb-4">Crear Nueva Entrada de Blog</h2>

              {success && (
                <div className="alert alert-success mb-4">
                  <span>¡Post creado exitosamente!</span>
                </div>
              )}

              {error && (
                <div className="alert alert-error mb-4">
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Título */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Título *</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="input input-bordered w-full"
                    placeholder="Título del artículo"
                    required
                  />
                </div>

                {/* Extracto */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Extracto *</span>
                  </label>
                  <textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    className="textarea textarea-bordered w-full h-24"
                    placeholder="Breve descripción del artículo"
                    required
                  />
                </div>

                {/* Contenido */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Contenido *</span>
                    <span className="label-text-alt">Puedes usar Markdown</span>
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    className="textarea textarea-bordered w-full h-64"
                    placeholder="Contenido completo del artículo (Markdown soportado)"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Autor */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Autor *</span>
                    </label>
                    <select
                      name="author_id"
                      value={formData.author_id}
                      onChange={handleInputChange}
                      className="select select-bordered w-full"
                      required
                    >
                      <option value={0}>Seleccionar autor</option>
                      {authors.map(author => (
                        <option key={author.id} value={author.id}>
                          {author.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Categoría */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Categoría *</span>
                    </label>
                    <select
                      name="category_id"
                      value={formData.category_id}
                      onChange={handleInputChange}
                      className="select select-bordered w-full"
                      required
                    >
                      <option value={0}>Seleccionar categoría</option>
                      {categories.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Imagen URL */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">URL de Imagen</span>
                  </label>
                  <input
                    type="url"
                    name="image_url"
                    value={formData.image_url}
                    onChange={handleInputChange}
                    className="input input-bordered w-full"
                    placeholder="https://ejemplo.com/imagen.jpg"
                  />
                </div>

                {/* Tags */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Etiquetas</span>
                  </label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={currentTag}
                      onChange={(e) => setCurrentTag(e.target.value)}
                      className="input input-bordered flex-1"
                      placeholder="Agregar etiqueta"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                    />
                    <button
                      type="button"
                      onClick={handleAddTag}
                      className="btn btn-secondary"
                    >
                      Agregar
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.tags?.map(tag => (
                      <div key={tag} className="badge badge-primary gap-2">
                        {tag}
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(tag)}
                          className="btn btn-ghost btn-xs"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SEO Fields */}
                <div className="divider">SEO (Opcional)</div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Meta Título</span>
                  </label>
                  <input
                    type="text"
                    name="meta_title"
                    value={formData.meta_title}
                    onChange={handleInputChange}
                    className="input input-bordered w-full"
                    placeholder="Título para motores de búsqueda"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Meta Descripción</span>
                  </label>
                  <textarea
                    name="meta_description"
                    value={formData.meta_description}
                    onChange={handleInputChange}
                    className="textarea textarea-bordered w-full h-20"
                    placeholder="Descripción para motores de búsqueda"
                  />
                </div>

                {/* Publicar */}
                <div className="form-control">
                  <label className="label cursor-pointer justify-start gap-4">
                    <input
                      type="checkbox"
                      name="published"
                      checked={formData.published}
                      onChange={handleInputChange}
                      className="checkbox checkbox-primary"
                    />
                    <span className="label-text font-medium">Publicar inmediatamente</span>
                  </label>
                </div>

                {/* Botones */}
                <div className="card-actions justify-end pt-4">
                  <button
                    type="button"
                    onClick={() => window.history.back()}
                    className="btn btn-ghost"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary"
                  >
                    {loading ? (
                      <>
                        <span className="loading loading-spinner loading-sm"></span>
                        Creando...
                      </>
                    ) : (
                      'Crear Post'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewPostPage