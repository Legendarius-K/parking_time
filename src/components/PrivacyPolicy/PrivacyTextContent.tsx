import React from 'react';
import { useTranslations } from 'next-intl';

const PrivacyTextContent = () => {
  const t = useTranslations('privacy_policy');

  const sections = [
    { title: t('sections.0.title'), content: t('sections.0.content') },
    { title: t('sections.1.title'), content: t('sections.1.content') },
    { title: t('sections.2.title'), content: t('sections.2.content') },
    { title: t('sections.3.title'), content: t('sections.3.content') },
    { title: t('sections.4.title'), content: t('sections.4.content') },
    { title: t('sections.5.title'), content: t('sections.5.content') },
    { title: t('sections.6.title'), content: t('sections.6.content') },
    { title: t('sections.7.title'), content: t('sections.7.content') },
    { title: t('sections.8.title'), content: t('sections.8.content') },
    { title: t('sections.9.title'), content: t('sections.9.content') },
    { title: t('sections.10.title'), content: t('sections.10.content') },
    { title: t('sections.11.title'), content: t('sections.11.content') },
    { title: t('sections.12.title'), content: t('sections.12.content') },
    { title: t('sections.13.title'), content: t('sections.13.content') },
    {
      title: t('sections.14.title'),
      content: t('sections.14.content'),
      list: t.raw('sections.14.list'),
      conclusion: t('sections.14.conclusion')
    }
  ];

  const renderContent = (content, index) => {
    if (Array.isArray(content)) {
      return (
        <ul key={index} className="list-disc list-inside pl-5 space-y-2">
          {content.map((item, idx) => (
            <li key={idx} className="text-base text-pt-darkblue2 text-[16px] leading-[24px]">
              {item}
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <p key={index} className="text-base text-pt-darkblue2 mb-4 text-[16px] leading-[24px]">
          {content}
        </p>
      );
    }
  };

  const renderList = (list) => {
    return (
      <ol className="list-decimal list-inside pl-5 space-y-4">
        {list.map((item, index) => (
          <li key={index} className="text-base text-pt-darkblue2 text-[16px] leading-[24px]">
            {item[0]}
            <ul className="list-disc list-inside pl-5 space-y-2">
              {Object.keys(item)
                .filter((key) => key.startsWith(`${index}_`))
                .map((subKey) => (
                  <li key={subKey} className="text-base text-pt-darkblue2 text-[16px] leading-[24px]">
                    {item[subKey]}
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ol>
    );
  };

  return (
    <main className="bg-white py-8 px-4 md:px-8 lg:px-16 mx-auto opacity-100">
      <div className="w-full max-w-screen-md mx-auto">
        {sections.map((section, index) => {
          if (index === 14) {
            return (
              <section key={index} className="mb-8 pb-4">
                <h3 className="text-xl font-bold text-pt-secondary mb-4 text-[32px] leading-[38.4px]">
                  {section.title}
                </h3>
                <p className="text-base text-pt-darkblue2 mb-4 text-[16px] leading-[24px]">
                  {section.content}
                </p>
                {renderList(section.list)}
                <p className="text-base text-pt-darkblue2 mt-4 text-[16px] leading-[24px]">
                  {section.conclusion}
                </p>
              </section>
            );
          }
          return (
            <section key={index} className="mb-8 pb-4">
              <h3 className="text-xl font-bold text-pt-secondary mb-4 text-[32px] leading-[38.4px]">
                {section.title}
              </h3>
              {renderContent(section.content, index)}
            </section>
          );
        })}
      </div>
    </main>
  );
};

export default PrivacyTextContent;