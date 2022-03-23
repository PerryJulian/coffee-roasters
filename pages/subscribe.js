import Layout from 'components/layout'
import LeadModule from 'components/leadModule/leadModule'
import ImageOnTopList from 'components/lists/ImageOnTopList'
import mobileLeadImage from 'assets/plan/mobile/image-hero-blackcup.jpg'
import tabletLeadImage from 'assets/plan/tablet/image-hero-blackcup.jpg'
import desktopLeadImage from 'assets/plan/desktop/image-hero-blackcup.jpg'

const leadModuleData = {
    title: 'Create a plan',
    description: "Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.",
    mobileImage: mobileLeadImage,
    tabletImage: tabletLeadImage,
    desktopImage: desktopLeadImage
  }

const ImageOnTopListData = {
  ctaText: null,
  ctaLink: null,
  title: 'How it works',
  hideTitle: true,
  darkBackground: true,
  showTimeline: true,
  items: [
    {
      title: 'Pick your coffee',
      description: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'
    },
    {
      title: 'Choose the frequency',
      description: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.'
    },
    {
      title: 'Receive and enjoy!',
      description: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.'
    }
  ]
}
  
export default function Subscribe() {
  return (
    <Layout>
         <LeadModule data={leadModuleData}/>
         <ImageOnTopList data={ImageOnTopListData}/>
    </Layout>
  )
}
