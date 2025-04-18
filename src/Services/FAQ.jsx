import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Soruları ve cevapları burada tutuyoruz
const faqData = [
  {
    question: 'Kütüphaneyi kimler kullanabilir?',
    answer: 'Bu kurum çatısı altında ki herkes.'
  },
  {
    question: 'Kütüphaneye nasıl üye olabilirim?',
    answer: 'Kullanıcı girişi sayfasında bulunan üye ol butonundan.'
  },
  {
    question: 'Kişisel bilgilerim değişti ne yapmam gerekiyor?',
    answer: 'Admine mail ile ulaşabilirsiniz.'
  },
  {
    question: 'Kitap alma-iade işlemini nasıl yapabilirim?',
    answer: 'Ana Sayfada bulunan ödünç ve iade işlemlerinden yapabilirsiniz.'
  },
  {
    question: 'Kütüphane çalışma saatleri nedir?',
    answer: 'Kütüphane hafta içi 08:00 - 22:00, hafta sonu 10:00 - 18:00 saatleri arasında açıktır.'
  },
  {
    question: 'Ödünç aldığım kitabı kaybedersem ne yapmalıyım?',
    answer: 'Kaybolan kitapların yerine aynı kitabı temin etmeniz veya kütüphaneye bildirimde bulunmanız gerekmektedir.'
  },
  {
    question: 'Bir kitabı ne kadar süreyle ödünç alabilirim?',
    answer: 'Öğrenciler için 15 gün, akademik personel için 30 gün süreyle ödünç alma hakkı bulunmaktadır.'
  },
  {
    question: 'Kütüphanede sessizlik kuralı var mı?',
    answer: 'Evet, kütüphane sessiz bir çalışma ortamı sağlamak amacıyla sessizlik kuralına sahiptir.'
  }
];

function FAQ() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-black">Sıkça Sorulan Sorular</h2>
        <div className="divide-y divide-pink-100">
          {faqData.map((item, index) => (
            <div key={index} className="py-4">
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full text-left font-semibold text-lg p-3 bg-gray-200 text-black rounded-md hover:bg-gray-100 transition flex justify-between items-center"
              >
                {item.question}
                <span>{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="mt-2 p-3 bg-pink-50 text-black rounded-md">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;