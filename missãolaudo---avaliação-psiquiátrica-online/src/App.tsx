/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  UserCheck, 
  Calendar, 
  CreditCard, 
  FileText, 
  MessageCircle, 
  ChevronDown, 
  ChevronUp,
  AlertTriangle,
  CheckCircle2,
  Lock,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_LINK = "https://wa.me/message/6OEYG332KA7DB1";

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-brand-accent transition-colors"
      >
        <span className="text-lg font-medium">{question}</span>
        {isOpen ? <ChevronUp className="text-brand-accent" /> : <ChevronDown />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-accent selection:text-brand-dark">
      {/* Header / Nav */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo - Replaced div with SVG logo */}
            <div className="w-10 h-10 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Shield - More angular and precise */}
                <path d="M50 5 L88 18 V48 C88 75 50 95 50 95 C50 95 12 75 12 48 V18 L50 5Z" stroke="#D4AF37" strokeWidth="6" fill="none"/>
                {/* Star - Centered and proportional */}
                <path d="M50 25 L58 42 H76 L62 53 L67 70 L50 60 L33 70 L38 53 L24 42 H42 L50 25Z" fill="#D4AF37"/>
                {/* Tactical Bolt/Check - More aggressive and accurate path */}
                <path d="M12 35 L45 52 L52 45 L88 22" stroke="#D4AF37" strokeWidth="8" strokeLinecap="miter" strokeLinejoin="miter"/>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">
              Missão<span className="text-brand-accent">Laudo</span>
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-accent/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-500 text-sm font-bold mb-6 border border-red-500/20 animate-pulse">
              <AlertTriangle size={16} />
              VAGAS LIMITADAS POR DIA
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
              Resolva sua avaliação psiquiátrica para concurso de forma <span className="text-brand-accent">rápida e segura</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Atendimento 100% online, sem burocracia e com profissional habilitado <span className="font-bold">com</span> <span className="text-red-500 font-bold">RQE</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary w-full sm:w-auto"
              >
                GARANTIR MEU HORÁRIO AGORA
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Proof Section */}
      <section className="py-20 bg-brand-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "100% Online", desc: "Sem sair de casa" },
              { icon: Clock, title: "Processo Rápido", desc: "Agilidade na entrega" },
              { icon: UserCheck, title: "Qualificado", desc: "Com RQE" },
              { icon: ShieldCheck, title: "Foco Policial", desc: "Ideal para carreiras policiais" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card text-center group hover:border-brand-accent/30 transition-colors"
              >
                <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-accent group-hover:text-brand-dark transition-all">
                  <item.icon size={24} className="text-brand-accent group-hover:text-brand-dark" />
                </div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Etapas para concluir sua <span className="text-brand-accent uppercase">missão</span></h2>
            <div className="w-20 h-1.5 bg-brand-accent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-accent/10 -translate-y-1/2 -z-10" />

            {[
              { icon: CreditCard, title: "Pagamento", desc: "Inicie sua missão com o pagamento seguro via PIX ou Cartão." },
              { icon: Calendar, title: "Agendamento Estratégico", desc: "Descubra a melhor data para sua avaliação." },
              { icon: FileText, title: "Extração do Laudo", desc: "Conclua a avaliação e receba seu laudo." },
            ].map((item, i) => (
              <div key={i} className="relative bg-brand-dark p-8 rounded-2xl border border-brand-accent/20 text-center group hover:border-brand-accent transition-all duration-500">
                <div className="mb-6 mt-4">
                  <item.icon size={48} className="text-brand-accent mx-auto group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-b from-brand-dark to-brand-muted/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass-card border-brand-accent/50 relative overflow-hidden">
            {/* Decorative Badge */}
            <div className="absolute top-4 right-4 bg-brand-accent text-brand-dark text-[10px] font-black px-3 py-1 rounded uppercase tracking-widest">
              Valor Justo
            </div>

            <div className="text-center py-8">
              <h2 className="text-2xl font-bold text-brand-accent mb-2 uppercase tracking-widest">Investimento Único</h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-3xl font-medium opacity-50">R$</span>
                <span className="text-8xl font-black text-white">89</span>
              </div>
              <p className="text-xl font-semibold mb-8">Avaliação completa + emissão de laudo</p>
              
              <div className="space-y-4 max-w-sm mx-auto mb-10 text-left">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-accent" size={20} />
                  <span>Válido para concursos policiais</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-accent" size={20} />
                  <span>Assinatura digital certificada</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-accent" size={20} />
                  <span>Pagamento via PIX ou Cartão</span>
                </div>
              </div>

              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary w-full max-w-md mx-auto text-xl py-6"
              >
                GARANTIR MEU HORÁRIO
              </a>
              
              <div className="mt-6 flex items-center justify-center gap-4 text-slate-500 text-sm">
                <div className="flex items-center gap-1">
                  <Lock size={14} />
                  Pagamento 100% Seguro
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">DÚVIDAS FREQUENTES</h2>
            <p className="text-slate-400">Tudo o que você precisa saber sobre sua avaliação.</p>
          </div>

          <div className="space-y-2">
            <FAQItem 
              question="Como funciona o atendimento?"
              answer="O atendimento é realizado via videochamada (WhatsApp), de forma privativa e segura. Você conversa com o profissional habilitado que realizará a avaliação técnica necessária para o laudo."
            />
            <FAQItem 
              question="O laudo é válido para concurso?"
              answer="Sim! O laudo é emitido por profissional devidamente registrado e habilitado, seguindo todas as exigências dos editais de concursos públicos, especialmente para carreiras policiais."
            />
            <FAQItem 
              question="Qual o prazo para entrega do laudo?"
              answer="O seu laudo é emitido e enviado digitalmente em até 24 horas úteis."
            />
            <FAQItem 
              question="Como recebo o laudo?"
              answer="Você recebe o laudo em formato PDF com assinatura digital certificada (ICP-Brasil), aceita em todo o território nacional para fins de comprovação em concursos."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-accent text-brand-dark text-center relative overflow-hidden">
        {/* Tactical Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">
            Resolva essa etapa da sua missão agora
          </h2>
          <p className="text-xl md:text-2xl font-bold mb-10 opacity-80">
            Não deixe para a última hora. Garanta sua vaga hoje.
          </p>
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center gap-3 bg-brand-dark text-brand-accent hover:bg-black font-black py-6 px-12 rounded-xl text-2xl transition-all shadow-2xl uppercase tracking-widest"
          >
            GARANTIR MEU HORÁRIO AGORA
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            {/* Footer Logo */}
            <div className="w-8 h-8 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
                {/* Shield - More angular and precise */}
                <path d="M50 5 L88 18 V48 C88 75 50 95 50 95 C50 95 12 75 12 48 V18 L50 5Z" stroke="#D4AF37" strokeWidth="6" fill="none"/>
                {/* Star - Centered and proportional */}
                <path d="M50 25 L58 42 H76 L62 53 L67 70 L50 60 L33 70 L38 53 L24 42 H42 L50 25Z" fill="#D4AF37"/>
                {/* Tactical Bolt/Check - More aggressive and accurate path */}
                <path d="M12 35 L45 52 L52 45 L88 22" stroke="#D4AF37" strokeWidth="8" strokeLinecap="miter" strokeLinejoin="miter"/>
              </svg>
            </div>
            <span className="font-bold tracking-tighter uppercase text-slate-300">
              Missão<span className="text-brand-accent">Laudo</span>
            </span>
          </div>
          <p className="mb-4">© 2026 MissãoLaudo. Todos os direitos reservados.</p>
          <p className="max-w-md mx-auto text-[10px] leading-relaxed opacity-50">
            A avaliação psiquiátrica é um procedimento técnico. A emissão do laudo favorável depende da avaliação clínica do profissional. Atendimento em conformidade com as normas do conselho de classe.
          </p>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full shadow-2xl py-5 text-lg"
        >
          AGENDAR AGORA
        </a>
      </div>
    </div>
  );
}
