import { useState, useEffect } from 'react'
import { CoverScreen } from './components/CoverScreen'
import { AudioPlayerCard } from './components/AudioPlayerCard'
import { CoupleSection } from './components/CoupleSection'
import { EventSection } from './components/EventSection'
import { DresscodeRundownSection } from './components/DresscodeRundownSection'
import { CountdownPhotoboothSection } from './components/CountdownPhotoboothSection'
import { FloatingMusicButton } from './components/FloatingMusicButton'
import { acousticAudio } from './utils/audio'

export function App() {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  const [guestName, setGuestName] = useState<string>('')
  const [turutName, setTurutName] = useState<string>('')
  const [turutRole, setTurutRole] = useState<string>('')
  const [showGenerator, setShowGenerator] = useState<boolean>(false)
  const [genGuest, setGenGuest] = useState<string>('')
  const [genTurut, setGenTurut] = useState<string>('')
  const [genRole, setGenRole] = useState<string>('')
  const [copied, setCopied] = useState<boolean>(false)

  // Read ?to=, ?turut=, ?jabatan=, ?buat= parameters from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const toParam = params.get('to') || params.get('u') || params.get('guest')
    if (toParam) {
      setGuestName(decodeURIComponent(toParam.replace(/\+/g, ' ')))
    }
    const turutParam = params.get('turut') || params.get('tm')
    if (turutParam) {
      setTurutName(decodeURIComponent(turutParam.replace(/\+/g, ' ')))
    }
    const roleParam = params.get('jabatan') || params.get('role')
    if (roleParam) {
      setTurutRole(decodeURIComponent(roleParam.replace(/\+/g, ' ')))
    }
    if (params.get('buat') === '1' || params.get('admin') === '1') {
      setShowGenerator(true)
    }
  }, [])

  const generatedUrl = (() => {
    const base = `${window.location.origin}${window.location.pathname}`
    const p = new URLSearchParams()
    if (genGuest.trim()) p.set('to', genGuest.trim())
    if (genTurut.trim()) p.set('turut', genTurut.trim())
    if (genRole.trim()) p.set('jabatan', genRole.trim())
    const qs = p.toString()
    return qs ? `${base}?${qs}` : base
  })()

  const handleCopyGenerated = () => {
    navigator.clipboard.writeText(generatedUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleOpenInvitation = () => {
    setIsOpened(true)
    // Trigger background audio playback via user gesture
    acousticAudio.play()
    
    // Smooth scroll down to first content section
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="min-h-screen bg-[#EFECE6] flex justify-center selection:bg-[#8B1A1A]/20 selection:text-[#8B1A1A]">
      {/* 
        Mobile-First Frame Centered on Desktop
        max-width: 430px, margin: 0 auto
      */}
      <div className="relative w-full max-w-[430px] min-h-screen bg-[#FAF8F5] bg-paper-pattern shadow-2xl border-x border-[#8B1A1A]/20 overflow-x-hidden flex flex-col">
        {/* FR-01: Fullscreen Cover Screen Overlay */}
        {!isOpened && (
          <CoverScreen onOpen={handleOpenInvitation} guestName={guestName} />
        )}

        {/* Main Invitation Content (Unlocked upon opening) */}
        <main className={`flex-1 transition-opacity duration-700 ${isOpened ? 'opacity-100' : 'opacity-0'}`}>
          {/* FR-02: Save The Date & Custom Audio Player Card */}
          <AudioPlayerCard />

          {/* FR-03: Bride & Groom Profiles */}
          <CoupleSection turutMengundangName={turutName} turutMengundangRole={turutRole} />

          {/* FR-04: Event Schedule & 3-Column Calendar Strip */}
          <EventSection />

          {/* FR-05: Dresscode, Rundown Timeline & No Envelope Notice */}
          <DresscodeRundownSection />

          {/* FR-07: Real-Time Countdown & Photobooth Strip */}
          <CountdownPhotoboothSection />
        </main>

        {/* Persistent Floating Music Button */}
        {isOpened && <FloatingMusicButton />}

        {/* Modal Pembuat Link Khusus (?buat=1) */}
        {showGenerator && (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
            <div className="w-full max-w-sm bg-[#FAF8F5] border-2 border-[#8B1A1A] rounded-3xl p-5 shadow-2xl space-y-3 text-left">
              <div className="flex items-center justify-between">
                <h3 className="font-hand text-2xl font-bold text-[#8B1A1A]">Buat Link Undangan</h3>
                <button
                  onClick={() => setShowGenerator(false)}
                  className="text-xs font-typewriter text-[#8B1A1A] underline"
                >
                  Tutup
                </button>
              </div>
              <div className="space-y-2 font-typewriter text-xs">
                <div>
                  <label className="block text-[#222222]/80 mb-1">Nama Tamu (opsional)</label>
                  <input
                    type="text"
                    value={genGuest}
                    onChange={(e) => setGenGuest(e.target.value)}
                    placeholder="Contoh: Bpk. Budi"
                    className="w-full px-3 py-2 rounded-xl border border-[#8B1A1A]/40 bg-white focus:outline-none focus:border-[#8B1A1A]"
                  />
                </div>
                <div>
                  <label className="block text-[#222222]/80 mb-1">Nama Turut Mengundang (1 nama)</label>
                  <input
                    type="text"
                    value={genTurut}
                    onChange={(e) => setGenTurut(e.target.value)}
                    placeholder="Contoh: Bpk. Ahmad"
                    className="w-full px-3 py-2 rounded-xl border border-[#8B1A1A]/40 bg-white focus:outline-none focus:border-[#8B1A1A]"
                  />
                </div>
                <div>
                  <label className="block text-[#222222]/80 mb-1">Keterangan / Jabatan (opsional)</label>
                  <input
                    type="text"
                    value={genRole}
                    onChange={(e) => setGenRole(e.target.value)}
                    placeholder="Contoh: Paman Mempelai"
                    className="w-full px-3 py-2 rounded-xl border border-[#8B1A1A]/40 bg-white focus:outline-none focus:border-[#8B1A1A]"
                  />
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-[#8B1A1A]/20 text-[10px] font-typewriter break-all text-[#222222]/80">
                {generatedUrl}
              </div>
              <button
                onClick={handleCopyGenerated}
                className="w-full py-2.5 rounded-full bg-[#8B1A1A] text-white font-typewriter text-xs font-bold uppercase tracking-wider hover:bg-[#701414]"
              >
                {copied ? 'Link Tersalin!' : 'Salin Link Undangan'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
