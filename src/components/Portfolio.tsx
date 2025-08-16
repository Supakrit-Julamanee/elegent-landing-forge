import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      titleTh: 'แพลตฟอร์มอีคอมเมิร์ซ',
      description: 'Modern online store with React, Next.js, and Stripe integration',
      descriptionTh: 'ร้านค้าออนไลน์สมัยใหม่ด้วย React, Next.js และ Stripe',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800&h=600',
      tags: ['React', 'Next.js', 'TypeScript', 'Stripe'],
      category: 'E-Commerce'
    },
    {
      id: 2,
      title: 'Corporate Website',
      titleTh: 'เว็บไซต์องค์กร',
      description: 'Professional corporate website with CMS integration',
      descriptionTh: 'เว็บไซต์องค์กรระดับมืออาชีพพร้อม CMS',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600',
      tags: ['WordPress', 'PHP', 'MySQL', 'SEO'],
      category: 'Corporate'
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      titleTh: 'แดชบอร์ด SaaS',
      description: 'Analytics dashboard with real-time data visualization',
      descriptionTh: 'แดชบอร์ดการวิเคราะห์พร้อมการแสดงข้อมูลแบบเรียลไทม์',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600',
      tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      category: 'SaaS'
    },
    {
      id: 4,
      title: 'Restaurant Website',
      titleTh: 'เว็บไซต์ร้านอาหาร',
      description: 'Beautiful restaurant website with online booking system',
      descriptionTh: 'เว็บไซต์ร้านอาหารสวยงามพร้อมระบบจองออนไลน์',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800&h=600',
      tags: ['Vue.js', 'Laravel', 'MySQL', 'Booking'],
      category: 'Hospitality'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      titleTh: 'เว็บไซต์พอร์ตโฟลิโอ',
      description: 'Creative portfolio website for digital artist',
      descriptionTh: 'เว็บไซต์พอร์ตโฟลิโอสร้างสรรค์สำหรับศิลปินดิจิทัล',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=600',
      tags: ['React', 'Framer Motion', 'GSAP', 'Creative'],
      category: 'Portfolio'
    },
    {
      id: 6,
      title: 'Learning Platform',
      titleTh: 'แพลตฟอร์มการเรียนรู้',
      description: 'Online learning platform with video streaming',
      descriptionTh: 'แพลตฟอร์มการเรียนรู้ออนไลน์พร้อมสตรีมมิ่งวิดีโอ',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800&h=600',
      tags: ['React', 'Video.js', 'Node.js', 'Education'],
      category: 'Education'
    },
    {
      id: 7,
      title: 'Healthcare App',
      titleTh: 'แอปสุขภาพ',
      description: 'Healthcare management system with appointment booking',
      descriptionTh: 'ระบบจัดการสุขภาพพร้อมการจองนัดหมาย',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80&w=800&h=600',
      tags: ['React Native', 'Node.js', 'MongoDB', 'Healthcare'],
      category: 'Healthcare'
    },
    {
      id: 8,
      title: 'Real Estate Platform',
      titleTh: 'แพลตฟอร์มอสังหาริมทรัพย์',
      description: 'Property listing website with advanced search',
      descriptionTh: 'เว็บไซต์รายการอสังหาริมทรัพย์พร้อมการค้นหาขั้นสูง',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800&h=600',
      tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Maps'],
      category: 'Real Estate'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Eye className="w-4 h-4" />
            <span>Our Work</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing our best work across various industries and technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group bg-card rounded-2xl overflow-hidden card-shadow hover:shadow-xl transition-all duration-300 border border-border/50"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <Button size="sm" variant="secondary" className="backdrop-blur-sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="backdrop-blur-sm">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs text-muted-foreground px-2 py-1">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;