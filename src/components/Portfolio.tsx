import { motion, useScroll, useTransform, useMotionValueEvent, useInView, AnimatePresence } from "motion/react";
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Helper component for line-by-line text reveal
const TextReveal = ({ text, className }: { text: string; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className={className}>
      {text.split("\n").map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

// Helper for image reveal effect
const ImageReveal = ({ src, alt, className, innerClassName }: { src: string; alt: string; className?: string; innerClassName?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ scale: 1.2, filter: "blur(10px)" }}
        animate={isInView ? { scale: 1, filter: "blur(0px)" } : { scale: 1.2, filter: "blur(10px)" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="h-full w-full"
      >
        <img src={src} alt={alt} className={`object-cover w-full h-full ${innerClassName}`} referrerPolicy="no-referrer" />
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={isInView ? { x: "101%" } : { x: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-primary z-10"
      />
    </div>
  );
};
import { 
  Github, 
  Linkedin, 
  Instagram,
  Facebook,
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Cpu, 
  Globe,
  ArrowRight,
  ChevronRight,
  Check,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const projects = [
  {
    title: "qZSI INVERTER",
    category: "Renewable Energy / Research",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000",
    description: "Addressing common mode voltage (CMV) issues in Single Phase Quasi Z Source Inverters for PV applications using PWM techniques.",
    tags: ["MATLAB", "PV Systems", "PWM"]
  },
  {
    title: "g POD DEVICE",
    category: "Experimental / Robotics",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1000",
    description: "A dual-purpose device for dustbin and cleaning, presented at the 3rd International Conference on Data Intelligence.",
    tags: ["Hardware", "Innovation", "Research"]
  },
  {
    title: "BMS ON MATLAB",
    category: "EV Technology",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000",
    description: "Comprehensive Battery Management System for electric vehicles featuring real-time monitoring and safety algorithms.",
    tags: ["MATLAB", "EV", "Algorithms"]
  },
  {
    title: "H-BRIDGE PROJECTS",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000",
    description: "Collaboration on H-bridge, CUK Converter, and Arduino-based power electronics projects.",
    tags: ["Arduino", "Circuit Design", "CUK"]
  }
];

const skills = [
  { name: "Technical", icon: <Cpu className="w-5 h-5" />, items: ["MATLAB", "AutoCAD", "CPP", "JAVA", "SQL"] },
  { name: "Web & Software", icon: <Globe className="w-5 h-5" />, items: ["HTML/CSS", "JavaScript", "SpringBoot", "Python", "Agile"] },
  { name: "Tools", icon: <Code2 className="w-5 h-5" />, items: ["GIT", "UNIX", "MS Office", "VMC Machines", "PLC Systems"] },
  { name: "Languages", icon: <Palette className="w-5 h-5" />, items: ["English", "Hindi"] },
];

const experience = [
  {
    company: "VE Commercial Vehicles",
    role: "Assistant Manager",
    period: "April 2024 - May 2026",
    location: "Pithampur, MP",
    description: "Overseeing machine shop operations, managing CNC/PLC systems (Siemens, ABB robots), and ensuring optimal performance of hydraulic/pneumatic systems."
  },
  {
    company: "Cognizant",
    role: "Analyst Trainee",
    period: "Jan 2024 - April 2024",
    location: "Chennai, TN",
    description: "Trained in SDLC, Agile, and full-stack technologies. Developed projects using Java, SQL, Spring Boot, and Python."
  },
  {
    company: "CNH Industrials",
    role: "Summer Intern",
    period: "June 2022 - July 2022",
    location: "Pithampur, MP",
    description: "Conducted purchasing research and developed price negotiation strategies resulting in a 5% reduction in raw material costs."
  }
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroX = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const projectScale = useTransform(scrollYProgress, [0.1, 0.3], [0.8, 1]);

  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [selectedAward, setSelectedAward] = useState<{ title: string; image: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mqewelwd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `New Portfolio Message from ${formState.name}`
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary font-sans cyber-grid">
      {/* Navigation */}
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-16 backdrop-blur-xl bg-background/40 border-b border-primary/10"
      >
        <div className="text-xl md:text-2xl font-bold tracking-[2px] uppercase text-primary">
          K. Rajauria
        </div>
        <div className="hidden md:flex items-center gap-10 text-[13px] uppercase tracking-[2px] font-mono text-muted-foreground">
          <a href="#work" className="hover:text-primary transition-colors border-primary/0 hover:border-b border-primary pb-1">Projects</a>
          <a href="#experience" className="hover:text-primary transition-colors border-primary/0 hover:border-b border-primary pb-1">Experience</a>
          <a href="#about" className="hover:text-primary transition-colors border-primary/0 hover:border-b border-primary pb-1">Profile</a>
          <a href="#contact" className="hover:text-primary transition-colors border-primary/0 hover:border-b border-primary pb-1">Contact</a>
        </div>
        <Link to="/resume">
          <Button variant="outline" className="rounded-md border-primary/30 hover:bg-primary/10 font-mono px-6 neon-blue">
            Resume
          </Button>
        </Link>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-16 pt-48 md:pt-24 overflow-hidden">
        {/* Floating Background Data Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%" }}
              animate={{ 
                y: [null, "-20px", "20px", "-20px"],
                x: [null, "10px", "-10px", "10px"]
              }}
              transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
              className="absolute text-[8px] font-mono text-primary whitespace-nowrap"
            >
              DATA_STREAM_{i} // STATUS_ACTIVE // LINK_READY
            </motion.div>
          ))}
        </div>

        <main className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-center z-10">
          <motion.div 
            style={{ x: heroX, opacity: heroOpacity }}
            className="hero-section"
          >
            <span className="label-caps mb-4 block">
              Electrical & Electronics Engineer
            </span>
            <h1 className="text-display text-5xl md:text-8xl lg:text-9xl mb-8 leading-tight">
              <TextReveal text={`Kartik\nRajauria`} />
            </h1>
            <p className="max-w-lg text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 font-sans">
              I am focused on creating <span className="text-accent">real-world impact</span>. My work centers on improving workflows and enhancing visibility to solve meaningful problems through modern solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <a href="#work">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-background rounded-md px-10 h-14 text-base font-bold group neon-blue">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <div className="flex items-center gap-6 py-4">
                <a href="https://www.linkedin.com/in/kartik-rajauria-2a52b521a?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-xs uppercase tracking-widest font-mono">LinkedIn</a>
                <a href="https://www.instagram.com/kartikrajaur?igsh=ZTRrazZkdDNsenR2&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-xs uppercase tracking-widest font-mono">Instagram</a>
                <a href="https://www.facebook.com/share/1At38yUCBv/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-xs uppercase tracking-widest font-mono">Facebook</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.5 }}
            className="hidden lg:block relative aspect-[3/4] bg-card border border-primary/20 p-1 rounded-lg overflow-hidden neon-blue"
          >
            <img 
              src="/Gemini_Generated_Image_4x561s4x561s4x56.png" 
              alt="Kartik Rajauria"
              className="object-cover w-full h-full hover:scale-110 transition-all duration-1000 grayscale hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
          </motion.div>
        </main>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
          <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-10 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <span className="label-caps mb-4 block">Research & Development</span>
              <h2 className="text-heading text-5xl md:text-7xl">Projects<span className="text-primary">.</span></h2>
            </div>
            <p className="max-w-md text-muted-foreground text-lg font-sans">
              A collection of engineering projects focused on power conversion, EV systems, and innovative hardware.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                style={{ scale: projectScale }}
              >
                <Card className="group rounded-lg bg-card/50 border-primary/10 hover:border-primary/40 transition-all duration-500 overflow-hidden h-full glass">
                  <CardContent className="p-0">
                    <ImageReveal 
                      src={project.image} 
                      alt={project.title}
                      className="aspect-[4/5] border-b border-primary/10"
                      innerClassName="group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="p-6">
                      <div className="text-[10px] uppercase tracking-[2px] text-primary mb-3 font-mono">
                        {project.category}
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground font-sans mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="rounded-md text-[8px] border-primary/20 text-primary px-2 py-0 font-mono">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-10 md:px-16 lg:px-24 bg-card/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-20">
            <div>
              <span className="label-caps mb-4 block">Career Path</span>
              <h2 className="text-heading text-5xl mb-8">Professional Experience</h2>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Hands-on expertise in industrial automation, machine shop maintenance, and software development.
              </p>
            </div>

            <div className="space-y-12">
              {experience.map((exp, idx) => (
                <motion.div 
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-8 border-l border-white/10"
                >
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-accent rounded-full" />
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-2xl font-serif">{exp.role}</h3>
                      <div className="text-accent text-sm font-medium uppercase tracking-widest">{exp.company}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{exp.period}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-widest">{exp.location}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed font-sans max-w-3xl">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-32 px-10 md:px-16 lg:px-24 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <span className="label-caps mb-4 block">Recognition</span>
              <h2 className="text-heading text-5xl md:text-7xl">Awards<span className="text-accent">.</span></h2>
            </div>
            <p className="max-w-md text-muted-foreground text-lg font-sans">
              Honored for excellence in industrial innovation and technical shopfloor solutions. Click to view certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Operation Innovation Challenge",
                org: "VE Commercial Vehicles",
                award: "Winner",
                desc: "Presented innovative machine shopfloor optimization projects.",
                image: null
              },
              {
                title: "Technology Day",
                org: "VE Commercial Vehicles",
                award: "Winner",
                desc: "Recognized for technical excellence in shopfloor implementation.",
                image: "/award-tech.jpeg"
              },
              {
                title: "CII Innovation Challenge",
                org: "Maintenance Circle",
                award: "Platinum Winner",
                desc: "Highest recognition for maintenance innovation in machine shop operations.",
                image: "/award-cii.jpeg"
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => item.image && setSelectedAward({ title: item.title, image: item.image })}
                className={`p-8 bg-card/50 border border-primary/10 rounded-lg glass neon-blue group hover:border-accent/40 transition-all relative overflow-hidden ${item.image ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <div className="relative z-10">
                  <div className="text-accent font-mono text-xs uppercase tracking-widest mb-4">{item.award}</div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <div className="text-muted-foreground text-sm font-mono mb-4">{item.org}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{item.desc}</p>
                  {item.image && (
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-primary font-bold group-hover:translate-x-2 transition-transform">
                      View Certificate <ArrowRight className="w-3 h-3" />
                    </div>
                  )}
                </div>
                
                {/* Background Text Accent */}
                <div className="absolute -bottom-4 -right-4 text-6xl font-display opacity-[0.03] select-none group-hover:scale-110 transition-transform">
                  AWARD
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Selected Award Modal */}
        <AnimatePresence>
          {selectedAward && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 backdrop-blur-3xl bg-background/90"
            >
              <div className="absolute top-8 right-8 z-[110]">
                <Button 
                  onClick={() => setSelectedAward(null)}
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full bg-white/5 hover:bg-white/10 text-white p-2"
                >
                  <X className="w-8 h-8" />
                </Button>
              </div>

              <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-8 order-2 lg:order-1"
                >
                  <span className="label-caps">Certification Showcase</span>
                  <h2 className="text-5xl md:text-7xl lg:text-8xl font-display leading-[0.9]">
                    {selectedAward.title.split(' ').map((word, i) => (
                      <span key={i} className="block">{word}</span>
                    ))}
                  </h2>
                  <p className="text-xl text-muted-foreground font-sans max-w-md">
                    Validating excellence and commitment to innovative problem-solving in industrial environments.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative aspect-[3/4] bg-card rounded-lg overflow-hidden shadow-2xl neon-blue order-1 lg:order-2"
                >
                  <ImageReveal 
                    src={selectedAward.image} 
                    alt={selectedAward.title}
                    className="h-full w-full"
                    innerClassName="object-contain" // Contain to show certificates properly
                  />
                </motion.div>
              </div>
              
              {/* Background Large Text */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display opacity-[0.02] select-none pointer-events-none uppercase">
                Victory
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-10 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-20">
            <div>
              <span className="label-caps mb-4 block">Capabilities</span>
              <h2 className="text-heading text-5xl mb-8">Technical Arsenal</h2>
              <p className="text-muted-foreground leading-relaxed font-sans">
                A diverse set of skills ranging from core electrical engineering to modern software development.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-primary">{skill.icon}</div>
                    <h3 className="text-xl font-bold uppercase tracking-widest font-mono">{skill.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map(item => (
                      <Badge key={item} variant="outline" className="rounded-md border-primary/20 text-[10px] uppercase tracking-widest px-3 py-1 bg-primary/5 text-primary font-mono glass">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-48 px-10 md:px-16 lg:px-24 bg-card/20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative p-1 border border-primary/20 bg-card rounded-lg overflow-hidden neon-blue"
          >
            <ImageReveal 
              src="/Gemini_Generated_Image_40jynt40jynt40jy.png" 
              alt="Academic Excellence"
              className="aspect-[4/5]"
              innerClassName="grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <motion.div 
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "backOut", delay: 0.5 }}
              className="absolute -bottom-10 -right-10 w-56 h-56 bg-primary p-10 flex flex-col justify-center text-background neon-blue z-20"
            >
              <span className="text-5xl font-bold font-mono">9.1</span>
              <span className="text-[10px] uppercase tracking-widest font-bold leading-tight font-mono">B.Tech GPA <br /> SRM University</span>
            </motion.div>
          </motion.div>

          <div className="relative z-10">
            <span className="label-caps mb-4 block">Profile</span>
            <h2 className="text-heading text-6xl md:text-8xl mb-12">
              <TextReveal text={`Academic\nExcellence.`} />
            </h2>
            <div className="space-y-8 text-muted-foreground text-lg md:text-xl leading-relaxed font-sans">
              <p>
                MBA from T. A. Pai Management Institute (TAPMI), commencing June 2026. 
                Previously completed B.Tech in Electrical and Electronics Engineering from SRM University of Science and Technology, Chennai, with a GPA of 9.1.
              </p>
              <motion.p 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="italic font-mono text-primary border-l-2 border-primary pl-6 py-2"
              >
                "Committed to leveraging technical precision with strategic management to drive organizational growth and operational excellence."
              </motion.p>
              <p>
                Beyond academics, I served as the Committee Head for AARUUSH, SRM's national-level techno-fest, 
                managing quality assurance and coordinating large-scale events.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-10 border-t border-primary/10 pt-10">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2 block font-mono">Location</span>
                <span className="text-sm font-medium">Indore, Madhya Pradesh</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2 block font-mono">Interests</span>
                <span className="text-sm font-medium">Gym, Badminton</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-10 md:px-16 lg:px-24 border-t border-primary/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <span className="label-caps mb-4 block">Get in touch</span>
            <h2 className="text-heading text-5xl md:text-7xl mb-6">Let's collaborate</h2>
            <p className="font-mono text-primary text-xl">Available for future endeavors.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-sm uppercase tracking-[3px] text-primary font-bold font-mono">Contact Details</h3>
                <div className="space-y-6">
                  <div className="group cursor-pointer">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-1 font-mono">Email</span>
                    <span className="text-2xl font-bold group-hover:text-primary transition-colors">rajauriak1@gmail.com</span>
                  </div>
                  <div className="group">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-1 font-mono">Socials</span>
                    <div className="flex flex-col gap-2">
                      <a href="https://www.linkedin.com/in/kartik-rajauria-2a52b521a?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold hover:text-primary transition-colors">LinkedIn</a>
                      <a href="https://www.instagram.com/kartikrajaur?igsh=ZTRrazZkdDNsenR2&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold hover:text-primary transition-colors">Instagram</a>
                      <a href="https://www.facebook.com/share/1At38yUCBv/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold hover:text-primary transition-colors">Facebook</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary/5 border border-primary/20 p-12 text-center space-y-6 rounded-lg glass neon-blue"
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 neon-blue">
                  <Check className="w-10 h-10 text-background" />
                </div>
                <h3 className="text-3xl font-bold text-primary">Message Sent!</h3>
                <p className="text-muted-foreground max-w-xs mx-auto font-sans">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <Button 
                  onClick={() => setSubmitted(false)}
                  variant="outline" 
                  className="rounded-md border-primary/20 hover:bg-primary/10 font-mono"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground ml-1 font-mono">Name</label>
                    <Input 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="rounded-md bg-white/[0.02] border-primary/10 h-14 focus:border-primary/50 focus:ring-primary/20 transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground ml-1 font-mono">Email</label>
                    <Input 
                      required
                      type="email" 
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="rounded-md bg-white/[0.02] border-primary/10 h-14 focus:border-primary/50 focus:ring-primary/20 transition-all" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground ml-1 font-mono">Message</label>
                  <Textarea 
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="rounded-md bg-white/[0.02] border-primary/10 min-h-[160px] focus:border-primary/50 focus:ring-primary/20 transition-all" 
                  />
                </div>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-16 bg-primary hover:bg-primary/90 text-background rounded-md text-lg font-bold disabled:opacity-50 neon-blue"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-10 md:px-16 border-t border-primary/10 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="font-mono text-primary text-lg">Indore, Madhya Pradesh — Kartik Rajauria</div>
          <div className="flex items-center gap-10 text-[11px] uppercase tracking-[2px] font-mono text-muted-foreground">
            <a href="https://www.linkedin.com/in/kartik-rajauria-2a52b521a?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/kartikrajaur?igsh=ZTRrazZkdDNsenR2&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
            <a href="https://www.facebook.com/share/1At38yUCBv/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Facebook</a>
          </div>
        </div>
        <div className="mt-16 text-center text-[10px] uppercase tracking-[4px] opacity-20 font-mono">
          © 2026 KARTIK RAJAURIA PORTFOLIO
        </div>
      </footer>
    </div>
  );
}
