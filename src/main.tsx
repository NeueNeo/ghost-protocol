import { StrictMode, Suspense, lazy, Component, ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// Error boundary to catch and display errors
class ErrorBoundary extends Component<{children: ReactNode}, {hasError: boolean, error: Error | null}> {
  constructor(props: {children: ReactNode}) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen w-screen bg-background flex flex-col items-center justify-center p-8">
          <div className="text-red-500 font-display text-xl tracking-widest mb-4">
            3D VIEW ERROR
          </div>
          <pre className="text-xs text-muted bg-surface p-4 rounded max-w-2xl overflow-auto">
            {this.state.error?.message}
            {'\n\n'}
            {this.state.error?.stack}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}

// Lazy load the 3D view to prevent import blocking
const View3D = lazy(() => import('./views/View3D.tsx'))

function Loading() {
  return (
    <div className="h-screen w-screen bg-background flex items-center justify-center">
      <div className="text-primary font-display text-xl tracking-widest animate-pulse">
        LOADING 3D VIEW...
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/3d" element={
          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
              <View3D />
            </Suspense>
          </ErrorBoundary>
        } />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
