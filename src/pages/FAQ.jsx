import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Header from '../Components/Header';

const faqData = [
  {
    question: 'Kütüphaneyi kimler kullanabilir?',
    answer: 'Kütüphane, üniversite öğrencileri, akademik ve idari personel ile mezunlar tarafından kullanılabilir.'
  },
  {
    question: 'Kütüphaneye nasıl üye olabilirim?',
    answer: 'Kullanıcı girişi sayfasında bulunan "Üye Ol" butonunu kullanarak üyelik işlemini tamamlayabilirsiniz.'
  },
  {
    question: 'Kişisel bilgilerim değişti ne yapmam gerekiyor?',
    answer: 'Bilgilerinizde bir değişiklik olduğunda admin ile e-posta yoluyla iletişime geçebilirsiniz.'
  },
  {
    question: 'Kitap alma-iade işlemini nasıl yapabilirim?',
    answer: 'Kitap alma ve iade işlemleri için kütüphaneye gelip işlemlerinizi gerçekleştirmeniz gerekmektedir.'
  },
  {
    question: 'Kütüphane çalışma saatleri nedir?',
    answer: 'Kütüphane hafta içi 08:00 - 22:00, hafta sonu ise 10:00 - 18:00 saatleri arasında hizmet vermektedir.'
  },
  {
    question: 'Ödünç aldığım kitabı kaybedersem ne yapmalıyım?',
    answer: 'Kaybolan kitaplar için aynı kitabı temin etmeniz ya da durumu kütüphaneye bildirmeniz gerekir.'
  },
  {
    question: 'Bir kitabı ne kadar süreyle ödünç alabilirim?',
    answer: 'Öğrenciler 15 gün, akademik personel ise 30 gün boyunca kitap ödünç alabilir.'
  },
  {
    question: 'Kütüphanede sessizlik kuralı var mı?',
    answer: 'Evet, kütüphane içerisinde sessiz bir ortam sağlanması amacıyla sessizlik kuralı uygulanmaktadır.'
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header showSearch={false} />
      <div className="pt-36 pb-20 px-6 bg-neutral-50 min-h-screen">
        <h2 className="text-4xl font-bold text-center text-[#473636] mb-12">Sıkça Sorulan Sorular</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full flex justify-between items-center text-left text-xl font-semibold text-gray-800 hover:text-gray-600 transition"
              >
                {item.question}
                {openIndex === index ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-700 text-base">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FAQ;
