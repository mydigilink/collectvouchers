// app/[country]/layout.js
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default function CountryLayout({ children, params }) {
  return <CountryHtml params={params}>{children}</CountryHtml>;
}

// ✅ Move async logic into a Server Component
async function CountryHtml({ children, params }) {
  const client = await clientPromise;
  const db = client.db(process.env.DB_NAME);
  const countryCode = params?.country;
  const countryDoc = await db.collection("countries").findOne({
    countryCode: params.country,
    activeStatus: true,
  });

  if (!countryDoc) {
    notFound();
  }

  return (
    <html lang={countryDoc.countryLanguage || "en"}>
                <Header searchParms={{ countryCode }} />
      
      <body>{children}</body>
        <Footer  searchParms={{ countryCode }} />
    </html>
  );
}
