import Layout from 'components/layout'
import LeadModule from 'components/leadModule/leadModule'
import mobileLeadImage from 'assets/about/mobile/image-hero-whitecup.jpg'
import tabletLeadImage from 'assets/about/tablet/image-hero-whitecup.jpg'
import desktopLeadImage from 'assets/about/desktop/image-hero-whitecup.jpg'
import ImageOnTopList from 'components/lists/ImageOnTopList'
import UnitedKingdomSVG from 'assets/about/desktop/illustration-uk.svg'
import CandaSVG from 'assets/about/desktop/illustration-canada.svg'
import AustrailiaSVG from 'assets/about/desktop/illustration-australia.svg'

const leadModuleData = {
    title: 'About Us',
    description: "Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.",
    mobileImage: mobileLeadImage,
    tabletImage: tabletLeadImage,
    desktopImage: desktopLeadImage
  }

  const ImageOnTopListData = {
    title: 'Our headquarters',
    hideTitle: false,
    darkBackground: false,
    fullWidth: false,
    items: [
      {
        title: 'United Kingdom',
        media: UnitedKingdomSVG,
        contact: {
          street: "68 Asfordby Rd",
          city: "Alcaston",
          state: "SY61YA",
          phone: "+44 416 485 2997"
        }
      },
      {
        title: 'Canada',
        media: CandaSVG,
        contact: {
          street: "1528 Eglinton Avenue",
          city: "Toronto",
          state: "Ontario M4P 1A6",
          phone: "+ 416 485 2997"
        }
      },
      {
        media: AustrailiaSVG,
        title: 'Austrailia',
        contact: {
          street: "36 Swanston Street",
          city: "Kewell",
          state: "Victoria",
          phone: "+61 4 9928 3629"
        }
      }
    ]
  }

export default function About() {
  return (
    <Layout>
       <LeadModule data={leadModuleData}/>
       <ImageOnTopList data={ImageOnTopListData}/>
    </Layout>
  )
}
