import Layout from 'components/layout'
import LeadModule from 'components/leadModule/leadModule'
import mobileLeadImage from 'assets/home/mobile/image-hero-coffeepress.jpg'
import tabletLeadImage from 'assets/home/tablet/image-hero-coffeepress.jpg'
import desktopLeadImage from 'assets/home/desktop/image-hero-coffeepress.jpg'
import ImageOnTopList from 'components/lists/ImageOnTopList'

const leadModuleData = {
  title: 'Great coffee made simple.',
  description: "Start your mornings with the world's best coffess. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your scheule.",
  ctaText: 'Create your plan',
  ctaLink: '/subscribe',
  mobileImage: mobileLeadImage,
  tabletImage: tabletLeadImage,
  desktopImage: desktopLeadImage
}

const ImageOnTopListData = {
  ctaText: 'Create your plan',
  ctaLink: '/subscribe',
  title: 'How it works',
  hideTitle: false,
  darkBackground: false,
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

export default function Home() {
  return (
    <Layout>
      <LeadModule data={leadModuleData}/>
      <ImageOnTopList data={ImageOnTopListData}/>
    </Layout>
  )
}
