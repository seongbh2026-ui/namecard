import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, MapPin, Globe, ArrowUpRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4 selection:bg-stone-300">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md bg-white rounded-[2rem] shadow-sm overflow-hidden border border-stone-200"
      >
        {/* Banner Section */}
        <div className="h-32 bg-stone-900 w-full relative overflow-hidden">
          {/* Subtle decoration in banner */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          {/* Avatar Profile */}
          <div className="absolute -bottom-12 left-8">
            <div className="w-24 h-24 bg-white rounded-full p-1.5 shadow-sm border border-stone-100">
              <div className="w-full h-full bg-stone-100 rounded-full flex items-center justify-center overflow-hidden">
                <span className="text-2xl font-semibold tracking-tighter text-stone-600">SBH</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-8 pt-16 pb-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="text-2xl font-bold text-stone-900 mb-1">성병훈</h1>
            <p className="text-sm font-medium text-stone-500 mb-5">Web Developer & Creator</p>

            <div className="flex items-center gap-1.5 text-xs text-stone-400 mb-6 font-mono">
              <MapPin className="w-3.5 h-3.5" />
              <span>Seoul, Republic of Korea</span>
            </div>

            <p className="text-stone-600 text-sm leading-relaxed mb-8">
              안녕하세요, 웹 개발자 성병훈입니다. 직관적이고 군더더기 없는 디자인과, 
              사용자 경험을 최우선으로 생각하는 웹 서비스를 만듭니다.
            </p>
          </motion.div>

          {/* Links Section */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="space-y-3"
          >
            <SocialButton 
              icon={<Mail className="w-4 h-4" />} 
              label="이메일 보내기" 
              href="mailto:seongbh2026@gmail.com" 
              primary
            />
            <SocialButton 
              icon={<Github className="w-4 h-4" />} 
              label="GitHub" 
              href="https://github.com" 
            />
            <SocialButton 
              icon={<Linkedin className="w-4 h-4" />} 
              label="LinkedIn" 
              href="https://linkedin.com" 
            />
            <SocialButton 
              icon={<Globe className="w-4 h-4" />} 
              label="개인 블로그" 
              href="https://example.com" 
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function SocialButton({ icon, label, href, primary = false }: { icon: ReactNode; label: string; href: string; primary?: boolean }) {
  return (
    <motion.a
      whileHover={{ scale: 0.98 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center justify-between w-full py-3.5 px-5 rounded-2xl transition-all duration:300 text-sm font-medium
        ${primary 
          ? 'bg-stone-900 hover:bg-stone-800 text-white shadow-md' 
          : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200'
        }
      `}
    >
      <div className="flex items-center gap-3">
        <span className={primary ? 'text-stone-300' : 'text-stone-500'}>{icon}</span>
        {label}
      </div>
      <ArrowUpRight className={`w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${primary ? 'text-stone-400' : 'text-stone-400'}`} />
    </motion.a>
  );
}
