import webbanner from "/assets/servicesImgs/web-banner.webp";
import HeroSection from "@/components/Services/HeroSection";
import WhyWe from "@/components/Services/WhyWe";
import { FeaturesWeb } from "@/data/features/FeaturesWeb";
import TextSsection from "@/components/Services/TextSsection";
import FaqSection from "@/components/Services/FaqSection";
import { faqsWeb } from "@/data/faqsList/faqsWeb";
const Web = () => {
  const prefix = { ar: "مذهلًا؟", en: "awesome?" };
  const faqList = [
    {
      question: "faqQuestionUiUx1",
      answer: "faqAnswerUiUx1",
    },
    // {
    //   question: "faqQuestionUiUx2",
    //   answer: "faqAnswerUiUx2",
    // },
    // {
    //   question: "faqQuestionUiUx3",
    //   answer: "faqAnswerUiUx3",
    // },
    {
      question: "faqQuestionUiUx4",
      answer: "faqAnswerUiUx4",
    },
    {
      question: "faqQuestionUiUx5",
      answer: "faqAnswerUiUx5",
    },
    {
      question: "faqQuestionUiUx6",
      answer: "faqAnswerUiUx6",
    },
  ];
  return (
    <section className="space-y-2">
      <HeroSection
        src={webbanner}
        title={"webHeroTitle"}
        desc={"webHeroText"}
      />

      <div className="containerD flex flex-col gap-28 pt-12">
        <WhyWe features={FeaturesWeb} />

        <TextSsection
          header={"webTextSectionTitle"}
          p1={"webTextSectionText1"}
          p2={"webTextSectionText2"}
          p3={null}
          prefix={prefix}
        />

        <FaqSection faqsList={faqsWeb} />
      </div>
    </section>
  );
};

export default Web;
