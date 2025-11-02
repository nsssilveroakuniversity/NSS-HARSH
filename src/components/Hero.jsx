import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed text-white overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
      }}
    >
      <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-5 text-center animate-fade-in-up">
        <h1 className="font-black mb-6 tracking-tight leading-tight hero-title-glow text-gradient-title" style={{fontSize: 'clamp(1rem, 4vw, 1.25rem)'}}>
          National Service Scheme
        </h1>
        <p className="font-normal mb-8 opacity-95 gold-text-shadow text-gold-500" style={{fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)'}}>
          Silver Oak University
        </p>
        <div className="w-36 md:w-40 h-1 bg-gradient-to-r from-transparent via-gold-500 via-gold-400 to-transparent mx-auto mb-8 opacity-90 shadow-[0_0_30px_rgba(255,215,0,0.7)] rounded"></div>
        <p className="italic opacity-90 mt-6 gold-text-shadow text-gold-500 font-medium" style={{fontSize: 'clamp(0.75rem, 2vw, 1.25rem)'}}>
          "Not Me But You" - Empowering Students Through Community Service
        </p>
        
        <div className="mt-14 flex flex-wrap gap-5 justify-center">
          <Link
            to="/auth/register"
            className="inline-block px-10 py-5 rounded-full font-bold uppercase tracking-wider transition-all duration-400 min-w-[200px] relative overflow-hidden bg-gradient-to-r from-red-600 to-red-700 text-white shadow-[0_10px_30px_rgba(229,62,62,0.4)] hover:-translate-y-2 hover:scale-105 hover:shadow-[0_20px_40px_rgba(229,62,62,0.6)]"
            style={{fontSize: 'clamp(0.75rem, 1.2vw, 1.25rem)'}}
          >
            Join NSS Today
          </Link>
          <a
            href="#about"
            className="inline-block px-10 py-5 rounded-full font-bold uppercase tracking-wider transition-all duration-400 min-w-[200px] bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-[0_10px_30px_rgba(49,130,206,0.4)] hover:-translate-y-2 hover:scale-105 hover:shadow-[0_20px_40px_rgba(49,130,206,0.6)]"
            style={{fontSize: 'clamp(0.75rem, 1.2vw, 1.25rem)'}}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
