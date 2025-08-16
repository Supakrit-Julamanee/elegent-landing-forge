import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Zap, 
  Search, 
  ShoppingCart,
  Code,
  Layers
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      titleTh: 'พัฒนาเว็บไซต์',
      description: 'Custom websites built with modern technologies like React, Next.js, and TypeScript for optimal performance.',
      descriptionTh: 'เว็บไซต์ที่ออกแบบเฉพาะด้วยเทคโนโลยีล่าสุด เช่น React, Next.js และ TypeScript เพื่อประสิทธิภาพสูงสุด'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      titleTh: 'ออกแบบมือถือเป็นหลัก',
      description: 'Responsive designs that look perfect on all devices, from mobile phones to desktop computers.',
      descriptionTh: 'ออกแบบที่ตอบสนองที่ดูสมบูรณ์แบบบนทุกอุปกรณ์ ตั้งแต่มือถือจนถึงคอมพิวเตอร์'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      titleTh: 'ออกแบบ UI/UX',
      description: 'Beautiful, intuitive interfaces that provide exceptional user experiences and drive conversions.',
      descriptionTh: 'อินเทอร์เฟซที่สวยงามและใช้งานง่าย ให้ประสบการณ์ผู้ใช้ที่ยอดเยี่ยมและเพิ่มการแปลง'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      titleTh: 'เพิ่มประสิทธิภาพ',
      description: 'Lightning-fast websites with optimized code, images, and caching for superior user experience.',
      descriptionTh: 'เว็บไซต์ที่รวดเร็วด้วยโค้ด รูปภาพ และแคชที่ปรับให้เหมาะสมเพื่อประสบการณ์ผู้ใช้ที่เหนือกว่า'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      titleTh: 'เพิ่มประสิทธิภาพ SEO',
      description: 'Search engine optimized websites that rank higher and attract more organic traffic.',
      descriptionTh: 'เว็บไซต์ที่ปรับให้เหมาะกับเครื่องมือค้นหา จัดอันดับสูงกว่าและดึงดูดผู้เข้าชมมากขึ้น'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      titleTh: 'โซลูชันอีคอมเมิร์ซ',
      description: 'Complete online store solutions with secure payments, inventory management, and analytics.',
      descriptionTh: 'โซลูชันร้านค้าออนไลน์ที่สมบูรณ์พร้อมการชำระเงินที่ปลอดภัย การจัดการสินค้า และการวิเคราะห์'
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
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Code className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services to bring your digital vision to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-card rounded-2xl p-8 card-shadow hover:shadow-xl transition-all duration-300 border border-border/50"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-card rounded-2xl p-8 card-shadow max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Layers className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your project and bring your ideas to life
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium button-shadow hover:bg-primary-dark transition-colors duration-200"
            >
              Contact Us Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;