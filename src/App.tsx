import SaaSPage from './pages/SaaSPage'

function PortalFooter() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <img
            src="/logo.png"
            alt="MHP"
            style={{ height: '28px', mixBlendMode: 'multiply' as const }}
          />
          <span className="text-xs text-slate-400">© 2026 My Health Passport. All rights reserved.</span>
        </div>
        <a
          href="https://myhealthpassport.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-slate-400 no-underline hover:text-slate-600 transition-colors"
        >
          Visit Main Site →
        </a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#F8FAFC' }}>
      <SaaSPage />
      <PortalFooter />
    </div>
  )
}
