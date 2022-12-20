import { useMediaQuery, useTheme } from '@mui/material';
import DesktopBannerCarousel from '../../components/bannercarousel/DesktopBannerCarousel';
import MobileBannerCarousel from '../../components/bannercarousel/MobileBannerCarousel';
import MobileAppliancesCategory from '../../components/categories/mobile/MobileAppliancesCategory';
import MobileAutomobileCategory from '../../components/categories/mobile/MobileAutomobileCategory';
import MobileBeautyCategory from '../../components/categories/mobile/MobileBeautyCategory';
import MobileBuildingCategory from '../../components/categories/mobile/MobileBuildingCategory';
import MobileElectronicsCategory from '../../components/categories/mobile/MobileElectronicsCategory';
import MobileFashionCategory from '../../components/categories/mobile/MobileFashionCategory';
import MobileFoodCategory from '../../components/categories/mobile/MobileFoodCategory';
import MobileFurnitureCategory from '../../components/categories/mobile/MobileFurnitureCategory';
import MobileGroceryCategory from '../../components/categories/mobile/MobileGroceryCategory';
import MobileHealthCategory from '../../components/categories/mobile/MobileHealthCategory';
import MobileLogisticsCategory from '../../components/categories/mobile/MobileLogisticsCategory';
import MobileMobileCategory from '../../components/categories/mobile/MobileMobileCategory';
import MobileRealEstateCategory from '../../components/categories/mobile/MobileRealEstateCategory';
import MobileTransportCategory from '../../components/categories/mobile/MobileTransportCategory';
import MobileDailySalesPromo from '../../components/dailysalespromo/MobileDailySalesPromo';
import MobileFood from '../../components/food/MobileFood';
import MobileFrequentlyOrdered from '../../components/frequentlyordered/MobileFrequentlyOrdered';
import CategoryBar from '../../components/global/categorybar';
import MobileCategoryTopBarCarousel from '../../components/global/mobilecategorytopbar';
import MobileRaffleDraw from '../../components/raffledraw/MobileRaffleDraw';
import MobileSeason from '../../components/season/MobileSeason';
import MobileSuggestedItem from '../../components/suggestedItems/MobileSuggestedItem';

import MobileTopBar from '../global/mobiletopbar';
import Topbar from '../global/topbar';

export default function Home() {
  const sm = useMediaQuery(useTheme().breakpoints.down('sm'));
  //const isNonMobile = useMediaQuery('(min-width:600px)');
  return (
    <>
      <main>
        {sm ? <MobileTopBar /> : <Topbar />}
        {sm ? <MobileCategoryTopBarCarousel /> : <CategoryBar />}
        {sm ? <MobileBannerCarousel /> : <DesktopBannerCarousel />}
        {sm ? <MobileFood /> : <CategoryBar />}
        {sm ? <MobileRaffleDraw /> : <DesktopBannerCarousel />}
        {sm ? <MobileDailySalesPromo /> : <CategoryBar />}
        {sm ? <MobileSeason /> : <CategoryBar />}
        {sm ? <MobileSuggestedItem /> : <CategoryBar />}
        {sm ? <MobileFrequentlyOrdered /> : <CategoryBar />}
        {sm ? <MobileFoodCategory /> : <CategoryBar />}
        {sm ? <MobileAppliancesCategory /> : <CategoryBar />}
        {sm ? <MobileBeautyCategory /> : <CategoryBar />}
        {sm ? <MobileHealthCategory /> : <CategoryBar />}
        {sm ? <MobileAutomobileCategory /> : <CategoryBar />}
        {sm ? <MobileBuildingCategory /> : <CategoryBar />}
        {sm ? <MobileElectronicsCategory /> : <CategoryBar />}
        {sm ? <MobileFashionCategory /> : <CategoryBar />}
        {sm ? <MobileFurnitureCategory /> : <CategoryBar />}
        {sm ? <MobileGroceryCategory /> : <CategoryBar />}
        {sm ? <MobileLogisticsCategory /> : <CategoryBar />}
        {sm ? <MobileMobileCategory /> : <CategoryBar />}
        {sm ? <MobileRealEstateCategory /> : <CategoryBar />}
        {sm ? <MobileTransportCategory /> : <CategoryBar />}

        <h1></h1>
      </main>
    </>
  );
}
