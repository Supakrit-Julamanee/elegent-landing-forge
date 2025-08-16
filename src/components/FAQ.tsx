import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'How long does it take to build a website?',
      questionTh: 'ใช้เวลานานเท่าไหร่ในการสร้างเว็บไซต์?',
      answer: 'Project timelines vary depending on complexity. A simple website typically takes 2-4 weeks, while complex web applications can take 2-6 months. We provide detailed timelines during our initial consultation.',
      answerTh: 'ระยะเวลาของโครงการขึ้นอยู่กับความซับซ้อน เว็บไซต์ธรรมดาใช้เวลาประมาณ 2-4 สัปดาห์ ในขณะที่แอปพลิเคชันเว็บที่ซับซ้อนอาจใช้เวลา 2-6 เดือน เราจะให้รายละเอียดเวลาระหว่างการปรึกษาเบื้องต้น'
    },
    {
      question: 'What technologies do you use?',
      questionTh: 'คุณใช้เทคโนโลยีอะไรบ้าง?',
      answer: 'We use modern technologies including React, Next.js, TypeScript, Node.js, and various databases. Our tech stack is chosen based on your project requirements to ensure optimal performance and scalability.',
      answerTh: 'เราใช้เทคโนโลยีสมัยใหม่ เช่น React, Next.js, TypeScript, Node.js และฐานข้อมูลต่างๆ เราเลือกเทคโนโลยีตามความต้องการของโครงการเพื่อให้มั่นใจในประสิทธิภาพและความสามารถในการขยาย'
    },
    {
      question: 'Do you provide ongoing maintenance?',
      questionTh: 'คุณให้บริการดูแลรักษาต่อเนื่องหรือไม่?',
      answer: 'Yes, we offer comprehensive maintenance packages including security updates, performance optimization, content updates, and technical support. We ensure your website stays secure and up-to-date.',
      answerTh: 'ใช่ เราให้บริการแพ็คเกจการดูแลรักษาที่ครอบคลุม รวมถึงการอัปเดตความปลอดภัย การเพิ่มประสิทธิภาพ การอัปเดตเนื้อหา และการสนับสนุนทางเทคนิค เราดูแลให้เว็บไซต์ของคุณปลอดภัยและทันสมัย'
    },
    {
      question: 'Can you help with SEO optimization?',
      questionTh: 'คุณช่วยเรื่องการเพิ่มประสิทธิภาพ SEO ได้หรือไม่?',
      answer: 'Absolutely! We implement SEO best practices from the ground up, including proper meta tags, structured data, fast loading speeds, and mobile optimization. We also offer ongoing SEO services.',
      answerTh: 'แน่นอน! เราใช้แนวทางปฏิบัติที่ดีที่สุดของ SEO ตั้งแต่เริ่มต้น รวมถึงเมตาแท็กที่เหมาะสม ข้อมูลที่มีโครงสร้าง ความเร็วในการโหลด และการปรับให้เหมาะกับมือถือ เรายังให้บริการ SEO อย่างต่อเนื่อง'
    },
    {
      question: 'What is your pricing structure?',
      questionTh: 'โครงสร้างราคาของคุณเป็นอย่างไร?',
      answer: 'Our pricing depends on project scope, complexity, and timeline. We offer fixed-price packages for standard websites and hourly rates for custom development. Contact us for a detailed quote tailored to your needs.',
      answerTh: 'ราคาของเราขึ้นอยู่กับขอบเขตโครงการ ความซับซ้อน และกรอบเวลา เรามีแพ็คเกจราคาคงที่สำหรับเว็บไซต์มาตรฐานและอัตราต่อชั่วโมงสำหรับการพัฒนาเฉพาะ ติดต่อเราเพื่อใบเสนอราคาที่ปรับให้เหมาะกับความต้องการของคุณ'
    },
    {
      question: 'Do you work with international clients?',
      questionTh: 'คุณทำงานกับลูกค้าต่างประเทศหรือไม่?',
      answer: 'Yes, we work with clients worldwide. We have experience with different time zones and cultural requirements. We communicate effectively through video calls, project management tools, and regular updates.',
      answerTh: 'ใช่ เราทำงานกับลูกค้าทั่วโลก เรามีประสบการณ์กับเขตเวลาและความต้องการทางวัฒนธรรมที่แตกต่างกัน เราสื่อสารอย่างมีประสิทธิภาพผ่านวิดีโอคอล เครื่องมือจัดการโครงการ และการอัปเดตเป็นประจำ'
    },
    {
      question: 'What payment methods do you accept?',
      questionTh: 'คุณรับชำระเงินด้วยวิธีใดบ้าง?',
      answer: 'We accept various payment methods including bank transfers, credit cards, PayPal, and cryptocurrency. Payment is typically structured as 50% upfront and 50% upon completion, with milestone payments for larger projects.',
      answerTh: 'เรารับชำระเงินหลายวิธี รวมถึงการโอนเงินผ่านธนาคาร บัตรเครดิต PayPal และสกุลเงินดิจิทัล การชำระเงินโดยทั่วไปจะเป็น 50% ล่วงหน้าและ 50% เมื่อเสร็จสิ้น พร้อมการชำระเงินตามขั้นตอนสำหรับโครงการขนาดใหญ่'
    },
    {
      question: 'Can you redesign an existing website?',
      questionTh: 'คุณสามารถออกแบบเว็บไซต์ที่มีอยู่ใหม่ได้หรือไม่?',
      answer: 'Certainly! We specialize in website redesigns and modernization. We can improve your sites design, performance, and functionality while preserving your existing content and SEO rankings.',
      answerTh: 'แน่นอน! เราเชี่ยวชาญในการออกแบบเว็บไซต์ใหม่และการทำให้ทันสมัย เราสามารถปรับปรุงการออกแบบ ประสิทธิภาพ และการทำงานของเว็บไซต์ของคุณ ในขณะที่รักษาเนื้อหาและการจัดอันดับ SEO ที่มีอยู่'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <HelpCircle className="w-4 h-4" />
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our web development services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-2xl p-8 card-shadow">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/50 rounded-lg px-6 py-2 hover:border-primary/30 transition-colors duration-200"
                >
                  <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors duration-200">
                    <span className="font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-card rounded-2xl p-8 card-shadow max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? We'd love to hear from you.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium button-shadow hover:bg-primary-dark transition-colors duration-200"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;