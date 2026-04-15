import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
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
  ChevronRight
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
    role: "Functional Trainee",
    period: "April 2024 - May 2026",
    location: "Pitampur, MP",
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
    location: "Pitampur, MP",
    description: "Conducted purchasing research and developed price negotiation strategies resulting in a 5% reduction in raw material costs."
  }
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-accent font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-8 md:px-16 backdrop-blur-md bg-background/80 border-b border-white/5">
        <div className="text-2xl font-serif tracking-[2px] uppercase">
          K. Rajauria
        </div>
        <div className="hidden md:flex items-center gap-10 text-[13px] uppercase tracking-[1px] text-muted-foreground">
          <a href="#work" className="hover:text-foreground transition-colors border-accent/0 hover:border-b border-accent pb-1">Projects</a>
          <a href="#experience" className="hover:text-foreground transition-colors border-accent/0 hover:border-b border-accent pb-1">Experience</a>
          <a href="#about" className="hover:text-foreground transition-colors border-accent/0 hover:border-b border-accent pb-1">Profile</a>
          <a href="#contact" className="hover:text-foreground transition-colors border-accent/0 hover:border-b border-accent pb-1">Contact</a>
        </div>
        <Button variant="outline" className="rounded-none border-white/20 hover:bg-white/5 font-serif italic px-6">
          Resume
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-10 md:px-16 overflow-hidden">
        <main className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hero-section"
          >
            <span className="label-caps mb-4 block">
              Electrical & Electronics Engineer
            </span>
            <h1 className="text-display text-6xl md:text-8xl lg:text-9xl mb-8">
              Kartik <br /> Rajauria
            </h1>
            <p className="max-w-lg text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 font-sans">
              Specializing in power electronics, EV technology, and industrial automation. 
              Bridging the gap between electrical engineering and modern software solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-background rounded-none px-10 h-14 text-base font-serif italic group">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="flex items-center gap-6 py-4">
                <a href="https://www.linkedin.com/in/kartik-rajauria-2a52b521a?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors text-xs uppercase tracking-widest">LinkedIn</a>
                <a href="https://www.instagram.com/kartikrajaur?igsh=ZTRrazZkdDNsenR2&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors text-xs uppercase tracking-widest">Instagram</a>
                <a href="https://www.facebook.com/share/1At38yUCBv/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors text-xs uppercase tracking-widest">Facebook</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.5 }}
            className="hidden lg:block relative aspect-[3/4] bg-card border border-white/5 p-1"
          >
            <img 
              src="/profile.png" 
              alt="Kartik Rajauria"
              className="object-cover w-full h-full hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
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
              <h2 className="text-heading text-5xl md:text-7xl">Projects<span className="text-accent">.</span></h2>
            </div>
            <p className="max-w-md text-muted-foreground text-lg font-sans">
              A collection of engineering projects focused on power conversion, EV systems, and innovative hardware.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="group rounded-none bg-card border-white/5 hover:border-accent/30 transition-all duration-500 overflow-hidden h-full">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/5] overflow-hidden border-b border-white/5">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-[10px] uppercase tracking-[2px] text-muted-foreground mb-3">
                        {project.category}
                      </div>
                      <h3 className="text-xl font-serif mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground font-sans mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="rounded-none text-[8px] border-white/10 px-2 py-0">
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
                    <div className="text-accent">{skill.icon}</div>
                    <h3 className="text-xl font-serif uppercase tracking-widest">{skill.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map(item => (
                      <Badge key={item} variant="outline" className="rounded-none border-white/10 text-[10px] uppercase tracking-widest px-3 py-1 bg-white/[0.02]">
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
      <section id="about" className="py-32 px-10 md:px-16 lg:px-24 bg-card/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-1 border border-white/5 bg-card"
          >
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000" 
              alt="Academic Excellence"
              className="object-cover w-full aspect-[4/5]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-accent p-10 flex flex-col justify-center text-background">
              <span className="text-5xl font-serif">9.1</span>
              <span className="text-[10px] uppercase tracking-widest font-bold leading-tight">B.Tech GPA <br /> SRM University</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="label-caps mb-4 block">Profile</span>
            <h2 className="text-heading text-5xl md:text-6xl mb-10">Academic Excellence<span className="text-accent">.</span></h2>
            <div className="space-y-8 text-muted-foreground text-lg leading-relaxed font-sans">
              <p>
                MBA from T. A. Pai Management Institute (TAPMI), commencing June 2026. 
                Previously completed B.Tech in Electrical and Electronics Engineering from SRM University of Science and Technology, Chennai, with a GPA of 9.1.
              </p>
              <p className="italic font-serif text-foreground">
                "Passionate about the intersection of electrical systems and digital intelligence."
              </p>
              <p>
                Beyond academics, I served as the Committee Head for AARUUSH, SRM's national-level techno-fest, 
                managing quality assurance and coordinating large-scale events.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-10 border-t border-white/5 pt-10">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2 block">Location</span>
                <span className="text-sm font-serif italic">Indore, Madhya Pradesh</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2 block">Interests</span>
                <span className="text-sm font-serif italic">Gym, Badminton</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-10 md:px-16 lg:px-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <span className="label-caps mb-4 block">Get in touch</span>
            <h2 className="text-heading text-5xl md:text-7xl mb-6">Let's collaborate</h2>
            <p className="text-serif italic text-xl text-muted-foreground">Available for engineering and development ventures.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-sm uppercase tracking-[3px] text-accent font-bold">Contact Details</h3>
                <div className="space-y-6">
                  <div className="group cursor-pointer">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-1">Email</span>
                    <span className="text-2xl font-serif italic group-hover:text-accent transition-colors">rajauriak1@gmail.com</span>
                  </div>
                  <div className="group">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-1">Socials</span>
                    <div className="flex flex-col gap-2">
                      <a href="https://www.linkedin.com/in/kartik-rajauria-2a52b521a?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="text-2xl font-serif italic hover:text-accent transition-colors">LinkedIn</a>
                      <a href="https://www.instagram.com/kartikrajaur?igsh=ZTRrazZkdDNsenR2&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-2xl font-serif italic hover:text-accent transition-colors">Instagram</a>
                      <a href="https://www.facebook.com/share/1At38yUCBv/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-2xl font-serif italic hover:text-accent transition-colors">Facebook</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground ml-1">Name</label>
                  <Input className="rounded-none bg-white/[0.02] border-white/10 h-14 focus:border-accent/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground ml-1">Email</label>
                  <Input type="email" className="rounded-none bg-white/[0.02] border-white/10 h-14 focus:border-accent/50" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                <Textarea className="rounded-none bg-white/[0.02] border-white/10 min-h-[160px] focus:border-accent/50" />
              </div>
              <Button className="w-full h-16 bg-accent hover:bg-accent/90 text-background rounded-none text-lg font-serif italic">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-10 md:px-16 border-t border-white/5 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-serif italic text-lg">Indore, Madhya Pradesh — Kartik Rajauria</div>
          <div className="flex items-center gap-10 text-[11px] uppercase tracking-[2px] font-medium text-muted-foreground">
            <a href="https://www.linkedin.com/in/kartik-rajauria-2a52b521a?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/kartikrajaur?igsh=ZTRrazZkdDNsenR2&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Instagram</a>
            <a href="https://www.facebook.com/share/1At38yUCBv/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Facebook</a>
          </div>
        </div>
        <div className="mt-16 text-center text-[10px] uppercase tracking-[4px] opacity-20">
          © 2026 KARTIK RAJAURIA PORTFOLIO
        </div>
      </footer>
    </div>
  );
}
