import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <>
    <Header />
      <Head>
        <title>About Us | CollectVouchers</title>
        <meta name="description" content="Learn more about NativeDiscounts and our commitment to verified deals and coupons." />
        {/* Optional: Bootstrap CDN if not globally included */}
    
      </Head>

      <main className="container py-4">
        {/* Breadcrumb Navigation */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              About Us
            </li>
          </ol>
        </nav>

        <h1>About CollectVouchers</h1>
        <p>
         Our platform collect vouchers is pleased to introduce you with your savings journey. Due to vast globalization, online bookings and shopping have become the most preferred and convenient choices of the customers. In our opinion, shopping is the most exciting part of every person's life and getting a exclusive offer on it is truly a satisfactory thing. Whenever a customer invests their money in something and receives a coupon, voucher or cash back on that purchase, that little moment of savings brings a smile to their face, giving a sense of smart shopping.
</p><p>
Nothing beats the thrill of smart savings!</p><p>
This moment you grab any coupon not just boosts your savings but add cherry on the top. We believe in one goal; to make every purchase of yours worthwhile. With exclusive coupons, we transform your purchases into savvy shopping. In certain cases, many people remain unaware about these coupons and offers, through us, you will not only discover about these discounts but also learn the strategies to invest wisely. Our platform curates the latest coupon codes and deals from the leading brands worldwide. 
</p><p>
Whether it's Indian fashion, global travel across countries or tech of USA, we partner with top brands and retailers across every category worldwide. We don't want you to miss any single chance to bargain on your purchase, it doesn't matter where you're shopping.
Your trust in us will be the most crucial part of our journey which is why we ensure that every offer aligns with your needs, helping you feel confident in your choices and watch your savings grow.
So, join hands with us and start your saving journey with trust from across the world. With our platform: https://www.collectvouchers.com your next Deal Is Just a Click Away.
 </p>
      </main>
      <Footer />
    </>
  );
}
