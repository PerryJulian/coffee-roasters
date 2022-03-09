import Layout from 'components/layout'
import LeadModule from 'components/leadModule/leadModule'
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
  
export default function Subscribe() {
  return (
    <Layout>
         <LeadModule data={leadModuleData}/>
    </Layout>
  )
}
