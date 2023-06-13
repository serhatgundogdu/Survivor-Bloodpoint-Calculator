export function Offering({ data }) {
  return (
    <>
      {data}
      (data && (<div></div> )) || (
      <img src="OfferingsBack.webp" alt="offering" className="h-20 md:h-32" />)
    </>
  );
}
