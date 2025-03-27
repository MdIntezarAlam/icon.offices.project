import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FaqSection() {
  const faqArr = [
    {
      question: 'Is it accessible?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
      question: 'Is it accessible?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
      question: 'Is it accessible?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
      question: 'Is it accessible?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
      question: 'Is it accessible?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
      question: 'Is it accessible?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
  ];
  return (
    <main className='w-full bg-[url("/images/faqs.jpg")] bg-cover bg-no-repeat px-4 py-5 md:px-12 xl:min-h-[80vh]'>
      <h1 className='text-center text-xl font-medium '>
        Frequently Asked Questions
      </h1>
      <Accordion type='single' collapsible>
        {faqArr.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className='my-4 !rounded-xl !border-b-0 !bg-background !px-3 !no-underline'
          >
            <AccordionTrigger>
              {`${index + 1})`}
              {item.question}
            </AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
}
